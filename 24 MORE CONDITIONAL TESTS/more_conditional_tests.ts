import { log } from "console";

// Equity and inequality test. 1
console.log("Equality test with strings :", "apple" == "apple");

// Equality and inequality test 2.
console.log("Inequality test with strings :", ("apple" as string) != "mango");

// Tests using the lower case function
console.log("Lower case function test :", "HELLO".toLowerCase() === "hello");

//Numerical tests involving equality
console.log("Equality test with numbers :", 26 === 26);

//Numerical tests involving inequality
console.log("Inequality test with numbers :", (26 as number) != 35);

//Greater than test 
console.log("Greater than test", 10 > 5 ); 

//less than test
console.log("less than test", 5 < 10 ); 

// greater than or equal to
console.log("greater than and equal to test:", 10 >= 10);

// less than or equal to
console.log("less than or equal to test:", 5 <= 10);

// tests using "and" operation
console.log("And operator tests:", 5===5 && 10 > 5 );

// tests using "or" operation
console.log("And operator tests:", 5===5 || false);

// tests wheater an item is in a array
const fruits :string[] = ['banana' , 'mango' , 'apple'];

console.log('test "apple" in the array : ', fruits.includes("apple"));

// tests wheater an item is not in a array
console.log('testing "apple" in not in array : ', fruits.includes("apple"));

