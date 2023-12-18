//npm install webpack webpack-cli --save-dev
// npm i -D webpack-cli@5.1.4 webpack-dev-server@4.15.1
// npm run build  - то что получакм после сборки называем bundle
//npm i -D ts-loader@9.5.0 typescript@5.2.2
//npm i react@18.2.0 react-dom@18.2.0
// npm i -D @types/react@18.2.25 @types/react-dom@18.2.11
/*import { calc } from "./test";
console.log(1233333)
console.log(calc(4,5)) */






//ЗАПУСТИТЬ ЭТО МОЖНО  написав npm run start
//npm install --save-dev css-loader@6.8.1
//npm i -D style-loader@3.3.3
import React from "react"
import App from "./components/App"
import {createRoot} from "react-dom/client"
const root = document.getElementById('root')
if(!root) {
    throw new Error('error')
}
const container = createRoot(root)
container.render(<App />) 