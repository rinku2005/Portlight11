/* Custom General jQuery
-------------------------------------------------------------------*/
; (function ($) {
	$(document).ready(function (e) {
		/* Header Sticky */
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1) {
				$('.header').addClass("sticky");
			}
			else {
				$('.header').removeClass("sticky");
			}
		});

		/*-------------------------------------------------------------------*/
		// sldier START

		/* Responsive Menu */
		$(".navigation-open").click(function () {
			$("body").addClass("menu-action");
		});

		$(".menu-trigger").on("click touchstart", function (e) {
			e.stopPropagation();
			e.preventDefault();
			if (jQuery(this).hasClass("nt_opended")) {
				$(this).removeClass("nt_opended").siblings(".submenu").slideToggle();

			} else {
				$(this).addClass("nt_opended").siblings(".submenu").slideToggle();

			}

		});

		$(window).on('click touchend', function (e) {
			if (!$(e.target).hasClass("navigation-open") && !$(e.target).hasClass("navigation-close") && !$(e.target)
				.hasClass("navigation") && $(e.target).parents(".navigation").length === 0) {
				$("body").removeClass("menu-action");
			}
		});

		$(".navigation-close").click(function () {
			$("body").removeClass("menu-action");
		});
		/* Responsive Menu */

		$(".img-slider").owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			items: 6,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause: true,
			smartspeed: 2500,
			responsive: {
				1070: {
					items: 6,

					dots: true,
				},
				992: {
					items: 4,

				},
				875: {
					items: 3,

				},
				600: {
					items: 2,

				},
				400: {
					items: 1,

				},
				200: {
					items: 1,

				}
			}

		});


		$(".logo-slider").owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 6,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause: true,
			smartspeed: 2000,
			responsive: {
				1070: {
					items: 5,

					dots: true,
				},
				992: {
					items: 4,

				},
				875: {
					items: 3,

				},
				600: {
					items: 2,

				},
				400: {
					items: 1,

				},
				200: {
					items: 1,

				}
			}
		});

		$(".web-slider").owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			items: 1,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: false,
			smartspeed: 2500,
			responsive: {
				1070: {
					items: 1,

				},

			}

		});

		$(".review-slider").owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 3,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause: true,
			smartspeed: 2500,
			responsive: {
				1070: {
					items: 1,

					dots: true,
				},
				992: {
					items: 1,

				},
				400: {
					items: 1,

				},
				200: {
					items: 1,

				}
			}

		});


		$(".number-slider").owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			items: 4,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause: false,
			smartspeed: 2500,
			responsive: {
				1070: {
					items: 4,

					dots: true,
				},
				992: {
					items: 3,

				},
				400: {
					items: 2,

				},
				300: {
					items: 1,

				}
			}

		});


		$(".team-slider").owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			items: 4,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			smartspeed: 2500,
			responsive: {
				1070: {
					items: 4,

					992: {
						items: 3,

					},
					400: {
						items: 2,

					},
					300: {
						items: 1,

					}
				}

			}

		});

	});
})(jQuery);