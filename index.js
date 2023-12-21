let inputEl=document.getElementById("input");
let resultEl=document.getElementById("result");
let randomNumber=Math.ceil(Math.random()*100);
console.log(randomNumber);

function checkNumber(){
    let inputValue=parseInt(inputEl.value);
    if (inputValue>randomNumber){
        resultEl.textContent="Too High! Try Again"
        resultEl.style.backgroundColor="#1e217c"
    }
    else if(inputValue<randomNumber){
        resultEl.textContent="Too Low! Try Again"
        resultEl.style.backgroundColor="#1e2177"
    }
    else if(inputValue===randomNumber){
        resultEl.textContent="Congratulations"
        resultEl.style.backgroundColor="green"
    }
    else{
        resultEl.textContent="Please Provide Valid Number";
        resultEl.style.backgroundColor="Red"
    }
}