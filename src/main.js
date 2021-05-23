const startingHours = 10;
let startingMinutes = startingHours * 60;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
console.log(countdownEl);
let stopInterval = setInterval(updateCountdown, 1000);

//function updateCountdown() {
  //  const hours = Math.floor(time/60/60);
  //  let minutes = 59;
  //  let seconds = time % 60;
  //  seconds = seconds < 10 ? '0' + seconds : seconds;
  //  if(typeof(time/60) == 'int')
  //  if(seconds == 0) {
    //    if(minutes > 0) {
      //      minutes--;
      //    } else {
      //      minutes = 59;
      //    }
    //  }

  //  countdownEl.innerHTML = `${hours}:${minutes}:${seconds}`;
  //  if(hours<=0 && minutes<=0 && seconds<=0) {
    //    clearInterval(stopInterval);
    //  }
  //  time--;
  //}

function updateCountdown(){

  let countDownDate = new Date("May 22, 2021 23:00:00").getTime();

  let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                                              
    document.getElementById("countdown").innerHTML = hours + ":"+ minutes + ":" + seconds + "";
                                                              
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
}
