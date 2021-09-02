module.exports = function Stack() {
  this.stackArr = []

  Stack.prototype.push = function (element) {
    this.stackArr.push(element)
  }

  Stack.prototype.pop = function () {
    return this.stackArr.pop()
  }

  Stack.prototype.peek = function () {
    return this.stackArr[this.stackArr.length - 1]
  }

  Stack.prototype.isEmpty = function () {
    return !this.stackArr.length
  }

  Stack.prototype.size = function () {
    return this.stackArr.length
  }

  Stack.prototype.toString = function () {
    let resultStr = ''
    let arrLength = this.stackArr.length

    for (let i = 0; i < arrLength; i++) {
      resultStr = this.stackArr[i] + ''
    }

    return resultStr
  }
}