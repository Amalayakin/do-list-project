const ip = document.getElementById("ip");
const listcontainer = document.getElementById("listcontainer");


function addTask(){
    

    if(ip.value === ''){
        alert("you should write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = ip.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ip.value= '';
    savedata();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();
