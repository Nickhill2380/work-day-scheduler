var storedTasks = [];

$(document).ready(function(){
    $("#currentDay").text(moment().format('dddd, MMMM Do') );
});

var createTask = function(taskText, dueTime) {
        
        var textArea = $('#' + dueTime);

        textArea.val(taskText);

    taskClock();
} 

$(".description").on("blur", function(){
   
    var text = $(this)
        .val()
        .trim();

    var textArea = $(this);
        
    textArea.val(text);

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
        
    var tasks = {
        task: taskText,
        dueTime: taskTime
    };

    storedTasks.push(tasks);
    
    localStorage.setItem("tasks", JSON.stringify(storedTasks));

    createTask(taskText, taskTime);
    
});

var taskClock = function() {

    $(".description").each(function() {
    
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

    for( var i = 0; i < storedTasks.length; i++ ){
        
        createTask(storedTasks[i].task, storedTasks[i].dueTime);
    
    }

};

loadTask();

setInterval(function(){
    taskClock();
},(1000*60));
