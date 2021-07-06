
const p1button=document.querySelector('#player1btn');
const p2button=document.querySelector('#player2btn');
const resetbutton=document.querySelector("#reset");
const p1Display=document.querySelector('#p1display');
const p2Display=document.querySelector('#p2display');
const winningscoreSelect=document.querySelector('#playtoselect');

let p1score=0;
let p2score=0;
let isGameOver=false;
let winningscore=3;
p1button.addEventListener('click', function(){
    if(!isGameOver){
        p1score+=1;
        if(p1score===winningscore){
    
             isGameOver=true;
             p1Display.classList.add('winner');
             p2Display.classList.add('loser') ;  
             p1button.disabled=true;
             p2button.disabled=true;

            }
        
        p1Display.innerText= p1score;
    }

    
}) 
p2button.addEventListener('click', function(){
    if(!isGameOver){
        p2score+=1;
        if(p2score===winningscore){
    
             isGameOver=true;
             p1Display.classList.add('loser');
             p2Display.classList.add('winner');
             p1button.disabled=true;
             p2button.disabled=true;    
            }
        
        p2Display.innerText= p2score;
    }

    
})
winningscoreSelect.addEventListener('change',function(){
    winningscore=parseInt(this.value);
    reset();
}) 
resetbutton.addEventListener('click',reset);

function reset(){
    isGameOver=false;
    p1score=0;
    p2score=0;
    p1Display.innerText=0;
    p2Display.innerText=0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
    p1button.disabled=false;
    p2button.disabled=false;

}
