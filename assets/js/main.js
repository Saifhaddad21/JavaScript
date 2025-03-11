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


// let counter = setTimeout(saymsg, 3000);

// function saymsg () {
//   console.log(`My name is saif`);
// }


//  let btn = document.querySelector("button");

//  btn.onclick = function () {
// clearTimeout(counter);
//  }


/////////////////////////////////////////////////////////////////////////////////////////

// Local Storage :

// setItem :
// window.localStorage.setItem("color", "red");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

// //getItem :
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// // remove one :
// // window.localStorage.removeItem("color");

// //clear all :
// // window.localStorage.clear("color");

// //get key :
// console.log(window.localStorage.key(0));
// local storage color application practice :


// //set color in page :
// document.body.style.background = window.localStorage.color ;



// console.log(window.localStorage);
// console.log(typeof window.localStorage);

/////////////////////////////////////////////////////////////////////////////
// local storage color application practice :

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// // window.localStorage.clear();

// if (window.localStorage.getItem("color") ) {
//    // if there is color in local storage :
//    // [1] add color to div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2]  // remove activae class from all lis :
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // [3] add active class to current color :
//     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }else { // if there is no color in local storage :
//   console.log("No");
// };

// lis.forEach((li) => {
//   li.addEventListener("click", (e) =>{
//     // console.log(e.currentTarget.dataset.color);
//     // remove activae class from all lis :
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // add active class to current element :
//     e.currentTarget.classList.add("active");
//     // add current color to local storge :
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // change div background color :
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });

////////////////////////////////////////////////////////////////////
// (Destructuring Arrays Part 1) :

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

//  let myfriend = ["saif", "zaid", "jack", "mhanna"];

// [a, b, c, d, e = "haddad"] = myfriend;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// let [x, y, ,z] = myfriend; // this will print the first one (saif)then the second (zaid) then the four name (mhanna) because we have a space (, ,)

// console.log(x);
// console.log(y);
// console.log(z);

///////////////////////////////////////////////////////////////////////
// (Destructuring Arrays Part 2) :

// let myfriends = ["saif", "zaid", ["jack", ["naeem", "mosaa"], "mhanna"]];

// // console.log(myfriends[2][1][1]);

// // let ["saif", "zaid", ["jack", ["naeem", "mosaa"], "mhanna"]];
// // let [ , "zaid", ["jack", ["naeem", "mosaa"], "mhanna"]];
// // let [ , , ["jack", ["naeem", "mosaa"], "mhanna"]];
// // let [ , , [ , ["naeem", "mosaa"], "mhanna"]];
// // let [ , , [ , ["naeem", "mosaa"], ]];
// // here to ynderstand what we do >>

// let [, , [ ,  [a,b]]] = myfriends;  // we want print naeem and osama   <<

// console.log(a);
// console.log(b);

////////////////////////////////////////////////////////////////////
// ( Destructuring Arrays Part 3 - Swap Variables ) :

//   let book = "video";
//   let video = "book";

//   /////the first way but the hard ::
// // save book value in stash
//   // let stash = book ;

//   // // change book value
//   // book = video ;

//   // // change video value
//   // video = stash;

// ////this the second way the easy (destructuring way)
//   [book, video] = [video, book];

//   console.log(book);
//   console.log(video);

///////////////////////////////////////////////////////////////////
// (destructuring objects part 1)  :
//   const user = {
//     theName : "saif",
//     theAge : 25,
//     theTitle : "Developer",
//     theCountry : "Jordan",
//   };

//   console.log(user.theName);
//   console.log(user.theAge);
//   console.log(user.theTitle);
//   console.log(user.theCountry);

//   let theName = user.theName;
//   let theAge = user.theAge;
//   let theTitle = user.theTitle;
//   let theCountry = user.theCountry;

//   console.log(theName);
//   console.log(theAge);
//   console.log(theTitle);
//   console.log(theCountry);

//  ({theName, theAge, theTitle, theCountry} = user);

//  console.log(theName);
//   console.log(theAge);
//   console.log(theTitle);
//   console.log(theCountry);

/////////////////////////////////////////////////////////////////////////
// ( Destructuring Objects Part 2) :

// const user = {
//   theName: "saif",
//   theAge: 25,
//   theTitle: "Developer",
//   theCountry: "Jordan",
//   theColor: "black",
//   skills: {                            // nested objects::
//     html:80,
//     css:70,
//   }
// };

// const {theName: a , theAge: b , theCountry , theColor: co = red , skills: {html: h , css: c} } = user;

// console.log(a);
// console.log(b);
// console.log(theCountry);
// console.log(co);
// console.log(`my html skills is ${h}`);
// console.log(`my css skills is ${c}`);


// const {html : skillone , css : skilltwo} = user.skills;

// console.log(`my html skills is ${skillone}`);
// console.log(`my css skills is ${skilltwo}`);

/////////////////////////////////////////////////////////////////////////////////////
// // (Destructuring Function Parameters) :

// const user = {
//   theName : "saif" ,
//   theAge : 25 ,
//   skills : {
//     html: 80,
//     css: 70,
//   },
// };

// showdetails(user);

// // function showdetails(obj) {
// //   console.log(`your name is ${obj.theName}`);
// //   console.log(`your age is ${obj.theAge}`);
// //   console.log(`your css progress is ${obj.skills.css}`);
// // }

// // function showdetails({theName, theAge, skills:{css}} = user) {
// function showdetails({theName : a, theAge : b, skills:{css : c}} = user) {

//   console.log(`your name is ${a}`);
//   console.log(`your age is ${b}`);
//   console.log(`your css progress is ${c}`);
// }

////////////////////////////////////////////////////////////////////////////////
// (Destructuring Mixed Content) :

// const user = {
//   theName : "saif",
//   theAge : 25,
//   skills : ["html", "css", "js"],
//   addresses : {
//     jordan : "amman",
//     egypt : "cairo",
//   },
// };

// const {
//   theName : a ,
//   theAge : b,
//   skills : [one , two , three],
//   addresses : {jordan  : j}
// } = user;

// console.log(`your name is : ${a}`);
// console.log(`your age is : ${b}`);
// console.log(`your skills progress is : ${one}, ${two}, ${three}`);
// console.log(`your skills progress is : ${one}, ${three}`);
// console.log(`your last skill is : ${three}`);
// console.log(`your css skill progress is : ${two}`);
// console.log(`your js skill progress is : ${three}`);
// console.log(`your live in : ${j}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////
// (Set Data Types And Methods) :

// let myData = [1, 1, 1 ,2 ,3] ;

// //[1] : add
// // let myUniqueData = new Set([1, 1, 1,2 ,3]);
// // let myUniqueData = new Set(myData);
// // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();
// myUniqueData.add(1).add(1).add(1).add(2).add(3);

// console.log(myData);
// console.log(myUniqueData);

// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]); // you cant inside the (set) (undifined)

// //[2] : delete
// // myUniqueData.delete(2);
// // console.log(myUniqueData.delete(2));
// console.log(myUniqueData.delete(20));

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// ///[3] : clear
// myUniqueData.clear();

// console.log(myUniqueData);
// console.log(myUniqueData.size);

//[4] : has

///// ***false
// let myData = [1, 1, 1, 2, 3, "A"];

// let myUniqueData = new Set();
// myUniqueData.add(1).add(1).add(1).add(2).add(3).add("A");

// myUniqueData.clear();

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// console.log(myUniqueData.has("A"));

////// **true
// let myData = [1, 1, 1, 2, 3, "A"];

// let myUniqueData = new Set();
// myUniqueData.add(1).add(1).add(1).add(2).add(3).add("A");


// console.log(`is set has => ${myUniqueData.has("A")}`);

// ////// **tfalse
// let myData = [1, 1, 1, 2, 3, "A"];

// let myUniqueData = new Set();
// myUniqueData.add(1).add(1).add(1).add(2).add(3).add("A");


// console.log(`is set has => ${myUniqueData.has("a".toUpperCase())}`); //here we have a different letter (a)

////// **to make true
// let myData = [1, 1, 1, 2, 3, "A"];

// let myUniqueData = new Set();
// myUniqueData.add(1).add(1).add(1).add(2).add(3).add("A");


// console.log(`is set has => ${myUniqueData.has("a".toUpperCase())}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// ( Set vs WeakSet And Garbage Collector) : 124

// //   Set      =>  Can Store Any Data Values .
// //   WeakSet  =>  Collection Of Objects Only .

// // type of data : [set]
// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

// console.log(mySet);

// // size :  [set]
// console.log(`the size of elements inside set is : ${mySet.size}`);

// //values + keys [allias for values ] :  [set]
// let iterator = mySet.keys();

// console.log(iterator);
// console.log(iterator.next());  //here false

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator);
// console.log(iterator.next()); //here true

// // forEach :  [set]

// mySet.forEach((el) => console.log(el));  //  كل ايليمنت في السيت هون اطبعه في (هيك معنا=< )())

// console.log("#".repeat(20));

// // type of data : [weakset]
// // let myws = new WeakSet([1, 1, 1, 2, 3, "A", "A"]);// (obj) هون راح يعطينا خطأ لانه بستنا منا نعطيه

// // console.log(myws);

// let myws = new WeakSet([{A: 1, b: 2}]);

// console.log(myws);

// // size :  [Weakset] we dont have size in weakset

// //values + keys [allias for values ] :  we dont have values + keys [allias for values ] in weakset


///////////////////////////////////////////////////////////////////////////////////////////////////////
// (Map Data Type Vs Object) :

// let myObject = {};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// // new object :
// // let myNewObject = {
// //   10: "saif",
// //   "10": "zaid"
// // }

// // console.log(myNewObject[10]);


// let myNewObject = {
//   10: "number",
//   "10": "string"
// };

// console.log(myNewObject[10]);

// // new map :
// let myNewMap = new Map ();

// myNewMap.set(10, "number");
// myNewMap.set("10", "string");
// myNewMap.set(true, "boolean");
// myNewMap.set({a:1, b:2}, "obj");
// myNewMap.set(function doSomething() {}, "function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("######");

// console.log(myNewObject);
// console.log(myNewMap);

///////////////////////////////////////////////////////////////////////////////////////////////////////
// // (Map Methods) :

// //map data type :
// // --methods
// // -----get
// // -----set
// // -----delete
// // -----clear
// // -----has

// // --properities
// // --------size

// let myMap = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "boolean"]
// ]);

//   // myMap.set(10, "Number");
//   // myMap.set("Name", "String");

// console.log(myMap);

// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));
// /////////////////////////
// console.log("######");

// console.log(myMap.has(false));
// console.log(myMap.has("false"));

// console.log("######");
// /////////////////////////
// console.log(myMap.size);

// console.log(myMap.delete("Name")); //if print true that mean successed deleted ..here print (true)
// console.log(myMap.delete("Names")); //if print false that mean it is not deleted ..here print (false)

// console.log(myMap.size);

// myMap.clear();
// console.log(myMap.size);

//////////////////////////////////////////////////////////////////////////////////////////////
// // (Map Vs WeakMap) : 127

// // Map     => Key Can Be Anything
// // WeakMap => Key Can Be Object Only

// let user = {theName: "Saif"};

// let myMap = new Map();

// myMap.set(user, "object value");

// user = null ; //override the reference

// console.log(myMap);
// ////////////////
// console.log("#".repeat(20));
// ///////////////

// let wMapUser = {theName: "Saif"};

// let myWeakMap = new WeakMap();

// myWeakMap.set(wMapUser, "object value");

// wMapUser = null ; //override the reference

// console.log(myWeakMap);

///////////////////////////////////////////////////////////////////////////////////////////////////
// (Array.from Method) :

/*
--Array Methods
----Array.from(Iterable, MapFunc, This)
---------Variable
---------String Numbers
---------Set
---------Using The Map Function
---------Arrow Function
---------Shorten The Method + Use argument's
*/

// console.log(Array.from("saif"));
// console.log(Array.from("12345"));

// console.log(Array.from("12345", function (n) {  //n = number
//   return +n + +n;
// })
// );

// console.log(Array.from("12345", (n) => +n + +n));// second way (arrow function)  >>the same result

// ////example :

// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// console.log(mySet);  // the first way

// console.log(Array.from(mySet)); // the second way

// console.log([...new Set(myArray)]);  // the third way and its the important one and the easier (this is in the future)

// function testArg() {
//   return arguments ;
// };

// console.log(testArg("saif", "mhanna" ,"haddad"));

// ///
// function Af() {
//   return Array.from(arguments) ;
// };

// console.log(Af("saif", "mhanna" ,"haddad" , 1, 2 ,3));  // we use it to result the array ..

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// (Array.copyWithin Method)  : 129

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3);   //10, 20, 30, 40, 10, 20, 30

// console.log(myArray);
//////////////////////////////////////////////
// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// // myArray.copyWithin(4 , 6); // 10, 20, 30, 40, "B", "A", "B"
// // myArray.copyWithin(4 , -1); // 10, 20, 30, 40, "B", "A", "B"
// //
// // myArray.copyWithin(4 , -2); // 10, 20, 30, 40, 'A', 'B', 'B'
// //
// // myArray.copyWithin(1, -2); //  10, 'A', 'B', 40, 50, 'A', 'B' // here that mean include from the last two to the end all include ('A', 'B')

// myArray.copyWithin(1, -2, -1); // 10, "A", 30, 40, 50, "A", "B" // here we add -1 in the end to remove B (not include )

// console.log(myArray);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// (Array.some Method) :
/*
--Array Methods
----Array.some (CallbackFunc (Element, Index, Array), This Argument)
-----CallbackFunc => Function To Run On Every Element On The Given Array
-------Element => The Current Element To Process
-------Index => Index Of Current Element
-------Array => The Current Array Working With
-----This Argument => Value To Use As This When Executing CallbackFunc
--Using
-----Check if Element Exists In Array
-----Check If Number In Range
*/

// // let nums = [1, 2, 3, 4, 5, 6, 7];

// // let myNumber = 5;

// // let myNumber1 = 10;
// // let check = nums.some(function (e) {    // the first way
// //   console.log("test");
// //   return e > 4;
// // });


// // let check = nums.some(function (e) {
// //   console.log(this);     //  the world of (this) will print window
// //   return e > 5;
// // });

// // let check = nums.some(function (e) {
// //   console.log(this);
// //   return e > 5;
// // }, myNumber);

// // let check = nums.some(function (e) {    // here will print true becase the mynumber = 5 and in nums we have a number to 7 ..
// //   console.log(this);
// //   return e > this;
// // }, myNumber);

// // let check1 = nums.some(function (e) {    // here will print false because the myNumber1 = 10 and in nums we dont have a number more than 10 ..
// //   console.log(this);
// //   return e > this;
// // }, myNumber1);

// // let check = nums.some((e) => e > 5); // the second way (arrow way)

// // console.log(check);
// // console.log(check1);
// ////////////////////
// // let nums = [1, 2, 3, 4, 6, 7, 8];


// // function checkValues(arr, val) {
// //   return arr.some(function (e) {
// //     return e === val ;
// //   });
// // }

// // console.log(checkValues(nums, 20)); // here will print false because we dont have a 20 in the (( nums = [1, 2, 3, 4, 6, 7, 8] ))
// // console.log(checkValues(nums, 5));  // here will print false because we dont have a 20 in the (( nums = [1, 2, 3, 4, 6, 7, 8] ))
// // console.log(checkValues(nums, 8));  // here will print true because we have a 8 in the (( nums = [1, 2, 3, 4, 6, 7, 8] ))

// ////////////////

// let nums = [1, 2, 3, 4, 6, 7, 8];
// let nums1 = [1, 2, 3, 4, 6, 7, 8, 10];

// let range = {
//   min: 10,
//   max: 20
// };

// let chechNumberInRange = nums.some(function (e) {
//   return e >= this.min && e <= this.max;
// }, range);

// console.log(chechNumberInRange);  // here the answer will print false because we dont have a number in nums between or equal of 10 ...20
// ///////////////// //////////////// //////////////
// let chechNumberInRange1 = nums1.some(function (e) {
//   // console.log(this.min);
//   // console.log(this.max);
//   return e >= this.min && e <= this.max;
// }, range);

// console.log(chechNumberInRange1); // here the answer will print true because we have a number in nums1 between or equal of 10 ...20

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ( Array.every Method) : 131

// const locations = {
//   20: "place 1",
//   30: "place 2",
//   40: "place 3",
//   50: "place 4"
// };

// let mainlocation = 15 ;

// let locationsarray = Object.keys(locations);

// console.log(locationsarray);

// let locationarraynumber = locationsarray.map((n) => +n);

// console.log(locationarraynumber);

// let check = locationarraynumber.every(function (e) {
//   return e > this ;
// }, mainlocation);

// console.log(check);

////////////////////////////////////////////////////////////////////////////////////////////////////
// (Spread Syntax And Use Cases) :

// //spread with string => expand string

// console.log("Saif");
// console.log(..."Saif");
// console.log([..."Saif"]);

// // concatenate arrays

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);

// // copy array

// let copiedarray = [...myArray1];
// console.log(copiedarray);

// // push inside array

// let allfriends = ["saif", "zaid", "jack"];
// let friendsthisyear = ["fahed", "shahem"];

// allfriends.push("fahed", "shahem");
// // allfriends.push(...friendsthisyear); // we use three dot (...) to focus inside array >>>> friendsthisyear

// console.log(allfriends);

// // use with math object

// let myNums = [10, 100 ,1000 , -100 , -10];
// console.log(Math.max(10, 100 ,1000 , -100 , -10));  // first way without focus inside in myNums
// console.log(Math.max(...myNums)); // second way inside the myNums by used three dot ...

// //  spread with objects => merge objects

// let objone = {
//   a: 1,
//   b: 2,
// };

// let objtwo = {
//   c: 3,
//   d: 4,
// };

// console.log({...objone, ...objtwo});


//////////////////////////////////////////////////////////////////////////////////////////////////
// (Intro And What Is Regular Expression) : 134
/*
---Regular expressions
-----Email
-----IP
-----Phone
-----URL
*/

////////////////////////////////////////////////////////////////////////////////////////////////////
//(Regular Expressions - Modifiers) : 135
/*
---Regular Expression

---Syntax
---/pattern/modifier(s);
---new RegExp("pattern", "modifier(s)")

---Modifiers => Flags
(معلومه:نستطيع استخدام اكثر من حرف مع بعض و ذلك يوضح مع الامثلة )
---i => case-insensitive //   ببطل في اولوية للاحرف الكبير او صغير (بتكون الاولوية للاول)  (insensitive غير حساس)
---g => global //  تستخدم حتى اجيب كل الاشياء المتشابهة
---m => Multilines // تبحث بين الاسطر و تبلش من كلمة معينه وتنتهي الى كلمه معينه

-Search Methods
---match(Pattern)

-Match
-- Matches A String Against a Regular Expression Pattern
------Returns An Array With The Matches
------Returns null If No Match Is Found.*/

// let myString = "Hello, My Name Is Saif haddad saif";

// let regex = /saif/;

// console.log(myString.match(regex));
////////////
// let myString = "Hello, My Name Is Saif haddad saif";

// let regex = /saif/i;

// console.log(myString.match(regex));
////////////
// let myString = "Hello, My Name Is Saif haddad saif";

// let regex = /saif/g;

// console.log(myString.match(regex));
//////////////
// let myString = "Hello, My Name Is Saif haddad saif"; ///هون استخدمنا حرفين مع بعض i g//

// let regex = /saif/ig;

// console.log(myString.match(regex));
///////////////
// let myString = "Hello, My Name Is Saif haddad saif";

// let regex = /saifs/ig;

// console.log(myString.match(regex));  // Returns null If No Match Is Found.

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// (Regular Expressions - Ranges Part 1) : 136

/*
--Regular Expression

--Ranges

---Part-1
(X|Y) => X Or Y
[0-9] => 0 Το 9
[^0-9] => Any Character Not 0 To 9
Practice

---Part-2
[a-z]
[^a-z]
[A-Z]
[^A-Z]
[abc]
[^abc]
*/

// let tld = "Com Net Org Info Code Io";
// let tldre = /(info|org|io)/i;   //re >>> regular expressions
// console.log(tld.match(tldre));

// let tld = "Com Net Org Info Code Io";
// let tldre = /(info|org|io)/ig;
// console.log(tld.match(tldre));

// let nums = "12345678910";
// let numsre = /[0-9]/ig;
// console.log(nums.match(numsre));

// let nums1 = "12345678910";
// let numsre1 = /[0-3]/g;
// console.log(nums1.match(numsre1));

// let notNums = "12345678910"; //  Not ^
// let notNumsRe = /[^0-3]/ig;  // Here that mean i need all numbers without from [ 0 - 3 ]
// console.log(notNums.match(notNumsRe));

// let specialNums = "1!2@3#4$5%678910";
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));

// let practice = "sa1 sa2 sa3 sa4 sa8 sa9 sa8a sa8sa sa9sa";
// let practiceRe = /[5-9]/g;
// console.log(practice.match(practiceRe));

// let practice1 = "sa1 sa2 sa3 sa4 sa8 sa9 sa8a sa8sa sa9sa";
// let practiceRe1 = /sa[5-9]/g;
// console.log(practice1.match(practiceRe1));

// let practice2 = "sa1 sa2 sa3 sa4 sa8 sa9 sa8a sa8sa sa9sa";
// let practiceRe2 = /sa[5-9]a/g;
// console.log(practice2.match(practiceRe2));

// let practice3 = "sa1 sa2 sa3 sa4 sa8 sa9 sa8a sa8sa sa9sa";
// let practiceRe3 = /sa[5-9]sa/g;
// console.log(practice3.match(practiceRe3));

///////////////////////////////////////////////////////////////////////////////////////
// (Regular Expressions - Ranges Part 2)  : 137
/*
---Part-2
[a-z]
[^a-z]
[A-Z]
[^A-Z]
[abc]
[^abc]
*/


// let myString = "AaBbcdefG123!234%^&*";

// let atozsmall = /[a-z]/g;  // [a-z]

// let notatozsmall = /[^a-z]/g;   // [^a-z]

// let AtoZcapital = /[A-Z]/g;  // [A-Z]

// let notAtoZcapital = /[^A-Z]/g;   // [^A-Z]

// let aANDcANDe = /[ace]/g;  // [abc]

// let notaANDcANDe = /[^ace]/g;  // [^abc]

// let lettersCapsAndSmall = /[a-zA-Z]/g;  // [a-zA-Z]

// let numsAndSpecials = /[^a-zA-Z]/g;  // [^a-zA-Z]

// let Specials = /[^a-zA-Z0-9]/g;  // [^a-zA-Z0-9]

// let Specials1 = /[^a-z^A-Z0-9]/g;  // [^a-z^A-Z0-9]

// let Specials2 = /[^a-z^A-Z^0-9]/g;  // [^a-z^A-Z^0-9]

// console.log(myString.match(atozsmall));
// console.log(myString.match(notatozsmall));
// console.log(myString.match(AtoZcapital));
// console.log(myString.match(notAtoZcapital));
// console.log(myString.match(aANDcANDe));
// console.log(myString.match(notaANDcANDe));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(numsAndSpecials));
// console.log(myString.match(Specials));
// console.log(myString.match(Specials1));
// console.log(myString.match(Specials2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// (Regular Expressions - Character Classes Part 1) : 138
/*
Regular Expression
Character Classes
.=> matches any character, except newline or other line terminators.
\w=> matches word characters. [a-z, A-Z, 0-9 And Underscore]
\W=> matches Non word characters
\d => matches digits from 0 to 9.
\D => matches non-digit characters.
\s => matches whitespace character.
\S => matches non whitespace character.
*/

// let email = 'O@@@g...com O@g.com O@g.net A@Y.com-o-g.com-o@s.org 1@1.com';
// let dot=/./g;
// let word = /\W/g;
// let word1 = /\w/g;
// let valid = /\w@/g;
// let valid1 = /\w@\w/g;
// let valid2 = /\w@\w.com/g;
// let valid3 = /\w@\w.(com|net)/g;

// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(word1));
// console.log(email.match(valid));
// console.log(email.match(valid1));
// console.log(email.match(valid2));
// console.log(email.match(valid3));

////////////////////////////////////////////////////////////////////////////////////////////////////
// (Regular Expressions - Character Classes Part 2)  :
/*
Regular Expression
Character Classes
\b => matches at the beginning or end of a word.
\B => matches NOT at the beginning/end of a word.
Test Method
pattern.test(input)

*/

// let names = "Sayed 1Spam 25pam 3Spam Spam4 Spam5 Osama Ahmed";

// let re = /(\bSpam)/g ;
// console.log(names.match(re));

// let re1 = /(\bSpam|spam\b)/gi ;
// console.log(names.match(re1));

// console.log(re1.test(names));
// console.log(/(\bSpam|spam\b)/gi .test("saif"));
// console.log(/(\bSpam|spam\b)/gi .test("1Spam"));
// console.log(/(\bSpam|spam\b)/gi .test("1Spam1"));
// console.log(/(\bSpam|spam\b)/gi .test("Spam1"));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// (Regular Expressions - Quantifiers Part 1)   :

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@gmail.ru"; //All Emails
// let mailsRe = /(\w@\w\w.sa)/ig;
// console.log(mails.match(mailsRe));

// let mailsRe1 = /(\w+@)/ig;
// console.log(mails.match(mailsRe1));

// let mailsRe2 = /(\w+@\w+.sa)/ig;
// console.log(mails.match(mailsRe2));

// let mailsRe3 = /(\w+@\w+)/ig;
// console.log(mails.match(mailsRe3));

// let mailsRe4 = /(\w+@\w+.(com|net))/ig;
// console.log(mails.match(mailsRe4));

// let mailsRe5 = /(\w+@\w+.\w+)/ig;
// console.log(mails.match(mailsRe5));
// ///////////////////////////////////////
// console.log("#".repeat(30));
// ///////////////////////////////////////
// let nums = "0110 10 150 05120 0560 350 00";
// let numsRe = /(0\d0)/ig; // // here the output is null because we dont have a number at start 0 and the end 0 and in th center just a one number .
// console.log(nums.match(numsRe));

// let numsRe1 = /(0\d+0)/ig;
// console.log(nums.match(numsRe1));

// let numsRe2 = /(0\d*0)/ig;  // we use * to get the all number that in the start and end zero also if we dont have a number in the center .
// console.log(nums.match(numsRe2));
// ///////////////////////////////////////
// console.log("#".repeat(30));
// ///////////////////////////////////////
// let url = "https://google.com http://www.website.net web.com"; // http + https
// let urlRe = /(https)/ig;
// console.log(url.match(urlRe));

// let urlRe1 = /(https?)/ig;
// console.log(url.match(urlRe1));

// let urlRe2 = /(https?:\/\/)/ig;
// console.log(url.match(urlRe2));

// let urlRe3 = /(https?:\/\/(www.))/ig;
// console.log(url.match(urlRe3));

// let urlRe4 = /(https?:\/\/(www.)?)/ig;
// console.log(url.match(urlRe4));

// let urlRe5 = /(https?:\/\/(www.)?\w+.\w+)/ig;
// console.log(url.match(urlRe5));

////////////////////////////////////////////////////////////////////////////////////////////
// (Regular Expressions - Quantifiers Part 2)  :

/*
Regular Expression
Quantifiers
n{x}=> Number of
n{x,y} => Range
n{x,}=> At Least x
*/

// let serials = "S100S S3000 S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig)); // S[Four-Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]5

/////////////////////////////////////////////////////////////////////////////////////////////////
// (Regular Expressions - Quantifiers Part 3)  :
/*
  Regular Expression

Quantifiers
$  => End With Something
^  => Start With Something
?= => Followed By Something
?! => Not Followed By Something
*/

// let myString = "we love programming";
// let names = "10saif mhanna naeem haddad";

// console.log(/(ing$)/ig.test(myString));
// console.log(/(^we)/ig.test(myString));
// console.log(/(ad$)/ig.test(names));
// console.log(/(^10)/ig.test(names));
// console.log(/(^\d)/ig.test(names));
// console.log(/(^\w)/ig.test(names));


//////////////////////////////////////////////////////////////////////////////////////
// (Regular Expressions - Replace With Pattern)   :
/*
--Regular Expressions

----Replace
----ReplaceAll
*/

// let text = "We Love Programming And @ Because @ Is Amazing";

// console.log(text.replace("@", "Java Script"));
// console.log(text.replaceAll("@", "Java Script"));

// let re = /(@)/ig;

// console.log(text.replace(re, "Java Script"));
// console.log(text.replaceAll(re, "Java Script"));
// console.log(text.replaceAll(/(@)/ig, "Java Script"));

//////////////////////////////////////////////////////////////////////////////////////////////
// ( Regular Expressions - Form Validation)  :   Here we have code html 144
/*
--Regular Expressions
----Input Form Validation Practice
*/

// document.getElementById("register").onsubmit = function () {
//   let phoneinput = document.getElementById("phone").value;
//   let phoneRe = /(\d{4}\s\d{3}\-\d{4})/; // (1234) 123-1234
//   let ValidationResult = phoneRe.test(phoneinput);
//   console.log(ValidationResult);
//   return false;
// }

// document.getElementById("register").onsubmit = function () {
//   let phoneinput = document.getElementById("phone").value;
//   let phoneRe = /(\d{4}\s\d{3}\-\d{4})/; // (1234) 123-1234
//   let ValidationResult = phoneRe.test(phoneinput);
//   if (ValidationResult === false) {
//     return false;
//   }
//   return true;
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////
// (OOP Introduction)  :  object oriented programming 147 : 
/*
What Is OOP?  

• OOP Stand For => Object Oriented Programming 
OOP Is A Paradigm or Style Of Code 
OOP Use The Concept Of Object To Design A Computer Program 
Its Not New => Simula Is The First OOP Programming Language At 1960 
• Some Languages Support OOP and Some Not 
Object Is A Package Contains Properties and Functions That Work Together To Produce Something in
Your Application. Functions Here Called Methods

---object simulation 
-----1)methods :
-------A)walk
-------B)stop

-----2)properities
-------A)color
-------B)price

Why We Use OOP ? 

• You Will be Able to Create a Large and Complex Software Architecture in Organized Ways. 
• You Will be Able To Hide Certain Parts Of Code in Your Object With Encapsulation To Prevent Mess With The Code. 
• You Will Be Able To Create Reusable Objects To Use in Your Application Easily With Inheritance.
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// (Constructor Function Introduction) : 148 

// function User(id, username, salary) {  //should be the first character is capital
//   this.id = id;
//   this.userN = username;
//   this.sala = salary;
// };

// function User(id, username, salary) {  //should be the first character is capital
//   this.id = id;
//   this.userN = username;
//   this.sala = salary + 1000;  // Here we need to add 1000 to each employee's salary
// };

// let userone = new User(100, "saif", 5000);
// let usertwo = new User(101, "zaid", 6000);
// let userthree = new User(102, "jack", 7000);

// console.log(userone.id);
// console.log(userone.userN);
// console.log(userone.sala);


// console.log(usertwo.id);
// console.log(usertwo.userN);
// console.log(usertwo.sala);


// console.log(userthree.id);
// console.log(userthree.userN);
// console.log(userthree.sala);


// const userone = {
//   id: 100,
//   username: "saif",
//   salary: 5000,
// };

// const usertwo = {
//   id: 101,
//   username: "zaid",
//   salary: 6000,
// };
// const userthree = {
//   id: 103,
//   username: "jack",
//   salary: 7000,
// };
////////////////////////////////////////////////////////////////////////////////////////////
// (Constructor Function New Syntax)  : 

// class User {
//   constructor(id, username, salary) {  //should be the first character is capital
//   this.id = id;
//   this.userN = username;
//   this.sala = salary + 1000; 
//  } // Here we need to add 1000 to each employee's salary
// }

// let userone = new User(100, "saif", 5000);
// let usertwo = new User(101, "zaid", 6000);
// let userthree = new User(102, "jack", 7000);

// console.log(userone.id);
// console.log(userone.userN);
// console.log(userone.sala);

// console.log(userone instanceof User);
// console.log(userone.constructor === User);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ( Deal With Properties And Methods)  : 150

// class User {
//   constructor(id, username, salary){
//   // Properties  : 
//   this.i = id;
//   this.u = username || "Unknown";
//   this.s = salary < 6000 ? salary + 500 : salary;
//   this.msg = function () {
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//     };
//   }
//   // Methods : 
//   writeMsg (){
//     return `Hello ${this.u} Your Salary Is ${this.s}`;
//   }
// }

// let userone = new User(100, "saif", 5000);
// let usertwo = new User(101, "", 7000);

// console.log(userone.u);
// console.log(userone.s);
// console.log(userone.msg());
// console.log(userone.writeMsg());

// console.log(usertwo.u);
// console.log(usertwo.s);
// console.log(usertwo.msg); // Native code 
// console.log(usertwo.writeMsg); // Native code  

//////////////// ////////////////////// ////////////////////////////  / ///////////////////////////////////////
// // (Update Properties And Built In Constructors)  : 151
// class User {
//   constructor(id,username,salary) {
//     this.i = id;
//     this.u = username;
//     this.s = salary;
//   }
//   ubdateName (newName) {
//     this.u = newName;
//   }
// }

// let userone = new User (100, "Saif", 5000);

// console.log(userone.u);

// userone.ubdateName("Zaid");
// console.log(userone.u);

// let strone = "Saif";
// let strtwo = new String("Saif");

// console.log(typeof strone);
// console.log(typeof strtwo);

// console.log(strone instanceof String);
// console.log(strtwo instanceof String);

// console.log(strone.constructor === String);
// console.log(strtwo.constructor === String);
// /////////////////////
// console.log("#".repeat(50));
// /////////////////////
// let numone = 100;
// let numtwo = new Number(200);

// console.log(typeof numone);
// console.log(typeof numtwo);

// console.log(numone instanceof Number);
// console.log(numtwo instanceof Number);

// console.log(numone.constructor === Number);
// console.log(numtwo.constructor === Number);

 //////////////////////////////////////////////////////////////////////////////////////////////////////
//  ( Class Inheritance)   :   153   {{the inheritance is very important !!!!}}
/*
Class 
-Inheritance: 
*/

// // parent class 
// class User {
// constructor(id, username) { 
// this.i = id; 
// this.u = username; 
//     } 
//     sayHello() {
//       return `Hello ${this.u}`;
//       } 
//   }

//   // Derived class 
// class Admin extends User{  // inheritance from user
//   constructor(id, username ,permissions) { 
//     super(id, username);
//   this.p = permissions;
//       } 
//     }

//     class superMan extends Admin{    //inheritance from admin
//       constructor(id, username ,permissions, abilities) { 
//         super(id, username, permissions);
//         this.ab = abilities;
//           } 
//         }

// let userOne = new User(100, "Saif"); 
// let adminone = new Admin(110, "Zaid", 1); 
// let superMan1 = new superMan(110, "Zaid", 1, 2); 


// console.log(userOne.u); 
// console.log(userOne.sayHello());
// ///////////////////////////////////
// console.log("#".repeat(40));
// /////////////////////////////////
// console.log(adminone.i); 
// console.log(adminone.u); 
// console.log(adminone.p); 
// console.log(adminone.sayHello()); 
// ///////////////////////////////////
// console.log("#".repeat(40));
// /////////////////////////////////
// console.log(superMan1.i); 
// console.log(superMan1.u); 
// console.log(superMan1.p); 
// console.log(superMan1.ab); 
// console.log(adminone.sayHello()); 


///////////////////////////////////////////////////////////////////////////////////////////////////
// (Class Encapsulation)  : 154     parseInt


// /*
// Encapsulation 
// Class Fields Are Public By Default 
// Guards The Data Against Illegal Access. 
// Helps To Achieve The Target Without Revealing Its Complex Details. 
// Will Reduce Human Errors. 
// Make The App More Flexible And Manageable. 
// - Simplifies The App. 
// */
// class User {
//   // Private Properity  : 
//   #e;
//   constructor(id, username, eSalary) {  // eSalary === expected salary
//     this.i = id;
//     this.u = username;
//     this.#e = eSalary;
//   }
//   getSallary () {
//     return parseInt(this.#e);
//   }
// }
// let userone = new User(100, "Elzero", "5000 Gneh");

// console.log(userone.u);
// // console.log(userone.#e); // Property '#e' is not accessible outside class 'User' because it has a private identifier.
// console.log(userone.getSallary() * 0.3);  

/////////////////////////////////////////////////////////////////////////////////////////////
// ( Prototype Introduction)  : 155 


// class User {
//   constructor(id, username) {
//     this.i = id ;
//     this.u = username ; 
//   }
//   sayHello () {
//     return `Hello ${this.u}`;
//   }
// }

// let userone = new User(100 , "Saif");

// console.log(userone.u);

// console.log(User.prototype);

// let strone = "Saif";

// console.log(String.prototype);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// (Add To Prototype Chain And Extend Constructors)  : 156

// class User {
//   constructor(id, username) {
//     this.i = id;
//     this.u = username;
//   }
//   sayHello ( ) {
//     return `Hello ${this.u}`;
//   }
// }

// let userone = new User(100, "Saif");

// console.log(userone.u);
// console.log(User.prototype);
// console.log(userone);

// User.prototype.sayWelcome = function () {
//   return `Welcome ${this.u}`;
// }

// Object.prototype.love = "Saif Mhanna Haddad";

// String.prototype.addDotBeforeAndAfter = function (val) {
//   return `.${this}.`;
// }

// let myString = "Haddad" ;

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// (Object Meta Data And Descriptor Part 1)  : 157
/*
--Object Meta Data And Descriptor 
----writable 
------enumerable 
--------configurable [Cannot Delete Or Reconfigure] 
 */

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable : false,
  enumerable: true,
  configurable: false,
  value: 3,
});

Object.defineProperty(myObject, "c", {
  writable : false,
  enumerable: true,
  configurable: true, // Uncaught TypeError: (Cannot redefine property): c  
  value: 3,
});

myObject.c = 100;

console.log(delete myObject.c)

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}
console.log(myObject);



////////////////////////////////////////////////////////////////////////////////////////////////
// (Object Meta Data And Descriptor Part 2 )    :   158