
    	var margin = 0;
    	var no = 1;
    	var interval;
    	var isPaused = false;
    	var marginTop = 0;
    	jQuery(document).ready(function($) {
    		$('#accordion').collapse();
    		slideShowOtomatis();
    		$('.slide-right').click(function(event) {
    			
				$(".content-slide").addClass('sliding-text');
    			if (margin == -400) {
    				margin = 0;
    				no = 1;
    				$(".content-slide").addClass('sliding-text');
    			}else{
    				no = no + 1;
					margin = margin - 100;
    			}
    			
    			if (no > 0) {
    				$(".slide-number div").removeClass('slide-number-active');
    				$(".slide-number ."+no).addClass('slide-number-active');
    				$("#slide-"+no+" .content-slide").removeClass('sliding-text');
    			}
				
    			$('.active-slide').css("transition","2s");
    			$('.active-slide').css("margin-left",margin+"%");
	    		isPaused = true;
    			
    	
    		});
    		$('.slide-left').click(function(event) {
    			
    			$(".content-slide").addClass('sliding-text');
    			if (margin == 0) {
    				margin = -400;
    				no = 5;

    			}else{
    				no = no - 1;
    				margin = margin + 100;
    			}

    			if (no > 0) {
    				$(".slide-number div").removeClass('slide-number-active');
    				$(".slide-number ."+no).addClass('slide-number-active');
    				$("#slide-"+no+" .content-slide").removeClass('sliding-text');
    			}
    			
				
    			$('.active-slide').css("transition","2s");
    			$('.active-slide').css("margin-left",margin+"%");
    			isPaused = true;

    		});

    		function slideShowOtomatis() {
    			interval = 	slideShow();
    			
    		}


    		function slideShow() {
    			setInterval(
					function () {
						if (!isPaused) {
							$(".content-slide").addClass('sliding-text');
				    			if (margin == -400) {
				    				margin = 0;
				    				no = 1;
				    				$(".content-slide").addClass('sliding-text');
				    			}else{
				    				no = no + 1;
									margin = margin - 100;
				    			}
				    			
				    			if (no > 0) {
				    				$(".slide-number div").removeClass('slide-number-active');
				    				$(".slide-number ."+no).addClass('slide-number-active');
				    				$("#slide-"+no+" .content-slide").removeClass('sliding-text');
				    			}
								
				    			$('.active-slide').css("transition","2s");
				    			$('.active-slide').css("margin-left",margin+"%");

							}else{
								isPaused = false;
							}
					},7000);
    		}

    		$(".icon-search").click(function(event) {
    			$("input").toggleClass('show-search');

    		});
    	});

    	jQuery(document).ready(function($) {
    		var totalAnouncement = 5;
    		var no = 1;
    		var opacity = 1;
    		var scroll = 0;
    		var a = 20;
    		// runAnuncement();
    		// function runAnuncement() {
    		// 	setInterval(
    		// 		function anouncement() {
 
		    // 			marginTop = marginTop - 2.5;
		    			
		    // 			if (no == totalAnouncement) {
		    // 				marginTop = 0;
		    // 				no = 1;
		    // 				$(".roll-anouncement").css("margin-top",marginTop+"rem");
		    // 			}else{
		    // 				$(".roll-anouncement").css("transition","2s");
		    // 				$(".roll-anouncement").css("margin-top",marginTop+"rem");
		    // 			}
		    			
		    // 			no = no + 1;
		    // 		},5000)
    		// } 
    		$(window).scroll(function(event) {
    			if ($(window).width() < 575) {
    				if ($(document).scrollTop() > 20) {
	    				$(".img-logo").css("position","fixed");
	    				$(".img-logo").css("transition","position 0.5s");
	    				$(".img-logo").css("z-index","999999");
	    		
	    			}else{
	    				$(".img-logo").css("position","absolute");
	    				$(".img-logo").css("transition","position 0.5s");
	    				$(".menu-phone").css("position","fixed");
	    			}
    			}else{
    				$(".img-logo").css("position","absolute");
	    			$(".img-logo").css("transition","position 0.5s");
    			}
    			

    		});	
    		$(".btn-menu-phone").click(function(event) {
    			$(".menu-phone").toggleClass('active-menu-phone');
    			$(".bg-yellow").toggleClass('active-menu-phone');
    		});
    		$(".close-menu").click(function(event) {
    			event.preventDefault();
    			$(".menu-phone").toggleClass('active-menu-phone');
    			$(".bg-yellow").toggleClass('active-menu-phone');
    		});

    		$('#galery').owlCarousel({
			    loop:true,
			    margin:0,
			    nav:true,
			    autoplay:true,
				autoplayTimeout:2000,
				autoplayHoverPause:true,
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
			$('#kegiatan').owlCarousel({
			    loop:true,
			    nav:true,
			    autoplay:true,
				autoplayTimeout:2000,
				autoplayHoverPause:true,
			  	items : 1, 
			});
    		$(".item-faq-1").click(function(event) {
    			$(".item-faq-1 > .fill-faq").toggleClass('faq-active');
    			$(".item-faq-1 > .title-faq").toggleClass('title-faq-active');
    		});
    		$(".item-faq-2").click(function(event) {
    			$(".item-faq-2 > .fill-faq").toggleClass('faq-active');
    			$(".item-faq-2 > .title-faq").toggleClass('title-faq-active');
    		});
    		$(".item-faq-3").click(function(event) {
    			$(".item-faq-3 > .fill-faq").toggleClass('faq-active');
    			$(".item-faq-3 > .title-faq").toggleClass('title-faq-active');
    		});
    		$(".item-faq-4").click(function(event) {
    			$(".item-faq-4 > .fill-faq").toggleClass('faq-active');
    			$(".item-faq-4 > .title-faq").toggleClass('title-faq-active');
    		});
    		$(".item-menu-phone").click(function(event) {
    			
    			$(".sub-menu-phone").toggleClass('show-sub-menu');

    		});
    		// announcement
    		var teks = ["Jembatan Batang Kalu pada Jalur Padang - Bukittinggi, Sabtu Bisa Dilalui","Sekarang Daftar Nikah menjadi Lebih Masukudah"];
    		var maskText = 45;
	        runText(teks,10,500,maskText);
	        var i = 0;
	        var run = false;
	        var iRun = 100;
	        var it = 0;
	        var IExecuteText = 0;
	        var runAnuncementIsButtton = true;
	        var runTextVar;
	        function runText(text,timing,jedaTextRemove,maskText) {
	          var timeIsRun = 0;
	          
	          runTextVar = setInterval(function (argument) {
	            if (runAnuncementIsButtton) {
	            	var textExecute = text[IExecuteText];
		            if (!run) {
		              var a = Array.from(textExecute);
		              if (i <= maskText) {
		              	$(".text-target").append(a[i]);
		              }
		              if (i > a.length) {
		                run = true;
		              }
		              if (IExecuteText == 1) {
		                $(".text-target").css("font","")
		              }
		              i = i + 1;

		            }else{
		              
		          
		              setTimeout(function(){ it = it + 1; console.log(it)}, 100);

		              if (it >= jedaTextRemove) {
		                var str= $(".text-target").text();
		                if (str.length != 0) {
		                  $(".text-target").text("");
		                  var newStr = str.substring(0, str.length - 1);
		                  $(".text-target").append(newStr);
		                }
		                if (i <= 1) {
		                  run = false;
		                  it = 0;
		                  if (IExecuteText == 1) {
		                    IExecuteText = 0;
		                  }else{
		                    IExecuteText = IExecuteText + 1;
		                  }

		                }
		                i = i - 1;
		              }


		            }
	            }
	          },timing);

	          setInterval(function () {
	            $(".cursor-kedip").toggleClass("invisible");
	          },200);
	        }
	        $(".btn-left-annount").click(function(event) {
	        	event.preventDefault();

	        	runAnuncementIsButtton = false;
		        $(".text-target").text("");
		        IExecuteText = IExecuteText - 1;
		        if (IExecuteText < 0) {
		        	IExecuteText = teks.length - 1;
		        }
		        setTimeout(function (argument) {
		        	if (runAnuncementIsButtton) {
		            	var textExecute = text[IExecuteText];
			            
			              var a = Array.from(textExecute);
			              var add = true;
			              while(true){
			              	if (i <= maskText) {
				              	$(".text-target").append(a[i]);
				              }else{
				              	add = false;
				              }
			              }
			              
			              if (i > a.length) {
			                run = true;
			              }
			              if (IExecuteText == 1) {
			                $(".text-target").css("font","")
			              }
			              i = i + 1;

			            
			        }
		        },0);
	        });
	        $('#owl-pengumuman').owlCarousel({
			    loop:true,
			    margin:10,
			    nav:true,
			    singleItem:true,
			    items:1,
			    dots:false,
			    autoplay:true,
			    animateIn: 'fadeIn', // add this
  				animateOut: 'fadeOut',
  				transitionStyle : "fade"
			});
			$("#owl-pengumuman .owl-prev span").html('<i class="fas fa-chevron-left"></i>');
			$("#owl-pengumuman .owl-next span").html('<i class="fas fa-chevron-right"></i>');
    	});
    	
