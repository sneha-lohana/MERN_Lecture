// String conversion
let value = true;
console.log(typeof value);
console.log(value);

value = String(value);  // convert using String function
console.log(typeof value);
console.log(value);

value = '' + true;  // convert using concatenation
console.log(typeof value);

console.log(1, typeof 1);
console.log(1, typeof String(1));

console.log(null, typeof null);
console.log(null, typeof String(null));

console.log(undefined, typeof undefined);
console.log(undefined, typeof String(undefined));


// Numeric Conversion
console.log("----------Numeric Conversion---------");
console.log("6" * "2"); // in strings, it will automatically get converted to number, except for + operator
console.log("6" + "2");
console.log("abc" / "2");   // NaN, any mathematical operation with string not having number will result into NaN
console.log("30", typeof Number("30"));
console.log("a", typeof Number("a"));
console.log(+10, typeof +"10");

console.log(true, Number(true));            // 1
console.log(false, Number(false));          // 0

console.log(null, Number(null));            // 0
console.log(undefined, Number(undefined));  // NaN


// Boolean Conversion
console.log("----------Boolean Conversion---------");
console.log(1, Boolean(1)); // true
console.log(0, Boolean(0)); // false
console.log("Hello", Boolean("Hello")); // true
console.log("", Boolean("")); // false
console.log(null, Boolean(null)); // false
console.log(undefined, Boolean(undefined)); // false
console.log(NaN, Boolean(NaN)); // false
console.log(" ", Boolean(" ")); // true, because space is non-empty value
console.log("0", Boolean("0")); // true, because string "0" is non-empty value

// Rule: Any intuitively empty value, like 0, empty string (''), null, undefined, NaN will become false