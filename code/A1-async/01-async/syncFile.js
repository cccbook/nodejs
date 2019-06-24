var fs = require('fs')

function main() {
  var data1 = fs.readFileSync("asyncFile.js", "utf8");
  console.log('讀取完成!');
  fs.writeFileSync("asyncFile.js2", data1);
  console.log('寫入完成!');
  var data2 = fs.readFileSync("asyncFile.js2", "utf8");
  console.log('又讀取完成 !');
  fs.writeFileSync("asyncFile.js3", data2);
  console.log('又寫入完成!');
}

main()
console.log('main 執行了')