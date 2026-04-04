# 叶文涛 · 学术主页

这是叶文涛的个人学术主页，使用 Next.js 构建，部署在 Vercel 上。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **部署**: Vercel
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

## 部署到 Vercel

### 方法一：通过 Vercel 控制台 (推荐)

1. **在 GitHub 上创建仓库**
   - 访问 https://github.com/new
   - 创建一个新的仓库（可以是 Public 或 Private）
   - 不要初始化 README、.gitignore 或 license

2. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git push -u origin main
   ```

3. **连接 Vercel 并部署**
   - 访问 https://vercel.com
   - 用 GitHub 账号登录
   - 点击 "New Project"
   - 选择刚才创建的 GitHub 仓库
   - 点击 "Deploy"
   - 等待几分钟，部署完成后会获得一个类似 `https://你的项目名.vercel.app` 的网址

### 自动部署

每次推送到 GitHub 的 `main` 分支，Vercel 都会自动重新构建和部署网站。

## 项目结构

```
.
├── app/
│   ├── globals.css      # 全局样式
│   ├── layout.js        # 根布局
│   └── page.js          # 主页组件（包含双语功能）
├── public/
│   └── photo.jpg        # 个人照片
├── next.config.js       # Next.js 配置
├── package.json         # 项目依赖
└── README.md            # 本文件
```

## 自定义内容

- 修改 `app/page.js` 中的翻译内容可以更新中英文显示
- 替换 `public/photo.jpg` 可以更换个人照片
- 修改 `app/layout.js` 可以更新页面标题和元数据

## License

MIT
