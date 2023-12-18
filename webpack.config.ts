
/*
const path = require('path')
module.exports = {
    entry:   path.resolve(__dirname, 'src', 'index.js'), // сборка файла


output: { //   куда будет идти сборка, после npm run build мы получаем папку build с файлом bundle.js куда прошла сборка
    path:   path.resolve(__dirname,  'build'),
    filename: 'bundle.js', 
    clean: true // удаляет лишниие файлы не схожие с названием filename из build при сборке
}

} 

*/

/*
const path = require('path')
module.exports = {
    mode: 'development', // режим сборки, есть production и  development
    entry:   path.resolve(__dirname, 'src', 'index.js'), // сборка файла


output: { //   куда будет идти сборка, после npm run build мы получаем папку build с файлом bundle.js куда прошла сборка
    path:   path.resolve(__dirname,  'build'),
    filename: '[name].[contenthash].js',  // cобирает из кеша
   // filename: '[name].js',  // собрает в main.js по умочанию
    clean: true // удаляет лишниие файлы не схожие с названием filename из build при сборке
}

} 
 */
//==============================================================================================================================
// Изменим package.json
//БЫЛО ДО
/*


{
  "name": "webpack-course",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  }
}


ПОСЛЕ




{
  "name": "webpack-course",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build:dev": "webpack --env mode=development",
    "build:prod": "webpack --env mode=production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  }
}

*/

//ЗАПУСТИТЬ ЭТО  npm run build:dev  -  в дев режиме, npm run build:prod  - в продакшн режиме 
/*
const path = require('path')
module.exports = (env)=>{
    return {

        mode: env.mode ?? 'development', // режим сборки, есть production и  development
        entry:   path.resolve(__dirname, 'src', 'index.js'), // сборка файла
        

        output: { //   куда будет идти сборка, после npm run build мы получаем папку build с файлом bundle.js куда прошла сборка
    path:   path.resolve(__dirname,  'build'),
    filename: '[name].[contenthash].js',  // cобирает из кеша
    clean: true // удаляет лишниие файлы не схожие с названием filename из build при сборке
}

        }
} */


//====================================================================================

/*
//плагины для корректной сборки в html
//npm run build:dev
// после появится в build html файлик со сборкой
const HtmlWebpackPlugin = require('html-webpack-plugin'); // npm i -D html-webpack-plugin@5.5.3

const webpack = require('webpack')
const path = require('path')
module.exports = (env)=>{
    return {

        mode: env.mode ?? 'development', // режим сборки, есть production и  development
        entry:   path.resolve(__dirname, 'src', 'index.ts'), // сборка файла
        

        output: { //   куда будет идти сборка, после npm run build мы получаем папку build с файлом bundle.js куда прошла сборка
    path:   path.resolve(__dirname,  'build'),
    filename: '[name].[contenthash].js',  // cобирает из кеша
    clean: true // удаляет лишниие файлы не схожие с названием filename из build при сборке
},
plugins: [
    new HtmlWebpackPlugin({ template:path.resolve(__dirname, 'public', 'index.html') }),
   new  webpack.ProgressPlugin(), // показывает текущее состояние сборки в %, в продакшене не юзается так как амедляет сборку
   

],

        }
} */

//TAЙПСКРИПТ



/*
const HtmlWebpackPlugin = require('html-webpack-plugin'); // npm i -D html-webpack-plugin@5.5.3

const webpack = require('webpack')
const path = require('path')
module.exports = (env)=>{
    return {

        mode: env.mode ?? 'development', // режим сборки, есть production и  development
        entry:   path.resolve(__dirname, 'src', 'index.ts'), // сборка файла
        

        output: { //   куда будет идти сборка, после npm run build мы получаем папку build с файлом bundle.js куда прошла сборка
    path:   path.resolve(__dirname,  'build'),
    filename: '[name].[contenthash].js',  // cобирает из кеша
    clean: true // удаляет лишниие файлы не схожие с названием filename из build при сборке
},
plugins: [
    new HtmlWebpackPlugin({ template:path.resolve(__dirname, 'public', 'index.html') }),
   new  webpack.ProgressPlugin(), // показывает текущее состояние сборки в %, в продакшене не юзается так как амедляет сборку
   

],

module: {
  rules: [ // в rules указываются лоадеры
    {
      test: /\.tsx?$/,  // расширения файлов которые мы хотим обрабаотывать
      use: 'ts-loader',
      exclude: /node_modules/, // то что мы не обрабатываем

      // благодаря вебпаку мы можем импортировать так "./index" а не ./index.ts так как он понимает какого раширения этот  файл
    },
  ],
},
resolve: {
  extensions: ['.tsx', '.ts', '.js'],
},




        }
} 

*/
//====================================================================================================================
//WEBPACK CONFIG + ts
// поменяем название webpack.config с .js на .ts
// теперь если забилдить приложение то оно упадет
// npm i -D @types/node@20.8.3 @types/webpack@5.28.3 ts-node@10.9.1
//npm i -D @types/webpack-dev-server@4.7.2
//npm i -D webpack-dev-server@4.15.1
//npm run start - запуск сервака 
// теперь мы модем изменять index.ts и видеть изменения в реальном времени
//npm run start -- --env port=5000 запустить определенный порт можно вот так

import  path from 'path';
import  webpack from 'webpack';
import  HtmlWebpackPlugin from "html-webpack-plugin"
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';


type Mode = 'production' | 'development'
interface EnvVariable {
  mode: Mode,
  port: number
}
export default (env: EnvVariable)=>{

  const isDev = env.mode==='development' 
  const config: webpack.Configuration= {
   // return {

        mode: env.mode ?? 'development', // режим сборки, есть production и  development
        entry:   path.resolve(__dirname, 'src', 'index.tsx'), // сборка файла
        

        output: { //   куда будет идти сборка, после npm run build мы получаем папку build с файлом bundle.js куда прошла сборка
    path:   path.resolve(__dirname,  'build'),
    filename: '[name].[contenthash].js',  // cобирает из кеша
    clean: true // удаляет лишниие файлы не схожие с названием filename из build при сборке
},
plugins: [
    new HtmlWebpackPlugin({ template:path.resolve(__dirname, 'public', 'index.html') }),
   new  webpack.ProgressPlugin(), // показывает текущее состояние сборки в %, в продакшене не юзается так как амедляет сборку
   

],

module: {
  rules: [ // в rules указываются лоадеры
    {
      test: /\.tsx?$/,  // расширения файлов которые мы хотим обрабаотывать
      use: 'ts-loader',
      exclude: /node_modules/, // то что мы не обрабатываем

      // благодаря вебпаку мы можем импортировать так "./index" а не ./index.ts так как он понимает какого раширения этот  файл
    },
  ],
},
resolve: {
  extensions: ['.tsx', '.ts', '.js'],
},
devtool: isDev ? 'inline-source-map' : false, // добавляет source mapping после npm run build:dev в концк сборки
devServer: {
port: env.port ?? 3000,
open: true
}  

        }
        return config
} 
