# Work Day Scheduler Starter Code



## Description

A daily planner that uses moment.js to give you the current date and let you know if time slots are in the past, present or future. Users can input tasks and save them to local storage. Upon refreshing the page or opening it back up their tasks will still be there.

    In the future I would like to expand this to be a 24 hour daily planner so users who work different hours or users who want to use to for outside of work. When do this I would love to have it focus on the past four hours and future four hours, upon opening up the page or refreshing the page. I would also like to clean up the saveBtn function as currently it keeps adding things to the array instead of finding and replacing  if there is already information stored from that time slot. This doesn't appear to affect the user on their end but it would keep local storage to a minimum. Also having the task be draggable in case a meeting gets pushed back or forward would be a nice addition.

## Instructions

Due to the fact that this currently only covers a 9am - 5pm, if you using this outside that time frame you will have to go into the index.html file and  change the id for the textarea to be within the time you are viewing this. You also need to change the data-hour to be the 24hour clock equivalent. You should also change the text displayed by the column of each row, this won't effect the code at all but it will help with the visualization. 


## Built with
HTML
CSS
Javescript
Jquery
Bootscrap
moment.js



## Website
Below is a screenshot of https://nickhill2380.github.io/work-day-scheduler/

![image](https://user-images.githubusercontent.com/71850826/99181353-f4c30380-26fb-11eb-95a1-f2df8ad12873.png)


## Credits

This website was designed for class. They provided most of the html, besides the timeblock area and the css. I made the javascript.