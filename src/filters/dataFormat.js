export default data => {
  if (Number.isInteger(data)) {
    return data.toString().split('').map((item, index, arr) => {
      const len = arr.length
      const reminder = len % 3
      let _idx = index + 1
      if (_idx === reminder || _idx === reminder + 3 && _idx < len) {
        return `${item},`
      }
      return item
    }).join('')
  }
  return null
}
