let allButton=document.getElementsByTagName('button');
let copyAllButton=[];


for(let i=0;i<allButton.length;i++)
{
copyAllButton.push(allButton[i].classList[0]);
}



function colorChange(property)
{
	if(property.value==='red')
	{
		buttonRed();
	}
	else if(property.value==='green')
	{
		buttonGreen();
	}
	else if (property.value==='reset')
	 {
	 	buttonReset();
	 }
	 else if (property.value==='random')
	 {
	 	buttonRandom();
	 }

}

function buttonRed()
{
	for(let i=0;i<allButton.length;i++)
	{
		allButton[i].classList.remove(allButton[i].classList);
		allButton[i].classList.add('reed');
	}
	
}

function buttonGreen()
{
	for(let i=0;i<allButton.length;i++)
	{
		allButton[i].classList.remove(allButton[i].classList);
		allButton[i].classList.add('green');
	}
	
}


function buttonReset()
{
	for(let i=0;i<allButton.length;i++)
	{
		allButton[i].classList.remove(allButton[i].classList);
		allButton[i].classList.add(copyAllButton[i]);
	}
}

function buttonRandom()
{
	let choice=['face','yaho','goog','green']
	for(let i=0;i<allButton.length;i++)
	{

		let ranNum=Math.floor(Math.random()*4);
		allButton[i].classList.remove(allButton[i].classList);
		allButton[i].classList.add(choice[ranNum]);
	}
}