function parseCSV(str) {
  const ret = []
  // str += ','
  for (let i = 0, isInQuote = false, substr = []; i < str.length; i++) {
    const c = str[i]
    
    if (isInQuote) {
      if (c !== '"') {
        substr.push(c)
      } else {
        if (i + 1 === str.length) {
          ret.push(substr.join(''))
        } else if (str[i + 1] === '"') {
          substr.push('"')
          i++
        } else {
          isInQuote = false
        }
      }
    } else {
      if (i + 1 === str.length) {
        substr.push(c)
        ret.push(substr.join(''))
      } else if (c === '"') {
        isInQuote = true
      } else if (c === ',') {
        ret.push(substr.join(''))
        substr = []
      } else {
        substr.push(c)
      }
    }
  }
  return ret
}

var csv = '"ooops, yeah" abc,"cool"" haha",damnit,"meow,yes" yea'
var ret = parseCSV(csv)
console.log(ret)