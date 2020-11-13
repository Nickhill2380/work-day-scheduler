var storedTasks = [];

$(document).ready(function(){
    $("#currentDay").text(moment().format('dddd, MMMM Do') );
});


/*var createTask = function(taskText, oldTextArea) {

    var textArea = $("<textarea>")
        .addClass("col-10 taskArea description timeColor")
        .text(taskText)
   
    oldTextArea.replaceWith(textArea);

    //use the act of creating a new task to make sure the taskClock() is current
    taskClock();
} */


$(".taskArea").on("blur", function(){
   
    var text = $(this)
    .val()
    .trim();
    
    var taskSpan = $("<p>")
        .addClass("storageSpan")
        .text(text)

    $(this).append(taskSpan);
    
    /*var textInput = $("<textarea>")
    .addClass("description col-10")
    .text(text);
    createTask(textInput,$(this));*/
    
});

$(".saveBtn").on("click", function() {

    var taskInfo = $(this)
        .closest(".hour")
        .text()
        .trim();
    
    arrInfo = taskInfo.split( "\n");
    
    console.log(arrInfo);

    var time = arrInfo[0];


    var text = arrInfo[1]
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


