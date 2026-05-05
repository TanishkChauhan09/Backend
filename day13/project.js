
function timing(){
const timer = document.getElementById('root');
const now =new Date();
const indiantime = now.toLocaleTimeString();
timer.innerHTML = indiantime;
}
// while(true) //iss se code crash hojayega jiss se wo process hi hota rhega

setInterval(timing,1000);

const timer = document.getElementById('root');

timer.style.fontSize = "100px";
timer.style.display = "flex"; 
timer.style.height = "100vh";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";