// key(name) = Value(can be given already or it takes value from the input which is given at runtime)
// q1=Virat+Kohli
// q2=Australia 
// q3=MS+Dhoni(+ is showing ke wha pr space hai)
// q4=200 
// q5=James+Anderson

// *********************************************************************

// const original = ["Sachin Tendulkar"," West Indies"," Sachin Tendulkar","264","Muttiah Muralitharan"]

// const form = document.querySelector('form');

// form.addEventListener('submit',(event)=>{

//     event.preventDefault();
//     const data = new FormData(form); 

//     const answer = Array.from(data.values());
    
//     let result = 0;

//     // ab agar me sirf kuch hi answer select krta hoon toh uss case me mera answer galat dega
//     // kyuki answer me mere pass array aa rha hai aur backend me saari values nhi aa rhi hai array me
//     // so to handle this *********** we can make the array of answer into an object******************

//     for(let i=0;i<answer.length;i++)
//     {
//         if(answer[i]==original[i])
//             result++;
//     }
//     // console.log(result);
//     const out = document.getElementById('out');
//     out.innerHTML = `${result} out of 5 is correct`;

//     document.getElementById('container').append(out);
// })  

// *****************************DUE TO NOT SELECTING ALL YE GALAT ANSWER DEGA SO ISI KO HANDLE KRNA HAI*************************************************************


const original = {
    q1: "Sachin Tendulkar",
    q2: " West Indies",
    q3: " Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"}

const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{

    event.preventDefault();
    const data = new FormData(form); 

    // const answer = Array.from(data.values());
    
    // let result = 0;


    // for(let i=0;i<answer.length;i++)
    // {
    //     if(answer[i]==original[i])
    //         result++;
    // }
    // console.log(result);

    let result =0;

    for(let [key,value] of data.entries())
    {
        if(value===original[key])
            result++;
    }

    const out = document.getElementById('out');
    out.innerHTML = `${result} out of 5 is correct`;

})  



















