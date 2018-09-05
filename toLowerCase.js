/**
 * @param {string} str
 * @return {string}
 */

let toLowerCase = function (str) {
  let result = ''

  for (s of str) {
    if (s.charCodeAt() < 91 && s.charCodeAt() > 64) {
      result += String.fromCharCode(s.charCodeAt() + 32)
    } else {
      result += s
    }
  }
  return result
};