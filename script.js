/* eslint-disable space-before-blocks */
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
} else {
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
    getLi[i].style.backgroundColor = 'white';
    event.target.style.backgroundColor = 'gray';
  }
}

// Requisito 9:
function strikeThrough(event){
    let eventTask = event.target; 
    let completedClass = 'completed';
    let liTasksClass = 'liTasks'; 
    
    // for(let i = 0; i < getLi.length; i += 1){

        if(eventTask.classList == completedClass){ 
         eventTask.classList = liTasksClass; 
        }
        else if (eventTask.classList == liTasksClass) {
        eventTask.classList = completedClass;
        
}
saveStorage();
}

// Requisito 10 (consultei o código: https://stackoverflow.com/questions/18795028/javascript-remove-li-without-removing-ul)
let buttonClearAll = document.createElement('button');
buttonClearAll.id = 'apaga-tudo';
buttonClearAll.innerText = 'Limpa';
sectionInterage.appendChild(buttonClearAll);
buttonClearAll.addEventListener('click', clearLi);

function clearLi (){
let getOL = document.getElementById('lista-tarefas');
    getOL.innerHTML = '';
    saveStorage();
} 

// Requisito 11:
let buttonFinishedRemove = document.createElement('button');
buttonFinishedRemove.id = 'remover-finalizados';
buttonFinishedRemove.innerText = 'Remove';
sectionInterage.appendChild(buttonFinishedRemove);
buttonFinishedRemove.addEventListener('click', finishedRemove);

const saveStorage = () => {
  localStorage.setItem('todos', sectionOl.innerHTML);
};

function finishedRemove(){
  let getLi = document.querySelectorAll('.completed');
  // let getOL = document.getElementById('lista-tarefas');
    for(let i = 0; i < getLi.length; i += 1){
        getLi[i].remove();
        }
        saveStorage();
}

// Requisito 12:
const btnSaveTask = document.createElement('button');
btnSaveTask.id = 'salvar-tarefas';
btnSaveTask.innerText = 'Salvar Tarefa';
sectionInterage.appendChild(btnSaveTask);

btnSaveTask.addEventListener('click', saveStorage);

window.onload = () => {
  sectionOl.innerHTML = localStorage.getItem('todos');
  const li = document.querySelectorAll('.liTasks');
  li.forEach((task) => {
    task.addEventListener('dblclick', strikeThrough);
    task.addEventListener('click', switchColor);
  });
};
