<div align="center">

<img src="https://raw.githubusercontent.com/spencerwooo/vscode-sspai-markdown-helper/master/images/icon.png" alt="icon" width="100px">

<h1>少数派 Matrix 文章撰写助手</h1>

<em>VS Code Markdown Helper for sspai.com</em>

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/spencerwoo.vscode-sspai-markdown-helper?color=%23494ca2&label=VS%20Marketplace&logo=Visual%20Studio&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=spencerwoo.vscode-sspai-markdown-helper)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/spencerwoo.vscode-sspai-markdown-helper?style=flat-square&color=%23f39422)](https://marketplace.visualstudio.com/items?itemName=spencerwoo.vscode-sspai-markdown-helper)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/stars/spencerwoo.vscode-sspai-markdown-helper.svg?style=flat-square&color=%23f7be16)](https://marketplace.visualstudio.com/items?itemName=spencerwoo.vscode-sspai-markdown-helper)
![License](https://img.shields.io/github/license/spencerwooo/vscode-sspai-markdown-helper.svg?style=flat-square&color=%2300818a)
[![GitHub Stars](https://img.shields.io/github/stars/spencerwooo/vscode-sspai-markdown-helper.svg?style=social)](https://github.com/spencerwooo/vscode-sspai-markdown-helper)

</div>

<h6> 注：本插件与少数派官方无关，由个人开发者（我）凭兴趣开发。<a href="#免责-disclaimer">详见免责 👇</a></h6>

## 安装 Installation

<a href="https://marketplace.visualstudio.com/items?itemName=spencerwoo.vscode-sspai-markdown-helper"><img src="https://raw.githubusercontent.com/spencerwooo/vscode-sspai-markdown-helper/master/images/vsmp.svg" alt="Available on the VS Marketplace" width="250px" /></a>

*推荐：全局禁用（Disable）本插件，仅在文档库下启用（Enable），[详见推荐配置 Recommendations](#推荐配置-recommendations)。*

## 功能 Features

请注意，**Matrix 文章撰写助手**：

- 不可以帮助你将文章上传到少数派 Matrix 栏目
- 也不能帮助你直接发布文章到少数派首页

发布文章请将渲染好的富文本复制并粘贴到少数派编辑器中，并自行对格式、图片进行修正。

**Matrix 文章撰写助手** 可以：

- 生成文章和本地图片库的骨架
- 提供和少数派网站文章格式几乎相同的预览

具体地：

### 生成文章文件夹骨架

![](https://raw.githubusercontent.com/spencerwooo/vscode-sspai-markdown-helper/master/images/demo/demo.gif)

方法：`Ctrl + Shift + P` → 输入「少数派」，选择「🍳 创建新的少数派文章」，并在接下来的页面中依次输入「文章文件夹名称」、「文章文件名」、「文章标题」。（文章文件名不需要带后缀）

比如，**Matrix 文章撰写助手** 可以生成以下结构的文章文件夹：

```bash
200121_我的少数派文章   # 生成的文章文件夹
├── image             # 生成的文章素材文件夹
│   ├── 1.png
│   ├── ...
│   └── banner.png
└── my_sspai_post.md  # 生成的文章 Markdown 文件
```

并生成如下的文章（即 `my_sspai_post.md` 中的内容）：

```markdown
![](image/banner.png)

# 文章标题

```

其中，`my_sspai_post.md` 是文章主体，`./image` 为文章图片库。（助手并不会生成 `banner.png`，仅作示范用。）

### Markdown 预览样式

在利用 VS Code 写作时，**Matrix 文章撰写助手** 可以将 Markdown 预览格式替换为少数派网页文章的样式，方便预览和调整。比如：

#### 题图与引用

![](https://raw.githubusercontent.com/spencerwooo/vscode-sspai-markdown-helper/master/images/demo/quote.png)

#### 链接

![](https://raw.githubusercontent.com/spencerwooo/vscode-sspai-markdown-helper/master/images/demo/link.png)

#### 代码块

![](https://raw.githubusercontent.com/spencerwooo/vscode-sspai-markdown-helper/master/images/demo/code.png)

等等。

## 推荐配置 Recommendations

1. 推荐仅在你本机的少数派文档库下启用本插件，以免将全部 Markdown 预览格式替换为少数派格式。**即在全局禁用（Disable）本插件，仅在文档库下启用（Enable）。**

2. 推荐少数派文档库目录下的文件格式：

```bash
.
├── 200131_XX 文章
│   ├── image/
│   └── Post1.md
├── 200101_XXX 文章
│   ├── image/
│   └── Post2.md
└── 20191208_XXXX 文章
    ├── image/
    └── Post3.md
...
```

3. 与少数派富文本编辑器相对应，推荐文章主体中 Markdown 格式：

```markdown
# 文章标题

## 一级标题

### 二级标题

### 二级标题
```

## 免责 Disclaimer

**Matrix 文章撰写助手** 和少数派官方无关，只作为在本地撰写文章的一个辅助，因此未来也不会考虑开发直接发布到少数派的功能。

---

📌 **VS Code Markdown Helper for sspai** ©Spencer Woo. Released under the [MIT](https://github.com/spencerwooo/vscode-sspai-markdown-helper/blob/master/LICENSE) License.

Authored and maintained by Spencer Woo.

[@Portfolio](https://spencerwoo.com/) · [@Blog](https://blog.spencerwoo.com/) · [@GitHub](https://github.com/spencerwooo)
