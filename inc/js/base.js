// var nowPath=location.pathname.split('/').pop();

// //header.html load
// var headerXhr=new XMLHttpRequest();

// headerXhr.open('GET', 'header.html', true);
// headerXhr.send();

// headerXhr.onreadystatechange=function(){
// 	if(headerXhr.readyState==4 && headerXhr.status==200){
// 		header.innerHTML = headerXhr.responseText;
// 		menuHighlight();
// 	}
// };


// //footer.html load
// var footerXhr=new XMLHttpRequest();

// footerXhr.open('GET', 'footer.html', true);
// footerXhr.send();

// footerXhr.onreadystatechange=function(){
// 	if(footerXhr.readyState==4 && footerXhr.status==200){
// 		footer.innerHTML = footerXhr.responseText;
// 	}
// };

// //menu highlight
// function menuHighlight(){

// 	var visitedMenu=document.querySelector('nav a[href*="' + nowPath + '"]');

// 	if(visitedMenu){
// 		visitedMenu.closest('li').classList.add('active');
// 	}else{
// 		document.querySelector('nav ul li').classList.add('active');
// 	}
	
// }

