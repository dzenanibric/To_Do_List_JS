const btn = document.getElementById('submit-btn');
const todo_container = document.getElementById('todo-container');
const input_field = document.getElementById('input-field');

btn.addEventListener('click', function(){
    var div = document.createElement('div');
    todo_container.appendChild(div);
    div.innerText = input_field.value;
    input_field.value = "";
    div.addEventListener('click', ()=>{
        div.style.textDecoration = "line-through";
    });
    div.addEventListener('dblclick', ()=>{
        todo_container.removeChild(div);
    });
});