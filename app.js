let gameSeq=[];
let usrSeq=[];
let started=false;
let level=0;
let highLvl=[];
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
    }
    lvlUp();
})

function lvlUp(){
    usrSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`);
    btnFlash(randBtn);
    gameSeq.push(randCol);
    console.log(gameSeq);
}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}
function usrFlash(btn){
    btn.classList.add("usrflash");
    setTimeout(function(){
        btn.classList.remove("usrflash");
    }, 250);
}
function btnPress(){
    let btn=this;
    usrFlash(btn);
    usrCol=btn.getAttribute("id");
    usrSeq.push(usrCol);
    checkAns(usrSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function checkAns(idx){
    if(usrSeq[idx]===gameSeq[idx]){
        if(usrSeq.length==gameSeq.length){
            lvlUp();
        }
    }
    else{
        highLvl.push(level-1);
        h2.innerHTML=`Game Over! your score is <b>${level-1}</b> <br>Highest score is ${Math.max(...highLvl)} <br>Press ant key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },500);
        
        reset();
    }
}
function reset(){
    started=false;
    gameSeq=[];
    usrSeq=[];
    level=0;
}