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

var calendarRow = $(".calendar-row");
console.log(calendarRow);

// Getting the document ready for jQuery
// $(document).ready(function() {

// Add event listener to saveBtn
  saveBtn.on("click", function() {
    var taskText = $(this).siblings(textArea);
    var time = $(this).parent().attr("id");

    // Save to local storage
    localStorage.setItem(time, taskText);
  })

  function trackTime() {
    // Get current hours and log
    var timeNow = moment().hour();
    console.log(timeNow);

    // Loop over calandar rows
    calendarRow.each(function() {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockTime);
    })


  }











// })