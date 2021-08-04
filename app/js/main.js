$(function () {

	$('.carousel__elements').slick({
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="arrow-left"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="arrow-right"></button>',
		// autoplay: true,
		// autoplaySpeed: 3000,
	});

	var mixer = mixitup('.product__items');
	var mixer = mixitup('.promo__items');
	//что-то не работает
});