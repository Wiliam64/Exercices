let list = document.querySelector("div");

let li = function click(){
    document.querySelector("section").style.width = "50%";
    document.querySelector("article").style.height = "100%";
}

list.addEventListener("click",li)