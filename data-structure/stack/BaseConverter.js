const Stack = require('./ArrayStack')

function base2Dec(number, base) {
  let arrLength = String(number).length
  let result = 0
  for (let i = 0; i < arrLength; i++) {
    result += Number(String(number)[i] * Math.pow(base, arrLength - i - 1))
  }
  return result
}

function dec2Base(decNum, base) {
  let s = new Stack()
  let systemStr = ''
  let digits = '0123456789ABCDEF'

  while (decNum > 0) {
    s.push(decNum % base)
    decNum = Math.floor(decNum / base)
  }

  while (!s.isEmpty()) {
    systemStr += digits[s.pop()]
  }

  return systemStr
}

console.log(base2Dec(11, 2));
console.log(dec2Base(11, 2));