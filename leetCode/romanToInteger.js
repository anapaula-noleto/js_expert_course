/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const romanToDecimal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // string para array
  const arrOfRomanNumbers = s.split('');
  const arrOfIntNumbers = arrOfRomanNumbers.map(
    (romanNumber) => romanToDecimal[romanNumber],
  );
  const intNumber = arrOfIntNumbers.reduce((total, number, index, arr) => {
    let nextNumber = arr[index + 1] ?? 0;
    if (number < nextNumber) {
      return (total -= number);
    }
    return (total += number);
  }, 0);
}
