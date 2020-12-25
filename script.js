let buttonAdd;
let userInput;
let i = 1;
let completedSpan; 

let paragraph;
let todoContainer; // this will be the to-do list area
let doneContainer; // this will be the completed area

function handleLoad(){
  buttonAdd = document.getElementById('add');
  buttonAdd.addEventListener('click', handleAdd);
  completedSpan = document.getElementById('head2');
  completedSpan.addEventListener('click', handleHide);

  userInput = document.getElementById('input');
  userInput.addEventListener('keydown', function(event){
    if(event.keyCode == 13){
      handleAdd(); 
      event.preventDefault();
    }
  });
  paragraph = document.getElementById('para');

  todoContainer = document.getElementById('toDo');
  doneContainer = document.getElementById('completed');
}

function handleAdd(){
  // this will add the user input into the to_do area 
  // create a div that has a button and a paragraph
  // add the div to the todo container

  let element = document.createElement('div');
  let newButton = document.createElement('button');
  //newButton.textContent = 'task ' + i; 
  newButton.addEventListener('click', handleMove(element)); 
  let newPara = document.createElement('span');
  newPara.textContent = userInput.value;
  // add button and paragraph to div
  element.appendChild(newButton);
  element.appendChild(newPara);
  
  // add div to the todo area
  todoContainer.appendChild(element);

  // reset the textarea  
  userInput.value = ''; 
  i += 1; 
}

function handleMove(element, button){
  // this will move the task to the done area  
  // returns an event handler (function) for the button in question
  function handleButton() {
    // this event handler will move `element`
    if (todoContainer.contains(element)){
      doneContainer.appendChild(element);
    }
    else{
      todoContainer.appendChild(element);
    } 
  }

  return handleButton;
}

function handleHide(){
  doneContainer.classList.toggle('hide');
  completedSpan.classList.toggle('hi');
}

window.addEventListener('load', handleLoad);