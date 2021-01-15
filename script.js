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
$(document).ready(function() {

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

    // Loop over calandar rows to get block time
    calendarRow.each(function() {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // Check time and set classes for background color indicators
      if (blockTime < timeNow) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
      }
      else if (blockTime === timeNow) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

      }
      
    })
  }

      // Get item from local storage if any
      $("#hour9 .calendar-row").val(localStorage.getItem("hour9"));
      $("#hour10 .calendar-row").val(localStorage.getItem("hour10"));
      $("#hour11 .calendar-row").val(localStorage.getItem("hour11"));
      $("#hour12 .calendar-row").val(localStorage.getItem("hour12"));
      $("#hour13 .calendar-row").val(localStorage.getItem("hour13"));
      $("#hour14 .calendar-row").val(localStorage.getItem("hour14"));
      $("#hour15 .calendar-row").val(localStorage.getItem("hour15"));
      $("#hour16 .calendar-row").val(localStorage.getItem("hour16"));
      $("#hour17 .calendar-row").val(localStorage.getItem("hour17"));

      trackTime();

})