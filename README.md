
# clevali.io 🌟

[![Next.js Version](https://img.shields.io/badge/next.js-14.2.3-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/clevali/clevali.io/pulls)

**现代极简主义者的终极博客模板** | 性能优秀 ⚡ | 轻量级/无需繁杂配置 🚀



## ✨ 核心特性

- 😉 结构简单，减少心智，方便维护
- ⚡ 基于 Next.js 14，极速加载体验
- 🎨 使用 Tailwind CSS，快速构建响应式UI
- 🖼️ 集成 Framer Motion，带来流畅的动画效果
- 📚 使用 Contentlayer，轻松管理mdx内容
- 🌙 支持暗黑模式，保护眼睛，丝滑切换
- 📱 响应式设计，适配移动端
- ⚠️ husky git hook限制，防止错误部署
- 🤖 docker + github action 自动部署到云服务器，省时省力

# 🏠 项目结构
````
clevali.io/
├── .husky/                      # Husky Git钩子
├── .github/                     # GitHub actions配置
├── blogs/                       # 博客文章目录
├── nginx/                       # 博客文章目录
│   └── nginx.conf              # 服务器nginx配置
├── public/                      # 静态资源目录
├── src/                         # 源代码目录
│   ├── actions/                 # server actions
│   ├── app/                     # App Router页面
│   ├── assets/                  # 项目资源文件
│   ├── components/              # 组件目录
│   ├── constant/                # 常量配置
│   │   └── conponents-map.ts    # mdx组件映射配置
│   ├── hooks/                   # 自定义hooks
│   ├── lib/                     # 工具函数
│   │   └── index.ts             # 工具函数入口
│   ├── style/                   # 样式文件
│   └── types/                   # 类型定义
├── tailwind.config.ts           # Tailwind CSS配置
├── tsconfig.json                # TypeScript配置
├── .dockerignore                # Docker忽略文件
├── .eslintrc.json               # ESLint配置
├── .gitignore                   # Git忽略文件
├── Dockerfile                   # Docker构建文件
├── LICENSE                      # 许可证文件
├── components.json              # 组件配置
├── contentlayer.config.ts       # Contentlayer配置
├── next.config.mjs              # Next.js配置
├── package.json                 # 项目依赖配置
├── postcss.config.mjs           # PostCSS配置
└── README.md                    # 项目说明文档
````

## 🚀 快速启动

1. 克隆仓库
```bash
git clone https://github.com/clevali/clevali.io.git
```

2. 安装依赖
```bash
pnpm install # 推荐使用pnpm
```

3. 本地运行
```bash
pnpm dev
```
4. 访问本地
````
http://localhost:3000/
````

## 🔨 构建

```bash
pnpm build
```

## ☁️ 部署

[如何在利用github action + Docker 自动化部署nextjs个人网站](https://www.clevali.cn/blogs/blog-8)


## 📄  许可证
本项目采用 MIT 许可证 。
