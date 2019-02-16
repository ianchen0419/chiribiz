var nowPath=location.pathname.split('/').pop();

//header.html load
var headerXhr=new XMLHttpRequest();

headerXhr.open('GET', 'header.html', true);
headerXhr.send();

headerXhr.onreadystatechange=function(){
	if(headerXhr.readyState==4 && headerXhr.status==200){
		header.innerHTML = headerXhr.responseText;
		menuHighlight();
	}
};


//footer.html load
var footerXhr=new XMLHttpRequest();

footerXhr.open('GET', 'footer.html', true);
footerXhr.send();

footerXhr.onreadystatechange=function(){
	if(footerXhr.readyState==4 && footerXhr.status==200){
		footer.innerHTML = footerXhr.responseText;
	}
};

//menu highlight
function menuHighlight(){
	var menuList=document.querySelectorAll('nav li');
	if(nowPath==='' || nowPath==='index.html'){
		menuList[0].classList.add('active');
	}else if(nowPath==='products.html' || nowPath==='miraitoukei.html' || nowPath==='asahiru.html' || nowPath==='dogadehazard.html' || nowPath==='locatioin-passport.html' || nowPath==='roadinfo.html' || nowPath.indexOf('miraishoken')===0 || nowPath==='act-terms.html' || nowPath==='privacy-policy.html'){
		menuList[1].classList.add('active');
	}else if(nowPath==='company.html' || nowPath==='outline.html' || nowPath==='message.html' || nowPath==='books.html'){
		menuList[2].classList.add('active');
	}else if(nowPath==='blog.html'){
		menuList[3].classList.add('active');
	}
}

