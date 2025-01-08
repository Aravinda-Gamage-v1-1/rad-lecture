var num = 10;
var str = "String";
var boo = true;
var any = "Any"; //means any type of value can assign any data typed variable. this is default data types in TS. it removes the TS type safe behavior.
var nev; //means no value can be assigned to never typed variables. mainly use in exception handling.
var unk; //means undefined (not any).
var multiple = 1234; //we can mention multiple data types for a variable.
multiple = "abc";
multiple = false;
console.log(multiple);
var x; //if we don't mention any data type for the variable, as a default it gains "any" data type.
//in TS we use let and const.
//TS arrays
var ar1 = []; //type is never
var ar2 = [1, 2, 3]; //type is number
var ar3 = ["A", "B", "1"]; //type is string
var ar4 = [1, "2", true]; //type is any
var ar5;
var ar6 = [];
var ar7;
ar7 = ['1', '2'];
