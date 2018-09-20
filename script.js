

document.getElementById("phrase").addEventListener("click", function(){

document.getElementById("phrase").textContent= "Tu transpireras de bonheur tellement nos burgers sont incroyablement bons!"
});

document.getElementById("phrase").textContent.addEventListener("click", function(){
document.getElementById("phrase").textContent= document.getElementsByClassName("burgerclick").innerHTML;
console.log(document.getElementsByClassName("burgerclick").innerHTML);
});
