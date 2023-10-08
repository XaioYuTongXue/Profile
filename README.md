1、cra 初始化项目

在项目目录下在命令行中 ：create-react-app demo

2、自定义 webpack 配置 craco

    ①安装 npm i -D @craco/craco
    ②创建craco.config.js
    ③在 "scripts": {
        -  "start": "react-scripts start"
        +  "start": "craco start"
        -  "build": "react-scripts build"
        +  "build": "craco build"
        -  "test": "react-scripts test"
        +  "test": "craco test"
        }
        +为增加，-为删除

3、tailwindcss
① 安装 npm install -D tailwindcss
② 运行 npx tailwindcss init
③ 在项目根目录下创建 tailwind.config.js 文件
④ 在 tailwind.config.js 配置
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./src/**/\*.{js,jsx,ts,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

            ⑤ 在全局 css 文件中
            @tailwind base;
            @tailwind components;
            @tailwind utilities;
            放置在文件最顶端

4、jsconfig.json 配置路径别名的映射

5、UI 库的配置

① 安装 npm i antd --save
② 解决 tailwindcss 和 antd 冲突
在 tailwindcss 加上
corePlugins: {
preflight: false,
}字段

6、请求库的配置

配置文件
.editorconfig

# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 4 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false

.prettierrc

{
"useTabs": false,
"tabWidth": 2,//缩进
"printWidth": 100,
"singleQuote": true,//是否单引号
"trailingComma": "none",
"bracketSpacing": true,
"semi": true //添加分号
}

用eslint ，发现问题解决问题，并规范代码

①安装npm init @eslint/config
https://eslint.nodejs.cn/

解决prettierrc和editorconfig的代码规范冲突
①安装 eslint-plugin-prettier eslint-config-prettier
②在.eslintrc.js中添加extends: ["airbnb", "plugin:prettier/recommended"],字段

使用lint一次性修改规范代码
在package.json中scripts字段中增加 "lint":"npx eslint --fix"后执行 npm run lint
