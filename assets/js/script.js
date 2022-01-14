// This grabs the elements with the usage of JQuery
var container = $('.container');

//This part of code uses moment.js  to display the current day date to the jumbotron, located at the top center of page
var currentDay = moment();
    $('#currentDay').text(currentDay.format("dddd, MMMM Do YYYY"));

//Code below uses a for loop to add classes past,present, and future depending on the  time of the work day with the use of moment.js
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

//Code below is an event listener function.  When save button is clicked, it will get user textarea input associated with a specific hour and store it to local storage.
var savedTask
container.on("click", "button", function(event){
    event.preventDefault();
    var hour = $(event.target).parent().attr("id")
    var task= $(event.target).siblings("textarea").val()
  
    localStorage.setItem(hour,task)    
    console.log(task);
});

//Code below gets user textarea input saved in local storage for each work day hour

//FUTURE DEVELOPMENT ---> clean and simplify code below so that code is not repetitive
$("#hour-8 textarea").val(localStorage.getItem("hour-8"));
$("#hour-9 textarea").val(localStorage.getItem("hour-9"));
$("#hour-10 textarea").val(localStorage.getItem("hour-10"));
$("#hour-11 textarea").val(localStorage.getItem("hour-11"));
$("#hour-12 textarea").val(localStorage.getItem("hour-12"));
$("#hour-13 textarea").val(localStorage.getItem("hour-13"));
$("#hour-14 textarea").val(localStorage.getItem("hour-14"));
$("#hour-15 textarea").val(localStorage.getItem("hour-15"));
$("#hour-16 textarea").val(localStorage.getItem("hour-16"));
$("#hour-17 textarea").val(localStorage.getItem("hour-17"));

// Code below was used testing different times outside of work day

// $("#hour-21 textarea").val(localStorage.getItem("hour-21"));
// $("#hour-22 textarea").val(localStorage.getItem("hour-22"));
// $("#hour-23 textarea").val(localStorage.getItem("hour-23"));

