export default data => {
  if (Number.isInteger(data)) {
    let num = data.toString()
    let result = ''
    while (num.length > 3) {
      result = `,${num.slice(-3)}${result}`
      num = num.slice(0, num.length - 3)
    }
    return num + result
  }
  return 0
}
