$(document).ready(function(){
    $("#currentDay").text(moment().format('dddd, MMMM Do') );
});

$("#taskInput").on("click", function(){
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("description")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".saveBtn").on("click", function() {

    var text = $(this)
        .closest(".hour")
        .text()
        .trim();
      
    var time = $(this)
        .closest(".hour")
        .text()
        .trim();
    
    var tasks = {
        task: text,
        dueTime: time

    };

    console.log(tasks);

    var storedTasks = [tasks];

    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    
});

var taskClock = function() {

    var currentHour = moment().format("H");
    
    console.log(currentHour);

    if(currentHour < $(".data-time") ){
        $("#taskInput").addClass(".past")
    } else if (currentHour === $(".data-time")){
        $("#taskInput").addClass(".present")
    } else {
        $("#taskInput").addClass(".future")
    };

    


}


taskClock();