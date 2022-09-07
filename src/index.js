$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

const countOfSlides = $('section.home-page .slideshow-container').children('div.slide__item').length;
const dotsOfSlides = $('.slides-dots');

for (let i = 1; i <= countOfSlides; i++) {
	dotsOfSlides.append(`<span class="dot" onclick="currentSlide(${i})"></span>`);
}

//....Slider .........//
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slide_item = document.querySelectorAll(".slide__item");
	let dots = document.querySelectorAll(".dot");

	if (n > slide_item.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slide_item.length
	}
	for (i = 0; i < slide_item.length; i++) {
		slide_item[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slide_item[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

const cometsItemsLength = $('.comments__items').children().length;
const countOfComments = $('.coments-counter').text(`${cometsItemsLength} COMMENTS`);


$(function () {
	if (!$(".sidebar__wrapper").position()) {
		return;
	}
	const $window = $(window);
	const $sidebar = $(".sidebar__wrapper");
	const $sidebarTop = $sidebar.position().top;
	const $sidebarHeight = $sidebar.height();
	const $boundaryElement = $('.share-flex').position().top;

	$window.scroll(function (event) {
		$sidebar.addClass("fixed");
		const $scrollTop = $window.scrollTop();
		let $topPosition = Math.max(0, $sidebarTop - $scrollTop);

		if ($scrollTop + $sidebarHeight > $boundaryElement) {
			$topPosition = Math.min($topPosition, $boundaryElement - $scrollTop - $sidebarHeight);
		}

		$sidebar.css("top", $topPosition);
	});
});
