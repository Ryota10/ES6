/*
 * @Author: Gatsby
 * @Date: 2021-03-31 10:25:08
 * @LastEditTime: 2021-03-31 10:25:17
 * @LastEditors: Gatsby
 * @Description: 
 * @FilePath: \ES6\moduleTest_2.js
 * 可以输入预定的版权声明、个性签名、空行等
 */


 //统一暴露
 let score = "Score";
 function shot() { 
     console.log("nice shot !!!");
}
export {score, shot};