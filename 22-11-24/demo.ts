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

const small = 1;
const medium = 2;
const large = 3;

enum Size {
    SMALL = 'a',
    MEDIUM = 'b',
    LARGE = 'c'
}

console.log(Size.SMALL);
console.log(Size.MEDIUM);
console.log(Size.LARGE);
