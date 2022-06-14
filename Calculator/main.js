class Calculator {

	constructor(prevOpTxt,currOpTxt)
	{
		this.prevOpTxt=prevOpTxt
		this.currOpTxt=currOpTxt
		this.clear()
	}
	clear() {
		this.prevOp=''
		this.currOp=''
		this.operation=undefined
	}







	delete() {
		this.currOp=this.currOp.toString().slice(0,-1)
	}

	appendNumber(number) {
		if(number==='.'&& this.currOp.includes('.')) return
		this.currOp=this.currOp.toString()+number.toString()
	}

	chooseOperation(operation) {
		if (this.currOp==='') return
		if (this.prevOp!=='') 
			{
				this.compute()
			}	
		this.operation=operation
		this.prevOp=this.currOp
		this.currOp=''
	}

	compute() {
		let result
		const prev=parseFloat(this.prevOp)
		const curr=parseFloat(this.currOp)
		if (isNaN(prev)||isNaN(curr)) return

			switch(this.operation)
				{
			      case '+':
			        result = prev + curr
			        break
			      case '-':
			        result = prev - curr
			        break
			      case '*':
			        result = prev * curr
			        break
			      case '/':
			        result = prev / curr
			        break
			      default:
			        return
		   		}
		
		   	this.currOp=result
		   	this.prevOp=''	
		   	this.operation=undefined
	}

	addCommaToNumber(number)
	{
		const stringNumber=number.toString()
		const intPart=parseFloat(stringNumber.split('.')[0])
		const decPart=stringNumber.split('.')[1]
			
		let integerDisplay

	    if (isNaN(intPart)) {
	      integerDisplay = ''
	    } 
	    else {
	      integerDisplay = intPart.toLocaleString('en', { maximumFractionDigits: 0 })
	    }


	    if (decPart != null) {
	      return `${integerDisplay}.${decPart}`
	    } 
	    else {
	      return integerDisplay
	    }

	}

	updateDisplay() {
		this.currOpTxt.innerText=this.addCommaToNumber(this.currOp)
		if (this.operation!=null) 
			{
				this.prevOpTxt.innerText=`${this.addCommaToNumber(this.prevOp)}${this.operation}`
			}
		else
			{
				this.prevOpTxt.innerText=this.addCommaToNumber(this.prevOp)
			}
	}
}




const numberButtons=document.querySelectorAll('[data-number]')
const operationButtons=document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelector('[data-equal]')

const clearButton=document.querySelector('[data-clear]')
const deleteButton=document.querySelector('[data-delete]')

const prevOpTxt=document.querySelector('[data-prev-op]')
const currOpTxt=document.querySelector('[data-curr-op')




const calculator=new Calculator(prevOpTxt,currOpTxt)

numberButtons.forEach(button=>{
	button.addEventListener("click",()=>{
		calculator.appendNumber(button.innerText)
		calculator.updateDisplay()
	})
})


operationButtons.forEach(button=>{
	button.addEventListener("click",()=>{
		calculator.chooseOperation(button.innerText)
		calculator.updateDisplay()
	})
})


equalsButton.addEventListener("click",()=>{
	calculator.compute()
	calculator.updateDisplay()
})


clearButton.addEventListener("click",()=>{
	calculator.clear()
	calculator.updateDisplay()
})

deleteButton.addEventListener("click",()=>{
	calculator.delete()
	calculator.updateDisplay()
})