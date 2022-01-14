var container = $('.container');

var currentDay = moment();
    $('#currentDay').text(currentDay.format("dddd, MMMM Do YYYY"));

for (var i=8; i<24; i++){

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


var savedTask
container.on("click", "button", function(event){
    event.preventDefault();
    var hour = $(event.target).parent().attr("id")
    var task= $(event.target).siblings("textarea").val()
  
    localStorage.setItem(hour,task)    
    console.log(task);
});
