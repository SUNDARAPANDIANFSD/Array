//for each
let fruits = ["apple","orange","grapes"];
fruits.forEach(function(pazham){
return pazham ;
console.log(pazham);
});


let fruits1 = ["apple","orange","grapes"];
fruits.forEach(function(pazham){     //output apple orange grapes
console.log(pazham);
});


let fruits2 = ["apple","orange","grapes"];
fruits.forEach(function pazham(){          //output orange not found
    return pazham;
console.log(pazham);
});

let fruits3 = ["apple","orange","grapes"];
fruits.forEach((pazham) => {                //output using es6 version apple orange grapes
console.log(pazham);
});

let numbers = [1, 2, 3];
numbers.map(x => x*x);                //output [1, 2, 3]
console.log(numbers);

let numbers1 = [1, 2, 3];
let square = numbers.map(x => x^2);    //output [ 3, 0, 1 ]
console.log(square);

let numbers2 = [1, 2, 3];
let squares = numbers.map(x => x*x);    //output [ 1, 4, 9 ]
console.log(square);

let numbers3 = [1, 2, 3];
let square1 = numbers.map( function (x){      //output [1, 4, 9]
 return (x*x)});
console.log(square);