let startbtn=document.getElementById('start');
let stopbtn=document.getElementById('stop');
let resetbtn=document.getElementById('reset');

let hour=0;
let min=0;
let second=0;
let milisecond=0;
function start(){
    timer = true;
    milisecond=0;
    second=0;
    min=0;
    hour=0;
    watch();
   document.getElementById('power').src="onpower.png";
    document.getElementById('power').style.transform="rotate(0)";
}

function watch(){
    
    if(timer){
        
        milisecond++;
        if(milisecond==92){
            second++;
            milisecond = 0;
        }
        else if(second==60){
            min++;
            second=0;
        }
        else if(min==60){
            hour++;
            min=0;
            
        }
        else if(hour==24){
            day++;
            hour=0;
            min=0;
            second=0;
        }

       
        let h=hour;
        let m=min;
        let s=second;
        let ms=milisecond;

         if(milisecond < 10){
            ms ="0" + milisecond;
        }

        else if(second < 10){
            s= second;
        }
        else if(min < 10){
            m= min;
        }
        else if(hour<10){
            h=hour;
        }
       
      
        document.getElementById('hour').innerHTML=h;
        document.getElementById('min').innerHTML=m;
        document.getElementById('sec').innerHTML=s;
        document.getElementById('mini').innerHTML=ms;
        setTimeout(watch,10);
    }
}

function stop(){
   if(timer==true){
    timer=false;
    document.getElementById('power').src="offpower.png";
    document.getElementById('power').style.transform="rotate(270deg)";
    document.getElementById('play').src="play.png";
   }
   else{
    timer=true;
    milisecond++;
    if(milisecond==100){
        second++;
        milisecond = 0;
    }
    else if(second==60){
        min++;
        second=0;
    }
    else if(min==60){
        hour++;
        min=0;
        
    }
    else if(hour==24){
        day++;
        hour=0;
        min=0;
        second=0;
    }

   
    let h=hour;
    let m=min;
    let s=second;
    let ms=milisecond;

     if(milisecond < 10){
        ms ="0" + milisecond;
    }

    else if(second < 10){
        s= second;
    }
    else if(min < 10){
        m= min;
    }
    else if(hour<10){
        h=hour;
    }
   
  
    document.getElementById('hour').innerHTML=h;
    document.getElementById('min').innerHTML=m;
    document.getElementById('sec').innerHTML=s;
    document.getElementById('mini').innerHTML=ms;
    setTimeout(watch,10);
    document.getElementById('play').src="pausered.png";
    document.getElementById('power').src="onpower.png";
    document.getElementById('power').style.transform="rotate(0)";
}
   }


function reset(){
    document.getElementById('play').src="pausered.png";
    timer=true;
let hour=0;
let min=0;
let second=0;
let milisecond=0;

document.getElementById('hour').innerHTML=hour;
document.getElementById('min').innerHTML=min;
document.getElementById('sec').innerHTML=second;
document.getElementById('mini').innerHTML=milisecond;
document.getElementById('de').innerHTML="";
}

function lap(){
    let hour=document.getElementById('hour').innerText;
    let min=document.getElementById('min').innerText;
    let second=document.getElementById('sec').innerText;
    let milisecond=document.getElementById('mini').innerText;
    let lapt=document.getElementById('de');

       let laptime=hour+":" + min+":"+second+":"+milisecond;
     let  laps = lapt.innerHTML  + laptime;
     document.getElementById('de').innerHTML =laps+ "<br>";

}


