document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    buildToDo(event.target.new_task_description.value);
    form.reset();
  });
});

function buildToDo(todo){
  console.log(todo);
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = '   x';
  p.textContent = `${todo} `;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove();
}