module.exports = function reverse (n) {
  let revNum = Math.abs(n)
    return Number(revNum.toString().split('').reverse().join('').toString())
}

