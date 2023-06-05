# ShareDex-FE

## ShareDex ENV

```text
node -v // v16.0.0 以上
pnpm -v // 7.0.0 以上

必装插件
Eslint
prettier
```

## Project setup

```bash
pnpm i
pnpm dev
```

## Project structure

```bash
├── .husky
├── public
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── router
│   ├── service
│   ├── styles
│   ├── types
│   ├── utils
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .commitlintrc.js
├── .eslintrc.js
├── .gitignore
├── .gitattributes
├── .prettierrc.js
├── .stylelintrc.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── postcss.config.ts
├── README.md
├── tailwind.config.ts
|── TODO.md
├── tsconfig.json
└── vite.config.ts
```

## Commit message

```bash
git add .
pnpm cz
git push
```

备注：

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

## Project specification

// TODO
