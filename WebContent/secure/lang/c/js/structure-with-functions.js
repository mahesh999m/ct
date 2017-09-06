var structureWithFunctionsReady = function() {
	intro = introJs();
	$('#restartBtn').click(function() {
		location.reload();
		});
	$("body").keypress(function(e) {
		 if (e.which === 13) {
			 e.preventDefault();
			}
	});
	intro.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		
		steps :	[{
			element :'#informationdiv',
			intro :'',
			tooltipClass: 'hide',
			position: 'left'
		},{
			element :'#preId',
			intro :'',
			position:"bottom"  
	 	}/*, {
			element :'#tableDiv',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"  
		}*/,{
			element :'#errorVoidDisplay',
			intro :'',
			position:"bottom"  
		},{
			element :'#structBook',
			intro :'',
			position:"bottom"  
	 	},{
			element :'#voidMain',
			intro :'',
			position:"bottom" 
		},{
			element :'#memoryBookB',
			intro :'',
			position:"bottom"
		},{
			element :'#memoryStoreB',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#displayOfB',
			intro :'',
			position:"bottom"
		},{
			element :'#voidPrintFunction',
			intro :'',
			position:"bottom" 
		},{
			element :'#voidDispalyX',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#memoryStoreX',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom" 
		},{
			element :'#printF',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"  
		},{
			element :'#consoleId',
			intro :'',
			tooltipClass:'hidden',
			position:"bottom"
		},{
			element :'#restartBtn',
			intro :'',
			position:"right"
		}]
	});
	intro.onafterchange(function(targetElement) { 
		var elementId = targetElement.id;
		switch (elementId) {
		case "informationdiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#informationdiv").removeClass("visibility-hidden");
	  		TweenMax.to($("#li1"), 0.5, {opacity: 1, onComplete: function() {
	  			$('#li1').append(' <a class="introjs-button user-btn" onclick="intro.nextStep()">Next &#8594;</a>');
	  			intro.refresh();
	  			/*$(".user-btn").click(function() {
	  				$(this).remove();
		  			$('.introjs-tooltip').removeClass('hide');
		  			typing('.introjs-tooltiptext',"Let us consider an example.", function() {
		  				$('.introjs-nextbutton, .introjs-prevbutton').show(); 
		  			});
	  			});*/
	  		}});
		break;
		/*case "tableDiv" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$("#informationdiv").addClass("zindex");
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#tableDiv').removeClass('visibility-hidden');
	  			 setTimeout(function(){
					intro.nextStep();
					}, 700); 
				});
		break; */
		
		case "preId" :
			$('.user-btn').remove();
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.visibility-hidden').removeClass('visibility-hidden');
			$(".introjs-helperLayer").one("transitionend", function() {
				intro.refresh();
				typing('.introjs-tooltiptext',"Let us consider an example.", function() {
	  				$('.introjs-nextbutton, .introjs-prevbutton').show(); 
	  			});
			});
		break;
		
		case "errorVoidDisplay" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
			  	typing('.introjs-tooltiptext', "<ul><li>This is the declaration of function <span class='ct-code-b-yellow'>display()</span>.</li>"
			  			+ " <li>This takes an argument of type struct <span class='ct-code-b-yellow'>book</span>.</li>"
			  			+ " <li>This line throws a <span class='ct-code-b-red'>compile time error</span>"
			  			+ ", as the <b class='ct-code-b-yellow'>structure book</b> has not been declared yet.</li>"
			  			+ "<li>This line <b class='ct-code-b-yellow'>should</b> be written after the struct <b class='ct-code-b-yellow'>book</b> declaration.</li></ul>", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break;
		case "structBook" :
			$('#errorVoidDisplay').addClass('opacity00');
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#structBook").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "This is a structure <span class='ct-code-b-yellow'>book</span> with three members"
			  			+ " <span class='ct-code-b-yellow'>name</span>,"
			  			+ " <span class='ct-code-b-yellow'>price</span> and <span class='ct-code-b-yellow'>page</span>.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break;
		case "voidMain" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {  
				$("#voidDisplay").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "This line does not throw an error as <b class='ct-code-b-yellow'>book</b> is already declared.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break; 
		case "memoryBookB" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
			  	typing('.introjs-tooltiptext', "Here we define a structure variable <span class='ct-code-b-yellow'>b</span> of type"
			  			+ " <span class='ct-code-b-yellow'>book</span> and it is initialized to the above values.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break; 
		case "memoryStoreB" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#bArrow").removeClass("opacity00");
				$("#memoryStoreB").removeClass("opacity00");
				intro.refresh();
				$('#name').addClass('circle-css');
				var l = $("#name").offset();
				$("#memory0").offset({"top": l.top,"left": l.left});
		        TweenMax.to("#memory0", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
		        	$('#name').removeClass('circle-css');
		        	$('#price').addClass('circle-css');
		        	var l = $("#price").offset();
					$("#memory1").offset({"top": l.top,"left": l.left});
			        TweenMax.to("#memory1", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
			        	$('#memory1').append('00000');
			        	$('#price').removeClass('circle-css');
			        	$('#pages').addClass('circle-css');
			        	var l = $("#pages").offset();
						$("#memory2").offset({"top": l.top,"left": l.left});
				        TweenMax.to("#memory2", 1.3, {Color:"blue", opacity:1, top: 0, left:0 , onComplete:function() {
							$('#pages').removeClass('circle-css');
			  				typing('.introjs-tooltiptext', "", function() {  
			  					intro.nextStep();
								});
		       				 }});
		       		 	}});
		        	}});
				});
		break;
		case "displayOfB" : 
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		$(".introjs-helperLayer").one("transitionend", function() {
			$("#voidDispalyX").removeClass("opacity00");
		  	typing('.introjs-tooltiptext', "This is a <b class='ct-code-b-yellow'>function call</b> that sends the entire structure as a function argument.", function() {  
				$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
			});
		break;
		case "voidPrintFunction" : 
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#voidDispalyX").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', "This function <b class='ct-code-b-yellow'>display</b>, uses the structure <span class='ct-code-b-yellow'>book</span>"
			  			+ " to print the entire"
			  			+ " <span class='ct-code-b-yellow'>book</span> values to the console.", function() {  
					$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				});
		break;
		case "voidDispalyX" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					intro.nextStep();
					}, 500); 	
			});
		break;
		case "memoryStoreX" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#xArrow").removeClass("opacity00");
				$("#memoryStoreX").removeClass("opacity00");
				$("#trValue2").addClass("zindex");
				var l = $("#memory0").offset();  
				$("#memory01").offset({"top": l.top,"left": l.left});
				$('trValue2').addClass('zindex');
				$("#memory0").effect("highlight", {color: 'yellow'}, 500, function() {
					TweenMax.to("#memory01", 1.3, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
						var l = $("#memory1").offset();
						$("#memory11").offset({"top": l.top,"left": l.left});
						$("#memory1").effect("highlight", {color: 'yellow'}, 500, function() {
							TweenMax.to("#memory11", 1.3, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
								var l = $("#memory2").offset();
								$("#memory21").offset({"top": l.top,"left": l.left});
								$("#memory2").effect("highlight", {color: 'yellow'}, 500, function() {
									TweenMax.to("#memory21", 1.3, {Color:"yellow", opacity:1, top: 0, left:0 , onComplete:function() {
										$("#trValue2").removeClass("zindex");
										setTimeout(function() {
											intro.nextStep();
										}, 300);
									}});
								});
							}});
		       		 	});
					}});
				});
			});
		break; 
		case "printF" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#printF").removeClass("opacity00");
			  	typing('.introjs-tooltiptext', ".", function() {  
			  		 setTimeout(function(){
						intro.nextStep();
						}, 800); 
					});
				});
		break;
		case "consoleId" :
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$(".introjs-helperLayer").one("transitionend", function() {
				$("#consoleId").removeClass("opacity00");
			  	typing('#outPut', "NAME: " + "<span class='color-palegreen'>C LANGUAGE</span> <span style='margin-left: 20px;'></span>" + "price: " + "<span class='color-palegreen'>125.500000</span> <span style='margin-left: 20px;'></span>" + "page: " + "<span class='color-palegreen'>315</span>",  function() { 
			  		setTimeout(function(){
						intro.nextStep();
						}, 1000); 
					});
				});
		break;
		case "restartBtn":
			$('.introjs-nextbutton, .introjs-prevbutton').hide();
			$('.introjs-tooltip').css({'min-width' : '110px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				typing('.introjs-tooltiptext', "Click to restart.", function() {
					$("#restartBtn").removeClass("opacity00");
					});
				});
		break;
		}
	});

	intro.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-nextbutton, .introjs-prevbutton').hide();
}

function typing(selector, text, callBackFunction) {
	var typingSpeed = 1;
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		$(".introjs-nextbutton").removeClass("opacity00");
		if (typeof callBackFunction === "function") {  
			callBackFunction();
			}
		})
	}