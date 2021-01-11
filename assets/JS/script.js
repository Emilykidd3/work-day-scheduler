// global variables
var hourDivs= document.getElementsByClassName("hour");
// if using luxon instead of moment
// var DateTime = luxon.DateTime;
var DateTime = moment();
// if using luxon instead of momement 
// var militaryHour = parseInt(DateTime.local().toFormat("HH"));
var militaryHour = parseInt(DateTime.format('HH'));
var schedule = {};

// grab items from local storage
var list = JSON.parse(localStorage.getItem('schedule'))

// get current date for top of page
var currentDate = DateTime.format('dddd, MMMM do');
$('#currentDay').text(currentDate)

// changes backround color for past present and future
$(".description").each(function(){
    if (parseInt($(this).attr("id")) < militaryHour) {
        $(this).removeClass("future present")
        $(this).addClass("past")
    }
    else if (parseInt($(this).attr("id")) === militaryHour) {
        $(this).removeClass("past future")
        $(this).addClass("present")
    }
    else if (parseInt($(this).attr("id")) > militaryHour) {
        $(this).removeClass("present past")
        $(this).addClass("future")
    }
})

// loads scehdule from local storage
var loadSchedule = function() {
    $('#9').val(localStorage.getItem("9am"))
    $('#10').val(localStorage.getItem("10am"))
    $('#11').val(localStorage.getItem("11am"))
    $('#12').val(localStorage.getItem("12pm"))
    $('#13').val(localStorage.getItem("1pm"))
    $('#14').val(localStorage.getItem("2pm"))
    $('#15').val(localStorage.getItem("3pm"))
    $('#16').val(localStorage.getItem("4pm"))
    $('#17').val(localStorage.getItem("5pm"))
}

// saves item to local storage
$('.saveBtn').on("click", function() {
    var time = $(this).siblings(".hour").attr('id');
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
})

loadSchedule();