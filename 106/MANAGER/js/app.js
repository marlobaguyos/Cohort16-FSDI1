task = [];
var isItImportant = false;
var isDetailsVisible = true;
var serverUrl = "http://fsdi.azurewebsites.net/api";

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
    var status = $("#selStatus").val();
    var location = $("#txtLocation").val();
    var color = $("#txtColor").val();
    var description = $("#txtDescription").val();
    
    var myTask = new Task(0,title,isItImportant,date,status,location,color,description);

    // save to server
    $.ajax({
        url: serverUrl + '/tasks',
        type: "POST",
        data: JSON.stringify(myTask),
        contentType: "application/json",

        success: function(res){
            console.log("Server says: ", res);
            // display task
            displayTask(res);
        },
        error: function(errorDet){
            console.log("Error", errorDet);
        }
    });
}

function displayTask(task){
    //create the syntax

    var syntax = `<div class="testBorder">
                    <div class="d-flex bd-highlight testBorder">
                        <div class="p-2 flex-fill bd-highlight testBorder">
                        <i class="far fa-star task-star task-section-sm"></i>
                        </div>

                        <div class="p-2 flex-fill bd-highlight testBorder">
                            <p class="testBorde">${task.title}</p>
                            <p class="testBorde">${task.description}</p>
                        </div>

                        <div class="p-2 flex-fill bd-highlight testBorder">
                            <div class="testBorde">${task.date}</div>
                            <div class="testBorde">${task.location}</div>
                            <div class="testBorde">${task.status}</div>
                        </div>

                        <div class="p-2 flex-fill bd-highlight testBorder">
                        <i class="fas fa-dumpster" onclick="deleteTask(${task.id}"></i>
                        </div>
                    </div>
                    </div>`

                    

    //append the syntax to existing html
    $("#task-list").append(syntax);
}

function deleteTask(id){
    console.log("Should delete a task", id);
}

function testRequest(){
    $.ajax({
        url:"https://restclass.azurewebsites.net/api/test",
        type:"GET",
        success: function(res){
            console.log("Yeei it worked!!", res);
        },
        error: function(errorDetails){
            console.log("Oucch we have an error:(", errorDetails);
        }
    });
}

function init(){
    console.log("Task Manager");

    // $('#txtColor').spectrum({
    //     type: "component"
    // });


    $("#iImportant").click(toggleImportant);
    $("#btn-save").click(saveTask);
    $("#btnDetails").click(toggleDetailsVisibility);
    
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