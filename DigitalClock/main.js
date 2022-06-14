function digitalClock()
{
	let fullDate=new Date();
	let hours=fullDate.getHours();
	let min=fullDate.getMinutes();
	let sec=fullDate.getSeconds();
	if(hours<10)
	{
		hours="0"+hours;
	}
	if(min<10)
	{
		min="0"+min;
	}
	if(sec<10)
	{
		sec="0"+sec;
	}
	document.querySelector('#hrs').innerHTML=hours;
	document.querySelector('#min').innerHTML=min;
	document.querySelector('#sec').innerHTML=sec;
}

setInterval(digitalClock,1000);