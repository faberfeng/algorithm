/***
 * 给出几组字符串的数字，需要获得组成的最大数字

比如输入123，546，8，32，输出854632123
 */

function largestNumber(arr) {
  // 自定义比较函数
  const compare = (a, b) => {
    return b + a - (a + b);
  };

  // 排序
  arr.sort(compare);

  // 如果最大的数字是 0，则返回 "0"
  if (arr[0] === "0") {
    return "0";
  }

  // 连接排序后的数组元素
  return arr.join("");
}

// 示例输入
const numbers = ["123", "546", "8", "32"];
const result = largestNumber(numbers);
console.log(result); // 输出: 854632123
