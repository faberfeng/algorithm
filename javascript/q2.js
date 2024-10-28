/**
 * 输出匹配字符串的开始下标
给出母串和子串，输出子串能够在母串完全匹配的开始位置

比如 asdfasdfa，fas 输出3，就是最小下标。
 */
function matchStr(childStr, sonStr) {
  var data = childStr.indexOf(sonStr);
  return data;
}
var num = matchStr("asdfasdfa", "as");
console.log(`最小下标：${num}`);
