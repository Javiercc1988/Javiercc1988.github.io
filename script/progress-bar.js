
// CIRCULAR PROGRESS BAR
const circularProgress = document.querySelectorAll(".circular-progress");
const progressValue = document.querySelectorAll(".progress-value");
let progressStartValue = [0,0,0,0,0,0,0];
let progressEndValue = [85,75,70,70,70,60];
let speed = 20;

function prueba(i){
  const progress = setInterval(() => {
    progressStartValue[i] ++;
    
    progressValue[i].textContent = `${progressStartValue[i]} %`
    circularProgress[i].style.background = `conic-gradient(#6246ea ${progressStartValue[i] * 3.6}deg, #d1d1e9 0deg)`
    if(progressStartValue[i] == progressEndValue[i]){
      clearInterval(progress)
    }
  }, speed);
}

circularProgress.forEach((_, i) => prueba(i))