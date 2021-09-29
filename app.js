//Li Ekleme
let formDOM = document.querySelector('#toDoForm');
formDOM.addEventListener('submit', formSet);

function formSet(Event){
    Event.preventDefault();
    const TASK = document.querySelector('#getTask');
    if(TASK.value){
        setTask(TASK.value);
        TASK.value="";
    }
}

let ulDOM = document.querySelector('#ul');

const setTask = (text) => {

    let liDOM = document.createElement('li');
    liDOM.innerHTML = ` ${text} `;
    ulDOM.append(liDOM);
}

//Clear Butonu
let clearDOM = document.querySelector("#clear");

let clear = () =>{
    var liDOM = document.querySelectorAll("li");
    for(var i=0; li=liDOM[i]; i++) {
        li.parentNode.removeChild(li);
    }
}

clearDOM.addEventListener('click', clear)

