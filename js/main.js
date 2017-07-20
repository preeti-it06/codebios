/*

Template:  Theme Name
Author: author name
Version: 1
Design and Developed by: BM Rafiq + Masud Rana
NOTE: If you have any note put here. 

*/
/*================================================
[  Table of contents  ]
================================================
	01. jQuery MeanMenu
	02. wow js active
	03. scrollUp jquery active
	04. slick carousel 

 
======================================
[ End table content ]
======================================*/


(function($) {
    "use strict";



/*------------------------------------------------
      Top menu stick
     -------------------------------------------------- */
    // var sticky_menu = $("#sticky-header");
    // var pos = sticky_menu.position();
    // if (sticky_menu.length) {
    //     var windowpos = sticky_menu.top;
    //     $(window).on('scroll', function() {
    //         var windowpos = $(window).scrollTop();
    //         if (windowpos > pos.top) {
    //             sticky_menu.addClass("sticky");
    //         } else {
    //             sticky_menu.removeClass("sticky");
    //         }
    //     });
    // }



    /*---------------------
     jQuery MeanMenu
    --------------------- */
	jQuery('nav#dropdown').meanmenu();	


    /*-------------------------------------------
    	02. wow js active
    --------------------------------------------- */
 //   new WOW().init();



    /*--
    slick slider
    ------------------------*/
    $('.slider-active').slick({
      centerMode: true,
      dots: true,
      fade: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }); 

    
    
    /*---------------------
    chosen
    --------------------- */
    jQuery('.orderby').chosen({disable_search: true, width: "auto"});
    
    
    /*---------------------
    countdown
  --------------------- */
    $('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
		});
    });
    
    
    /*----------------------------
     counter js active
    ------------------------------ */
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    
    /*--
    slick slider
    ------------------------*/
    $('.slider-active2').slick({
      centerMode: true,
      dots: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }); 
    
    /*--
    slick slider
    ------------------------*/
    $('.slider-active3').slick({
      centerMode: true,
      dots: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }); 

    
    /*--------------------------
    scrollUp
    ---------------------------- */	
    $(window).on('scroll',function () {
        if($(window).scrollTop()>200) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $('.scroll-top-icon').on('click', function() {
        $("html,body").animate({
            scrollTop:0
        }, 500)
    }); 
    
/*----------------------------
     sticky active
    ------------------------------ */  
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $('.stick-h2').removeClass('stick');
        }else{
            $('.stick-h2').addClass('stick');
        }
    }); 
    
    
    
    
    
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt1').textillate({
      loop: true,
      in: {
        effect: 'fadeInDown',
      },
      out: {
        effect: 'flip',
      },
    });
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt').textillate({
      loop: true,
      in: {
        effect: 'fadeInRight',
      },
      out: {
        effect: 'fadeOutLeft',
      },
    });
    
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt3').textillate({
      loop: true,
      in: {
        effect: 'rotateIn',
      },
      out: {
        effect: 'rotateIn',
      },
    });
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt4').textillate({
      loop: true,
      in: {
        effect: 'slideInUp',
      },
      out: {
        effect: 'slideInUp',
      },
    });
    
    
    
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt5').textillate({
      loop: true,
      in: {
        effect: 'flipInX',
      },
      out: {
        effect: 'flipInX',
      },
    });
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt6').textillate({
      loop: true,
      in: {
        effect: 'lightSpeedIn',
      },
      out: {
        effect: 'lightSpeedIn',
      },
    });
    
    
    
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt7').textillate({
      loop: true,
      in: {
        effect: 'tada',
      },
      out: {
        effect: 'tada',
      },
    });
    /*----------------------------
        text-animation
    ------------------------------ */  
    $('.tlt8').textillate({
      loop: true,
      in: {
        effect: 'swing',
      },
      out: {
        effect: 'swing',
      },
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*************************
          tooltip
    *************************/
    $('[data-toggle="tooltip"]').tooltip();

//Slider
		if ($('.progressive-slider').length && typeof progressiveSlider == 'function') progressiveSlider();



})(jQuery);

//Slider Start
function openItem( $item ) {
	$item.addClass('active');

	$item.stop().children('.slid-content').animate('opacity', 1);
}
function progressiveSlider() {
	var slider     = $('.progressive-slider'),
		Parameters = function(){
			return {
				auto       : {
					play : true,
					timeoutDuration : 4000
				},
				items      : {
					visible : 1
				},
				responsive : true,
				scroll     : {
					duration : 1000,
					pauseOnHover : true
				}
			}
		};

	slider.each(function () {
		var $this     = $(this),
			sliderBox = $this.closest('.slider');

		var parameters = new Parameters();

		/* Animation Duration */
		if ($this.data('animationDuration'))
			parameters.scroll.duration = $this.data('animationDuration');

		/* Autoplay */
		if ($this.data('autoplayDisable'))
			parameters.auto = false;
		else
			/* Autoplay Speed */
			if ($this.data('autoplaySpeed'))
				parameters.auto.timeoutDuration = $this.data('autoplaySpeed');

		switch (true) {
			case $this.hasClass('progressive-slider-two'):
				parameters.pagination = sliderBox.find('.pagination');
				parameters.onCreate = function(data) {
					$this.find('.slider-wrapper').css('height', data.height)
				};
		break;
			case $this.hasClass('progressive-slider-three'):
				parameters.scroll.fx = 'crossfade';
				parameters.scroll.pauseOnHover = true;
		break;
			case $this.hasClass('progressive-slider-four'):
				parameters.next = sliderBox.find('.next');
				parameters.prev = sliderBox.find('.prev');
		break;
			default:
				parameters.scroll.fx = 'crossfade';
				parameters.scroll.onBefore = function(data) {
					data.items.old.stop().children('.slid-content').animate({
						opacity: 0
					});
				};
				parameters.scroll.onAfter = function(data) {
					openItem( data.items.visible );
				};
				parameters.next = sliderBox.find('.next');
				parameters.prev = sliderBox.find('.prev');
				parameters.pagination = sliderBox.find('.pagination');
				parameters.onCreate = function(data) {
					openItem(data.items);
				};
		}

		$this.find('.sliders-box')
			.carouFredSel(parameters)
			.parents('.slider').removeClass('load')
			.touchwipe({
				wipeLeft: function(){
					$(this).trigger('next', 1);
				},
				wipeRight: function(){
					$(this).trigger('prev', 1);
				},
				preventDefaultEvents : false
			});
	});
}
//Slider End
