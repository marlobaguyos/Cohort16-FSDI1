task = [];
var isItImportant = false;

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
    var color = $("#selColor").val();
    var description = $("#txtDescription").val();
    

    console.log(title,date,status,location,color,description);
}

function init(){
    console.log("Task Manager");

    $("#iImportant").click(toggleImportant);
    $("#btn-save").click(saveTask);
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