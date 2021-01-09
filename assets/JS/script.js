var hourDivs= document.getElementsByClassName("hour");
// var DateTime = luxon.DateTime;
var DateTime = moment();
// var militaryHour = parseInt(DateTime.local().toFormat("HH"));
var militaryHour = parseInt(DateTime.format('HH'));
var schedule = {};

var list = JSON.parse(localStorage.getItem('schedule'))

var currentDate = DateTime.format('dddd, MMMM do');
$('#currentDay').text(currentDate)

console.log(currentDate);
console.log(militaryHour);
console.log(typeof(militaryHour));

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

$('.saveBtn').on("click", function() {
    var time = $(this).siblings(".hour").attr('id');
    var value = $(this).siblings(".description").val();
    localStorage.setItem(time, value);
})

loadSchedule();