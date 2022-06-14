let galleryImages=document.querySelectorAll(".allImg");
let getLatestImg;
let windowWidth=window.innerWidth;

if(galleryImages)
 {	
	galleryImages.forEach(function(image,index){
		image.onclick=function()
		{

			/*Getting Image URL*/
			/*-----------------*/
			let getElementCss=window.getComputedStyle(image);
			let getFullImgUrl=getElementCss.getPropertyValue("background-image");
			let getImgUrlPos=getFullImgUrl.split("/Image-gallery/img/");
			let setNewUrl=getImgUrlPos[1].replace('")','');
			/*-------END-------*/

			getLatestImg=index+1;

			/*Creating POP-UP window*/
			let container=document.body;
			let newImgWindow=document.createElement("div");
			container.appendChild(newImgWindow);
			newImgWindow.setAttribute("class","popup-window");
			newImgWindow.setAttribute("onclick","closeWindow()");
			/*-----END------*/

			/*Inserting IMG in pop-up window*/
			let newImg=document.createElement("img");
			newImgWindow.appendChild(newImg);
			newImg.setAttribute("src","img/"+setNewUrl);
			newImg.setAttribute("id","current-img");
			/*-----------END------------*/

			newImg.onload=function()
			{
				/*Calculating Image Width*/
				let imgWidth=this.width;
				let calcImgEdge=((windowWidth-imgWidth)/2)-100;
				/*---------END----------*/

				/*Creating next and prev button*/
				let newPrevBtn=document.createElement("a");
				let btnPrevTxt=document.createTextNode("Prev");
				newPrevBtn.appendChild(btnPrevTxt);
				container.appendChild(newPrevBtn);
				newPrevBtn.setAttribute("class","img-btn-prev");
				newPrevBtn.setAttribute("onclick","changeImg(0)");
				newPrevBtn.style.cssText="left: "+calcImgEdge+"px;";

				let newNextBtn=document.createElement("a");
				let btnNextTxt=document.createTextNode("Next");
				newNextBtn.appendChild(btnNextTxt);
				container.appendChild(newNextBtn);
				newNextBtn.setAttribute("class","img-btn-next");
				newNextBtn.setAttribute("onclick","changeImg(1)");
				newNextBtn.style.cssText="right: "+calcImgEdge+"px;";
				/*-----------END-------------*/
			}
		}
	});
 }	

 function closeWindow()
 {
 	document.querySelector(".popup-window").remove();
 	document.querySelector(".img-btn-next").remove();
 	document.querySelector(".img-btn-prev").remove();
 }

function changeImg(changeDir)
{
	document.querySelector("#current-img").remove();

	let getImgWindow=document.querySelector(".popup-window");
	let newImg=document.createElement("img");
	getImgWindow.appendChild(newImg);

	let calcNewImg;
	if(changeDir===1)
	{
		calcNewImg=getLatestImg+1;
		if (calcNewImg>galleryImages.length) 
		{
			calcNewImg=1;
		}
	}
	else if(changeDir===0)
	{
		calcNewImg=getLatestImg-1;
		if (calcNewImg<1) 
		{
			calcNewImg=galleryImages.length;
		}
	}
	newImg.setAttribute("src","img/img"+calcNewImg+".jpg");
	newImg.setAttribute("id","current-img");
	getLatestImg=calcNewImg;

	newImg.onload=function()
			{
				
				let imgWidth=this.width;
				let calcImgEdge=((windowWidth-imgWidth)/2)-100;

				let nextBtn=document.querySelector(".img-btn-next");
				nextBtn.style.cssText="right: "+calcImgEdge+"px;";

				let prevBtn=document.querySelector(".img-btn-prev");
				prevBtn.style.cssText="left: "+calcImgEdge+"px;";
			}
}

