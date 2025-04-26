$(document).ready (function(){
	$('#slides').superslides({
		animation:'fade',
		play: 2700
	});

	
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
});

$('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor:'#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 5,
            size: 152,
            onstep:function(from,to,percent) {
            	$(this.el).find('.percent').text(Math.round(percent));
            }


        });


    });	
