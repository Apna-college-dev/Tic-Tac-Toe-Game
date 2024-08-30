let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelectorAll("#reset")
let msgContainer=document.querySelectorAll(".msg-container")
let newGameBtn=document.querySelectorAll("#new-btn")
let msg=document.querySelectorAll("#msg")


let turnO=true;//playerX,playerO

const winPaterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
console.log("box was clicked")
if(turnO){//playerO
    box.innerText="O";
    turnO=false
}else{//playerX
    box.innerText="X"
    turnO=true
}
box.disabled=true
checkWinner();
    }) ;  
});
const showWinner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner} `;
    msgContainer.classList.remove("hide")
}

const checkWinner=()=>{
    for(let patern of winPaterns){
    let post1val=boxes[patern[0]].innerText
    let post2val=boxes[patern[1]].innerText
    let post3val=boxes[patern[2]].innerText
    if(post1val !="" && post2val !="" && post3val !=""){
        if(post1val===post2val && post2val===post3val){
            console.log("winner",post1val)
            showWinner(post1val);
        }
    }
    }
}