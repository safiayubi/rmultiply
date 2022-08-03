const num1 = Math.ceil(Math.random() * 10);

const num2 = Math.ceil(Math.random() * 10);

const quest1 = document.getElementById("que");

const form1 = document.getElementById("form")

const input1 = document.getElementById("input")

quest1.innerText=`WHAT IS ${num1} multiply by ${num2} ?`
 
const score1 = document.getElementById("score")

const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score")) ;
if (!score){

    score = 0;
}

form1.addEventListener("submit", ()=>{

const userAnsd = +input1.value
if (userAnsd === correctAns){
score++;
console.log(score);

}else {

    score--;
    console.log(score);
}

score1.innerText = `Score : ${score}` 
});
function updateLocalStorage(){

localStorage.setItem("score", JSON.stringify(score))


}