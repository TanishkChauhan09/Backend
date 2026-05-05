const quotesARR = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "It is never too late to be what you might have been. - George Eliot",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You can never plan the future by the past. - Edmund Burke",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It’s not the years in your life that count, it’s the life in your years. - Abraham Lincoln",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Everything you can imagine is real. - Pablo Picasso"
  ]

//   continuous changing quotes

    // function generateQuote(){

    // const index = Math.floor(Math.random()*quotesARR.length);

    // const text = document.getElementById('quote');
    // text.textContent = quotesARR[index];
    // }
    // setInterval(generateQuote,3000);
   
    // EVENTS IN JS JB BHI HMMM KBHI MOUSE WAGERA PR CLICK KRE TB HMAARA BUTTON KUCH RESPOND KRE

  //  const button = document.querySelector('button');
      
    // MOUSE EVENTS:-   'dblclick'  'click'  'mousemove'  'mouseover' 

  //      button.addEventListener('mouseover',()=>{
       
  //   const text = document.getElementById('quote');

  //   const index = Math.floor(Math.random()*quotesARR.length);
  //   text.textContent = quotesARR[index];

  //  });

    // KEYBOARD EVENTS: 'keydown'  'keyup'
    
    // const button = document.querySelector('button');
    // document.addEventListener('keydown',(event)=>{
    // // console.log(event);
    //   if(event.key=="Enter")
    //   {
    //     console.log(event.key);
    //     const text = document.getElementById('quote');
    //     const index = Math.floor(Math.random()*quotesARR.length);
    //     text.textContent = quotesARR[index];
    //   }
    // console.log(event.target)
    // })

    // EVENT OBJECT:
    // event.target  event.key

      const button = document.querySelector('button');
      button.addEventListener('click',(event)=>{
      // console.log(event.target);
      // console.log(event.type);
      //  console.log(event.clientX);  //clientX :-left se mouse ki position
      // console.log(event.clientY);   //clientY :-up se mouse ki position

      const text = document.getElementById('quote');
      const index = Math.floor(Math.random()*quotesARR.length);
      text.textContent = quotesARR[index];
  
     });




