/*
 * @Author: Gatsby
 * @Date: 2021-03-16 10:39:36
 * @LastEditTime: 2021-03-26 11:15:45
 * @LastEditors: Gatsby
 * @Description: 
 * @FilePath: \ES6\Promise实践_读取多个文件.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
//引入 fs 模块
const fs = require("fs");

// fs.readFile('./1.txt', (err, data_1) => {
//    fs.readFile('./2.txt', (err, data_2) => {
//        fs.readFile('./3.txt', (err, data_3) => {
//            let result = data_1 + '\r\n' + data_2 + '\r\n' + data_3;
//            console.log(result);
//        });
//    });
// });

//使用 promise 实现
const p = new Promise((resolve, regect) => {
    fs.readFile('./1.txt', (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, regect) => {
        fs.readFile('./2.txt', (err, data) => {
            resolve([value, data]);
        });
    })
}).then(value => {
    return new Promise((resolve, regect) => {
        fs.readFile('./1.txt', (err, data) => {
            //压入数组中
            value.push(data);
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.join('\r\n'));
})