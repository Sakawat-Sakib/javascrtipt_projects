let getItems=document.querySelector(".items");
/*--Main Function*/
function rpsGame(choice)
{
	var humanChoice,botChoice;
	humanChoice=choice.id;
	botChoice=numberToChoice(randomNumber());

	result=decideWinner(humanChoice,botChoice);
	message=finalMessage(result);


	rpsFrontEnd(humanChoice,botChoice,message);
}
/*-----END---*/



/*BOT choice*/
function randomNumber()
{
	return Math.floor(Math.random()*3);
}
function numberToChoice(num)
{
	return ['rock','paper','scissors'][num]
}
/*-----END-----*/



/*Deciding Winner*/
/*--------------*/
function decideWinner(human,bot)
{
	var rpsObj=
	{
		'rock':{'scissors':1,'rock':0.5,'paper':0},
		'paper':{'rock':1,'paper':0.5,'scissors':0},
		'scissors':{'paper':1,'scissors':0.5,'rock':0}
	};
	var yourScore=rpsObj[human][bot];
	var botScore=rpsObj[bot][human];

	return [yourScore,botScore];
}
/*------END-------*/



/*FINAL MESSAGE*/
function finalMessage(res)
{
	if(res[0]===0)
	{
		return {'message':'You lost','color':'red'};

	}
	else if(res[0]===0.5)
	{
		return {'message':'You tied','color':'yellow'};

	}
	else
	{
		return {'message':'You won','color':'green'};

	}
}
/*----END-----*/



/*front End part*/
function rpsFrontEnd(human,bot,msg)
{
	var imgObj=
	{
		'rock':document.getElementById('rock').src,
		'paper':document.getElementById('paper').src,
		'scissors':document.getElementById('scissors').src
	}
	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	var humanDiv=document.createElement('div');
	var botDiv=document.createElement('div');
	var msgDiv=document.createElement('div');

	getItems.appendChild(humanDiv);
	getItems.appendChild(msgDiv);
	getItems.appendChild(botDiv);


	humanDiv.innerHTML='<img src="'+imgObj[human]+'">'
	msgDiv.innerHTML="<h1 style='color: " + message['color'] + "; font-size:60px; padding:30px; '> " + message['message'] + " </h1>"
	botDiv.innerHTML='<img src="'+imgObj[bot]+'">'
	
}
/*---END---*/

