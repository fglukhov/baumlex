var is_mobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
	|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cocdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
	is_mobile = true;
}

var isIE9OrBelow = function() {
	return /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10;
}

var numFormat = wNumb({
	thousand: ' '
});

$(window).on("scroll touchmove", function () {

	var scrollPos = $(window).scrollTop();

	$("a[name]").each(function() {
		if (scrollPos >= $(this).offset().top - 180) {
			$(".navbar-nav a").removeClass("active")
			$(".navbar-nav a[href='#"+$(this).attr("name")+"']").addClass("active");
		}
	});



	if (scrollPos > 50) {

		if (!$("header").hasClass("header-fixed")) {

			$("header").addClass("header-fixed");
		}


	} else {

		if ($("header").hasClass("header-fixed")) {

			$("header").removeClass("header-fixed");

		}

	}

	if (scrollPos > 300) {
		$(".up-link").fadeIn(150);
	} else {
		$(".up-link").fadeOut(150);
	}

});

$(window).resize(function () {

	//makeUp();

	//swapElements();

	slickResponsive();

	//modalMakeup();


	//topVideo();

	$(".slick-slider").slick("setPosition");

});

$(window).on("load", function () {

	//makeUp();

});

var baseUrl = "";

$(document).ready(function () {

	// NEW


	$(".team-slider").slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		infinite: true,
		speed: 750,
		arrows: true,
		swipe: true,
		rows: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});


	$(".samples-slider").slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		infinite: true,
		speed: 750,
		arrows: true,
		swipe: true,
		rows: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});

	// NEW END


	$("[data-target='#rateModal']").on("click", function () {

		$("#rate_type").val($(this).closest(".rate-tmb").find(".h3").text());

	});

	$("[data-target='#problemModal']").on("click", function () {

		$("#problem_type").val($(this).closest(".problems-item").find(".h3").text());

	});

	$("[data-target='#protectModal']").on("click", function () {

		$("#protect_type").val($(this).closest(".protect-item").find(".h3").text());

	});

	// NEW
	


	// Catalog tmb hover

	$(".catalog-tmb").on("mouseover", function () {

		$(this).parent().css({
			marginBottom: -$(this).find(".catalog-tmb-extra").outerHeight()
		})

	}).on("mouseout", function () {

		$(this).parent().css({
			marginBottom: 0
		})

	});

	// Catalog tmb hover END

	// Filter price slider

	

	$(".range-slider").each(function () {

		var filterPriceSlider = $(this)[0],
			sliderMin = $(this).data("min"),
			sliderMax = $(this).data("max"),
			sliderStep = $(this).data("step"),
			fromInput = $(this).closest(".range-wrapper").find(".filter-input-from"),
			toInput = $(this).closest(".range-wrapper").find(".filter-input-to");

		var inputs = [fromInput, toInput];


		noUiSlider.create(filterPriceSlider, {
			start: [sliderMin,sliderMax],
			step: sliderStep,
			connect: true,
			range: {
				'min': sliderMin,
				'max': sliderMax
			}
		});

		filterPriceSlider.noUiSlider.on('update', function (values, handle) {
			inputs[handle].val(parseFloat(values[handle]));
		});

		fromInput.on("change", function () {
			filterPriceSlider.noUiSlider.set([$(this).val(), null]);
		});

		toInput.on("change", function () {
			filterPriceSlider.noUiSlider.set([null, $(this).val()]);
		});

	});


	// Filter price slider END

	$(".slider-countable").on("init", function () {

		var curSlider = $(this),
			curSlide = $(this).find(".slick-slide.slick-current").data("slick-index") + 1,
			totalSlides = $(this).find(".slick-slide").not(".slick-cloned").length;

		curSlider.append('<div class="slider-count"><div class="slider-count-cur">' + ("0" + curSlide).slice(-2) + '</div><div class="slider-count-progress"><div class="slider-count-progress-bar" style="width:' + curSlide*100/totalSlides + '%;"></div></div></div>');

		if (totalSlides == 1) {

			curSlider.find(".slider-count").hide();

		}

	});

	$(".slider-countable").on("beforeChange", function(event, slick, currentSlide, nextSlide){

		var curSlider = $(this),
			curSlide = nextSlide + 1,
			totalSlides = curSlider.find(".slick-slide").not(".slick-cloned").length;

		curSlider.find(".slider-count-cur").html(("0" + curSlide).slice(-2));

		curSlider.find(".slider-count-progress-bar").css({
			width: curSlide*100/totalSlides + "%"
		});

	});

	$(".problems-slider").on("init", function () {

		$(".problems-nav-item").click(function () {

			$(".problems-nav-item").removeClass("active");
			$(this).addClass("active");

			$(".problems-slider").slick("slickGoTo", $(this).prevAll().length);

		});

	});


	$(".problems-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0,
		speed: 500,
		fade: true,
		swipe: false,
		arrows: false,
		adaptiveHeight: true
	});

	$(".protect-slider").on("init", function () {

		$(".protect-nav-item").click(function () {

			$(".protect-nav-item").removeClass("active");
			$(this).addClass("active");

			$(".protect-slider").slick("slickGoTo", $(this).prevAll().length);

		});

	});


	$(".protect-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0,
		speed: 500,
		fade: true,
		swipe: false,
		arrows: false
	});

	





	// NEW END

	// Catalog item gallery

	$(".catalog-item-gallery").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0,
		speed: 350,
		fade: true,
		dots: true
	});

	// Catalog item gallery END

	// Catalog slider

	$(".catalog-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		rows: 0,
		speed: 750,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Catalog slider END

	// Mob catalog

	if ($("#mobile-indicator").css("display") == "block") {

		$(".catalog-menu-btn").click(function () {

			$(".catalog-menu-wrapper").fadeIn(250);

		});

		$("body").on("click",".catalog-menu-wrapper",function (e) {

			if (!$(e.target).hasClass("catalog-menu") && !$(e.target).parents().hasClass("catalog-menu")) {

				$(".catalog-menu-wrapper").fadeOut(250);

			}

		});


	}

	// Mob catalog END

	$('.svg-inline').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});

	$("[data-fancybox]").fancybox({
		closeClickOutside : true
	});

	// NEW *************************************************************************

	$("body").on("click", ".catalog-menu .arrow", function () {

		var thisLi = $(this).closest("li"),
				thisUl = thisLi.find("ul"),
				thisArrow = $(this);

		if (!thisLi.hasClass("open")) {

			thisUl.slideDown(250,function () {
				thisLi.addClass("open");
			});

		} else {

			thisUl.slideUp(250,function () {
				thisLi.removeClass("open");
			});

		}

	});



	$(".projects-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){

		$(this).find(".to-left").removeClass("to-left");
		$(this).find(".to-right").removeClass("to-right");
		$(this).find(".from-left").removeClass("from-left");
		$(this).find(".from-right").removeClass("from-right");

		var decl = currentSlide - nextSlide,
			curItem = $(this).find(".slick-slide.slick-active"),
			leftItem = curItem.prev(),
			rightItem = curItem.next();





		if(decl == 1 || decl == (slick.slideCount-1)*(-1) ) {

			curItem.addClass("to-right");
			leftItem.addClass("from-left");
			rightItem.addClass("to-right");


		} else {

			curItem.addClass("to-left");
			rightItem.addClass("from-right");
			leftItem.addClass("to-left");

		}

	});

	$(".projects-slider").on('afterChange', function(event, slick, currentSlide){

		$(this).find(".to-left").removeClass("to-left");
		$(this).find(".to-right").removeClass("to-right");
		$(this).find(".from-left").removeClass("from-left");
		$(this).find(".from-right").removeClass("from-right");

		var curItem = $(this).find(".slick-slide.slick-active");

		curItem.prevAll().addClass("to-left");
		curItem.nextAll().addClass("to-right");

	});

	$(".projects-slider").on("init", function() {

		var curSlider = $(this);

		curSlider.find(".slick-slide").click(function () {

			if (!$(this).hasClass("slick-active")) {

				curSlider.slick("slickGoTo", $(this).data("slick-index"));

				return false;

			}


		});

	});

	$(".projects-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		rows: 0,
		speed: 1000,
		infinite: false,
		swipe: false
	});


	// NEW END *********************************************************************


	// Org slider

	$(".org-slider").slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		rows: 0,
		speed: 500,
		infinite: false,
		responsive: [
			{
				breakpoint: 1380,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 1160,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});

	// Org slider END


	// Cases slider

	$(".cases-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		infinite: true,
		speed: 750,
		arrows: true,
		dots: true,
		swipe: true,
		adaptiveHeight: true,
		rows: 0,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					adaptiveHeight: true
				}
			}
		]
	});

	// Cases slider END

	// Reviews slider

	$(".reviews-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		speed: 750,
		arrows: true,
		dots: true,
		swipe: true,
		rows: 0,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					adaptiveHeight: true,
					swipe: true
				}
			}
		]
	});

	// Reviews slider END

	// Cert slider

	$(".cert-tmb").click(function () {

		$(".cert-gal a[data-index=" + $(this).data("index") + "]").click();

	});

	$(".cert-slider").slick({
		slidesToShow: 6,
		slidesToScroll: 6,
		infinite: false,
		speed: 750,
		arrows: true,
		dots: true,
		swipe: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 1380,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 1160,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});

	// Cert slider END

	// Submit

	$("#orderForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "Баум-Lex - Заявка на консультацию",
					type: "Нижняя форма, скидка 10%",
					name: $("#order_name").val(),
					phone: $("#order_phone").val()
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});

	$("#orderFormModal").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "Баум-Lex - Заявка на консультацию",
					type: "Форма во всплывающем окне",
					name: $("#order_modal_name").val(),
					phone: $("#order_modal_phone").val(),
					message: $("#order_modal_message").val()
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});

	$("#priceForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "Баум-Lex - Заказ услуг",
					type: "Окно заказа услуги",
					name: $("#price_name").val(),
					phone: $("#price_phone").val(),
					rate: $("#price_type").val()
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});

	$("#calcForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "Баум-Lex - Заявка на расчет банкротства",
					type: "Форма расчета банкротства",
					name: $("#calc_name").val(),
					phone: $("#calc_phone").val(),
					sum: $("#calc_sum").val(),
					term: $("[name='calc_term']:checked").next("label").html()
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});

	$("#callbackForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "Баум-Lex - Заявка на обратный звонок",
					name: $("#callback_name").val(),
					phone: $("#callback_phone").val()
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});

	

	$("#orderForm2").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "Баум-Lex - Заявка на консультацию",
					type: "94% налоговых споров решаем в досудебном порядке",
					phone: $("#order_2_phone").val()
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});

	$("#orderForm3").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "Баум-Lex - Заявка на консультацию",
					type: "Остались вопросы?",
					phone: $("#order_3_phone").val()
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});

	$("#rateForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "Баум-Lex - Заявка на услугу",
					type: "Тариф: " + $("#rate_type").val(),
					name: $("#rate_name").val(),
					phone: $("#rate_phone").val()
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});


	$("#problemForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "Баум-Lex - Решение проблемы с госорганами",
					type: "Госорган: " + $("#problem_type").val(),
					name: $("#problem_name").val(),
					phone: $("#problem_phone").val()
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});


	$("#protectForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);
			$.ajax({
				type: "POST",
				url: baseUrl + "order.php",
				data: {
					subject: "Баум-Lex - Заявка на защиту бизнеса",
					type: "Тип: " + $("#protect_type").val(),
					name: $("#protect_name").val(),
					phone: $("#protect_phone").val()
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});

	// Submit END

	$("[data-target='#orderModal']").click(function () {

		$("input#order_type").val($(this).closest(".service-tmb").find(".h3").html());

	});

	var scrollPos = $(window).scrollTop();

	if (scrollPos > 50) {

		if (!$("header").hasClass("header-fixed")) {

			$("header").addClass("header-fixed");
		}


	} else {

		if ($("header").hasClass("header-fixed")) {

			$("header").removeClass("header-fixed");

		}

	}

	// Poll

	quiz();

	// Poll END


	$("[data-target='#priceModal']").click(function () {

		$("#price_type").val($(this).closest(".price-tmb").find(".h3").text());

	});

	// Faq

	$(".faq-item-ttl, .faq-item .btn-collapse").click(function () {

		var faqItem = $(this).closest(".faq-item");

		faqItem.find(".faq-item-content").slideToggle(500,function () {

			faqItem.toggleClass("active");

		});

	});

	// Faq END

	// Show more

	$("body").on("click", ".show-more:not(.show-more-alt)", function () {

		var moreLink = $(this),
			moreUrl = $(this).attr("href");

		if (!moreLink.hasClass("loading")) {

			moreLink.addClass("loading");

			$.ajax({
				url: moreUrl,
				dataType: "html"
			}).done(function(data) {

				moreLink.closest(".show-more-wrapper").before($(data));

				moreLink.closest(".show-more-wrapper").remove();

			});

		}

		return false;

	});

	// Show more END

















	slickResponsive();

	$(".up-link, .header-logo").click(function () {

		$("html, body").animate({
			scrollTop: 0
		},1000);

	});

	$(".top-more-link").click(function () {

		$("html, body").animate({
			scrollTop: $(".main-section-about").offset().top - 180
		},1000);

	});

	// Anchors

	$(".navbar-nav a, .footer-menu a").click(function() {

		$(".navbar-nav a").removeClass("active");

		var curLink = $(this);

		var anchor = $(this).attr("href").replace("#","");

		var link = $(this);

		if ($("#mobile-indicator").css("display") == "block") {
			var yDiff = 70;
		} else {
			var yDiff = 110;
		}


		$("html,body").animate({
			scrollTop: $("a[name='"+anchor+"']").offset().top - yDiff
		},1000,function () {
			curLink.addClass("active")
		});

		history.pushState(null,null,$(this).attr("href"));

		return false;


	});



	$("body").on("click", "[data-video]", function () {
		$(this).html('<iframe width="100%" height="100%" src="' + $(this).data("video") + '?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>').addClass("active");
	});



	// Main menu

	$(".navbar-trigger").click(function () {

		$(this).toggleClass("active");

		$(".navbar-wrapper").fadeToggle(150);
		$("body").toggleClass("menu-open");

	});

	$(".navbar-wrapper .close, .navbar-wrapper a").click(function () {

		$(".navbar-wrapper").fadeOut(150);
		$("body").removeClass("menu-open");
		$(".navbar-trigger").removeClass("active");

	});

	$(".navbar-wrapper").click(function (e) {

		if (!$(e.target).hasClass("navbar-nav") && !$(e.target).parents().hasClass("navbar-nav")) {

			$(".navbar-wrapper").fadeOut(150);
			$("body").removeClass("menu-open");
			$(".navbar-trigger").removeClass("active");

		}


	});



	// Expandable

	$("body").on("click", ".expandable-trigger", function () {

		var exTrigger = $(this);

		if (!exTrigger.hasClass("active")) {

			exTrigger.closest(".expandable").children(".expandable-content").slideDown(500, function () {
				exTrigger.addClass("active").find("span").html(exTrigger.data("collapsetext"));
				exTrigger.closest(".expandable").addClass("open");
			});

		} else {

			exTrigger.closest(".expandable").children(".expandable-content").slideUp(500, function () {
				exTrigger.removeClass("active").find("span").html(exTrigger.data("expandtext"));
				exTrigger.closest(".expandable").removeClass("open");
			});

		}

	});

	$("input[type=file]").fileinput({
		rtl: true,
		showUpload: false,
		showPreview: false,
		showCancel: false,
		browseLabel: "Выбрать файл",
		msgPlaceholder: "",
		dropZoneEnabled: false,
		maxFileCount: 1,
		mainClass: "input-group-lg"
	});

	// Numeric input

	$(document).on("input blur", ".numeric", function() {
		this.value = this.value.replace(/\D/g,'');

		if (parseInt($(this).val()) < $(this).data("min") || !$(this).val() || $(this).val() == 0) {
			$(this).val($(this).data("min"));
		}

		if ($(this).hasClass("numeric-format") && $(this).val()) {
			$(this).val(numFormat.to(parseInt($(this).val())));
		}

	});


	// Fancybox




	// Forms

	$("body").on("mouseup", "li.dropdown-header", function () {
		$(this).toggleClass("active");
		$(this).nextAll("li[data-optgroup='" + $(this).data("optgroup") + "']").fadeToggle(150);
		return false;
	});

	$("select").not(".picker__select--month, .picker__select--year, .rates-nav-select").each(function () {
		if ($(this).attr("multiple")) {
			$(this).selectpicker({
				selectAllText: "Выбрать всё",
				deselectAllText: "Снять выбор",
				selectedTextFormat: "count",
				countSelectedText: function(count) {
					return count + " " + declOfNum(count, ['элемент', 'элемента', 'элементов']);
				}
			});
		} else {
			$(this).selectpicker({
				selectAllText: "Выбрать всё",
				deselectAllText: "Снять выбор"
			});
		}
	});

	$("select[multiple]").not(".simple-multi").on("shown.bs.select",function () {
		if (!$(this).prev(".dropdown-menu").find(".dropdown-footer").length) {
			dropdownFooter = '\
      <div class="dropdown-footer">\
      <div class="btn btn-1 btn-ico btn-save">Выбрать</div>\
      <div class="btn btn-cancel">Очистить</div>\
      </div>\
      ';
			$(this).prev(".dropdown-menu").find("ul").append(dropdownFooter);
		}
	});



	$("body").on("click",".bootstrap-select .btn-save", function () {
		$(this).closest("div.dropdown-menu").next("select").selectpicker("toggle");
		return false;
	});

	$("body").on("click",".bootstrap-select .btn-cancel", function () {
		$(this).closest("div.dropdown-menu").next("select").selectpicker('deselectAll');
		return false;
	});





	$('.input-numeric').bind('keyup paste', function(){
		this.value = this.value.replace(/[^0-9]/g, '');
	});

	if ($("input:text").length) {
		$("input:text").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").hide();
			}
		});
	}

	if ($("textarea").length) {
		$("textarea").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").hide();
			}
		});
	}

	$("body").on("focus","input, textarea",function() {
		var el = $(this);

		if (el.parent().find(".placeholder").length) {
			var placeholder = el.parent().find(".placeholder");

			placeholder.hide();

		}

	});

	$("body").on("blur","input, textarea",function() {
		var el = $(this);

		if (el.parent().find(".placeholder").length) {
			var placeholder = el.parent().find(".placeholder");

			if (!el.val() || (el.hasClass("input-phone") && ! /^(?=.*[0-9])[- +()0-9]+$/.test(el.val()))) {
				placeholder.show();
			}

		}

	});

	$("body").on("click",".placeholder",function(e) {
		if ($(this).parent().find("input").length) {
			$(this).parent().find("input").trigger("focus");
		}
		if ($(this).parent().find("textarea").length) {
			$(this).parent().find("textarea").trigger("focus");
		}
	});

	$("body").on("focus","input[type=text], input[type=email], input[type=password], textarea", function () {
		$(this).closest(".form-item").addClass("focus");
	});

	$("body").on("blur","input[type=text], input[type=email], input[type=password], textarea", function () {
		$(this).closest(".form-item").removeClass("focus")
	});

	validateForms();

	// Contacts map

	ymaps.ready(function () {

		var myMap = new ymaps.Map('contactsMap', {
				center: [55.680581, 37.607619],
				zoom: 16,
				controls: ['zoomControl']
			}, {}),

			myPlacemark = new ymaps.Placemark([55.678981, 37.607619], {
				hintContent: '',
				balloonContent: ''
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'images/map-pin.png',
				// Размеры метки.
				iconImageSize: [45, 45],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [0, 0]
			});

		myMap.behaviors.disable('scrollZoom');

		myMap.geoObjects
			.add(myPlacemark);



	});

	// Contacts map END

});

function yearsName(age) {
	var txt;
	count = age % 100;
	if (count >= 5 && count <= 20) {
		txt = 'лет';
	} else {
		count = count % 10;
		if (count == 1) {
			txt = 'год';
		} else if (count >= 2 && count <= 4) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	return txt;
}

function validateForms() {

	$('.textarea-autogrow').autogrow();

	$("input.input-phone").mask("+7 (999) 999-99-99");

	jQuery.validator.addClassRules('phone-email-group', {
		require_from_group: [1, ".phone-email-group"]
	});

	$("select").on("change", function () {
		if (!$(this).closest(".picker").length && !$(this).hasClass("faq-select")) {
			$(this).valid();
		}
	});

	$("body").on("click", ".form-item", function (e) {
		if ($(this).find(".bootstrap-select").length && !$(e.target).hasClass("bootstrap-select") && !$(e.target).parents().hasClass("bootstrap-select")) {
			$(e.target).closest(".form-item").find("select").selectpicker('toggle');
		}
	});

	$("form").each(function() {

		form = $(this);

		$(this).validate({
			focusInvalid: true,
			sendForm : false,
			errorPlacement: function(error, element) {
				if (element[0].tagName == "SELECT") {
					element.closest(".form-item").addClass("error");
					element.closest(".btn-group").addClass("btn-group-error");
					if (element.closest(".form-item").length) {
						error.insertAfter(element.closest(".form-item"));
					} else {
						error.insertAfter(element.closest(".btn-group"));
					}
				} else {
					if (element.attr("type") == "checkbox") {
						element.siblings("label").addClass("checkbox-label-error")
					} else {
						error.insertAfter(element);
						element.closest(".form-group").addClass("form-group-error");
					}
				}

			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass);
				$(element).closest(".form-item").removeClass("error").addClass("valid");
				$(element).closest(".form-group").removeClass("form-group-error");

				if ($(element)[0].tagName == "SELECT") {
					$(element).closest(".form-item").removeClass("error");
					$(element).closest(".btn-group").removeClass("btn-group-error");
					if ($(element).closest(".form-item").length) {
						error.insertAfter(element.closest(".form-item"));
						$(element).closest(".form-item").next("label.error").remove();
					} else {
						$(element).closest(".btn-group").next("label.error").remove();
					}
				} else {
					$(element).next(".error").remove();
					if ($(element).attr("type") == "checkbox") {
						$(element).siblings("label").removeClass("checkbox-label-error")
					}
				}
			},
			invalidHandler: function(form, validatorcalc) {
				var errors = validatorcalc.numberOfInvalids();
				if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {
					validatorcalc.errorList[0].element.focus();
				}
			}
		});

		if ($(this).find("input.password").length && $(this).find("input.password-repeat").length) {
			$(this).find("input.password-repeat").rules('add', {
				equalTo: "#"+form.find("input.password").attr("id")
			});
		}

	});

}

jQuery.extend(jQuery.validator.messages, {
	required: "Не заполнено поле",
	remote: "Please fix this field.",
	email: "Введите правильный e-mail.",
	url: "Please enter a valid URL.",
	date: "Please enter a valid date.",
	dateISO: "Please enter a valid date (ISO).",
	number: "Please enter a valid number.",
	digits: "Please enter only digits.",
	creditcard: "Please enter a valid credit card number.",
	equalTo: "Пароли не совпадают.",

	accept: "Please enter a value with a valid extension.",
	maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
	minlength: jQuery.validator.format("Please enter at least {0} characters."),
	rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
	range: jQuery.validator.format("Please enter a value between {0} and {1}."),
	max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
	min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function readURL(input, img) {

	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function(e) {
			img.attr('src', e.target.result);
		}

		reader.readAsDataURL(input.files[0]);
	}
}




function declOfNum(number, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function formSuccess(form) {

	form.find(".form-group input, .form-group textarea").val("");
	form.find(".placeholder").show();
	$("#successModal").modal("show");
	form.closest(".modal").modal("hide");
}

function slickResponsive() {

	if ($("#mobile-indicator").css("display") == "block") {



	} else {



	}


}






function getScrollBarWidth () {
	var inner = document.createElement('p');
	inner.style.width = "100%";
	inner.style.height = "200px";

	var outer = document.createElement('div');
	outer.style.position = "absolute";
	outer.style.top = "0px";
	outer.style.left = "0px";
	outer.style.visibility = "hidden";
	outer.style.width = "200px";
	outer.style.height = "150px";
	outer.style.overflow = "hidden";
	outer.appendChild (inner);

	document.body.appendChild (outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 == w2) w2 = outer.clientWidth;

	document.body.removeChild (outer);

	return (w1 - w2);
};

function modalMakeup() {

	if ($(".modal").length && $(".modal").hasClass("show")) {

		if ($(".modal.show .modal-dialog").outerHeight() > $(".modal.show").height()) {

			$(".modal.show .close").css({
				marginRight: getScrollBarWidth()
			});

		} else {

			$(".modal.show .close").css({
				marginRight: 0
			});

		}

	}

}

(function($) {
	$.fn.autogrow = function() {
		return this.each(function() {
			var textarea = this;
			$.fn.autogrow.resize(textarea);
			$(textarea).focus(function() {
				textarea.interval = setInterval(function() {
					$.fn.autogrow.resize(textarea);
				}, 500);
			}).blur(function() {
				clearInterval(textarea.interval);
			});
		});
	};
	$.fn.autogrow.resize = function(textarea) {
		var lineHeight = parseInt($(textarea).css('line-height'), 10);
		var lines = textarea.value.split('\n');
		var columns = textarea.cols;
		var lineCount = 0;
		$.each(lines, function() {
			lineCount += Math.ceil(this.length / columns) || 1;
		});
		var height = lineHeight * (lineCount) + 26;
		$(textarea).css('height', height);
	};
})(jQuery);

function quiz() {

	$(".poll-step-slider").slick({
		fade: true,
		swipe: false,
		arrows: false,
		rows: 0
	});

	$(".poll-form-step input[type=radio]").change(function () {

		if ($(this).is(":checked")) {

			$(this).closest(".poll-form-step").find(".poll-step-slider").slick("slickGoTo", $(this).closest(".form-radio").prevAll().length)

		}

	});

	$(".form-checkboxes-required input[type=checkbox]").each(function () {

		if (!$(this).closest(".form-checkboxes-required").find(":checked").length) {

			$(this).closest(".form-checkboxes-required").addClass("error");

		} else {

			$(this).closest(".form-checkboxes-required").removeClass("error");

		}

	});

	$(".form-checkboxes-required input[type=checkbox]").change(function () {

		if (!$(this).closest(".form-checkboxes-required").find(":checked").length) {

			$(this).closest(".form-checkboxes-required").addClass("error");

		} else {

			$(this).closest(".form-checkboxes-required").removeClass("error");

		}

	});

	setActiveSteps();

	var pollFormSteps = $(".poll-form-step");

	var btnBack = $(".poll-form-nav .btn-back");
	var btnFwd = $(".poll-form-nav .btn-forward");
	var btnSubmit = $(".poll-form [type=submit]");

	pollFormSteps.hide();

	pollFormSteps.first().addClass("current").show();

	btnFwd.click(function () {

		if ($(".poll-form-step.current").find("input").length) {
			$(".poll-form-step.current").find("input").valid();
		}

		if ($(".poll-form-step.current").find("textarea").length) {
			$(".poll-form-step.current").find("textarea").valid();
		}



		if ($(".poll-form-step.current").nextAll(".active").length == 1) {

			btnFwd.hide();
			btnSubmit.show();

		}

		if ($(".poll-form-step.current").nextAll(".active").length && !$(".poll-form-step.current .error").length) {

			var curStep = $(".poll-form-step.current");

			curStep.removeClass("current").hide();

			curStep.nextAll(".active").first().fadeIn(500).addClass("current");

			$(".poll-wrapper .btn-back").attr("disabled",false);

			quizDots();

		}

		if ($(".poll-form-step.current").prevAll(".active").length) {

			btnBack.show();

		}


	});

	btnBack.click(function () {

		if ($(".poll-form-step.current").prevAll(".active").length) {

			if ($(".poll-form-step.current").prevAll(".active").length == 1) {

				$(".poll-wrapper .btn-back").attr("disabled",true);

			}

			var curStep = $(".poll-form-step.current");

			curStep.removeClass("current").hide();

			curStep.prevAll(".active").first().fadeIn(500).addClass("current");

			if (!$(".poll-form-step.current").prevAll(".active").length) {

				btnBack.hide();

			}

			btnFwd.show();
			btnSubmit.hide();

			quizDots();

		}




	});

	$(".poll-form input[type=checkbox], .poll-form input[type=radio]").change(function () {

		setActiveSteps();

		if ($(this).closest(".form-radio").next(".form-group-other").length) {

			if ($(this).is(":checked")) {
				$(this).closest(".form-radio").next(".form-group-other").fadeIn(250);
			} else {
				$(this).closest(".form-radio").next(".form-group-other").fadeOut(250);
			}

		}

	});

	$("#pollForm").submit(function() {
		if ($(this).valid()) {
			var form = $(this);

			var quizResult = '';

			$(".poll-form-step.active").not(".last").each(function () {

				var stepTitle = "<h4>" + $(this).find(".h3").html() + "</h4>";

				console.log(stepTitle);

				var stepValue = '';

				$(this).find("input[type=checkbox], input[type=radio]").each(function () {

					if ($(this).is(":checked")) {

						stepValue += '<div>' + $(this).next("label").html() + '</div>';

						if ($(this).closest(".form-radio-text").length) {
							stepValue += '<div>' + $(this).closest(".form-radio-text").find("input[type=text]").val() + '</div>';
						}

					}


				});



				quizResult += stepTitle + stepValue;

			});

			//console.log(quizResult);

			$.ajax({
				type: "POST",
				url: baseUrl + "quiz.php",
				data: {
					subject: "Баум-Lex - результат квиза",
					name: $("#poll_name").val(),
					phone: $("#poll_phone").val(),
					quizresult: quizResult
				}
			}).done(function() {

				formSuccess(form);

			});
			return false;
		}
	});

}

function quizDots() {

	var curIndex = $(".poll-form-step.current").prevAll(".active").length;

	$("ul.poll-dots li").removeClass("active");

	$("ul.poll-dots li").filter(function () {

		return $(this).prevAll().length == curIndex;

	}).addClass("active");

}

function setActiveSteps() {

	$(".poll-form-step").each(function () {


		var quizStep = $(this);

		if (!quizStep.data("parent") || $("#" + quizStep.data("parent")).is(":checked")) {

			quizStep.addClass("active");

		} else {

			quizStep.removeClass("active");

		}

	});

}

function ndsCalc() {

	var calcInput = $(".sum-input"),
		calcPriceVal = $(".calc-price-val"),
		calcDiscountVal = $(".calc-discount-val"),
		calcNdsVal = $(".calc-nds-val");

	var totalVal,
		ndsVal,
		priceVal,
		discountVal,
		priceFactor;

	if ($("[name='calc_decl']:checked").val() == 1) {

		priceFactor = 1.035;

	} else {

		priceFactor = 1;

	}

	totalVal = calcInput.val().replace(/ /g,'');
	ndsVal = totalVal * .2;

	if (totalVal < 5000000) {

		priceVal = totalVal*.03* priceFactor;

	} else if (totalVal < 15000000) {

		priceVal = totalVal*.025* priceFactor;

	} else if (totalVal < 30000000) {

		priceVal = totalVal*.02* priceFactor;

	} else {

		priceVal = totalVal*.015* priceFactor;

	}

	discountVal = ndsVal - priceVal;





	calcNdsVal.html(numFormat.to(parseInt(ndsVal)));
	calcPriceVal.html(numFormat.to(parseInt(priceVal)));
	calcDiscountVal.html(numFormat.to(parseInt(discountVal)));



	
}