const strengthMeter = document.getElementById('strength-meter')
const inputField=document.querySelector('.password-input')
const reasonsContainer = document.getElementById('reasons')



inputField.addEventListener('input', update)


function update()
{

	calculateStrength(inputField.value)
	
}



function calculateStrength(password)
{
	const allWeakness=[]
	allWeakness.push(lengthWeakness(password))
	allWeakness.push(lowerCaseWeakness(password))
	allWeakness.push(upperCaseWeakness(password))
	allWeakness.push(numberWeakness(password))
	allWeakness.push(specialCaseWeakness(password))
	
	console.log(allWeakness)

	updateDisplay(allWeakness,password)
}


function updateDisplay(weaknessArray,password)
{
	let strength=0
	let passLength=password.length
	reasonsContainer.innerHTML = ''


	if (passLength===0) 
		{
			strength=0
		}
	else
	{

		weaknessArray.forEach(weakpoint=>{

		strength=strength+weakpoint.reduce

		const messageElement = document.createElement('div')
        messageElement.innerHTML = weakpoint.message
        reasonsContainer.appendChild(messageElement)
		})

		if (strength>100)
		 {
		 	strength=100
		 }
	}
	strengthMeter.style.setProperty('--strength', strength)
}


/*ALL WEAKNESS FUNCTIONS*/
/*----------------------*/

function lengthWeakness(password)
{
	const passLength=password.length

	if (passLength<=2) 
	{
		return {
			message:"Password is too short",
			reduce:5
		}
	}
	else if (passLength<=5)
	 {
	 	return {
	 		message:"Your password could be more long",
	 		reduce:15
	 	}
	 }
	 else
	 {
	 	return {
	 		message:"length is fine <span>&check;</span>",
	 		reduce:25
	 	}
	 }

}


function lowerCaseWeakness(password)
{
  const matches = password.match(/[a-z]/g) || []

  if (matches.length === 0) {
    return {
      message: "Your password has no lower case",
      reduce: 0
    }
  }

  else if (matches.length <= 1) {
    return {
      message: "Your password could use more lower case",
      reduce: 10
    }
  }
  else
  {
  	return {
      message: "lower case added <span>&check;</span>",
      reduce: 15
    }	
  }
}


function upperCaseWeakness(password)
{
	const matches = password.match(/[A-Z]/g) || []

  if (matches.length === 0) {
    return {
      message: "Your password has no upper case",
      reduce: 0
    }
  }

  else if (matches.length <= 1) {
    return {
      message: "Your password could use more upper case",
      reduce: 10
    }
  }
  else
  {
  	return {
      message: "Upper case added <span>&check;</span>",
      reduce: 15
    }
  }
}

function numberWeakness(password)
{
	const matches = password.match(/[0-9]/g) || []

  if (matches.length === 0) {
    return {
      message: "Your password has no number",
      reduce: 0
    }
  }

  else if (matches.length <= 2) {
    return {
      message: "Your password could use more number",
      reduce: 10
    }
  }
  else
  {
  	 return {
      message: "number added <span>&check;</span>",
      reduce: 20
    }
  }
}


function specialCaseWeakness(password)
{
	const matches = password.match(/[^0-9a-zA-Z\s]/g) || []

  if (matches.length === 0) {
    return {
      message: "no special case",
      reduce: 0
    }
  }

  if (matches.length <= 2) {
    return {
      message: "Your password could use more special case",
      reduce: 10
    }
  }
  else
  {
  	  return {
      message: "special case added <span>&check;</span>",
      reduce: 25
    }
  }
}