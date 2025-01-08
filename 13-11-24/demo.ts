let num: number = 10;
let str: string = "String";
let boo: boolean = true;
let any: any = "Any"; //means any type of value can assign any data typed variable. this is default data types in TS. it removes the TS type safe behavior.
let nev: never; //means no value can be assigned to never typed variables. mainly use in exception handling.
let unk: unknown;  //means undefined (not any).

let multiple: number | string | boolean = 1234; //we can mention multiple data types for a variable.
multiple = "abc";
multiple = false;
console.log(multiple);

let x; //if we don't mention any data type for the variable, as a default it gains "any" data type.

//in TS we use let and const.

//TS arrays
let ar1 = []; //type is never
let ar2 = [1,2,3]; //type is number
let ar3 = ["A","B","1"]; //type is string
let ar4 = [1,"2",true]; //type is any

let ar5: [];
let ar6: any[] = [];
let ar7: Array<string>;
ar7 = ['1','2'];