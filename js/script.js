$(document).ready (function(){
	$('#slides').superslides({
		animation:'fade',
		play: 2700
	});

	
	$('.owl-carousel').owlCarousel({
	    loop:false,
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
	            items:4
	        }
	    }
});

$('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor:'#fff',
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            size: 152,
            onstep:function(from,to,percent) {
            	$(this.el).find('.percent').text(Math.round(percent));
            }


        });



    });	