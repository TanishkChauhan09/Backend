const click = document.querySelector('button');

click.addEventListener('click',()=>{
    const input = document.getElementById('location');
    const place = input.value;

    function updateTemp(data){
        const element = document.getElementById('weatherInfo');
        element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
    }
     
   const Prom = fetch(`http://api.weatherapi.com/v1/current.json?key=a3e3cfeb68234763976164523251401&q=${place}&aqi=yes`);
   
   Prom
   .then(response=>response.json())
   .then(data=> updateTemp(data));

})