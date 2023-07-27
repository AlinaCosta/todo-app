const inputBox = document.querySelector('#input-box');
const errMessage = document.querySelector('.error-message');

const addTask = document.querySelector('.add-task');
const listContainer = document.querySelector('#list-container');

addTask.addEventListener('click', function () {
  if (inputBox.value === '') {
    errMessage.innerHTML = 'You must write something!';
  } else {
    errMessage.innerHTML = '';
    // save the task
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    //this 'li' will ne displayed under this listContainer
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
});

listContainer.addEventListener('click', function (event) {
  console.log(event);
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    saveData();
  } else if (event.target.tagName === 'SPAN') {
    event.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
