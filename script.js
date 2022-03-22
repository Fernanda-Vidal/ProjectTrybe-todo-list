const sectionInput = document.querySelector('#interage');
const inputBox = document.createElement('input');
inputBox.id = 'texto-tarefa';

sectionInput.appendChild(inputBox);

const buttonTask = document.createElement('button');
buttonTask.id = 'criar-tarefa';


sectionInput.appendChild(buttonTask);


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
}

document.getElementById('texto-tarefa').value = '';

}
addTask()

botao.addEventListener('click', addTask);