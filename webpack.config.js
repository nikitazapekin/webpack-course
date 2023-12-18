
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

//плагины для корректной сборки в html
//npm run build:dev
// после появится в build html файлик со сборкой
const HtmlWebpackPlugin = require('html-webpack-plugin'); // npm i -D html-webpack-plugin@5.5.3

const webpack = require('webpack')
const path = require('path')
module.exports = (env)=>{
    return {

        mode: env.mode ?? 'development', // режим сборки, есть production и  development
        entry:   path.resolve(__dirname, 'src', 'index.js'), // сборка файла
        

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
}