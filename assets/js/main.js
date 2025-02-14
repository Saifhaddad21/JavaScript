// =========================================
// ==variable and concatenation challenge ==
// =========================================

// [1] Create 3 Variables [Title, Description, Date] 
// --All In One Statement 
// Variable Name Must Be Two Words 
// Title Content Is "Elzero" 
// Description Content Is "Elzero Web School" 
// Date Content Is "25/10" 
// [2] Create Variable Contains Div And This Div Contains 
// H3 For Title 
// P For Paragraph 
// Span For Time 
// 5 [3] Add This Card To Page 4 Times 
// [4] Use Template Literals For Concatenate 
// Extra 
// Repeat 

// var title = "Elzero";
// var description = "Elzero Web School";
// var date = "25\\10";

// document.write(
//     <div class="title">
//         <h3>${"description"}</h3>
//         <p>${"date"}</p>
//     </div>
// );


// console.log(10 + 10);
// console.log(10 + "saif");
// console.log(20 - 10);
// console.log(10 - "saif");
// console.log(typeof NaN);

// let products = ["saif", "zaid", "jack" , "saif"];
// let colors = ["red", "green", "blue"];
// let showcount = 5 ;

// document.write(`<h1>show ${showcount} products</h1>`);

// for (let i = 0 ; i < showcount ; i++) {
//     document.write(`<div>`);
//     document.write(`<h3> [${i + 1}] ${products[i]}</h3>`);
//     for (let j = 0; j < colors.length; j++) {
//         documentw.write(`<p> ${colors[j]}</p>`);
//     }
//     document.write(`<p>${colors.join( "|" )}</p>`); 
//     document.write(`<div>`);
// }   

// function sayhello() {
//     console.log(`hello saif haddad`);
// }

// sayhello ();

// function bay (UserName ,age) { 
//     if (age < 20) {
//         console.log (`this app is not suitable for you`);
//     }else {
//     console.log(`hi ${UserName} your age is ${age}`);
// }
// }
// bay ("saif", 24);
// bay ("jack", 21);
// bay ("zaid", 25);
// bay ("nrmin", 16);

// function generateyeares(start, end , exclude) {
//     for (let i = start ; i <= end ; i++) {

//     if (i === exclude) { 
//         continue;
//     }
//     console.log(i);
// }
// }
// generateyeares(2000, 2026, 2025);

// {
//     function sayhello(UserName) {
//         return `Hello ${UserName}`;

//     }

//     let result = sayhello("saif");

//     console.log(result);
// }

// {
//     function calc(num1, num2) {
//         return num1 + num2;

//     }

//     let result = calc(10, 20);

//     console.log(result);
// }
// {
//     function calc(num1, num2) {
//         return num1 + num2;

//     }

//     let result = calc(10, 20);

//     console.log(result + 100);
// }

// {
// function generate (start, end){
// for (let i = start; i <= end; i++) {
// console.log(i);
// if (i === 2022){
// return `interruptting`
// }
// }
// }
// generate(2020, 2025);

// }

function sayhello (username = "unknown", age = "unknown"){  //third way 
    // if ( age === undefined) {
    //     age = "unknown" ;
    // }  >>first way ..


    // age = age || "unknown" ;   >> second way ..

    return `Hello ${username} your age is ${age}`;
}
console.log(sayhello("saif", 24));
console.log(sayhello("zaid"));
console.log(sayhello("nada", 23));