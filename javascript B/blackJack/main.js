 let dataBase=
{
	'you':{'scoreSpan':'.youScore','div':'.box1','score':0},
	'bot':{'scoreSpan':'.botScore','div':'.box2','score':0},
	'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
	'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
	'wins':0,
	'loss':0,
	'draws':0,
	'standClicked':false,
	'hitClicked':false,
	'turnOver':false,
	'overClicked':false

}

const YOU=dataBase['you'];
const BOT=dataBase['bot'];
const hitSound=new Audio('sounds/swish.m4a');
const winSound=new Audio('sounds/cash.mp3');
const lossSound=new Audio('sounds/aww.mp3');


function hitFunction()
{
	
	if(dataBase['standClicked']===false)
	{
		let card=randomCard();
		showCard(YOU,card);
		updateScore(YOU,card);
		showScore(YOU);

		dataBase['hitClicked']=true;
	}
}



function showCard(player,card)
{
	if(player['score']<=21)
	{
		let cardImg=document.createElement('img');
		cardImg.src=`img/${card}.png`;
		document.querySelector(player['div']).appendChild(cardImg);
		hitSound.play();
	}
}


function againFunction()
{
	

	if(dataBase['turnOver']===true)
	{	
		let yourImg=document.querySelector('.box1').querySelectorAll('img');
		for(let i=0;i<yourImg.length;i++)
		{
			yourImg[i].remove();
		}

		let botImg=document.querySelector('.box2').querySelectorAll('img');
		for(let i=0;i<botImg.length;i++)
		{
			botImg[i].remove();
		}
		YOU['score']=0;
		BOT['score']=0;

		document.querySelector(YOU['scoreSpan']).textContent=0;
		document.querySelector(BOT['scoreSpan']).textContent=0;

		document.querySelector(YOU['scoreSpan']).style.color='white';
		document.querySelector(BOT['scoreSpan']).style.color='white';
		document.querySelector("#popup").textContent="Let's play again";
		document.querySelector("#popup").style.color='orange';

		dataBase['turnOver']=false;
		dataBase['standClicked']=false;
		dataBase['hitClicked']=false;
		dataBase['overClicked']=false;


	}
}

function randomCard()
{
	let random=Math.floor(Math.random()*13);
	return (dataBase['cards'][random]);
}

function updateScore(player,card)
{
	if (card==='A')
	{
		if(player['score']+dataBase['cardsMap'][card][1]<=21)
		{
			player['score'] +=dataBase['cardsMap'][card][1];
		}
		else
		{
			player['score'] +=dataBase['cardsMap'][card][0];
		}
	}
	else
		 {
			 player['score'] +=dataBase['cardsMap'][card];
		 }
}

function showScore(player)
{
	if(player['score']>21)
	{
		document.querySelector(player['scoreSpan']).textContent='BUST!';
		document.querySelector(player['scoreSpan']).style.color='red';
	}
	else
	{
		document.querySelector(player['scoreSpan']).textContent=player['score'];
	}
	
}

function sleep(ms)
{
	return new Promise(resolve=>setTimeout(resolve,ms));
}


async function botFunction()
{
	

	if(dataBase['turnOver']===false&&dataBase['hitClicked']===true&&dataBase['overClicked']===false)
	{
		dataBase['standClicked']=true;
		while(BOT['score']<16&&dataBase['standClicked']===true)
		{
			
			dataBase['overClicked']=true;
			let card=randomCard();
			showCard(BOT,card);
			updateScore(BOT,card);
			showScore(BOT);

			await sleep(1000);

			
		}
		showResult(winnerFunction());

		document.querySelector(".wins").textContent=dataBase['wins'];
		document.querySelector(".losses").textContent=dataBase['loss'];
		document.querySelector(".draws").textContent=dataBase['draws'];

		dataBase['turnOver']=true;
		
	}
	
		
		document.querySelector(".wins").textContent=dataBase['wins'];
		document.querySelector(".losses").textContent=dataBase['loss'];
		document.querySelector(".draws").textContent=dataBase['draws'];

		

		
}
	

//compute winner

function winnerFunction()
{
	let winner;

	if(YOU['score']<=21)
	{
		if(YOU['score']>BOT['score']||BOT['score']>21)
		{
			winner=YOU;
			dataBase['wins']++;
		}
		else if(YOU['score']<BOT['score'])
		{
			winner=BOT;
			dataBase['loss']++;
		}
		else if(YOU['score']===BOT['score'])
		{
			dataBase['draws']++;
		}
	}
	else if(YOU['score']>21&&BOT['score']<=21)
	{
		winner=BOT;
		dataBase['loss']++;
	}
	else if(YOU['score']>21&&BOT['score']>21)
	{
		dataBase['draws']++;
	}

	return winner;
}

function showResult(winner)
{
	let message,msgColor;

	if(winner===YOU)
	{
		message='You Won!';
		msgColor='green';
		winSound.play();
	}
	else if (winner===BOT)
	 {
	 	message='You Lost!';
		msgColor='red';
		lossSound.play();
	 }

	 else
	 {
	    message='Draw';
		msgColor='yellow';
	 }

 document.querySelector("#popup").textContent=message;
 document.querySelector("#popup").style.color=msgColor;
}