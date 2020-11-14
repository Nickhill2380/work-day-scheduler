var storedTasks = [];

$(document).ready(function(){
    $("#currentDay").text(moment().format('dddd, MMMM Do') );
});

var createTask = function(taskText, dueTime) {

        $("div").find(dueTime).val(taskText);

    taskClock();
} 

$(".taskArea").on("blur", function(){
   
    var text = $(this)
        .val()
        .trim();

    var textArea = $(this);
        
    textArea.val(text);

    console.log($(this).val());
    /*var timeColor = $(this).data("hour");

    var taskSpan = $("<textarea>")
        .addClass("col-10 description taskArea timeColor")
        .data(timeColor, "hour")
        .text(text)

    $(this).replaceWith(taskSpan);*/

    taskClock();
        
});

$(".saveBtn").on("click", function() {
    
    var taskTime = $(this)
        .closest(".hour")
        .text()
        .trim();
    
    var taskText = $(this)
        .prev()
        .val()
        .trim();    
        
        console.log(taskTime);
        console.log(taskText);
    
    /*var arrInfo = taskInfo.split( "\n");

    console.log(arrInfo);
    
    var time = arrInfo[0];

    var text = arrInfo[1].trim();
    
    for(var i = 0; i < storedTasks.length; i++) {
        if (storedTasks[i].dueTime === arrInfo[0] ) {
            storedTasks[i].task = text;             
        } 

    }*/

    var tasks = {
        task: taskText,
        dueTime: taskTime
    };

    storedTasks.push(tasks);

    localStorage.setItem("tasks", JSON.stringify(storedTasks));

    createTask(taskText, taskTime);
    
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

var loadTask = function () {
    
    storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (!storedTasks) {
        storedTasks = [];
    }

    $.each(storedTasks, function() {
        createTask(storedTasks.task, storedTasks.dueTime)
    });
};

loadTask();
