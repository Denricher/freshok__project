$(function () {

	$('.carousel__elements').slick({
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="arrow-left"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="arrow-right"></button>',
	});

	$('.brands__runner').slick({
		arrows: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
	});

	var containerEl1 = document.querySelector('[data-ref="container-1"]');
	var containerEl2 = document.querySelector('[data-ref="container-2"]');

	var config = {
		controls: {
			scope: 'local'
		}
	};

	var mixer1 = mixitup(containerEl1, config);
	var mixer2 = mixitup(containerEl2, config);
});