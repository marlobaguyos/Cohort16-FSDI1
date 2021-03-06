task = [];
var isItImportant = false;
var isDetailVisible = true;

function toggleDetailVisibility(){
    if(isDetailVisible){
        $("capture").hide();
        toggleDetailVisibility = false;
    }else{
        $("#capture").show();
        toggleDetailVisibility = true;
    }
}

// Jump from One State to another State on and off - Bit 1 to 0 or to 0 to 1
function toggleImportant(){
    console.log("Icon clicked");

    if(!isItImportant){
        $("#iImportant").removeClass("far").addClass("fas");
        isItImportant = true;
    }else{
        isItImportant = false;
        $("#iImportant").removeClass("fas").addClass("far");
    };
}

function saveTask(){
    console.log("Saved clicked");

    let title = $("#txtTitle").val();
    var date = $("#txtDateTime").val();
    var icon = $("#iImportant").status();
    var status = $("#selStatus").val();
    var location = $("#txtLocation").val();
    var color = $("#txtColor").val();
    var description = $("#txtDescription").val();
    
    var myTask = new Task(0,title,isItImportant,date,status,location,color,description);

    console.log(myTask);
    // save to server

    // display task
    displayTask(myTask);
}

function displayTask(task){
    //create the syntax

    var syntax = `<div class="card-body myTask">
                    <h5 class="card-title">${task.title}</h5>
                    <p class="card-text">Date: ${task.date}</p>
                    <p class="card-test">${task.icon}}</p>
                    <p class="card-text">${task.status}</p>
                    <p class="card-text">${task.location}</p>
                    <p class="card-text">${task.color}</p>
                    <p class="card-text">${task.description}</p>
                    </div>`

    //append the syntax to existing html
    $("#task-list").append(syntax);
}

function init(){
    console.log("Task Manager");

    // $('#txtColor').spectrum({
    //     type: "component"
    // });


    $("#iImportant").click(toggleImportant);
    $("#btn-save").click(saveTask);
    $("#bth-showhide").click(toggleDetailVisibility);
}
window.onload = init;

/*
Task
- Id
- Title
- Date & time
- Priority
- Description
- Status
- Location
- Color
*/