var hourDivs= document.getElementsByClassName("hour");

var DateTime = luxon.DateTime;

var now = DateTime.local();

var militaryHour = DateTime.local().toFormat("HH");

var currentDate = DateTime.local().toFormat("cccc',' LLLL d");

for (var i=0; i<hourDivs.length; i++) {
    console.log(hourDivs[i].getAttribute('id'))
};

console.log(militaryHour);