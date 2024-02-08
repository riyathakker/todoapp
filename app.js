let inp = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');
 button.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText=inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText="delete";
delbtn.classList.add("delete");
    ul.appendChild(item);
    item.appendChild(delbtn);
    inp.value="";
 })
 ul.addEventListener("click",function(event){
    //bubbbling concept
   if(event.target.nodeName = "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
   }
 });
