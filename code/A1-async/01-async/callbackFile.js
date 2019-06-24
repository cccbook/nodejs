var fs = require('fs')

function main() {
  fs.readFile("asyncFile.js", "utf8", function(err1, data1) {
    console.log('讀取完成!')
    fs.writeFile("asyncFile.js2", data1, function (err2) {
      console.log('寫入完成!')
      fs.readFile("asyncFile.js2", "utf8", function (err3, data3) {
        console.log('又讀取完成 !')
        fs.writeFile("asyncFile.js3", data3, function (err4) {
          console.log('又寫入完成!')
        })
      })
    })
  })
}

main()
console.log('main 執行了')