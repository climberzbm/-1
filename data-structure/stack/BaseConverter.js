const Stack = require('./ArrayStack')

function Base2Base(number, oldBase, newBase) {
  let arrLength = String(number).length
  let result = 0
  for (let i = 0; i < arrLength; i++) {
    result += Number(String(number)[i] * Math.pow(oldBase, arrLength - i - 1))
  }
  return dec2Base(result, newBase)
}

function dec2Base(decNum, x) {
  let s = new Stack()
  let systemStr = ''
  let digits = '0123456789ABCDEF'

  while (decNum > 0) {
    s.push(decNum % x)
    decNum = Math.floor(decNum / x)
  }

  while (!s.isEmpty()) {
    systemStr += digits[s.pop()]
  }

  return systemStr
}

console.log(Base2Base(123, 10, 8));