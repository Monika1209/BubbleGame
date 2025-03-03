let timer = 60;
let score = 0;
let hitrn = 0;

function increasrScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 72; i++) {
        let num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>  `
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    let timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerInt);
            document.querySelector("#timerval").textContent = "Time's Up!";
            document.querySelector("#pbtm").innerHTML = "";
        }
    }, 1000)
}


function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    let clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn){
        increasrScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();
