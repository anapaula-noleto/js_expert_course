/**
 * @param {string[]} strs
 * @return {string}
 */
//  Input: strs = ["flower","flow","flight"]
//  Input: strs = ["flight","flow","flower"]
//  Output: "fl"

function longestCommonPrefix(strs) {
  let prefix = strs[0];
  strs.shift();
  while (strs.length > 0) {
    if (strs[0].startsWith(prefix)) {
      strs.shift();
    } else {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
}

console.assert(longestCommonPrefix(['a']) === 'a');
console.assert(
  longestCommonPrefix(['flower', 'flower', 'flower']) === 'flower',
);
console.assert(longestCommonPrefix(['flight', 'flow', 'flower']) === 'fl');
