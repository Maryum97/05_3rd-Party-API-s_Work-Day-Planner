$(document).ready(function() {

    // Click save button and store to local storage
    $("#saveBtn").on("click", function() {
        var value = $(this).siblings("text-entry").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
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

