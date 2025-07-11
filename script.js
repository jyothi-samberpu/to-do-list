function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") return;
  
    const taskList = document.getElementById("taskList");
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
   
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };
  
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    input.value = "";
  }
  