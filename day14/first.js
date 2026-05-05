// 1.)++++++++++++++++++++++++add element by JS++++++++++++++++++++++++++++
// const element = document.createElement('li');
// element.innerHTML = "TS";

// const parent = document.getElementById("root");
// parent.appendChild(element);

// function attach(content){
//     const element = document.createElement('li');
//     element.innerHTML = content;
    
//     const parent = document.getElementById("root");
//     // parent.appendChild(element);
//     parent.append(element,'Hello Kaise ho');
// }
// attach('TS')
// attach('React');
// attach('Node');

// ++++++++++++++++++++++TEXT NODE+++++++++++++++++++++++++++++++++++
// 2.)Create a text Node using JS
// const element = document.createTextNode('Hello kaise ho sbhi');

// const parent = document.getElementById('root');
// parent.append(element);

// ++++++++++++++++++CREATE A ATTRIBUTE NODE+++++++++++++++++++++++++++

// const element = document.createAttribute('id');
// element.value = 'first';

// const parent = document.querySelector('li');
// parent.setAttributeNode(element);

// const parent = document.getElementById('root');
// parent.children[1].setAttributeNode(element);

// ++++++++++++++++++ACCESS ATTRIBUTE OF AN ELEMENT+++++++++++++++++++++++++++++++++++++++

// const element = document.getElementById('root');
// console.log(element.getAttribute('class'));
// console.log(element.getAttribute('id'));
// console.log(element.setAttribute('custom' ,'20'));
// console.log(element.removeAttribute('custom'));

// ++++++++++++++++++++ADD NODES TO THE DOM++++++++++++++++++++++++++++++++++++++++
// const parent = document.getElementById('root');
// const element = document.createElement('li');
// element.innerHTML = "TS";
// parent.prepend(element);
// parent.append(element);

// const child2 = parent.children[1];
// parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);

const parent = document.getElementById('root');
// parent.innerHTML += 'TS';
// parent.innerHTML += '<li>TS</li>';

const element = document.createElement('div');
element.innerHTML = 'Hello Kaise ho';

// parent.insertAdjacentElement("beforebegin",element);
// parent.insertAdjacentElement("afterend",element);
// parent.insertAdjacentElement("afterbegin",element);
// parent.insertAdjacentElement("beforeend",element);

// Delete node or element
document.querySelector('li').remove();














