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


$("#saveBtn").on("click", function() {

    var text = $(this)
    .closest(".taskArea")
    
    var time = $(this)
    .closest("taskTime")

    var tasks = {
        task: text,
        dueTime: time

    }

    saveTask = function() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };
    

});



