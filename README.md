# Game Project · 游戏项目

### Vue 3 前端界面 + Godot 游戏运行时 | Vue 3 Frontend UI + Godot Game Runtime

> 一个带 Web 前端界面的 Godot 游戏项目：Vue 3 负责菜单、角色选择与设置界面，Godot 负责游戏本体。
> *A Godot game with a web frontend: Vue 3 powers the menu, character selection and settings UI, while Godot runs the game itself.*

---

## 项目概述 · Overview

**中文**

本项目包含两部分：一是基于 Vue 3 + TypeScript + Vite 构建的 Web 前端，提供主菜单、模式选择、角色选择等界面；二是 Godot 引擎导出的 Windows 游戏运行时（含 `.pck` 资源包与 `data_game-project1_windows_x86_64/` 运行库）。前端界面与游戏运行时可独立运行。

**English**

This project has two parts: a web frontend built with Vue 3 + TypeScript + Vite, providing the main menu, mode selection and character selection screens; and a Windows game runtime exported from the Godot engine (including the `.pck` resource pack and the `data_game-project1_windows_x86_64/` runtime libraries). The frontend UI and the game runtime can run independently.

---

## 技术栈 · Tech Stack

| 层次 Layer | 技术 Technology | 用途 Purpose |
| --- | --- | --- |
| 前端框架 Frontend | Vue 3 (`<script setup>`) | 界面构建 UI construction |
| 语言 Language | TypeScript 5 | 类型安全 Type safety |
| 路由 Routing | Vue Router 4 | 页面导航 Page navigation |
| 构建工具 Build | Vite 5 | 开发与打包 Dev & build |
| 样式 Styling | Tailwind CSS 3 | 原子化样式 Utility CSS |
| 图标 Icons | lucide-vue-next | 图标库 Icon set |
| 代码检查 Lint | ESLint 8, typescript-eslint | 代码规范 Code quality |
| 游戏引擎 Game Engine | Godot 4 (C# / .NET) | 游戏本体 Game runtime |
| 部署 Deploy | GitHub Actions (deploy.yml) | 自动部署 Auto deployment |

---

## 功能特性 · Features

- 主菜单与模式选择界面（Main menu & mode selection）
- 角色选择页面（Character selection）
- 明暗主题切换（`useTheme` composable）
- Godot Windows 可执行程序与资源包（Godot Windows build & `.pck`）

---

## 快速开始 · Quick Start

```bash
# 安装依赖 / Install dependencies
npm install

# 启动开发服务器 / Start dev server
npm run dev

# 类型检查 / Type check
npm run check

# 构建生产版本 / Build for production
npm run build
```

游戏本体：直接运行 `game-project1.exe`（Windows）。

---

## 目录结构 · Repository Structure

```
game-project/
├── src/                                  # Vue 前端源码 Frontend source
│   ├── pages/                            # 页面：主菜单 / 模式 / 角色选择
│   ├── router/                           # 路由配置 Router
│   ├── composables/                      # 组合式函数 Composables
│   └── App.vue                           # 根组件 Root component
├── dist/                                 # 前端构建产物 Build output
├── data_game-project1_windows_x86_64/    # Godot 运行库 Godot runtime libs
├── game-project1.exe                     # 游戏可执行文件 Game executable
├── game-project1.pck                     # Godot 资源包 Godot resource pack
└── .github/workflows/deploy.yml          # 部署工作流 Deploy workflow
```
