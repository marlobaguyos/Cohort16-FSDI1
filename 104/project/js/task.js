function addTask() {
    var taskName=document.getElementById("task").value;
    // var taskArray = [taskName];
    console.log(taskName);
    var tmp=`<div class="pet"> 
            <ol>
                </li>${taskName}</li></br>
            </ol>
            </div>`
document.getElementById("taskList").innerHTML+=tmp;
}

