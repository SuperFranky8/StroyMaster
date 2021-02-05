'use strict'

let btnPrev = document.querySelector('.carousel__btn-prev');
let btnNext = document.querySelector('.carousel__btn-next');
let carouselInner = document.querySelector('.carousel__inner');
let carouselDot = document.querySelectorAll('.carousel__dot');
let carouselCounter = 0;
let dotCounter = 0;
let y = 5000;



for (let item of carouselDot){
	item.onclick = () => {
		carouselDot.forEach(i=>i.style.background = '#DEDEDE')
		item.style.background = 'rgb(11,126,214)';
		carouselInner.style.transform = `translateX(${-100*item.value}%)`;
		dotCounter = item.value;
		carouselCounter = -100*item.value;
	}

	btnPrev.onclick = function () {
	if (carouselCounter === 0 ) {
		carouselCounter = -100*item.value;
		carouselInner.style.transform = `translateX(${carouselCounter}%)`;
		carouselDot[0].style.background = '#DEDEDE';
		carouselDot[carouselDot.length -1].style.background = 'rgb(11,126,214)';
		dotCounter = item.value;
	}
	else {
	dotCounter--;
	carouselCounter += 100;
	carouselInner.style.transform = `translateX(${carouselCounter}%)`;
	carouselDot[dotCounter+1].style.background = '#DEDEDE';
	carouselDot[dotCounter].style.background = 'rgb(11,126,214)';
}
y+=1000;

}

btnNext.onclick = function () {
	// dotCounter++;
		if (carouselCounter === -100*item.value ) {
		carouselCounter = 0;
		carouselInner.style.transform = `translateX(${carouselCounter}%)`;
		carouselDot[dotCounter].style.background = '#DEDEDE';
		dotCounter = 0;
		carouselDot[0].style.background = 'rgb(11,126,214)';

	}
	else {
	dotCounter++;
	carouselCounter -= 100;
	carouselInner.style.transform = `translateX(${carouselCounter}%)`;
	carouselDot[dotCounter].style.background = 'rgb(11,126,214)';
	carouselDot[dotCounter-1].style.background = '#DEDEDE';
}
y+=1000;

}



}
let carouselInterval = setInterval(function () {

if (carouselCounter === -300) {
		carouselCounter = 0;
		carouselInner.style.transform = `translateX(${carouselCounter}%)`;
		carouselDot[dotCounter].style.background = '#DEDEDE';
		dotCounter = 0;
		carouselDot[0].style.background = 'rgb(11,126,214)';

	}
	else {
	dotCounter++;
	carouselCounter -= 100;
	carouselInner.style.transform = `translateX(${carouselCounter}%)`;
	carouselDot[dotCounter].style.background = 'rgb(11,126,214)';
	carouselDot[dotCounter-1].style.background = '#DEDEDE';
}
}, y)







