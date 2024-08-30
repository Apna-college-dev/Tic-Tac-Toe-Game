boxes=document.querySelectorAll(".box")
resetBtn=document.querySelector("#reset")
msgContainer=document.querySelector(".msg-container")
msg=document.querySelector("#msg")
newBtn=document.querySelector("#new-btn")






let turnO=true //playerO,playerX

winnigPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("button was clicked")
        if(turnO){
            box.innerText="O";
            turnO=false
            
        }else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true
        checkWinner();
    })
    
});
const checkWinner=()=>{
    for(let patterns of winnigPatterns){
        let post1val= boxes[patterns[0]].innerText
        let post2val= boxes[patterns[1]].innerText
        let post3val= boxes[patterns[2]].innerText
        if(post1val !="" && post2val!="" && post3val !=""){
            if(post1val === post2val && post2val === post3val){
                console.log("winner",post3val)
                showWinner(post3val);
            }
        }
    } 
}
const showWinner=(winner)=>{
alert`congradulation ,winner is ${winner}`
disableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}