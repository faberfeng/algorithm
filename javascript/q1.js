/**
 * 靠谱的数字
数字从1开始，遇到数字7就会跳过，比如6后边直接是8，69后边直接是80，现在给你个数字，问是第几位？
比如输入8，输出7，就是第7个数。那89那？请你编程输出。
 */

function findReliableNumberPosition(n) {
  let count = 0; // 记录靠谱的数字数量
  let number = 0; // 当前搜索的数字

  while (count < n) {
    number++; // 增加数字
    // 检查当前数字是否包含数字 7
    if (!String(number).includes("7")) {
      count++; // 只有不包含 7 的数字才算靠谱的数字
    }
  }

  return number; // 返回第 n 个靠谱的数字
}

// 测试输入
let input = 89; // 你可以修改这个输入
let reliableNumber = findReliableNumberPosition(input);
console.log(`第 ${input} 位靠谱的数字是: ${reliableNumber}`);
