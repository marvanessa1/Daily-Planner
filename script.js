var Container = $('container');

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

// var ButtonSaveEl = $("button");

// ButtonSaveEl.click(function(event){
//     var 
// });