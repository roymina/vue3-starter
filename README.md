# Vue3 项目模板
Vue 3 + Vite + WindiCSS + pinia + Vue-router + auto-import + SVG icon

## 如何使用此模板
> 注意：优先使用`pnpm`而不是`npm`, 否则有可能引起未知错误
1. 首先安装digit: `pnpm install -g degit`
2. 使用digit初始化此模板：`degit roymina/vue3-starter.git`
3. 安装依赖`pnpm i`
4. 升级所有依赖到最新版本：`pnpm up`
5. 开始开发：`pnpm dev`

## Svg图标使用方法
将svg文件丢进`/src/assets/svgs`下，然后在vue中使用全局定义的`SvgIcon`组件即可：`<svg-icon name="strawberry" size="256px" color="#cccccc" ：clickable="true" @on-click="onClickHandler"/>`

 
## 自动导入
1. 所有`src/components`下的vue组件将被自动导入，无需手工导入
2. vue: 如`ref,computed`，vue-router: 如`useRoute,useRouter`，pinia: 如`storeToRefs`等api无需导入，直接使用

## 网络请求
1. axios已做好基础配置：`src/composables/axios.js`
2. 在`src/apis/`下写具体api请求即可

## 代码规范
1. 使用`Eslint+Prettier`增加代码规范性
2. 使用`husky+lint-staged`添加git hook，在提交前强制进行lint
3. 使用`Commitizen`进行代码提交
   
    ```bash
    git add .
    git cz # 依次回答问题即可提交，注意：如果此命令报错，全局安装Commitizen：pnpm i -g commitizen
    ```
4. `.cz-config.js`文件中可自定义提交规范

## UI框架
未内置任何UI框架，请自行添加

## Typescript
- 不支持，没必要