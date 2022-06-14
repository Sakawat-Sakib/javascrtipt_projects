let userScore=document.querySelector('#user-score');
let compScore=document.querySelector('#comp-score');
let resultMessage=document.querySelector('#resultText');

let initialUserScore=0;
let initialCompScore=0;


function mainFunction(choice)
{
	let humanChoice=choice.id;
	let botChoice=generateBot(randomNumber());

	let result=decideWinner(humanChoice,botChoice);

	changeInHtml(result,humanChoice,botChoice);
}


/*GENERATING BOT*/

function randomNumber()
{
	return Math.floor(Math.random()*3);
}

function generateBot(num)
{
	return ['rock','paper','scissors'][num];
}

/*GENERATING BOT END*/


/*Decide Winner*/
function decideWinner(human,bot)
{
	var rpsObj=
	{
		'rock':{'scissors':1,'rock':0.5,'paper':0},
		'paper':{'rock':1,'paper':0.5,'scissors':0},
		'scissors':{'paper':1,'scissors':0.5,'rock':0}
	};

	var humanScore=rpsObj[human][bot];
	var botScore=rpsObj[bot][human];

	return [humanScore,botScore];
}
/*------------------------------*/


/*CHANGE IN HTML*/
function changeInHtml(res,human,bot)
{
 if(res[0]==1)
 {
 	initialUserScore++;
 	userScore.textContent=initialUserScore;
 	resultMessage.textContent='Computer choose: '+bot.toUpperCase()+'. YOU WON!';
 	resultMessage.style.color='green';
 	document.getElementById(human).classList.add('greenGlow');

 	setTimeout(function(){document.getElementById(human).classList.remove('greenGlow')},500);
 }

 else if(res[0]==0.5)
 {
 	resultMessage.textContent='Computer choose: '+bot.toUpperCase()+'. DRAW.';
 	resultMessage.style.color='yellow';
 	document.getElementById(human).classList.add('yellowGlow');

 	setTimeout(function(){document.getElementById(human).classList.remove('yellowGlow')},500);
 }

 else if(res[0]==0)
 {
 	initialCompScore++;
 	compScore.textContent=initialCompScore;
 	resultMessage.textContent='Computer choose: '+bot.toUpperCase()+'. YOU LOOSE!';
 	resultMessage.style.color='red';
 	document.getElementById(human).classList.add('redGlow');

 	setTimeout(function(){document.getElementById(human).classList.remove('redGlow')},500);

 }
}