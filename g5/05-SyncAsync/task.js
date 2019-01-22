//Use the image from the URL: http://tiny.cc/zfim2y
//Using setInterval or/and setTimeout to make the Robot to move from far left to far right on the screen and stop there.
//The movement should be done from a JS function, one move by a time.
//Add two buttons, (left, right) = when user click on them the robot will move one step left (back) or one step //right (forward).

//NO CSS FILE, NO CSS ANIMATIONS, CSS ONLY THROUGH JS


//BONUS add button to stop the movement of the robot and another to re-start it again from the position where it was stopped.

//let inter = setInterval(...);
//clearInterval(inter)

let position = 0;
let step = 10; //10%
let max = 100;

//Should move the robot to the right for the "STEP" value
function moveRight()
{
	applyPositionToRobot();
}

//Should move the robot to the left for the "STEP" value
function moveLeft()
{
	applyPositionToRobot();
}

//Will call set ot functions for every 1 second.
let moveIntervaller = setInterval(() => {
	
	moveRight(); //By default move it to the right
	isEnd(); //Check is end of the movement - it means that position had reached 100% of the screen
	
}, 1000); //1000 = 1s

//It will apply the new position (style) to the robot
function applyPositionToRobot()
{
	document.querySelector('img').style = `position: relative; left: ${position}%`;
	//.style = 'position:relative; left: '+position+'';
}

//Will check is end of the screen and it will stop the movement
function isEnd()
{
	if(position >= max)
	{
		clearInterval(moveIntervaller);
	}
}

document.getElementById("buttonLeft").addEventListener('click', (e) => {});
document.getElementById("buttonRight").addEventListener('click', (e) => {});

//Start
applyPositionToRobot();