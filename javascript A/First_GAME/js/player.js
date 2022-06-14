let player;

function Player(classType,health,mana,strength,ability,speed)
{
	this.classType=classType;
	this.health=health;
	this.mana=mana;
	this.strength=strength;
	this.ability=ability;
	this.speed=speed;
}


 





//Attacking Zone//


let PlayerMoves=
{
	calcAttack:function()
	{
		let getPlayerSpeed=player.speed;
		let getEnemySpeed=enemy.speed;




			//player attack//
		let playerAttack=function()
		{
	     let calcBaseDamage;
	     if(player.mana>0)
	     {
	     	calcBaseDamage=player.strength*player.mana/1000;
	     }
	     else
	     {
	     	calcBaseDamage=player.strength*player.ability/1000;	
	     }
	     let offsetDamage=Math.floor(Math.random()*Math.floor(10));
	     let calcOutput=calcBaseDamage+offsetDamage;
	     //number of hits//
	     let numberOfHits=Math.floor(Math.random()*Math.floor(player.ability/10)/2)+1;
	     let attackValues=[calcOutput,numberOfHits];
	     return attackValues;
		}





		//Enemy attack//
		let enemyAttack=function()
		{
	     let calcBaseDamage;
	     if(enemy.mana>0)
	     {
	     	calcBaseDamage=enemy.strength*enemy.mana/1000;
	     }
	     else
	     {
	     	calcBaseDamage=enemy.strength*enemy.ability/1000;	
	     }
	     let offsetDamage=Math.floor(Math.random()*Math.floor(10));
	     let calcOutput=calcBaseDamage+offsetDamage;
	     //number of hits//
	     let numberOfHits=Math.floor(Math.random()*Math.floor(enemy.ability/10)/2)+1;
	     let attackValues=[calcOutput,numberOfHits];
	     return attackValues;
		}




		let getPlayerHealth=document.querySelector(".health-player"); 
		let getEnemyHealth=document.querySelector(".health-enemy");
	 		

 		//ATTACK//

 		if (getPlayerSpeed>=getEnemySpeed)
 		 {
 		 	let  playerAttackValues =playerAttack();
 		 	let totalDamage=playerAttackValues[0]*playerAttackValues[1];
 		 	enemy.health=enemy.health-totalDamage;
 		 	alert("You hit " +playerAttackValues[0]+ " damage  " +playerAttackValues[1]+" times.");
 		 	if (enemy.health<=0)
	 		 	 {
	 		 	 	alert("You won!Refresh browser to play again.");
	 		 	 	getPlayerHealth.innerHTML='Health: '+player.health;
	 		 	 	getEnemyHealth.innerHTML='Health: 0';
	 		 	 }

 		 	else
 		 	 	{
	 		 	 	getEnemyHealth.innerHTML='Health: '+enemy.health;



	 		 	 	//Enemy ATTCAK//
	 		 	 	let enemyAttackValues=enemyAttack();
	 		 	 	let totalDamage=enemyAttackValues[0]*enemyAttackValues[1];
	 		 		player.health=player.health-totalDamage;
	 		 		alert("Enemy hit "+enemyAttackValues[0]+" damage "+enemyAttackValues[1]+" times.");
		 		 	if (player.health<=0)
			 		 	 {
			 		 	 	alert("You loose!Refresh  browser to play again.");
			 		 	 	getPlayerHealth.innerHTML='Health:0';
			 		 	 	getEnemyHealth.innerHTML='Health: '+enemy.health;
			 		 	 }
		 		 	 else
			 		 	 {
			 		 	 	getPlayerHealth.innerHTML='Health: '+player.health;
			 		 	 }

 		 	 	}
 		 }
 		 //enemy attck//

 		 else if (getPlayerSpeed<getEnemySpeed)
 		 {
 		 	let  enemyAttackValues =enemyAttack();
 		 	let totalDamage=enemyAttackValues[0]*enemyAttackValues[1];
 		 	player.health=player.health-totalDamage;
 		 	alert("Enemy hit " +enemyAttackValues[0]+ " damage  " +enemyAttackValues[1]+" times.");
 		 	if (player.health<=0)
 		 	 {
 		 	 	alert("You loose!Refresh browser to play again.");
 		 	 	getEnemyHealth.innerHTML='Health: '+enemy.health;
 		 	 	getPlayerHealth.innerHTML='Health: 0';
 		 	 }
 		 	 else
 		 	 {
 		 	 	getPlayerHealth.innerHTML='Health: '+player.health;



 		 	 	//player ATTACK ATTCAK//
 		 	 	let playerAttackValues=playerAttack();
 		 	 	let totalDamage=playerAttackValues[0]*playerAttackValues[1];
 		 	enemy.health=enemy.health-totalDamage;
 		 	alert("you hit "+playerAttackValues[0]+" damage "+playerAttackValues[1]+" times.");
 		 	if (enemy.health<=0)
 		 	 {
 		 	 	alert("You win!Refresh  browser to play again.");
 		 	 	getEnemyHealth.innerHTML='Health:0';
 		 	 	getPlayerHealth.innerHTML='Health: '+player.health;
 		 	 }
 		 	 else
 		 	 {
 		 	 	getEnemyHealth.innerHTML='Health: '+enemy.health;
 		 	 }

 		 	 }
 		 }
	}



	
 		
}