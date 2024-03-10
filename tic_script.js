let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true; //playerX,playerO
let count=0; //to track draw

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    count=0;
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            showDraw();
        } 
    });
});
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const showDraw=()=>{
    msg.innerText=`It's a draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>{
   for(let pattern of winPatterns){
    let pos1Value=boxes[pattern[0]].innerText;
    let pos2Value=boxes[pattern[1]].innerText;
    let pos3Value=boxes[pattern[2]].innerText;
    if(pos1Value!="" && pos2Value!="" && pos3Value!="")
    {
        if(pos1Value===pos2Value && pos2Value===pos3Value)
        {
            showWinner(pos1Value);
        }
    }
   } 
};


const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);