var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');


//2005-04-04 12:12:12
const alarmSubmit=document.getElementById("alarmSubmit");
alarmSubmit.addEventListener('click',setAlarm);

function ringBell(){
  audio.play();

}

function setAlarm(e){
    e.preventDefault();

    const alarm=document.getElementById("alarm");
    console.log(alarm.value);

   let alarmDate = new Date(alarm.value);
   console.log(`Setting alarm for ${alarmDate}...`);

  let now = new Date();

  let timeToAlarm = alarmDate-now;
  console.log(timeToAlarm);

  if(timeToAlarm>=0){
    setTimeout(()=>{
      ringBell();

    },timeToAlarm);
  }
}