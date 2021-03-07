function saveTodo() {
    let text=$("#txtTodo").val(); //get the text of the input
    $("#txtTodo").val("");

    //create To Do's
    var syntax = "<div>" + text + "</div>";
    $(".todo-list").append(syntax);
}

function init() {
    console.log("Todo app");
    //get some initial data

    //hook events

    $("#btnSave").click(saveTodo);
}
window.onload = init;


