function saveTodo() {
    console.log("Button Clicked");
    let text=$("#txtTodo").val(); //get the text of the input
    console.log(text);
}

function init() {
    console.log("Todo app");
    //get some initial data

    //hook events

    $("#btnSave").click(saveTodo);
}
window.onload = init;


