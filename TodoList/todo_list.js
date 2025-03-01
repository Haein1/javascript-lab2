const taskInput = document.getElementById('taskInput');

const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");


let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        tasks.push(
            {text: taskText,
            completed: false}
        );
        
        debugger;
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach(
        (task, index) => {
        const li = document.createElement("li"); // 
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        /*
            This is template literal syntax (using ${} inside backticks).
task.completed ? "checked" : "" checks if task.completed is true:
If true, it adds checked (which makes the checkbox pre-selected).
If false, it adds an empty string, meaning the checkbox will not be checked.
        */
        
            li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
        /*
            It constructs HTML content for each task by assigning it to li.innerHTML, which includes a checkbox, a label displaying the task text, and corresponding IDs.

Then, with the help of li.querySelector, it sets up an event listener for each checkbox within the task list <li> element. When the checkbox state changes, it triggers the toggleTask() function, which you will create in the next step.
        */

    /*
            "click": Fires when an element (like a button or checkbox) is clicked.
"change": Fires when the value of an input element changes (e.g., text input, checkbox, dropdown).
    */
    }
    );
}


function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks(){
    tasks = tasks.filter(
        task=>!task.completed
        );

    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

