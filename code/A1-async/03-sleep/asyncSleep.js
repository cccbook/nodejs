function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('main start')
  await sleep(1000)
  console.log('1 second')
  await sleep(2000)
  console.log('3 second')
  await sleep(1000)
  console.log('4 second')
}

main()