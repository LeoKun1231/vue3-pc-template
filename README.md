<!--
 * @Author: hqk
 * @Date: 2022-12-23 18:49:33
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-23 18:58:37
 * @Description:
-->

# vue3-PC-Template

## 介绍

首先该模板仅适用于 pc 端，使用了

**VUE3**+**Pinia**+**Pnpm**+**Ts**+**tailwindcss**+**ElementPlus**+**VueRouter**+**VueUse**+**axios**
并且可以自动导入 elementplus 中的 icon
如 i-ep-user-filled
i 是前缀可以在 vite.config.ts 配置 ep 是 ElementPlus 的 Icon 集
user-filled 则是对应 ElementPlus 对应的 icon 标签名

## 使用步骤

```
pnpm install
pnpm lint
pnpm dev
```

## 上传代码注意

该模板使用了 husky+commitizen 管里提交代码，所以，你应该按如下步骤进行提交

```
git add .
pnpm commit
git push origin main
```

## IDE 推荐使用 VScode

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
