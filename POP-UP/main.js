const btnPopUp=document.querySelector("[data-button]")
const overlay=document.querySelector("[data-overlay]")
const crossBtn=document.querySelector("[data-cross]")


btnPopUp.addEventListener('click',function(){
overlay.style.display='block'
})


crossBtn.addEventListener('click',function(){
	overlay.style.display="none"
})

overlay.addEventListener('click',function(){
	overlay.style.display="none"
})
