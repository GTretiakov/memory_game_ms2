# Memory Game
This memory game is a milestone project, and a part of Full Stack Software Development program, which summarizes
Interactive Frontend Development module provided by Code Institute, an educational platform used by Canadian Business College.
It was created to help you boost and improve your memory while having fun.

## UX
An inspiration for this project comes from a game I found on memozor.com, a free memory games website, where you can find a big variety of memory games with different styles.
<br/>Link to the game: https://www.memozor.com/other-memory-games/numbers-memory-games/light-up-numbers
<br/>To customize my project and make it different from the original version I decreased the quantity of numbers from 30 to 9 and added a Start button that starts the game.
The design of this game is very simple and user intuitive, which makes it easy to start playing right away. <br>
![wireframe](assets/images/wireframe.jpg)
<br/>The result of my work is very close to the original wireframe:<br/>
![Memory Game](assets/images/memoryGame.jpg)

### User Stories
As a player I want:
- The game to be playable using my mouse and/or touchscreen.
- A large easy to press buttons.
- Rules of the game to be easy to understand.


## Features
-	The game has a fixed width of 300px that makes it responsive and suitable for playing on any device.
-	Very simple design makes it easy to start playing and doesn't require additional instructions.
-	You can choose your preferred speed level from 3 options available: Slow, Medium, Fast.
-	All buttons (except for 'Start' button) have a sound effect.
- The JavaScript code gives you a random series of numbers, and it never repeats same number two times in a row.
- For those who love cheating I left a console.log function that logs an array with ordered numbers you need to repeat.

## Features Left to Implement
-	Sound for 'Start' button.
- High Score.

## Technologies Used
-	HTML
-	CSS
-	JavaScript
- Jquery
-	GitHub
-	GitPod
-	Google Fonts
-	Draw.io

## Testing
Most of the testing was done manually during development process using Google Chrome Inspect tool.<br/>

The basis for this game are two empty arrays. My JS code randomly pushes numbers to "myArray" and a player has to repeat these numbers clicking on them and pushing into "myArray2". To compare arrays, I used a snippet of code found on https://masteringjs.io/tutorials/fundamentals/compare-arrays. It compares not only arrays but every value they store.<br>
One of the biggest issues I had while developing this game was implementing timeout inside for-loop inside my 'repeat' function. The length of myArray was increasing and I didn't know how to increase a timeout accordingly. After hours of research and experiments with setTimeout and setInterval functions I've found a solution on [Stack Overflow](https://stackoverflow.com/questions/7749090/how-to-use-setinterval-function-within-for-loop).

<br/>To record player's score I've used myArray.length in 'score' function, but the problem was detected when I noticed that I could increase score just by clicking the Start button as it adds new number to myArray with every click. To avoid it I've made a decision to disable 'Start' button for the time of playing. It enables again after the game is over. Also, I've disabled buttons with numbers to make sure a player can't finish the game before even starting it.

<br/>After playing the game over 100 times I've started noticing that even though JavaScript gave me a random number every time I played, it also was repeating the same number two or three times in a row very often and made my playing process less enjoyable. I guess it was because 9 digits is not a big amount to choose from (to be honest, I don't know much about Probability theory). After this discovery I made a decision to adjust my click function for 'playbtn' so it never repeats the same number two times in a row.

<br/>Also I had some issues while implementing sound feature. First thing I did was accessing mp3 file from JS file, but while testing the game I've noticed that sound randomly doesn't play on fast speed mode and console shows 404 error. I've assumed that the problem was the length or a size of my mp3 file. I've used https://audiotrimmer.com/ to decrease the length from 0.8s to 02s. And along with that I've decided to access mp3 file using HTML tag instead of accessing it from JS taking into account some suggestions from https://stackoverflow.com/questions/9419263/how-to-play-audio. After doing so the issue was resolved. However, when I've tested the game on my smartphone (Samsung S10) it still had few times when the sound disappeared. I'm not sure why this is happening but the solution may be using The Web Audio API as mentioned earlier link advices. Hopefully this issue will be figured out and resolved in nearest future.
<br/>Unfortunately, 404 error was still showing up after every time I clicked on a button.<br/>
![404](assets/images/404.jpg)
![Failed](assets/images/Failed.jpg)
<br/>Even though it didn't influence game's performance, it was still very annoying. After couple hours of experiments and research I found an advice on https://github.com/gridsome/gridsome/issues/711 and added an empty link tag to my HTML file. 404 does not show up any more.



<br/>To make sure the site is responsive and working properly. I’ve done all possible actions on all types of available devices. All elements are working as they are expected.

Special thanks to http://ami.responsivedesign.is/ where I checked responsiveness on different types of devices.
![responsive](assets/images/responsive.jpg)

CSS code was checked with [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and no errors were found.<br/>
HTML code was checked with [HTML Validator](https://validator.w3.org/) and no errors were found.<br/>
JavaScript code was checked with [Syntax Validator](https://esprima.org/demo/validate.html) and it says "Code is syntactically valid." However I've also checked my JavaScript code with [BeautifyTools validator](http://beautifytools.com/javascript-validator.php) it showed me a large number of unsignificant mistakes such as missing or unnecessary semicolon. I may have to come back to my JavaScript code in the future and make it more beautiful, organized and easier to read.

## Credits
The idea for the game was taken from https://www.memozor.com/ - a website with huge selection of free memory games.
<br/>The sound for clicking buttons was downloaded from https://www.myinstants.com/
<br/>Special thanks to my teacher Usmaan Mujtaba (Canadian Business College) who consulted me during the process of project creation.
