let arr = [1,2,3,4];
let newArray = [];

function addOne( value, index) {
  newArray.push( value + 1 );
}

// Old Fashioned way
for( let i = 0; i < arr.length; i++ ) {
  addOne( arr[i], i );
}

// Newer way
// .forEach iterates an array. Does not return. Does not modify the original.
arr.forEach( addOne );

// Newer way but inline...
arr.forEach( function(value,index) {
  newArray.push( value + 1  );
});

// Newer way, but with arrows ...
arr.forEach( (value,index) => newArray.push( value + 1) );

// Arrow functions are interesting
let f1 = (value, index) => { newArray.push( value + 1 ); };

// If you only have 1 param, you don't need parens
let f2 = value => { newArray.push(value + 1); };

// If you only have 1 line of code, you don't need braces AND ... that will also be the return value
let f3 = value => newArray.push(value+1);

// Implicitly return
let f4 = name = name.toUppperCase();

// f4("john");  Return would be "JOHN"

