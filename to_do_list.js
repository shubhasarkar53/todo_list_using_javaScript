const todoForm = document.querySelector(".form_todo");
const todoInput = document.querySelector("input[type='text']");
const todoList = document.querySelector(".todo_list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
   
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml =   `<span>${newTodoText}</span>
            <div class="todo_buttons">
            <button class="todo_btn done">Done</button>
            <button class = "todo_btn remove">Remove</button>
             </div>`
    newLi.innerHTML = newLiInnerHtml;
    
    todoList.append(newLi);
    todoInput.value="";
})
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const newLiText = e.target.parentNode.previousElementSibling;
        newLiText.style.textDecoration ="line-through";
    }

    if(e.target.classList.contains("remove")){
        const removedText = e.target.parentNode.parentNode;
        removedText.remove();
    }
})