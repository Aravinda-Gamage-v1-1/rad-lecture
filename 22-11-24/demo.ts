// let x : number | string | boolean = 1234;
// x = 'abc';
// x = false;

// let ar1 = [1,2,3];
// let ar2 = ['1','2','3'];
// let ar3 = [1,2,true];

// let ar4 = []; //compiler error
// let ar5 : any[] = []; //compiler ok

// let ar6 : Array<string>;
// ar6 = ['1','2'];

// function printArray( ar : number[]){
//     ar.forEach(element => {
//         console.log(element);
//     });
// }

// //printArray(ar2); //string [] not supported
// printArray(ar1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let ar1 = ['a', 'b'];
// let ar2 = ['c','d','e'];
// let ar3 = [...ar1, ...ar2];

// console.log(ar3)

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let t1 : [number, number] = [1.09,2.89];
// // let t2 : [number, string] = [1, 1]; //compiler error

// let [x, y] = t1;
// console.log(x, ':::', y);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const small = 1;
// const medium = 2;
// const large = 3;

// enum Size {
//     SMALL = 'a',
//     MEDIUM = 'b',
//     LARGE = 'c'
// }

// console.log(Size.SMALL);
// console.log(Size.MEDIUM);
// console.log(Size.LARGE);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function add(x : number, y : number) : number{
//     if(x > 10){
//         return x +y
//     }else{
//         return x;
//     }
 
// }
// console.log(add(1,20))

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// type addFn = (x : number, y : number) => number;
// function add(x : number, y : number) : number{
//     return x + y;
// }

// function calculate ( n1 : number, n2 : number, calcFn : addFn) : number {
//     const result = calcFn(n1, n2);
//     return result;
// }

// console.log(calculate(10, 20, add));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// type operateFn = (x : number , y : number) => number;

// const add = (n1 : number, n2 : number) : number => {
//     return n1 + n2;
// }

// const subs = (n1 : number, n2 : number) : number => {
//     return n1 - n2;
// }

// const calculate = (n1 : number, n2 : number, calcFn : operateFn) : number => {
//     const result = calcFn(n1, n2);
//     return result;
// }

// console.log(calculate(10,30,add));
// console.log(calculate(20,10,subs));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface Person {
    pName : string;
    pTele : number;
}

const person1 : Person = {
    pName : 'Sasindu',
    pTele : 1234
}
class Customer {
    cName : string;
    cTele : number;
}

const customer1 : Customer = {
    cName : 'Ranimdu',
    cTele : 3456
}

const obj  = {
    a : 10,
    b : 20,
    c : {
        d : 10
    }
}

const {a, b, c} = obj;

console.log(person1.pName)