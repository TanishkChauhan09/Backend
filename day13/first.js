// CSS Selector

const id = document.querySelector('#first')
id.innerHTML = "hello money";

const id2 = document.querySelector('.header2')
id2.style.backgroundColor = "pink";


// const obj = document.querySelectorAll('.header1'); -->
// how to iterate over Node list(jb query selector use krte hai tb same class ke jb do select ho jaate hai) -->
//  obj.forEach((val)=>{
//     console.log(val)
// }) 

// for(let val of obj){
// console.log(val)} 

//  for(i=0;i<obj.length;i++){
//   console.log(obj[i].style.color = "blue")
// } 

//  convert Node list into Array 
//  Array.from(obj) 

// ++++++++++++++++++++++++++++++++++++

// Accesing using tag name
// const obj = document.getElementsByTagName('h1');
// let team = document.getElementsByTagName('li')

// how to iterate over it similar to iterate over Node List
// firstly convert it into an Array by Array.from(obj)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const list = document.querySelector('li');
// console.log(list);
// console.log(list.parentNode);
// console.log(list.parentElement);
// node list can also have text node but html collection only has html element

// const list = document.querySelector('ul')
// undefined
// list.childNodes
// NodeList(6) [text, li, li, li, li, text]0: text1: li2: li3: li4: li5: textlength: 6[[Prototype]]: NodeList
// list.children
// HTMLCollection(4) [li, li, li, li]
// list.childNodes[0]
// #text
// list.children[0]

// innerHTML or innerText or textContent
// innerHTML wala jo kuch bhi hoga usko laakr dedega chahe uske bich me tsgs like strong,hr,br kuch bhi ho pr
// textContent (display none ko bhi dikha dega/ya jo bhi hide krke rkh rkha hai wo content bhi dikh jaayega),innerText(issssme hide content wala nhi dikhayi dega) ye bich wale tag/element ko nhi denge






















