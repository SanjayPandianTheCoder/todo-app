document.addEventListener("DOMContentLoaded",function(){
    const taskList = document.getElementById("list-container");
    const taskButton = document.getElementById("input-button");
    const taskInput = document.getElementById("input-box");

    taskButton.addEventListener('click',()=>{
        const taskText = taskInput.value.trim();
        if(taskText !== ""){
            const taskItem = document.createElement('li');
            taskItem.className = "task-item";
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button onclick="deleteTask(this)">Delete</button>
                <button onclick="completeTask(this)">Complete</button>
            `;

            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
        else{
            alert("Enter a valid task");
        }
    });

    window.deleteTask = function(button){
        const taskItem = button.parentNode;
        taskList.removeChild(taskItem);
    };

    window.completeTask = function(button){
        const taskItem = button.parentNode;
        taskItem.classList.toggle("completed");
    };
});