
const CIRCLEclass='circle'
const Xclass='x'
const board=document.querySelector('[data-board]')
const allCell=document.querySelectorAll('[data-cell]')
const message=document.querySelector('[data-message]')
const displayResult=document.querySelector('[data-result]')
const btn=document.querySelector('[data-restart]')
let circleTurn

const WINNING_COMBO=
[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


startGame()



function startGame()
{
	circleTurn=false

	allCell.forEach(cell=>{
	cell.classList.remove(Xclass)
	cell.classList.remove(CIRCLEclass)
	cell.addEventListener('click',handClick,{once:true})
    })

    setBoardHoverClass()

    displayResult.classList.remove('show')
}



function handClick(e)
{
const cell=e.target
const currentClass=circleTurn ? CIRCLEclass : Xclass

placeMark(cell,currentClass)

if(checkWin(currentClass))
	{
		endGame(false)
	}
else if(isDraw())
	{
		endGame(true)
	}
else
	{
	swapTurn()
	setBoardHoverClass()
	}

}




/*ALL FUNCTIONS*/
/*ALL FUNCTIONS*/
function placeMark(cell,currentClass)
{
cell.classList.add(currentClass)
}

function swapTurn()
{
	circleTurn=!circleTurn
}

function setBoardHoverClass()
{
board.classList.remove(Xclass)
board.classList.remove(CIRCLEclass)

	if (circleTurn) 
	{
		board.classList.add(CIRCLEclass)
	}

	else
	{
		board.classList.add(Xclass)
	}	

}


function checkWin(currentClass)
{
	return WINNING_COMBO.some(combo=>{
		return combo.every(index=>{
			return allCell[index].classList.contains(currentClass)
		})
	})
}

function endGame(draw)
{
	if(draw)
	{
		message.innerText="Draw!"
	}

	else
	{
		message.innerText=`${circleTurn ? "O's" : "X's"} Wins!`
		
	}
	displayResult.classList.add('show')
}


function isDraw()
{
	return [...allCell].every(cell=>{
		return cell.classList.contains(Xclass)||cell.classList.contains(CIRCLEclass)
	})
}

btn.addEventListener('click',startGame)