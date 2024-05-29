let [milliseconds , seconds , minutes , hours] =[0 , 0, 0, 0,]
let timref = document.querySelector(".display");
let t =null;


document.querySelector("#bt1").addEventListener("click" , () => {
    if(t !==null){
        clearInterval(t);
    }


    t= setInterval(timer ,10);
});


document.querySelector("#bt2").addEventListener("click" , () =>{
    clearInterval(t);
})


document.querySelector("#bt3").addEventListener("click" ,() => {
    clearInterval(t);
    [milliseconds , seconds , minutes , hours] = [0 ,0 ,0, 0];
    timref.innerHTML = " 00 : 00 : 00 : 000";
})


function timer() {
    milliseconds = milliseconds +10;
    if(milliseconds ==1000){
        milliseconds=0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;


            }
        }
    }


    let h =hours;
    if(hours<10){
        h = "0" + hours;
    }
    else{
        h = hours;
    }


    let m =minutes;
    if(minutes<10){
        m = "0" + minutes;
    }
    else{
        m = minutes;
    }


    let s =seconds;
    if(seconds<10){
        s = "0" + seconds;
    }
    else{
        s = seconds;
    }


    let ms=milliseconds;
    if(milliseconds<10){
        ms = "00" + milliseconds;
    }
    else if(milliseconds<100){
        ms = "0" + milliseconds;
    }
    else{
        ms = milliseconds;
    }


    timref.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
