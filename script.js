// Display current date and time in the header or the navbar
var currentDate = moment().format("dddd LL");
    console.log(currentDate);
    $("#current-date").append(currentDate);

    var currentTime = moment().format("LT");
    console.log(currentTime);
    $("#current-time").append(currentTime);

    var now = new Date().getHours();

// Defning and logging the main elements in the scheduler
var hourId = $(".hour");
console.log(hourId);

var textArea = $(".text-area");
console.log(textArea);

var saveBtn = $(".saveBtn");
console.log(saveBtn);