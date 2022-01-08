var container = $('.container');

var currentDay = moment();
    $('#currentDay').text(currentDay.format("dddd, MMMM Do YYYY"));

for (var i=8; i<24; i++){

    var hourValue = localStorage.getItem("hr-" + i);

    var TimeBlock = $("#hr-" + i)
        if (i <moment().hour()){
            TimeBlock.addClass("past")
        }
        if (i == moment().hour()){
            TimeBlock.addClass("present")
        }
        if (i>moment().hour()){
            TimeBlock.addClass("future")
        }
}

var storedTask = JSON.parse(localStorage.getItem(savedTask));

 

var savedTask
container.on("click", "button", function(event){
    event.preventDefault();
    var hour = $(event.target).siblings("textarea").attr("id")
    var Task= $(event.target).siblings("textarea").val()
    var savedTask = {
        hour: hour,
        Task: Task
    }

    localStorage.setItem(hour, JSON.stringify(savedTask));
    console.log(savedTask);
});

function renderSavedTask(){
    var hourlyTask = JSON.parsel(localStorage.getItem("savedTask"));
    if (hourlyTask !== null){
        return
    }
}

renderSavedTask();