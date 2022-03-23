const sectionInterage = document.querySelector('#interage');
const inputBox = document.createElement('input');
inputBox.id = 'texto-tarefa';

sectionInterage.appendChild(inputBox);

const buttonTask = document.createElement('button');
buttonTask.innerText = 'Adicionar';
buttonTask.id = 'criar-tarefa';


sectionInterage.appendChild(buttonTask);

// Requisito 5 e 6:
const sectionOl = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');

function addTask(){
let lista = document.createElement('li'); 
let textoInput = document.getElementById('texto-tarefa');
lista.classList = 'liTasks';

lista.innerText = textoInput.value;
if (lista.innerText === ''){
    alert('adicione um ítem');
} else{
sectionOl.appendChild(lista);
lista.addEventListener('dblclick', strikeThrough)
lista.addEventListener('click', switchColor);

}

document.getElementById('texto-tarefa').value = '';
}

addTask()

botao.addEventListener('click', addTask);

// Requisito 7 e 8:

function switchColor(event){
let eventTask = event.target;
let getLi = document.getElementsByTagName('li');

  for(let i = 0; i < getLi.length; i += 1){
  if(eventTask.backgroundColor !== 'gray'){
   getLi[i].style.backgroundColor = 'white';
  }
    event.target.style.backgroundColor = 'gray';
   
  }
}

// Requisito 9:
function strikeThrough(event){
    let eventTask = event.target;
    let completedClass = 'completed';
    let liTasksClass = 'liTasks';
    // let getLi = document.getElementsByTagName('li');
    
    // for(let i = 0; i < getLi.length; i += 1){

        if(eventTask.classList == completedClass){
         eventTask.classList = liTasksClass;
        }
        else if (eventTask.classList == liTasksClass) {
        eventTask.classList = completedClass;
        
}
}

// Requisito 10 (consultei o código: https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul)
let clearAll = document.createElement('button');
clearAll.id = 'apaga-tudo';
clearAll.innerText = 'Limpa';
sectionInterage.appendChild(clearAll);
clearAll.addEventListener('click', clearLi);

function clearLi (){
let getOL = document.getElementById('lista-tarefas');
    getOL.innerHTML = '';
} 
