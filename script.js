let btn = document.getElementById("btn");
function changeTxt(element){
    btn.innerHTML = "OOOIIIII  ";
    btn.style.color = "#FF00ff";

}

document.getElementById("btn").addEventListener("click", changeTxt)