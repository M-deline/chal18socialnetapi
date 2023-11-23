# Social Network API Application
## Link to Video Demo
* Please click [here](https://drive.google.com/file/d/1Ab9Zz1UX-rmaZRssQwKIi86xCNrRonDB/view) to view the video demo
## Overview
* This application uses Node.js and Express.js to create a social network app so that users can create a user to post thoughts or react to other people's thoughts and add friends. The user is able to update their username or delete their user and they are able to post thoughts as well as post reactions to somebody else's thought. They can add or delete friends as they wish.
* To make this app work properly, there must be a server and a databse (config/connections to connect to mongoose). Then models are used for thought and user to be able to see how the program and data will be structured/executed. The routes are used to define the routes for the website so that the app knows how to respond to the API endpoint and user input (GET, POST, PUT, DELETE). The controllers are used to receive everything listed in the models and then use that to  handle requests and returning the response to the user/client. The utils folder for this specific app is used to get the current time and then export it to the models into the thoughts so that the users can see when a thought was created.
## Challenges & Successes:
* It was a challenge setting up the models at first and making sure that the syntax was correct. I used a lot of the previous activities from the University of Denver BootCamp to reference.
* The utils/currentdate.js was challenging because I tried a few different ways to tryto display the current time but I was having issues with getting ti to work. I searched up a few websites (credits below) and found a gist that worked. I also was exporting it incorrectly due to a typo and did not realize that until I remade the time file. 
* It was a success because the app works as intended. On Insomnia, I was able to use the different functions (user, thought, reaction, friend) and post and delete as needed.
* It was a success because I was able to solidify what I learned in class and be able to apply them to this app and make it work.
## Technologies Used
* Node.js
* JavaScript
* Express.js
* Mongoose
* Insonmia
## Installation and How to use
* Open VSCode or download VSCode if not already installed
* Git Clone this repo by using SSH or your prefered method and open in the VSCode editor
* Open the integrated terminal and run `npm install` to install all dependencies sio that the app will run properly
* Using Insomnia you can test the routes and add friends, reactions, sers, and thoughts as well as delete them or update the username to an existing user
## Credits
- bbrame, et al. “How Do You Display Javascript Datetime in 12 Hour AM/PM Format?” Stack Overflow, 1 Mar. 1958, stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format. 
- kschieck, and Neil Lunn. “$pull from Array in Document.” Stack Overflow, 5 Mar. 2015, stackoverflow.com/questions/28868152/pull-from-array-in-document. 
-“Mongoose Populate() Method.” GeeksforGeeks, 10 June 2021, www.geeksforgeeks.org/mongoose-populate-method/. 
- Previous modules from University of Denver Bootcamp
- “Understanding the Mongoose __V Field.” ObjectRocket Understanding the Mongoose v Field Comments, kb.objectrocket.com/mongo-db/understanding-the-mongoose-__v-field-1011. Accessed 17 Nov. 2023. 
- Rosenkranz, Alex. “Date Formats.” Gist, 2020, gist.github.com/arosenkranz/c9e9e1f360d4bbc93b29f3b523893fff. 
- Thanks to my friend and tutor Rebecca for helping me with the bonus and helping me make sure that the syntax was correct for the different routes and time. 
