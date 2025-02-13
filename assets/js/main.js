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

let products = ["saif", "zaid", "jack" , "saif"];
let colors = ["red", "green", "blue"];
let showcount = 5 ;
 
document.write(`<h1>show ${showcount} products</h1>`);

for (let i = 0 ; i < showcount ; i++) {
    document.write(`<div>`);
    document.write(`<h3> [${i + 1}] ${products[i]}</h3>`);
    document.write(`</div>`);
}