/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  let aux = {};

  for (let index = 0; index < s.length; index++) {
    if (
      !(
        Object.keys(aux).includes(s[index]) ||
        Object.values(aux).includes(t[index])
      )
    ) {
      aux[s[index]] = t[index];
    }
    if (!aux[s[index]]) return false;
    if (aux[s[index]] !== t[index]) return false;
  }
  return true;
}

console.assert(isIsomorphic('egg', 'add') === true);
console.assert(isIsomorphic('paper', 'title') === true);
console.assert(isIsomorphic('foo', 'bar') === false);
console.assert(isIsomorphic('badc', 'baba') === false);
