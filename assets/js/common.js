$(function() {
	if (document.documentElement.clientWidth < 960) {
		var slideout = new Slideout({
			'panel': document.getElementById('panel'),
			'menu': document.getElementById('menu'),
			'padding': 256,
			'tolerance': 10
		});
		document.querySelector('.menu-button').addEventListener('click', function () {
			slideout.toggle();
		});
	}
	if (document.documentElement.clientWidth > 768) {
		$(".instructor-block").hover(function () {
			$(this).find(".instructor-block__hidden").slideToggle();
		})
	}
	if (document.documentElement.clientWidth < 768) {
		$(".instructor-block__span").click(function () {
			$(this).parent().find(".instructor-block__hidden").slideToggle();
			$(this).hide();
		})
	}
	
	$(".programs-block").hover(function(){
		$(this).find(".programs-block__desc").slideToggle();
	})
	

	var swiper = new Swiper('.programs .swiper-container', {
		slidesPerView: 'auto',
		watchOverflow: true,
		grabCursor: true,
		freeMode: true,
		navigation: {
			nextEl: '.programs-button-next',
			prevEl: '.programs-button-prev',
		},
		scrollbar: {
			el: '.programs-scrollbar',
			hide: false,
		},
	});

	var swiper = new Swiper('.blog-slider', {
		slidesPerView: 'auto',
		slidesPerColumn: 2,
		watchOverflow: true,
		grabCursor: true,
		freeMode: true,
		navigation: {
			nextEl: '.blog-button-next',
			prevEl: '.blog-button-prev',
		},
		scrollbar: {
			el: '.blog-scrollbar',
			hide: false,
		},
	});
	if (document.documentElement.clientWidth < 1100) {
		var swiper_2 = new Swiper('.activity-slider', {
			slidesPerView: 'auto',
			watchOverflow: true,
			grabCursor: true,
			spaceBetween: 30,
			freeMode: true,
			navigation: {
				nextEl: '.activity-button-next',
				prevEl: '.activity-button-prev',
			},
			scrollbar: {
				el: '.activity-scrollbar',
				hide: false,
			},
			breakpoints: {
				590: {
					spaceBetween: 15,
				},
			},
		});
	}
	

	var swiper_3 = new Swiper('.gallery-tabs__title', {
		slidesPerView: 'auto',
		watchOverflow: true,
		grabCursor: true,
		freeMode: true,
	});

	$('.gallery-top').each(function () {
		var galleryTop = new Swiper(this, {
			slidesPerView: 'auto',
			spaceBetween: 30,
			freeMode: true,
			grabCursor: true,
			pagination: {
				el: $(this).parent().find('.gallery-pagination'),
				type: 'fraction',
			},
			navigation: {
				nextEl: $(this).parent().find('.swiper-button-next'),
				prevEl: $(this).parent().find('.swiper-button-prev'),
			},
			breakpoints: {
				1460: {
					freeMode: false,
					spaceBetween: 10,
				},
			},
			thumbs: {
				swiper: {
					el: $(this).parent().find('.gallery-thumbs'),
					spaceBetween: 10,
					slidesPerView: 'auto',
					freeMode: true,
					grabCursor: true,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
				}
			}
		});
	});

	
	$('.gallery .gallery-tabs__title').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.gallery .gallery-tabs').find('.gallery-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	$('.activity .gallery-tabs__title').on('click', 'li:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.activity .gallery-tabs').find('.gallery-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

	
	
	var gallery_content_height = $(".gallery .gallery-tabs__content").height();
	var gallery_content_height_activity = $(".activity .gallery-tabs__content").height();
	$(".gallery .gallery-tabs__content").each(function () {
		$(this).find('.gallery-top__img a').fancybox();
	});

	$(".gallery .gallery-tabs").css("padding-bottom", gallery_content_height);
	$(".activity .gallery-tabs").css("padding-bottom", gallery_content_height_activity);

	$(".blog-block button").click(function(){
		$(".popup-blog").empty();
		$(".popup-blog").append($(this).parent().find(".blog-block__hidden").html());
		$('.popup-blog').modal({
			closeText: '&times;',
			fadeDuration: 80
		});
	});

	$(".blog-block .title").click(function () {
		$(".popup-blog").empty();
		$(".popup-blog").append($(this).parent().find(".blog-block__hidden").html());
		$('.popup-blog').modal({
			closeText: '&times;',
			fadeDuration: 80
		});
	});

	$(".blog-block .blog-block__img").click(function () {
		$(".popup-blog").empty();
		$(".popup-blog").append($(this).parent().find(".blog-block__hidden").html());
		$('.popup-blog').modal({
			closeText: '&times;',
			fadeDuration: 80
		});
	});

	$(".programs-block__btn").click(function () {
		var title = $(this).parent().find('.programs-block__title').text();
		$(".popup-programs .programs-name").val(title);
		$('.popup-programs').modal({
			closeText: '&times;',
			fadeDuration: 80
		});
	})

});
