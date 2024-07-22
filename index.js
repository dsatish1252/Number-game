
const p1 = document.querySelector('#player1');
const p2 = document.querySelector('#player2');
const b1 = document.querySelector('#player1btn');
const b2 = document.querySelector('#player2btn');
const r = document.querySelector('#reset');
const l = document.querySelector('#lead');

let p1Score = 0;
let p2Score = 0;
flag = false;

r.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1.innerText = p1Score;
    p2.innerText = p2Score;
    l.textContent = "!!!";
})
addEventListener("keydown", function(event){
    if (event.keyCode == 32){
        p1Score = 0;
        p2Score = 0;
        p1.innerText = p1Score;
        p2.innerText = p2Score;      
        l.textContent = "!!!";
    }

})
addEventListener("keypress", (event) => {

    if (event.key == "s"){
        p1Score += Math.floor((Math.random()*100) + 1);
        p1.innerText = p1Score;     
        
    }
    else if (event.key == "k"){
        p2Score += Math.floor((Math.random()*100) + 1);
        p2.innerText = p2Score;
    }

    if ((p1Score > 500) && (p1Score > p2Score)){
        p1Score = 0;
        p2Score = 0;
        p1.innerText = p1Score;
        p2.innerText = p2Score;
        l.textContent = "Player 1 Wins!";
    }
    else if ((p2Score > 500) && (p2Score > p1Score)){
        p1Score = 0;
        p2Score = 0;
        p1.innerText = p1Score;
        p2.innerText = p2Score;
        l.textContent = "Player 2 Wins!";
    }
})
