//function to add tasks
//function addTask() {
  //  const taskInput = document.getElementById("taskInput");
    //const taskList = document.getElementById("taskList");
    //const inputError = document.getElementById("input-container").nextElementSibling;
    

    // const taskValue = taskInput.value.trim();
    //if (taskInput.value.trim() === "") {
      //  inputError.innerHTML= "Please enter a task!";
        //inputError.style.color = "red";
        //inputError.style.display = "block";
        //return;
    //}

//create a new list item
//const li = document.createElement("li");
//li.textContent = `${taskValue}`;
//const listItem = document.getElementById("list-item");

//listItem.innerHTML= `${taskValue}`;
//taskList.append(li);

//add a delete button to the task
//const deleteButton = document.createElement("button");
//deleteButton.textContent = "Delete";
//deleteButton.classList.add("delete-btn");
//deleteButton.onclick = function () {
  //  taskList.removeChild(li);
//};

//li.appendChild(deleteButton);
//taskList.appendChild(li);

//clear the input field
//taskInput.value = "";
//}

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    const taskValue = taskInput.value.trim();
    if (taskValue === "") {
        const inputError = document.getElementById("error");
        inputError.innerHTML = "Please enter a task!";
        inputError.style.color = "red";
        inputError.style.display = "block";
        return;
    }
    

    
    // Create new task item
    let li = document.createElement("li");
    li.textContent = taskInput.value;
    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };
    // Append button to task
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    // Clear input field
    taskInput.value = "";
}


// Add event listener for Enter key
document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});