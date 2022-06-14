const totalTime=7500
const breathingTime=3000
const holdTime=1500

const text=document.querySelector(".text")
const container=document.querySelector(".container")

breathInOut()

function breathInOut()
{
	text.innerText="Breath In"
	container.className="container grow"

	setTimeout(()=>{
		text.innerText="Hold"
		container.className="container hold"

		setTimeout(()=>{
		text.innerText="Breath Out"
		container.className="container shrink"
		},holdTime)
		
	},breathingTime)
}

setInterval(breathInOut, totalTime);

