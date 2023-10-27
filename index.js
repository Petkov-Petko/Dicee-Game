let number1;
let number2;
let button2 = document.getElementById("bt2")
let button1 = document.getElementById("bt1")
function random(){
    let randomNumber =Math.floor(Math.random() * 6) + 1;
    let img = document.getElementById("1")
    img.src = `./images/dice${randomNumber}.png`
    button2.disabled = false
    number1 = randomNumber
    button1.disabled = true
}

function random2(){
    let randomNumber =Math.floor(Math.random() * 6) + 1;
    let img = document.getElementById("2")
    let winner = document.getElementById("textWin")
    img.src = `./images/dice${randomNumber}.png`
    number2 = randomNumber

    if(number1 > number2){
        winner.innerHTML = "Player 1 Wins!"
    }else if (number2 > number1){
        winner.innerHTML = "Player 2 Wins!"
    }else if (number1 === number2){
        winner.innerHTML = "DRAW"
    }
    button2.disabled = true

}















function refresh(){
    let img1 = document.getElementById("1");
    let img2 = document.getElementById("2");
    img1.src = `./images/dice6.png`
    img2.src = `./images/dice6.png`
    let winner = document.getElementById("textWin")
    winner.innerHTML = "Refresh Me"
    let button2 = document.getElementById("bt2")
    button2.disabled = true
    button1.disabled = false
}
