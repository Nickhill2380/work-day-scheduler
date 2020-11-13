var storedTasks = [];

$(document).ready(function(){
    $("#currentDay").text(moment().format('dddd, MMMM Do') );
});


$(".taskArea").on("blur", "textarea", function(){
   
    var text = $(this)
    .val()
    .trim();

    
    var textInput = $("<textarea>")
    .addClass("description col-10")
    .text(text);

    $(this).append(text);

    $(this).replaceWith(textInput);
    
});

$(".saveBtn").on("click", function() {

    var text = $(this)
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
        console.log($(this).data("hour"));
        console.log(currentHour);
      if(currentHour > $(this).data("hour")){
        $(this).addClass("past")     
    } else if (currentHour < $(this).data("hour")){
        $(this).addClass("future")
    } else {
        $(this).addClass("present")
        
    }
    
});

};

taskClock();


