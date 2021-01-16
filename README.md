# 05_3rd-Party-API-s_Work-Day-Scheduler

<b>TITLE:</b>
Third Party API-s - Work Day Scheduler

<b>DESCRIPTION:</b><br>
This repository contains the 5th homewwork for the coding bootcamp at UOB. This assignnment is a 'Work Day Scheduler', which has been created for the purpose of being an efficient and well-organised employee. This scheduler allows storage of tasks within the given working hours of the day, which helps to remind the employee of all the tasks they wish to accomplish, whilst being informed about the current day, date and time.

This one-page application has been created with the use of HTML, CSS, Bootstrap, Javascript and jQuery. The user can freely enter a task and save it within the given time slot that they wish to complete it in. The header showcases the name and purpose of the app, while also displaying the current day, date and time below the title. The rest of the page is a table of 9 horizontal time blocks, each consisting of the work-time of the day (9am - 5pm, the regular office hours), a text-area, and a save button. All the user has to do is the following:

1. Pick the hour of the working day that they have to assign a task to complete in.
2. Within that hour, fill out the text-area with the task that they wish to fulfil.
3. Press the save-button.

<b><i>Special Features:</i></b><br>
What makes this application special is the following two features:

1) The time-blocks are all represented as specific colours, depending on what time of the day it is; the blocks in grey show the blocks for the time that has <i>passed</i>, the red block shows the <i>present</i> time, and the blocks in green show the blocks for the time <i>yet to occur</i>. This makes it easier for the user to identify which tasks are to be prioritised most, with respect to time.

2) The tasks are saved into the local storage, the moment the user clicks on the save-button for any time-block. Therefore, if the user has to reload the page, the tasks are picked up from the local storage and placed within their respective time-blocks, so as to remind the user of their daily activity. They may refresh the app for reuse by clicking on the remove button in the "Application" section, in the local storage in the console, to save and store new activities in the time-blocks.

The image below represents the application more comrehensively:



<b>SUMMARY:</b>