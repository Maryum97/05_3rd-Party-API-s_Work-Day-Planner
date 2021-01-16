// Display current date and time in the header or the navbar
var currentDate = moment().format("dddd LL");
console.log(currentDate);
$("#current-date").append(currentDate);

var currentTime = moment().format("LT");
console.log(currentTime);
$("#current-time").append(currentTime);

var now = new Date().getHours();

// Getting functions ready
window.onload = function() {
  trackTime()
}


  // Defining and logging the main elements in the scheduler
  var hourId = $(".hour");
  console.log(hourId);

  var saveBtn = $(".saveBtn");
  console.log(saveBtn);

  var calendarRow = $(".calendar-row");
  console.log(calendarRow);

// Add event listener to saveBtn
  saveBtn.on("click", function() {
    var taskText = $(this).siblings(textArea).val();
    var time = $(this).parent().attr("id");

    // Save to local storage
    localStorage.setItem(time, taskText);
  })

  // Setting the classes for each time block on the scheduler
  function trackTime() {

    // Get current hours 
    var timeNow = moment().hour();

      // Check if time NOW matches time of time-block, and assign classes for background color indicators
      if (timeNow > 9) {
        $(".text-area-1").addClass("past");
      }
      else if (timeNow === 9) {
        $(".text-area-1").addClass("present");
      }
      else if (timeNow < 9) {
        $(".text-area-1").addClass("future");
      }

      if (timeNow > 10) {
        $(".text-area-2").addClass("past");
      }
      else if (timeNow === 10) {
        $(".text-area-2").addClass("present");
      }
      else if (timeNow < 10) {
        $(".text-area-2").addClass("future");
      }

      if (timeNow > 11) {
        $(".text-area-3").addClass("past");
      }
      else if (timeNow === 11) {
        $(".text-area-3").addClass("present");
      }
      else if (timeNow < 11) {
        $(".text-area-3").addClass("future");
      }

      if (timeNow > 12) {
        $(".text-area-4").addClass("past");
      }
      else if (timeNow === 12) {
        $(".text-area-4").addClass("present");
      }
      else if (timeNow < 12) {
        $(".text-area-4").addClass("future");
      }

      if (timeNow > 13) {
        $(".text-area-5").addClass("past");
      }
      else if (timeNow === 13) {
        $(".text-area-5").addClass("present");
      }
      else if (timeNow < 13) {
        $(".text-area-5").addClass("future");
      }

      if (timeNow > 14) {
        $(".text-area-6").addClass("past");
      }
      else if (timeNow === 14) {
        $(".text-area-6").addClass("present");
      }
      else if (timeNow < 14) {
        $(".text-area-6").addClass("future");
      }

      if (timeNow > 15) {
        $(".text-area-7").addClass("past");
      }
      else if (timeNow === 15) {
        $(".text-area-7").addClass("present");
      }
      else if (timeNow < 15) {
        $(".text-area-7").addClass("future");
      }

      if (timeNow > 16) {
        $(".text-area-8").addClass("past");
      }
      else if (timeNow === 16) {
        $(".text-area-8").addClass("present");
      }
      else if (timeNow < 16) {
        $(".text-area-8").addClass("future");
      }

      if (timeNow > 17) {
        $(".text-area-9").addClass("past");
      }
      else if (timeNow === 17) {
        $(".text-area-9").addClass("present");
      }
      else if (timeNow < 17) {
        $(".text-area-9").addClass("future");
      }
      
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