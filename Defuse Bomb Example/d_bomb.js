let timer = document.getElementById("timer");
let defuser = document.getElementById("defuser");

let countDown = 10 ;

let intervalId = setInterval(function(){
    countDown = countDown - 1;
    console.log(countDown);
    timer.textContent = countDown;
    if (countDown === 0) {
        timer.textContent = "BOOM!!";
        clearInterval(intervalId);
    }
},1000);

defuser.addEventListener("keydown", function(event){
    let bombDefuserText = defuser.value;
    
    if (bombDefuserText === "defuse" && event.key === "Enter" && countDown !==0) {
        timer.textContent = "You Did it!";
        clearInterval(intervalId);
    }
});