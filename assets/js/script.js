var storedTasks = [];

$(document).ready(function(){
    $("#currentDay").text(moment().format('dddd, MMMM Do') );
});


/*$("#taskInput").on("click", function(){
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("description col-10")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});*/

$(".saveBtn").on("click", function() {

    var text = $(this)
        .closest(".taskArea")
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

    storedTasks.push(tasks);

    localStorage.setItem("tasks", JSON.stringify(storedTasks));
    
});

var taskClock = function() {

    $(".taskArea").each(function() {
    
        var currentHour = moment().format("H");

      if(currentHour < $(this).attr("id") ){
        $(this).addClass("past")
    } else if (currentHour === $(this).attr("id")){
        $(this).addClass("present")
    } else 
        $(this).addClass("future")
    
    
});

};

taskClock();


