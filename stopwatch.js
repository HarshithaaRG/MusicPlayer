let minutes=00;
let seconds=00;
let getMinutes=document.querySelector('.minutes');
let getSeconds=document.querySelector('.seconds');
let start_btn=document.querySelector('.btn-start');
let stop_btn=document.querySelector('.btn-stop');
let reset_btn=document.querySelector('.btn-reset');
let interval;


start_btn.addEventListener('click',()=>{
    interval=setInterval(startTimer,1000)
})
stop_btn.addEventListener('click',()=>{
    clearInterval(interval)
})
reset_btn.addEventListener('click',()=>{
    clearInterval(interval);
    seconds='00';
    minutes='00';
    getMinutes.innerHTML=minutes;
    getSeconds.innerHTML=seconds;
})

function startTimer(){
    seconds++;
    if(seconds<=9){
        getSeconds.innerHTML='0'+seconds;

    }
    if(seconds>9){
        getSeconds.innerHTML=seconds;

    }
    if(seconds>59){
        minutes++;
        getMinutes.innerHTML='0'+minutes;
        seconds=0;
        getSeconds.innerHTML='0'+0;

    }
    if(minutes>9){
        getMinutes.innerHTML=minutes;
    }
    

}


