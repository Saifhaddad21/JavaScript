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

// // (Global-And-Local)

// var a = 1;
// let b = 2;

// function showtext() {
//     var a = 10;
//     let b = 20;

//     console.log(`function - From Local ${a}`);
//     console.log(`function - From Local ${b}`);
// }
// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showtext();

// //local can be read from global --but--
// //global can't be read from local --


// ///////////////////////////////////

// (Scope-Block)


// //var is not block code
// var x = 10 ;
// if (10 === 10) {
//     var x = 50 ;
// }
// console.log(x);
// ////
// var x = 10 ;
// if (10 === 10) {
//     let x = 50 ;
// }
// console.log(x);


///////////////////////

// (Scope-Lexical(Static))

// function parent() {  ///here we can take just from parent ..
//     let a = 10;

//     function child() {    ///here we can take from parent and child only ..
//         console.log(a);

//         function grand() {
//             let b = 200;
//             console.log(`From Grand ${a}`) ///here we can take from parent, child and from grand ..
//             console.log(`From Grand ${b}`)
//         }
//         grand();
//     }
//     child();
// }
// parent();

////////////////////////////////////////////

// (Higher-Order-Functions->>Maps)

/*
---> is a function that accepts functions as parameters and/or returns a function

Map
---method creates a new array
--- populated with the results of calling a provided function on every element
---in the calling array.

Syntax map(callBackFunction (Element, Index, Array) { }, thisArg)
Element => The current element being processed in the array.
Index => The index of the current element being processed in the array.
Array => The Current Array

Notes
Map Return A New Array

Examples
Anonymous Function
Named Function
*/

// let mynums = [1,2,3,4,5,6];

// let newarray = [];

// for (let i = 0; i < mynums.length; i++) {
//     newarray.push(mynums[i] + mynums[i]);
// }
// console.log(newarray);

// // same idea with map

// let addself = mynums.map( function(Element, Index, Array){
// console.log(`current Element => ${Element}`);
// console.log(`current Index => ${Index}`);
// console.log(`Array => ${Array}`);
// console.log(`This => ${This}`);
//     // return Element + Element ;
// }, 10);
// // console.log(addself);

/////////////////////////////////////////////
// // (Higher-Order-Functions->>Map practice)
// // let swappingcases = "eLzErO";
// // let invertednumbers = [1, -10, -20, 15, 100, -30];
// // let ignoreboolean = "ELZ123er40";
// // let sw = swappingcases.split("").map(function(ele) {
// //     //condition ? true : false
// //     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// // })
// // .join("");

// // console.log(sw);

// // let inv = invertednumbers.map(function(ele){
// //     return -ele ;
// // });
// // console.log(inv);
// ///////////////////////////////////////////
// // (Filter)
// let friends = ["Saif" , "zaid" , "jack" , "mhanna" , "naeem" , "Salameh" , "Sanad"]

// let numbers = [11, 20, 2, 5, 17, 10];
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // let addmap = numbers.map(function(el){
// // return el + el ;
// // });

// // console.log(addmap);

// // let addfilter = numbers.filter(function(el){
// //     return el + el ;
// //     });

// //     console.log(addfilter);
// // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// // let filteredfriends = friends.filter(function (el){
// // return el.startsWith("S") ? true : false;
// // });

// // console.log(filteredfriends);

// // let evennumbers = numbers.filter(function(el){
// //     return el % 2 === 0 ? true : false ;
// // });

// // console.log(evennumbers);

// // >> the different between map : filter is
// // map to make action :: filter to make filter ..

// // >>>>>>>>>>>>>>>>>>>>>>>

// ///////////////////////////////////////////////////////////////////////////

// (Filter-Practice)
// Filter Words More Than 4 Characters
// let sentence = "I Love Foood Code Too Playing Much";
// let smallwords = sentence
//     .split(" ")
//     .filter(function (ele) {
//         return ele.length <= 4;
//     })
//     .join(" ");

// console.log(smallwords);

// // Ignore Numbers
// let ignoreNumbers = "Elz123er4o";
// let ign = ignoreNumbers
//     .split("")
//     .filter(function (ele) {
//         return isNaN(parseInt(ele));
//     })
//     .join("");
// console.log(ign);


// let ign = ignoreNumbers
//     .split("")
//     .map(function (ele) {
//         return isNaN(parseInt(ele));
//     })
//     .join("");
// console.log(ign);

// Filter Strings + Multiply
// let mix = "A13BS2ZX";
// let mixedContent = mix
//     .split("")
//     .filter(function (ele) {
//         return !isNaN(parseInt(ele));
//     })
//     .map(function (ele) {
//         return ele * ele;
//     })
//     .join("");


// console.log(mixedContent);

//////////////////////////////////////////////////////////////////////
// (Higher Order Functions - Reduce)
// Reduce
//     method executes a reducer function on each element of the array,
//     resulting in a single output value.

// Syntax
//     reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
//     Accumulator => the accumulated value previously returned in the last invocation
//     Current Val => The current element being processed in the array
//     Index => The index of the current element being processed in the array..
//     Starts from index 0 if an initialValue is provided..
//     Otherwise, it starts from index 1.
// // Array => The Current Array
// let nums = [10, 20, 15, 30];
// let add = nums.reduce(function (acc, current, index, arr) {
//     console.log(`Acc => ${acc}`);
//     console.log(`Current Element => ${current}`);
//     console.log(`Current Element Index => ${index});
//     console.log('Array => ${arr}`);
//     console.log(acc + current);
//     console.log(`#############`);
//     return acc + current;
// }, 5);
// console.log(add);

// ///////////////////////////////////////////////////////////////////////////////////////
// (Higher Order Functions - Reduce Practice)


// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];
// let check = theBiggest.reduce(function (acc, current) {
//     console.log(`Acc => ${acc}`);
//     console.log(`Current Element => ${current}`);
//     console.log(acc.length > current.length ? acc : current);
//     console.log(`#############`);
//     return acc.length > current.length ? acc : current;
// });

// console.log(check);

////////////////////////////////////////////////////////////////////////////////////
// (Higher Order Functions - ForEach And Practice)

/*
Object
Intro and What Is Object
-Testing Window Object
Accessing Object
*/
// let user = {
// // Properties
// theName: "Osama",
// theAge: 38,
// // Methods
// sayHello: function () {
// return `Hello`;
// },
// };
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello);

//////////////////////////////////////////////////////////////////////////
// (Dot Notation vs Bracket Notation)
/*Object
Dig Deeper
Dot Notation vs Bracket Notation
Dynamic Property Name
*/

// let user = {
//     theName: "Saif",
//     "country of": "Jordan",
// };
// console.log(user.theName);
// console.log(user["theName"]);
// console.log(user["country of"]);
// let myVar = "country";

// let user = {
//     theName: "Saif",
//     country: "Jordan"
// };
// console.log(user.theName);
// console.log(user.country); //user.country
// console.log(user.myVar); //user.country
// console.log(user [myVar]); // user.country


////////////////////////////////////////////////////////////////////////////////////
// (Nested Object And Advanced Trainings)
/*
Object
- Nested Object And Trainings
// */
// let available = true;

// let user = {
//     name: "Saif",
//     age: 24,
//     skills: ["HTML", "CSS", "JS"],
//     available: false,
//     addresses: {
//         ksa: "Riyadh",
//         jordan:
//         {
//             one: "Amman",
//             two: "Al-salt",
//         },
//     },
//     checkAv: function () {
//         if (user.available === true) {
//             return `Free For Work`;
//         } else {
//             return `Not Free`;
//         }
//     },
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills.jo);
// console.log(user.skills[2]);  //access with index
// console.log(user.addresses);
// console.log(user.addresses.ksa);
// console.log(user.addresses.jordan.one);
// console.log(user["addresses"].jordan.two);
// console.log(user["addresses"]["jordan"]["two"]);


// console.log(user.checkAv());

////////////////////////////////////////////////////////////////////////////////////
// object
// (creat with new keyword new object )
// let user = new Object({
//     age : 20 ,
// });

// console.log(user);

// user.age = 24;
// user["country"] = ["Jordan"];

// user.sayhello = function() {
// return `Hello`
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayhello());


//////////////////////////////////////////////////////////////////////////////////////////
/*
Function this Keyword 
    this Introduction 
  - this Inside Object Method 
 ---When a function is called as a method of an object, 
    its this is set to the object the method is called on. 
    Global Object 
  - Test Variables With Window And This 
    Global Context 
    Function Context 

Search 
Strict Mode 
*/

///////////////////////////////////////////////////////////////////////////////////
// (Create Object With Assign Method)
// let obj1 = {
//     prop1: 1,
//     meth1: function () {
//         return this.prop1;
//     },
// };
// let obj2 = {
//     prop2: 2,
//     meth2: function () {
//         return this.prop2;
//     },
// };
// let targetObject = {
//     prop1: 1,
//     prop3: 3,
// };

// let finalobject = Object.assign(targetObject, obj1, obj2);

// console.log(finalobject);


////////////////////////////////////////////////////////////////////////////////////////////
// (What Is DOM And Select Elements)
/*DOM 
What Is DOM 
DOM Selectors 
Find Element By ID 
Find Element By Tag Name 
Find Element By Class Name 
Find Element By CSS Selectors 
Find Element By Collection
title
body
images
forms
links
    */



//////////////////////////////////////////////////////////////////////////////////

// DOM [Create Elements] 
// - -createElement 
//    createComment 
//    createTextNode 
//    createAttribute 
// //    appendChild 


// let myelement = document.createElement("div");
// let myattr = document.createAttribute("data-custom");

// myelement.className = "product";
// myelement.setAttributeNode(myattr);


// console.log(myelement);
////////////////////////////////////////////////////////////////////////////////////////

// (Get Set Elements Content And Attributes) 

// let myElement = document.querySelector(".js");


// console
// /////////////////////

// FileSystem.

/////////////////////////////////////////////////////////////////////////////////
// (Creat and append elements)
// let myelement = document.createElement("div");
// let myattr = document.createAttribute("data-custom");
// let mytext = document.createTextNode("product-one");
// let mycomment = document.createComment("this is div")

// myelement.className = "product";
// myelement.setAttributeNode(myattr);
// myelement.setAttribute("data-test", "testing");

// // Append Comment To Element 
// myelement.appendChild(mycomment);

// // Append Text To Element 
// myelement.appendChild(mytext);

// // Append Element To Body 
// document.body.appendChild(myelement);

// // console.log(myelement);

/////////////////////////////////////////////////////////////////////////////////////
// (Product With Title And Description Practice)
/*
dom [creat elements]
practice products with heading and paragraph
*/

// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// // Add Heading Text 
// myHeading.appendChild(myHeadingText);
// // Add Heading To Main Elements
// myMainElement.appendChild(myHeading);

// // Add Paragraph Text
// myParagraph.appendChild(myParagraphText);
// // Add paragraph to main element
// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";

// document.body.appendChild(myMainElement);

///////////////////////////////////////////////////////////////////////////
// (Deal With Childrens)
/*
DOM [deal with childrens]
-children 
-childnodes
-firstchild 
-lastchild 
-firstelementchild 
-lastelementchild 
*/

// let myelement = document.querySelector("div");

// console.log(myelement);
// console.log(myelement.children);
// console.log(myelement.children[0]);
// console.log(myelement.childNodes);
// console.log(myelement.childNodes[0]);

// console.log(myelement.firstChild);

// console.log(myelement.lastChild);

/////////////////////////////////////////////////////////
// // (DOM Events)
// /*
// DOM [Events] 
// --Use Events On HTML 
// --Use Events On JS 
// ----onclick 
// ----oncontextmenu 
// ----onmouseenter 
// ----onmouseleave 

// ----onload 
// ----onscroll 
// ----onresize 

// ----onfocus 
// ----onblur 
// ----onsubmit
// */

// let mybtn = document.getElementById("btn");

// // mybtn.onclick = function () {
// // console.log("clicked");
// // }; 


// // mybtn.oncontextmenu = function () {
// //   console.log("clicked");
// // };

// // mybtn.onmouseenter = function () {
// //   console.log("clicked");
// // };

// mybtn.onmouseleave = function () {
//   console.log("clicked");
// };

// window.onscroll = function () {
//   console.log("Scroll");
// };

// window.onresize = function () {
//   console.log("onresize");
// };

////////////////////////////////////////////////////////////////
// // (Validate Form And Prevent Default)  

// let userinput = document.querySelector("[name='username']");
// let ageinput = document.querySelector("[name='age']");


// document.forms[0].onsubmit = function (e) {
//   let uservalid = false;
//   let agevalid = false;

//   // console.log(userinput.value);
//   // console.log(userinput.value.length);

//   if (userinput.value !== ""  && userinput.value.length <= 10) {
//   // console.log("valid");
//   uservalid = true ;
//   }

//   if (ageinput.value !== "") {
//   agevalid = true ; 
//   }


//   if (uservalid === false || agevalid === false) {
//     e.preventDefault();
//   }
// };

// document.links[0].onmouseenter = function (event) {
//   console.log(event);
//   event.preventDefault();
// };


//////////////////////////////////////////////////////////////////////
// (CSS Styling And Stylesheets)
/*
DOM [CSS] 
--style 
--cssText 
--removeProperty (propertyName) [Inline, Stylesheet] 
- setProperty(propertyName, value, priority) 
*/


// let element = document.getElementById("my-div"); 

// element.style.color = "red"; 
// element.style.fontWeight = "bold"; 

// element.style.cssText = "font-weight: bold; color: green; opacity: 0.9"; 

// element.style.removeProperty("color"); 
// element.style.setProperty("font-size", "40px", "important"); 

// document.styleSheets[0].rules[0].style.removeProperty("line-height");
// document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");

///////////////////////////////////////////////////////////////////

// (CSS Styling And Stylesheets)

/* 
DOM [Deal With Elements] 
--before [Element || String] 
--after [Element || String] 
--append [Element || String] 
--prepend [Element || String] 
--remove 
*/

// let element = document.getElementById("my-div");
// let createdp = document.createElement("p");

// // element.before("Hello From JS Before");
// // element.after("Hello From JS After");

// // element.before("createdp");
// // element.after("createdp");

// element.append("  <<<Hello From JS After");
// element.prepend(" Hello From JS Before  >>>");

// element.append("createdp");
// element.prepend("createdp"); 

// ////remove :: 

// element.remove();
// createdp.remove();

//////////////////////////////////////////////////////////////////////////////
// (DOM Traversing)
/*
DOM [Traversing] 
---nextSibling 
---previousSibling 
---nextElementSibling 
---previousElementSibling 
---parentElement 
*/

// let span = document.querySelector(".two");

// // console.log(span.nextSibling);
// // console.log(span.previousSibling);
// // console.log(span.nextElementSibling);
// // console.log(span.previousElementSibling);
// console.log(span.parentElement);

// span.onclick = function () {
//   span.parentElement.remove();
// }

//////////////////////////     /////////////////////////////// //////////////////
// (  What Is BOM? )
/*BOM[Browser Object Model]
Introduction 
Window Object Is The Browser Window 
Window Contain The Document Object 
All Global Variables And Objects And Functions Are Members Of Window Object 
Test Document And Console 
What Can We Do With Window Object ?
  Open Window 
Close Window 
Move Window 
Resize Window 
Print Document 
Run Code After Period Of Time Once Or More 
Fully Control The URL 
Save Data Inside Browser To Use Later
  */


// window.document.title = "Hello JS";

//////////////////////////////////////////////////////////////////
// ( setTimeout and clearTimeout )
/*
BOM [Browser Object-Model] 
setTimeout(Function, Timeout, Additional Params) 
clearTimeout(Identifier) 
*/ 

// setTimeout(function () {
//   console.log("msg");
// }, 3000);

// /////hello part one 
// setTimeout(saymsg, 3000);

// function saymsg() {
//   console.log("Hello java after 3 sec .")
// }
// //     hello part two 


// setTimeout(saymsg, 3000, "Saif", 25);

// function saymsg(user , age) {
//   console.log(`My name is ${user} and my age is ${age}`);
// }


let counter = setTimeout(saymsg, 3000);

function saymsg () {
  console.log(`My name is saif`);
}


 let btn = document.querySelector("button");

 btn.onclick = function () {
clearTimeout(counter);
 }


