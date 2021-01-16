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
  nineAM();
  tenAM();
  elevenAM();
  twelvePM();
  onePM();
  twoPM();
  threePM();
  fourPM();
  fivePM();
}


  // Defining and logging the main elements in the scheduler
  var hourId = $(".hour");
  console.log(hourId);

  var calendarRow = $(".calendar-row");
  console.log(calendarRow);


  // Setting the classes for each time block on the scheduler
  function trackTime() {

    // Get current hours 
    var timeNow = moment().hour();

      // Check if time NOW matches time of time-block, and assign classes for background color indicators
      // 9am
      if (timeNow > 9) {
        $(".text-area-1").addClass("past");
      }
      else if (timeNow === 9) {
        $(".text-area-1").addClass("present");
      }
      else if (timeNow < 9) {
        $(".text-area-1").addClass("future");
      }

      // 10am
      if (timeNow > 10) {
        $(".text-area-2").addClass("past");
      }
      else if (timeNow === 10) {
        $(".text-area-2").addClass("present");
      }
      else if (timeNow < 10) {
        $(".text-area-2").addClass("future");
      }

      // 11am
      if (timeNow > 11) {
        $(".text-area-3").addClass("past");
      }
      else if (timeNow === 11) {
        $(".text-area-3").addClass("present");
      }
      else if (timeNow < 11) {
        $(".text-area-3").addClass("future");
      }

      // 12pm
      if (timeNow > 12) {
        $(".text-area-4").addClass("past");
      }
      else if (timeNow === 12) {
        $(".text-area-4").addClass("present");
      }
      else if (timeNow < 12) {
        $(".text-area-4").addClass("future");
      }

      // 1pm
      if (timeNow > 13) {
        $(".text-area-5").addClass("past");
      }
      else if (timeNow === 13) {
        $(".text-area-5").addClass("present");
      }
      else if (timeNow < 13) {
        $(".text-area-5").addClass("future");
      }

      // 2pm
      if (timeNow > 14) {
        $(".text-area-6").addClass("past");
      }
      else if (timeNow === 14) {
        $(".text-area-6").addClass("present");
      }
      else if (timeNow < 14) {
        $(".text-area-6").addClass("future");
      }

      // 3pm
      if (timeNow > 15) {
        $(".text-area-7").addClass("past");
      }
      else if (timeNow === 15) {
        $(".text-area-7").addClass("present");
      }
      else if (timeNow < 15) {
        $(".text-area-7").addClass("future");
      }

      // 4pm
      if (timeNow > 16) {
        $(".text-area-8").addClass("past");
      }
      else if (timeNow === 16) {
        $(".text-area-8").addClass("present");
      }
      else if (timeNow < 16) {
        $(".text-area-8").addClass("future");
      }

      // 5pm
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

  // Setting item to local storage for each text area, and getting from local storage
  function nineAM() {
    var input_textArea = $("text-area-1");
    var output_textDiv = $("text-area-1");

    $(".saveBtn-1").on("click", function() {
      localStorage.setItem("content", input_textArea.value);
      output_textDiv.textContent = input_textArea.value;
    })

    output_textDiv.textContent = localStorage.getItem("content");
    input_textArea.value = localStorage.getItem("content");
  }

  function tenAM() {
    var input_textArea = $("text-area-2");
    var output_textDiv = $("text-area-2");

    $(".saveBtn-2").on("click", function() {
      localStorage.setItem("content", input_textArea.value);
      output_textDiv.textContent = input_textArea.value;
    })

    output_textDiv.textContent = localStorage.getItem("content");
    input_textArea.value = localStorage.getItem("content");
  }

  function elevenAM() {
    var input_textArea = $("text-area-3");
    var output_textDiv = $("text-area-3");

    $(".saveBtn-3").on("click", function() {
      localStorage.setItem("content", input_textArea.value);
      output_textDiv.textContent = input_textArea.value;
    })

    output_textDiv.textContent = localStorage.getItem("content");
    input_textArea.value = localStorage.getItem("content");
  }

  function twelvePM() {
    var input_textArea = $("text-area-4");
    var output_textDiv = $("text-area-4");

    $(".saveBtn-4").on("click", function() {
      localStorage.setItem("content", input_textArea.value);
      output_textDiv.textContent = input_textArea.value;
    })

    output_textDiv.textContent = localStorage.getItem("content");
    input_textArea.value = localStorage.getItem("content");
  }

  function onePM() {
    var input_textArea = $("text-area-5");
    var output_textDiv = $("text-area-5");

    $(".saveBtn-5").on("click", function() {
      localStorage.setItem("content", input_textArea.value);
      output_textDiv.textContent = input_textArea.value;
    })

    output_textDiv.textContent = localStorage.getItem("content");
    input_textArea.value = localStorage.getItem("content");
  }

  function twoPM() {
    var input_textArea = $("text-area-6");
    var output_textDiv = $("text-area-6");

    $(".saveBtn-6").on("click", function() {
      localStorage.setItem("content", input_textArea.value);
      output_textDiv.textContent = input_textArea.value;
    })

    output_textDiv.textContent = localStorage.getItem("content");
    input_textArea.value = localStorage.getItem("content");
  }

  function threePM() {
    var input_textArea = $("text-area-7");
    var output_textDiv = $("text-area-7");

    $(".saveBtn-7").on("click", function() {
      localStorage.setItem("content", input_textArea.value);
      output_textDiv.textContent = input_textArea.value;
    })

    output_textDiv.textContent = localStorage.getItem("content");
    input_textArea.value = localStorage.getItem("content");
  }

  function fourPM() {
    var input_textArea = $("text-area-8");
    var output_textDiv = $("text-area-8");

    $(".saveBtn-8").on("click", function() {
      localStorage.setItem("content", input_textArea.value);
      output_textDiv.textContent = input_textArea.value;
    })

    output_textDiv.textContent = localStorage.getItem("content");
    input_textArea.value = localStorage.getItem("content");
  }

  function fivePM() {
    var input_textArea = $("text-area-9");
    var output_textDiv = $("text-area-9");

    $(".saveBtn-9").on("click", function() {
      localStorage.setItem("content", input_textArea.value);
      output_textDiv.textContent = input_textArea.value;
    })

    output_textDiv.textContent = localStorage.getItem("content");
    input_textArea.value = localStorage.getItem("content");
  }