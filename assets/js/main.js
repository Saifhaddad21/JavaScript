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
//////////////////////////////////////////////////////////////////////////
// function sayhello (username = "unknown", age = "unknown"){  //third way 
//     // if ( age === undefined) {
//     //     age = "unknown" ;
//     // }  >>first way ..


//     // age = age || "unknown" ;   >> second way ..

//     return `Hello ${username} your age is ${age}`;
// }
// console.log(sayhello("saif", 24));
// console.log(sayhello("zaid"));
// console.log(sayhello("nada", 23));

////////////////////////////////////////////////////////

// (function-rest-parameters)
// function calc(...numbers) {
//     let result = o;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];
//     }
//     return `final result is ${result}`;
// }
// console.log(calc(10, 20, 30, 40, 50));

/////////////////////////////////////

// (function-ultimate-practice)
// function showinfo(username = "unknown", age = "unknown", rate = 0, show = "yes", ...skills) {
//     document.write(`<div>`);
//     document.write(`<h2>Welcome, ${username}</h2>`);
//     document.write(`<p>Age: ${age}</p>`);
//     document.write(`<p>Hour Rate: $${rate}</p>`);
//     if (show === "yes") {
//         if (skills.length > 0){
//             document.write(`<p>Skills : ${skills.join(" | ")} <p/>`);
//         }else {
//             document.write(`<p>Skills : No skills </p>`);
//         }
//     } else {
//         document.write(`<p> Skills Is Hidden </p>`);
//     }
//     document.write(`</div>`);
// }

// showinfo("Saif", 24 , 20 , "yes", "HTML" , "CSS");

/////////////////////////////////////////////////

// (Anonymous-function-and-practice)

// let calculator = function (num1, num2) {
//  return num1 + num2 ;
// };
// console.log(calculator(10,20));

// document.getElementById("Show").onclick = function () {
//     console.log ("Show");
// };

// setTimeout(function () {
//     console.log("Good");
// }, 2000);
 /////////////////////////////////////////

//  (Return-Nested-Function)

// //Example One :
// function saymessage(fname, lname) {
//     let message = `Hello`;
//     //Nested Function
//     function concatmsg () {
//         message = `${message} ${fname} ${lname}`;
//     }
//     concatmsg(); 
//     return message;
// }
// console.log(saymessage("saif", "haddad"));

// //Example two : 
// function sayMessage(fName, lName) {
//     let message = `Hello` ;
//     function concatMsg () {
//         return  `${message} ${fName} ${lName}`;
//     }
    
//     return concatMsg();
// }
// console.log(sayMessage("Saif", "Haddad"));

//Example three : 
// function sayMessage(fName, lName) {
//     let message = `Hello` ;
//     function concatMsg () {

//         function getFullName(){
//             return `${fName, lName}`;
//         }
//         return  `${message} ${getFullName()}`;
//     }
    
//     return concatMsg();
// }
// console.log(sayMessage("Saif", "Haddad"));


/////////////////////////////////////////////////////

// (Arrow-Function-Syntax)

// let print = function (num1, num2) {
//     return num1 + num2 ;
// };



// let print = (num1, num2) => num1 + num2 ;

// console.log(print(100, 50));

///////////////////////////////////
