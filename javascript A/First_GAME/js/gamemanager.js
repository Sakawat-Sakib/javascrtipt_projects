let GameManager=
{
	setGameStart:function(classType)
		{
		this.resetPlayer(classType);
		this.setPreFight();
		},

	resetPlayer:function(classType)
		{

			switch(classType)
				 { 
				 	case "Athena": 
				 	player=new Player(classType,200,0,200,100,50); 
				 	break; 
				 	case "Mortal": 
				 	player=new Player(classType,100,30,100,150,200); 
				 	break; 
				 	case "Wid": 
				 	player=new Player(classType,100,0,150,100,50); 
				 	break; 
				 	case "Regaltos": 
				 	player=new Player(classType,80,50,200,100,50); 
				 	break;
				 } 
				 let getFace=document.querySelector(".face");
			      getFace.innerHTML='<img src="img/' +classType.toLowerCase()+ '.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: '+ player.health +' </p><p>Mana: ' + player.mana + ' </p><p>Strength: ' + player.strength + '</p><p>Ability: ' + player.ability + ' </p><p>Speed: ' +  player.speed + ' </p></div>';

		},

	setPreFight:function()
	 {
	 	let getHeader=document.querySelector(".header");
	 	let getActions=document.querySelector(".actions");
	 	let getArena=document.querySelector(".arena");
	 	getHeader.innerHTML='<p>Task:Find an enemy!</p>';
	 	getActions.innerHTML='<a href="#" class="btn-pre" onclick="GameManager.setFight()">Search for enemy</a>';
	 	getArena.style.visibility="visible";
	 },
	setFight:function()
	 {
	 	let getHeader=document.querySelector(".header");
	 	let getActions=document.querySelector(".actions");
	 	let getEnemy=document.querySelector(".enemy");
	 	//creat Enemy//
	 	let enemy00=new Enemy("Mok",100,0,50,200,100);
	 	let enemy01=new Enemy("Scout",200,40,30,40,100);
	 	let chooseRandom=Math.floor(Math.random()*Math.floor(2));
	 	switch(chooseRandom)
	 	{
	 		case 0:
	 		enemy=enemy00;
	 		break;
	 		case 1:
	 		enemy=enemy01;
	 		break;
	 	}
	 	getHeader.innerHTML='<p>Task:Choose your moves!</p>';
	 	getActions.innerHTML='<a href="#" class="btn-pre" onclick="PlayerMoves.calcAttack()">Attack!</a>';
	 	getEnemy.innerHTML='<img src="img/'+ enemy.enemyType.toLowerCase() +'.png" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy"> Health:'+enemy.health+'</p><p>Mana:'+enemy.mana+'</p><p>Strength:'+enemy.strength+'</p><p>Ability:'+enemy.ability+'</p><p>Speed:'+enemy.speed+'</p></div>';
	 }

}