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
var small = 1;
var medium = 2;
var large = 3;
var Size;
(function (Size) {
    Size[Size["SMALL"] = 0] = "SMALL";
    Size[Size["MEDIUM"] = 1] = "MEDIUM";
    Size[Size["LARGE"] = 2] = "LARGE";
})(Size || (Size = {}));
console.log(Size.SMALL);
console.log(Size.MEDIUM);
console.log(Size.LARGE);
