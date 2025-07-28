# wve-CLI

一个用于快速创建 Vue.js 项目的 CLI 脚手架工具。

本项目展示了如何从零开始构建一个完整的 CLI 脚手架工具，文档中详细说明了每个依赖包的作用和实现原理，是学习脚手架开发的最佳实践。

## 🚀 特性

- 📦 支持多种项目模板（Vue3+TypeScript、React+TypeScript）
- 🎯 交互式命令行界面
- ⚡ 快速项目创建
- 🔧 自动依赖安装
- 📝 详细的进度提示

## 📕 模板

- ✅ 快速生成 [Vue3+TS+Vite+ElementPlus+Pinia+Axios+Mock 的模板](https://gitee.com/bigin/admin-pro.git)

## 📦 安装

```bash
# 全局安装
npm install -g wve-cli

# 或者使用 pnpm
pnpm add -g wve-cli

# 或者使用 yarn
yarn global add wve-cli
```

## 🛠️ 使用方法

### 创建新项目

```bash
# 交互式创建项目
wve create

# 直接指定项目名称
wve create my-project
```

### 更新

```bash
wve update
```

### 查看版本

```bash
wve -v
# 或
wve --version
```

## 📋 可用模板

| 模板名称  | 描述                   | 技术栈                          |
| --------- | ---------------------- | ------------------------------- |
| `vue3-ts` | Vue3 + TypeScript 模板 | Vue 3, TypeScript, Element Plus |

## 🏗️ 项目结构

```
wve-cli/
├── src/                       # 源代码目录
│   ├── command/               # 命令模块
│   │   ├── create.ts          # 创建项目命令
│   │   └── update.ts          # 更新命令
│   ├── utils/                 # 工具模块
│   │   ├── clone.ts           # Git克隆工具
│   │   └── log.ts             # 日志工具
│   └── index.ts               # 主入口文件
├── bin/                       # 可执行文件目录
│   └── index.js               # CLI入口文件
├── dist/                      # 构建输出目录
│   ├── index.js               # 打包后的主文件
│   └── fonts/                 # 字体文件目录
│       └── Standard.flf       # ASCII艺术字体文件
├── fonts/                     # 源字体文件目录
│   └── Standard.flf           # ASCII艺术字体文件
├── package.json               # 项目配置文件
├── rollup.config.js           # Rollup构建配置
├── tsconfig.json              # TypeScript配置
├── .gitignore                 # Git忽略文件
└── README.md                  # 项目说明文档
```

## 📚 依赖包说明

### 开发依赖 (devDependencies)

#### 命令行交互相关

- **@inquirer/prompts**: 提供交互式命令行界面，支持选择、输入等操作
- **commander**: 命令行参数解析工具，用于创建 CLI 应用
- **chalk**: 终端文字颜色和样式库，用于美化输出
- **figlet**: ASCII 艺术字体库，用于生成大标题和装饰性文字
- **@types/figlet**: figlet 的 TypeScript 类型定义
- **log-symbols**: 终端符号库，提供成功、错误、警告等状态图标
- **ora**: 终端加载动画库，提供优雅的加载提示效果

#### 构建工具相关

- **rollup**: 现代 JavaScript 模块打包器，用于构建库
- **@rollup/plugin-commonjs**: Rollup 插件，将 CommonJS 模块转换为 ES6
- **@rollup/plugin-json**: Rollup 插件，支持导入 JSON 文件
- **@rollup/plugin-node-resolve**: Rollup 插件，解析 node_modules 中的模块
- **@rollup/plugin-terser**: Rollup 插件，用于代码压缩和混淆
- **rollup-plugin-node-externals**: Rollup 插件，自动外部化 node_modules 中的依赖
- **rollup-plugin-typescript2**: Rollup 插件，支持 TypeScript 编译
- **rollup-plugin-copy**: Rollup 插件，用于在构建过程中复制静态文件（如字体文件）

#### Git 操作相关

- **simple-git**: 简化 Git 操作的 Node.js 库，用于克隆仓库

#### 文件系统相关

- **fs-extra**: 扩展的 fs 模块，提供更多文件操作方法
- **@types/fs-extra**: fs-extra 的 TypeScript 类型定义

#### 工具库相关

- **lodash**: JavaScript 实用工具库，提供数组、对象、字符串等操作方法
- **@types/lodash**: lodash 的 TypeScript 类型定义

#### 进度显示相关

- **progress-estimator**: 进度条显示库，提供友好的进度提示
- **ora**: 终端加载动画库，提供优雅的加载提示效果

#### TypeScript 相关

- **@types/node**: Node.js 的 TypeScript 类型定义

### 生产依赖 (dependencies)

- **tslib**: TypeScript 运行时库，提供 TypeScript 编译后的辅助函数

## 🔧 开发

### 安装依赖

```bash
pnpm install
```

### 构建项目

```bash
pnpm build
```

### 本地测试

```bash
# 构建后测试
pnpm build
node dist/index.js create test-project
```

## 📝 脚本说明

- `build`: 使用 Rollup 构建项目，生成可执行文件
- `test`: 测试脚本（待实现）

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

ISC License

## 🔗 相关链接

- [Vue.js](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Element Plus](https://element-plus.org/)
- [Rollup](https://rollupjs.org/)
