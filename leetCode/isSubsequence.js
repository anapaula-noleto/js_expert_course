/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
  if (s.length > t.length) return false;
  let indexes = [];
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    index = t.indexOf(s[i], index);
    if (index === -1) return false;
    index++;
    indexes.push(index);
  }
  return (
    [...[...indexes].sort((a, b) => a - b)].toString() ===
    [...indexes].toString()
  );
}

console.assert(isSubsequence('abc', 'ahbgdc') === true);
console.assert(isSubsequence('ace', 'abcde') === true);
console.assert(isSubsequence('aec', 'abcde') === false);
console.assert(isSubsequence('axc', 'ahbgdc') === false);
console.assert(isSubsequence('aaaaaa', 'bbaaaa') === false);
console.assert(isSubsequence('b', 'c') === false);
