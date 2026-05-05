// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');
// const body = document.body;  //or document.querySelector('body')


// red.addEventListener('click',()=>{
//     body.style.backgroundColor = 'red';
// })

// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = 'blue';
// })

// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = 'orange';
// })

// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';
// })

// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = 'purple';
// })


// optimizing the above code 
// pr isme bhi m sbke liye event listener lga rha hoon so ab kyu na sirf ek hi event listener lgau aur wo bhi parent pr jiiissse wo listen krle ke isss baaar kisne event trigger kiya hai aur wo usko print(ya jo bhi ho wo) kra de
   // const button = document.querySelectorAll('button');
   // console.log(button);
 
   // const body = document.body;

   // button.forEach((buttons)=>{

   //    buttons.addEventListener('click',()=>{
   //    body.style.backgroundColor = buttons.id;
   //    })
   // })
// due to increase of events they will start consuming the memory so a lot of space is used and our task will become slow down.
// so how to make it fast so 
// yhi hmara concept aata hai
// eventbubbling ka aur eventcapturing ka 

// What is EVENT BUBBLING?(freecodecamp website se dekh lena hai)
// Event Bubbling is a concept in the DOM (Document Object Model). 
// It happens when an element receives an event, 
// and that event bubbles up (or you can say is transmitted or propagated) 
// to its parent and ancestor elements in the DOM tree until it gets to the root element.


// aur isss event capturing, event bubbling ka ye benefit hai ->[***************EVENT DELEGATION*********]
const root = document.getElementById('root');
root.addEventListener('click',(event)=>{
   // console.log(event.target.id);
   // console.log(event.target.tagName);
   if(event.target.tagName == 'BUTTON')
   {
      const color = event.target.id;
      const elem = document.getElementById('body')
      elem.style.backgroundColor = color;
   }
   
   // event.target.style.backgroundColor = event.target.id;
},false)  //yha false likho ya nhi pr Bydefault yha false likha rhta hai