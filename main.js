// Var :
// 1-Redeclar (Yes)
// 2-Access Before Declare (undefined)
// 3-Variable Scope Drama [Added To Window] ()
// 4-Block Or Function Scope ()

// Let : 
// 1-Redeclar (No => Error)
// 2-Access Before Declare (error)
// 3-Variable Scope 
// 4-Block Or Function Scope 

// Const : 
// 1-Redeclar (No => Error)
// 2-Access Before Declare (error)
// 3-Variable Scope 
// 4-Block Or Function Scope 

var a = 1 ;
var a = 1 ;

let a = 1 ; 
let a = 1 ;
console.log(a);