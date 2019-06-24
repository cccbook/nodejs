function main() {
  console.log('main start')
  setTimeout(function () {
    console.log('1 second')
    setTimeout(function () {
      console.log('3 second')
      setTimeout(function () {
        console.log('4 second')
      }, 1000)
    }, 2000)
  }, 1000)
}

main()
