$(document).ready(function() {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
		strings: ["DevOps.", "Cloud Architect.", "Fullstack Engineer."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
    });
    
    $('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{
	        0:{
	            items:1 //how many items show up at a certain pixel
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

    /** 
	var skillsTopOffset = $(".skillsSection").offset().top; //gtes the position of the skill section

        //this function runs whenever a window is scrolled
        $(window).scroll(function() {

                //window.pageYOffset scroll poistion of the page and if user gets past the border it activates the chart
                if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

                    $('.chart').easyPieChart({
                        easing: 'easeInOut',
                        barColor: '#fff',
                        trackColor: false,
                        scaleColor: false,
                        lineWidth: 4,
                        size: 152,
                        onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                            //percent is from index in the span tag
                        }
                    });
                    
                }

        });
        */

    var skillsTopOffset = $(".skillsSection").offset().top;
	var statsTopOffset = $(".statsSection").offset().top;
	var countUpFinished = false;
	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });


		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$(".counter").each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());

				element.countup(endVal);
			})

			countUpFinished = true;

		}


    });
    
    $("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});




	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		}
		else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}




	}



});

//whenever the index page runs the function will run as well. 