# 叶文涛 · 学术主页

这是叶文涛的个人学术主页，使用 Next.js 构建，部署在 GitHub Pages 上。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **部署**: GitHub Pages + GitHub Actions
- **版本控制**: GitHub

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建静态站点
npm run build
```

## 部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 创建一个新的仓库（可以是 Public 或 Private）
3. **不要**初始化 README、.gitignore 或 license

### 第二步：推送代码到 GitHub

```bash
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

### 第三步：配置 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**（页面）
4. 在 **Build and deployment** 部分：
   - **Source**: 选择 `GitHub Actions`
5. 保存设置

### 第四步：触发部署

第一次推送代码后，GitHub Actions 会自动运行并部署网站。

你可以在仓库的 **Actions** 标签页查看部署进度。

部署成功后，你的网站地址将是：
`https://你的用户名.github.io/你的仓库名/`

## 自动部署

每次推送到 GitHub 的 `main` 分支，GitHub Actions 都会自动：
1. 构建项目
2. 部署到 GitHub Pages

## 项目结构

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 自动部署配置
├── app/
│   ├── globals.css          # 全局样式
│   ├── layout.js            # 根布局
│   └── page.js              # 主页组件（包含双语功能）
├── public/
│   └── photo.jpg            # 个人照片
├── next.config.js           # Next.js 配置
├── package.json             # 项目依赖
└── README.md                # 本文件
```

## 自定义内容

- 修改 `app/page.js` 中的翻译内容可以更新中英文显示
- 替换 `public/photo.jpg` 可以更换个人照片
- 修改 `app/layout.js` 可以更新页面标题和元数据

## License

MIT
