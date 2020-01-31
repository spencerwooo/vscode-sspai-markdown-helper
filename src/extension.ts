// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as fs from 'fs';
import * as path from 'path';

import * as vscode from 'vscode';
import * as mkdirp from 'mkdirp';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-sspai-markdown-helper" is now active!');

	let disposable = vscode.commands.registerCommand('sspai.newPost', () => {
		if (!vscode.workspace.rootPath) {
			vscode.window.showErrorMessage('No project open.');
			return;
		}

		const options = {
			folder: '',
			post: '',
			title: ''
		};

		let monthFormat = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

		// Get current date
		let dateTime = new Date();
		let year = dateTime.getFullYear().toString().slice(-2);
		let month = dateTime.getMonth();
		let date = dateTime.getDate().toString();

		// Add leading '0' to days with single digit
		if (date.length < 2) {
			date = '0' + date;
		}
		// Concat into leading folder name
		let today = year + monthFormat[month] + date;

		vscode.window.showInputBox({
			prompt: '📦 输入少数派文章顶层文件夹名称？（用于存放文章 Markdown 文件与图片素材 /image）',
			value: today + '_我的少数派文章'
		}).then((folder) => {
			if (!folder) {
				vscode.window.showErrorMessage('❌ 未输入文件夹名称');
				return;
			}
			options.folder = folder;
			return vscode.window.showInputBox({
				prompt: '📖 输入少数派文章文件名（即：文件名.md）',
				placeHolder: 'Post'
			});
		}).then((post) => {
			if (!post) {
				vscode.window.showErrorMessage('❌ 未输入文件名称');
				return;
			}
			options.post = post;
			return vscode.window.showInputBox({
				prompt: '📑 输入少数派文章标题',
				placeHolder: '我的文章标题'
			});
		}).then((title) => {
			if (!title) {
				vscode.window.showErrorMessage('❌ 未输入文章标题');
				return;
			}
			options.title = title;

			// rootPath returns a string or undefined, if VSCode is not in folder mode
			let workspaceRoot = vscode.workspace.rootPath || '';

			let imagePath = path.join(workspaceRoot, options.folder, 'image');
			let postPath = path.join(workspaceRoot, options.folder, options.post + '.md');
			let postContent = "![](image/banner.png)\n"
				+ "\n"
				+ "# " + options.title + "\n";

			mkdirp(imagePath, (err) => {
				if (err) {
					console.error(err);
					vscode.window.showErrorMessage('Error! ' + err);
				} else {
					fs.writeFile(postPath, postContent, (err) => {
						if (err) {
							console.error(err);
							vscode.window.showErrorMessage('Error! ' + err);
						} else {
							vscode.window.showInformationMessage('✅ 成功生成新文章目录', 'OK');
							// Refresh file explorer view after generation
							vscode.commands.executeCommand("workbench.files.action.refreshFilesExplorer");

							let openPostPath = vscode.Uri.file(postPath);
							vscode.workspace.openTextDocument(openPostPath).then(postDoc => {
								vscode.window.showTextDocument(postDoc);
							});
						}
					});
				}
			});
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
