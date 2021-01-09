var hourDivs= document.getElementsByClassName("hour");
var DateTime = luxon.DateTime;
var militaryHour = DateTime.local().toFormat("HH");

var schedule = {};

var list = JSON.parse(localStorage.getItem('schedule'))

var currentDate = DateTime.local().toFormat("cccc',' LLLL d");
$("#currentDay").text(currentDate);

$(".description").each(function(){
    if (parseInt($(this).attr("id")) < militaryHour) {
        $(this).removeClass("future present")
        $(this).addClass("past")
    }
    else if (parseInt($(this).attr("id")) === militaryHour) {
        $(this).removeClass("past future")
        $(this).addClass("present")
    }
    else {
        $(this).removeClass("present past")
        $(this).addClass("future")
    }
})

var loadSchedule = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));
}

$('.saveBtn').on("click", function() {
    console.log("saved")
    
})

var saveSchedule = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

loadSchedule();