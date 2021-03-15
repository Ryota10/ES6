/*
 * @Author      : Gatsby
 * @Date        : 2021-03-15 19: 04: 24
 * @LastEditTime: 2021-03-15 19:21:10
 * @LastEditors: Gatsby
 * @Description : 
 * @FilePath: \github\ES6\Promise读取文件.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
// 1. 引入 fs 模块
const fs = require('fs');

//2. 调用方法读取文件
// fs.readFile('./README.md', (err, data) => {
//     //如果出错，则抛出错误
//     if (err) throw err;
//     //若是没有出错，则输出内容
//     console.log(data.toString()); //输出文文件内容
// });

//使用 Promise 封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('./README.md', (err, data) => {
        //如果出错，则抛出错误
        if (err) reject(err);
        //如果成功
        resolve(data);
    });
});
p.then(function (value) {
        console.log(value.toString()); //输出文件内容
    },
    function (reason) {
        console.log('读取失败！');
    });