document.body.addEventListener('click',(event)=>{       //or we can also write document.addEventListener wo body pr hi lgega
    const circle = document.createElement('div');
    circle.className = 'circle';
    // circle.classList.add('circle');
    circle.textContent = 'Hi';    //or i can also write circle.innerHTML = 'Hi'
    document.body.appendChild(circle);

    const x = event.clientX;
    const y = event.clientY;
    
    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`;


    const color = ['red','blue','orange','yellow','aqua','green','wheat','purple']
    circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

    setTimeout(()=>{
        circle.remove();
    },5000)
})