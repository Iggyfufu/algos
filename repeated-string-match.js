/* Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

Note:
The length of A and B will be between 1 and 10000.
*/

var repeatedStringMatch = function (A, B) {
  let string = A
  let count = 1
  while (string.length < B.length) {
    count++
    string += A
  }

  if (string.indexOf(B) !== -1) {
    return count
  }

  count++
  string += A

  if (string.indexOf(B) !== -1) {
    return count
  }

  return -1
};

repeatedStringMatch("abcd", "cdabcdab") //3