// const form = document.querySelector('form');

// form.addEventListener('input',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('change',(event)=>{
//     console.log(event.target.value);
// })

// focus: Does not bubble, so it needs to be directly attached to individual input elements.

// form.addEventListener('focus',(event)=>{
//     console.log(event.target.value);
// })

// focusin: Bubbles, so it can be attached to the form element for event delegation.

// form.addEventListener('focusin',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('click',(event)=>{
//     console.log(event.target.value);
// })

// issss se page automatically refresh ho jaata hai and usko rokne ke liye ke jo previous data tha usse bhi store krke rkhe toh uske liye preserve log ko bhi select kr dunga

// form.addEventListener('submit',(event)=>{
//     // console.log(event.target.value);
//     console.log('form submitted');
// })

// form.addEventListener('reset',(event)=>{
//     console.log(event.target.value);
//     console.log('form reseted')
// })


// *********************************************************************

// const form = document.querySelector('form');

// form.addEventListener('submit',(event)=>{
//     // agar m chahu ke mera psge refresh na ho toh uske liye hmm use krenge event.preventDefault isssse page submit ho hojayega pr ye page ko refresh nhi krega
//     event.preventDefault();

//     const first = document.getElementById('first');
//     console.log(first.value); 

//     const second = document.getElementById('second');
//     console.log(second.value); 

//     const third = document.getElementById('third');
//     console.log(third.value); 

//     const result = document.getElementById('result');
//     result.innerHTML = `${first.value} ${second.value} has a good communication skill`;
// })


// ab agar form me different no. of fields honge toh kya sbke liye baar baar likhoon nhi
// TOH ISI KE LIYE USE HOGA FormData

const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{

    event.preventDefault();
    const data = new FormData(form);
    // console.log(data);
    // console.log(typeof(data));
    // console.log(data.keys()); //iterator aayega yoh ab isspr iterate krlenge ta isko Array me convert krlenge

    for(let key of data.entries())
    {
        console.log(key);
        // console.log(Array.from(data.keys()));
        // console.log(Array.from(data.values()));
    }     
})






