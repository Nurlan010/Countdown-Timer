const daysel=document.querySelector('#days');
const hoursel=document.querySelector('#hours');
const minsel=document.querySelector('#mins');
const secondsel=document.querySelector('#seconds');

const newYear="1 Jan 2022";
countdown();
function countdown(){
const newYearsDate=new Date(newYear);
const currentDate=new Date();


const totalseconds=(newYearsDate - currentDate)/1000;

const days=Math.floor(totalseconds / 3600 / 24);
const hours=Math.floor(totalseconds/3600) % 24;
const mins=Math.floor(totalseconds/60) % 60;
const seconds=Math.floor(totalseconds) % 60;

daysel.innerHTML=days;
hoursel.innerHTML=formatTime(hours);
minsel.innerHTML=formatTime(mins);
secondsel.innerHTML=formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown,1000);
