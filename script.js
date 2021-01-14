// Storing tasks to local storage
let hourlyTasks = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": [] 
}

$(document).ready(function() {

    // Click save button and store to local storage
    $("#saveBtn").on("click", function() {

        localStorage.setItem("hourlyTasks", JSON.stringify(hourlyTasks));
    })

    // Update the time and time code of planner rows
    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();
    
        // loop over time blocks
        $("#timeId").each(function() {
          var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
          // check if we've moved past this time, so change the class wrt time
          if (blockHour < currentHour) {
            $(this).addClass("past");
          } 
          else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
          } 
          else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
          }
        });
      }

      hourUpdater();



  })

