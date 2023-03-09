let selections = document.querySelectorAll(".selectBtn");
let selectionArr = ["rock", "paper", "scissors"]
let pWin = document.querySelector(".pWin");
let cWin = document.querySelector(".cWin");
let pResult = document.querySelector(".yourResult");
let cResult = document.querySelector(".computerResult");
let pList = document.querySelector(".pResults");
let cList = document.querySelector(".cResults");
let count = document.querySelector(".roundCount")
let finalResut = document.querySelector(".resultValue")
let finalResultBox = document.querySelector(".result")
let close = document.querySelector(".close");
let pWinCount = 0;
let cWinCount = 0;
let roundCount = 0;

selections.forEach(select => {
    select.addEventListener('click', e =>{
        roundCount ++;
        const value = select.dataset.value;
        playGame(value);
        count.innerText=roundCount;
        if(roundCount === 5){
            finalResultBox.style.display="flex";
            if(pWinCount > cWinCount ) {
                finalResut.innerText="Tsk proud on winning a PC!!"
            } else if (cWinCount > pWinCount) {
                finalResut.innerText="haha You lose Shame On You!!!"
            } else if(cWinCount == pWinCount ){
                finalResut.innerText="Ur luck is no better than a PC!!"
            }
        }

    })
});

close.onclick = () =>{
    finalResultBox.style.display="none";
    location.reload();
} 


playGame = (Input) => {
    playerInput = Input;
    computerInput = computerSelection()
    let result = Winner(playerInput,computerInput);
    showResult(playerInput, computerInput, result)
    console.log(result);
}

showResult = (pInput , cInput ,winner) => {
    pWin.innerText = pWinCount;
    cWin.innerText = cWinCount;
    const pdiv = document.createElement('div');
    pList.appendChild(pdiv);
    pdiv.innerText = pInput;
    const cdiv = document.createElement('div');
    cList.appendChild(cdiv);
    cdiv.innerText = cInput;
    if (pInput === winner) pdiv.classList.add('winner')
    if (cInput === winner) cdiv.classList.add('winner')
}


computerSelection = () => {
    let randomNum = Math.floor(Math.random() * selectionArr.length);
    return selectionArr[randomNum];
}

Winner = (pValue,cValue) => {
    if (pValue === cValue){
        return "tie";
    }else if ((pValue === "rock" && cValue === "scissors") || (pValue === "paper" && cValue === "rock") || (pValue === "scissors" && cValue === "paper")) {
        pWinCount ++;
        return pValue;
    }else {
        cWinCount ++;
        return cValue;
    }
}