const sectionInput = document.querySelector('#interage');
const inputBox = document.createElement('input');
inputBox.id = 'texto-tarefa';

sectionInput.appendChild(inputBox);

const buttonTask = document.createElement('button');
buttonTask.innerText = 'Adicionar';
buttonTask.id = 'criar-tarefa';


sectionInput.appendChild(buttonTask);

// Requisito 5 e 6:
const sectionOl = document.getElementById('lista-tarefas');
const botao = document.getElementById('criar-tarefa');

function addTask(){
let lista = document.createElement('li'); 
let textoInput = document.getElementById('texto-tarefa');

lista.innerText = textoInput.value;
if (lista.innerText === ''){
    alert('adicione um ítem');
} else{
sectionOl.appendChild(lista);
lista.addEventListener('click', switchColor);
}

document.getElementById('texto-tarefa').value = '';
}

addTask()

botao.addEventListener('click', addTask);

// Requisito 7:

function switchColor(event){
    event.target.style.backgroundColor = 'gray';
}