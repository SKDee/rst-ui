"dev": "dumi dev", // 启动开发环境 在文档站点中调试组件
"build:site": "rimraf doc-site && dumi build", // 构建文档站点 后续会部署到 github pages
"preview:site": "npm run build:site && serve doc-site" // 本地预览构建后的文档站点