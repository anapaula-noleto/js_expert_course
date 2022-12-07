const item = {
  name: 'Aninha',
  age: 25,
  toString() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },

  valueOf() {
    return 007;
  },
  // symbol to primitive tem prioridade sobre o toString e valueOf
  [Symbol.toPrimitive](coercionType) {
    console.log(`trying to convert to ${coercionType}`);
    const types = {
      string: JSON.stringify(this),
      number: '007',
    };
    return types[coercionType] || types.string;
  },
};

console.log('String', String(item));
console.log('Number', Number(item));
// chama a conversão default
console.log('Date', new Date(item));
