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

		vscode.window.showInputBox({
			prompt: 'Which folder do you want to keep the post?',
			placeHolder: ''
		}).then((folder) => {
			if (!folder) {
				vscode.window.showErrorMessage('No folder name entered');
				return;
			}
			options.folder = folder;
			return vscode.window.showInputBox({
				prompt: 'What is your file name?',
				placeHolder: ''
			});
		}).then((post) => {
			if (!post) {
				vscode.window.showErrorMessage('No post name entered');
				return;
			}
			options.post = post;
			return vscode.window.showInputBox({
				prompt: 'What is your post\'s title?',
				placeHolder: ''
			});
		}).then((title) => {
			if (!title) {
				vscode.window.showErrorMessage('No title entered');
				return;
			}
			options.title = title;

			// rootPath returns a string or undefined, if VSCode is not in folder mode
			let workspaceRoot = vscode.workspace.rootPath || '';

			let imagePath = path.join(workspaceRoot, options.folder, 'image');
			let postPath = path.join(workspaceRoot, options.folder, options.post + '.md');
			let postContent = "<!-- Put your banner image on top of the post. -->\n"
				+ "![](image/banner.png)\n"
				+ "<!-- Replace it with your own banner. -->\n"
				+ "# " + options.title;

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
							vscode.window.showInformationMessage('Post successfully generated!', 'OK');
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
