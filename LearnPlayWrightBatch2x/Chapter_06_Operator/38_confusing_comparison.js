// Confusing comparison: == vs ===

console.log('1) Number vs String');
console.log(5 == '5');   // true
console.log(5 === '5');  // false

console.log('2) Null vs Undefined');
console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log('3) Number vs Boolean');
console.log(0 == false);   // true
console.log(0 === false);  // false

console.log('4) Empty String vs Boolean');
console.log('' == false);   // true
console.log('' === false);  // false

console.log('5) Array vs String');
console.log([1, 2] == '1,2');   // true
console.log([1, 2] === '1,2');  // false

console.log('6) Object vs Primitive');
console.log({ a: 1 } == '[object Object]');   // true
console.log({ a: 1 } === '[object Object]');  // false

console.log('7) NaN comparison');
console.log(NaN == NaN);   // false
console.log(NaN === NaN);  // false

console.log('8) Extra spaces in string');
console.log('  ' == 0);   // false
console.log('  ' === 0);  // false

console.log('9) True vs 1');
console.log(true == 1);   // true
console.log(true === 1);  // false

console.log('10) False vs 0');
console.log(false == 0);   // true
console.log(false === 0);  // false

console.log('11) Empty array vs empty string');
console.log([] == '');   // true
console.log([] === '');  // false

console.log('12) Empty array vs 0');
console.log([] == 0);   // true
console.log([] === 0);  // false

console.log('13) Space string vs 0');
console.log(' ' == 0);   // false
console.log(' ' === 0);  // false

console.log('14) String with number vs number');
console.log('0' == 0);   // true
console.log('0' === 0);  // false

console.log('15) Boolean vs string "false"');
console.log(false == 'false');   // false
console.log(false === 'false');  // false

console.log('16) Boolean vs string "0"');
console.log(false == '0');   // false
console.log(false === '0');  // false

console.log('17) Array with one element vs its element');
console.log([5] == 5);   // true
console.log([5] === 5);  // false

console.log('18) Array with two elements vs string');
console.log([1, 2] == '1,2');   // true
console.log([1, 2] === '1,2');  // false

console.log('19) String object vs primitive string');
console.log(new String('hello') == 'hello');   // true
console.log(new String('hello') === 'hello');  // false

console.log('20) Number object vs primitive number');
console.log(new Number(5) == 5);   // true
console.log(new Number(5) === 5);  // false

console.log('21) Date object vs string');
console.log(new Date(0) == 0);   // true
console.log(new Date(0) === 0);  // false

console.log('22) Date object vs string value');
console.log(new Date(0) == '1970-01-01T00:00:00.000Z');   // false
console.log(new Date(0) === '1970-01-01T00:00:00.000Z');  // false

console.log('23) Number vs string with whitespace');
console.log(5 == ' 5 ');   // true
console.log(5 === ' 5 ');  // false

console.log('24) String with leading zeros');
console.log('08' == 8);   // true
console.log('08' === 8);  // false

console.log('25) Boolean vs null');
console.log(false == null);   // false
console.log(false === null);  // false

console.log('26) Boolean vs undefined');
console.log(false == undefined);   // false
console.log(false === undefined);  // false

console.log('27) Empty array vs false');
console.log([] == false);   // true
console.log([] === false);  // false

console.log('28) Empty object vs false');
console.log({} == false);   // false
console.log({} === false);  // false

console.log('29) Null vs 0');
console.log(null == 0);   // false
console.log(null === 0);  // false

console.log('30) Undefined vs 0');
console.log(undefined == 0);   // false
console.log(undefined === 0);  // false

// Best practice: use === unless you specifically need loose comparison
