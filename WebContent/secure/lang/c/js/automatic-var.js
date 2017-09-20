var automaticVarReady=function() {
	intro=introJs();
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
			element :'#codeDiv',
			intro :'',
			position:"right",
			isCompleted : "false"
		}, {
			element :'#mainDeclaration',
			intro :'',
			tooltipClass:"hide",
			isCompleted : "false"
		}, {
			element :'#automainDeclaration',
			intro :'',
			position:"right",
			isCompleted : "false"
		}, {
			element :'#animationDiv',
			intro :'',
			position:"right",
			tooltipClass : "hide",
			isCompleted : "false"
		}, {
			element :'#numberDiv1',
			intro :'',
			position:"right",
			isCompleted : "false"
		},/* {
			element :'#numberDiv2',
			intro :'',
			position:"right" 
		},*/ {
			element :'#mainMemory',
			intro :'',
			position:"right",
			isCompleted : "false"
		}, {
			element :'#variableDeclaration1',
			intro :'',
			position:"right",
			isCompleted : "false"
		}, {
			element :'#addressDiv1',
			intro :'',
			position:"right",
			tooltipClass : "hide",
			isCompleted : "false"
		}, {
			element :'#functionDeclaration1',
			intro :'',
			position:"right",
			isCompleted : "false"
		}, {
			element :'#mainfunctionDeclaration',
			intro :'',
			position:"right",
			tooltipClass : "hide",
			isCompleted : "false"
		}, {
			element :'#variableDeclaration2',
			intro :'',
			position:"right",
			isCompleted : "false"
		}, {
			element :'#numberDiv3',
			intro :'',
			position:"right",
			tooltipClass : "hide",
			isCompleted : "false"
		}, {
			element :'#sopLine2',
			intro :'',
			position:"right",
			tooltipClass : "hide",
			isCompleted : "false"
		}, {
			element :'#outputDiv',
			intro :'',
			position:"right",
			tooltipClass : "hide",
			isCompleted : "false"
		}, {
			element :'#closeBrace1',
			intro :'',
			position:"right",
			isCompleted : "false"
		}, {
			element :'#sopLine1',
			intro :'',
			position:"right",
			tooltipClass : "hide",
			isCompleted : "false"
		}, {
			element :'#outputDiv',
			intro :'',
			position:"right",
			tooltipClass : "hide",
			isCompleted : "false"
		}, {
			element :'#printDefinition',
			intro :'',
			position:"right",
			tooltipClass : "hide",
			isCompleted : "false"
		}, {
			element : "#restartBtn",
			intro : "Click to restart.",
			position : "right"
		}]
	});
	intro.onafterchange(function(targetElement) { 
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId=targetElement.id;
		switch (elementId) {
		case "automainDeclaration" :
			$(".introjs-helperLayer").one("transitionend", function() {
		  		$('.introjs-tooltip').removeClass("hide");
				typing('.introjs-tooltiptext', "An <span class='ct-code-b-yellow'>automatic</span> or <span class='ct-code-b-yellow'>local</span>"
							+ " variable is declared with the keyword <span class='ct-code-b-yellow'>auto</span>.<br><br>Using the keyword "
							+"<span class='ct-code-b-yellow'>auto</span> is <y>optional</y>.", function() { 
					$('#animationDiv').css({'opacity':'1'});
					$('.introjs-nextbutton').show();	
				});
			});
		break;
		
		case "mainfunctionDeclaration" :
		case "mainDeclaration" :
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function() {
					intro.nextStep();
				}, 500);
			});
		break;
		
		case "animationDiv" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#mainmemoryheading').css({'opacity':'1'});
				$('#mainMemory').removeClass("visibility-hidden").addClass('box-border');
		  		setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break; 
		
		case "numberDiv1" :
			$('#addressDiv1').addClass('visibility-hidden');
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#addressDiv1').removeClass('visibility-hidden').toggleClass('animated zoomIn').one('animationend', function() {
					$("#addressDiv1").removeClass('animated zoomIn');
					if (intro._introItems[intro._currentStep].isCompleted == "false") {
						typing('.introjs-tooltiptext', "An <y>int</y> variable <span class='ct-code-b-yellow'>a</span> is allocated  2 bytes in <y>memory</y>.", function() { 
							$('.introjs-nextbutton').show();
				  		});
					} else {
						$('.introjs-nextbutton').show();
					}
				});
			});
		break;
		
		/*case "numberDiv2" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#addressDiv2').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
					$("#addressDiv2").removeClass('animated zoomIn');
					typing('.introjs-tooltiptext', "Variable <span class='ct-code-b-yellow'>b</span> is allocated some <y>memory</y>.", function() { 
			  			$('.introjs-nextbutton, .introjs-prevbutton').show();
			  		});
				});
			});
		break; */
		
		case "variableDeclaration1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._introItems[intro._currentStep].isCompleted == "false") {
					typing('.introjs-tooltiptext', "Here, the variable <span class='ct-code-b-yellow'>a</span> is initialized to"
							+ " <span class='ct-code-b-yellow'>10</span>.", function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
		break;
		
		case "addressDiv1" :
			intro.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._introItems[intro._currentStep].isCompleted == "false") {
					TweenMax.to('#numberDiv1', 0.5, {opacity: 1, onComplete: function() {
						$('#number1').addClass('circle-css').effect("highlight", {color: 'yellow'}, 1000, function() {
							$('#number1').removeClass('circle-css');
							$("#addressValue1").text($("#number1").text());
							fromEffectWithTweenMax('#number1', '#addressValue1', function() {
								$('.introjs-tooltip').removeClass("hide");
								typing('.introjs-tooltiptext', "The value <span class='ct-code-b-yellow'>10</span> is stored in the memory allocated"
											+ " for variable <span class='ct-code-b-yellow'>a</span>.", function() { 
									$('.introjs-nextbutton, .introjs-prevbutton').show();	
								});	
							});
						});
					}});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
		break;
		
		case "mainMemory" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._introItems[intro._currentStep].isCompleted == "false") {
					typing('.introjs-tooltiptext', "The default value of the <y>automatic</y> variable <span class='ct-code-b-yellow'>a</span>"
								+ "  is some <y>garbage value</y>.", function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		 	});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
		break;
		
		case "functionDeclaration1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._introItems[intro._currentStep].isCompleted == "false") {
					typing('.introjs-tooltiptext', "When a call to the function <span class='ct-code-b-yellow'>ganga()</span> is made, the control"
									+ " is <y>transferred</y> from the function <span class='ct-code-b-yellow'>main() to ganga()</span>.", function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();
		  		 	});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
		break;
		
		case "variableDeclaration2" :
			$('.introjs-tooltip').css({'min-width' : '300px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._introItems[intro._currentStep].isCompleted == "false") {
					text = "Another <y>int</y> variable <span class='ct-code-b-yellow'>a</span> is declared and initialized.<br/><br/> This variable is treated as a" +
							" <b class='ct-code-b-yellow'>different</b> variable from the one declared in <y>main method</y>.<br/><br/> The <y>scope</y> of this variable <span class='ct-code-b-yellow'>a" +
							"</span> is within the function <span class='ct-code-b-yellow'>ganga()</span>, so it is treated as "+
							"<span class='ct-code-b-yellow'>local / automatic</span> variable.<br><br>Note :<br> Here, " +
							"<b>keyword</b> <span class='ct-code-b-yellow'>auto</span> is not used.";
					typing('.introjs-tooltiptext',text ,function() { 
						$('.introjs-nextbutton').show();
			  		 });
				} else {
					$('.introjs-nextbutton').show();
				}
			});
		break; 
		
		case "numberDiv3" :
			intro.refresh();
			$('.introjs-tooltip').css({'min-width' : '200px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._introItems[intro._currentStep].isCompleted == "false") {
					$('#numberDiv3').addClass('box-border');
					$('#addressDiv3, #functionMemory').removeClass('visibility-hidden');
		  			TweenMax.to('#numberDiv3', 1, {opacity: 1, onComplete: function() {
						$('#number3').addClass('circle-css').effect("highlight", {color: 'yellow'}, 1000, function() {
							$('#number3').removeClass('circle-css');
							$("#addressValue3").text($("#number3").text());
							fromEffectWithTweenMax('#number3', '#addressValue3', function() {
								$('.introjs-tooltip').removeClass("hide");
								typing('.introjs-tooltiptext', "Memory is allocated to the variable <span class='ct-code-b-yellow'>a</span> and this will <y>exist</y> till"
								+ " the function <span class='ct-code-b-yellow'>ganga()</span> ends.", function() { 
								$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						});
					}}); 
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
		break; 
		
		case "sopLine2" :
			$('#outputDiv').css({'opacity':'1'});
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break;
		
		case "outputDiv" :
			$('.introjs-helperLayer').one('transitionend', function() {
				 if (intro._currentStep == 13) {
					printDecimalValue();
				 }
				 else if (intro._currentStep == 16) {
					printDecimalValue2();
				} 
			});
		break;
		
		case "closeBrace1" :
			$(".introjs-helperLayer").one("transitionend", function() {
				if (intro._introItems[intro._currentStep].isCompleted == "false") {
					typing('.introjs-tooltiptext', "When the function <span class='ct-code-b-yellow'>ganga()</span> ends, the <y>local variables</y>"
								+ " are <y>destroyed</y>." ,function() { 
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
		break; 
		
		case "sopLine1" :
			$('#functionMemory').addClass('visibility-hidden');
			$(".introjs-helperLayer").one("transitionend", function() {
				setTimeout(function () {
					intro.nextStep();
				}, 1000);
			});
		break;
		
		case "printDefinition" :
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#line1').fadeTo(1000,1,function() {
				  $('#line2').fadeTo(1000,1,function() {
				    $('#line3').fadeTo(1000,1,function() {
				    });
				  });
				});
			});
		break; 
		
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$("#printDefinition").addClass("z-index1000000");
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
		break;
		}
	});
	
	intro.start();
	text="Let us consider an example.";
	typing('.introjs-tooltiptext', text, function() {
		$('.introjs-nextbutton').show();
	});	
};

function typing(typingId, typingContent, callbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval":1,
		"cursor_color": "blue"
	}, function() {
		$(typingId).removeClass('typingCursor');
		callbackFunction();
		intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		intro._introItems[intro._currentStep].tooltipClass = "";
		intro._introItems[intro._currentStep].isCompleted = "true";
	});
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 0.5, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function toEffectWithTweenMax(selector1, selector2, selector3, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset({top: l1.top, left: l1.left});
	TweenMax.to($(selector2), 0.5, {top: 22, left: selector3, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function printDecimalValue() {
  	$("#outputAValue1").text("The local variable value within ganga() = ");
  	$("#percentage2").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
  		$("#percentage2").removeClass("z-index1000000");
  		$("#aValue2").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
  			$("#aValue2").removeClass("z-index1000000")
  			$("#aheading").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
  				$("#aheading").removeClass("z-index1000000")
  				$('#addressValue3').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 500, function() {
  					$('#addressValue3').removeClass('circle-css z-index1000000');
  					$("#outputAValue1").append("<span id='output1' class='ct-code-b-yellow'>"+ $("#addressValue3").text()+"</span>");
  					fromEffectWithTweenMax("#addressValue3", "#output1", function() { 
			  			setTimeout(function () {
			  				intro.nextStep();
						}, 1000);
				   });  
  				});
	  		}); 
	  	});
	});
}

function printDecimalValue2() {
	$("#outputAValue2").text("The local variable value within main() = ");
	$("#percentage1").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
		$("#percentage1").removeClass("z-index1000000")
		$("#aValue1").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
			$("#aValue1").removeClass("z-index1000000")
			$("#aheading1").addClass("z-index1000000").effect( "highlight",{color: 'yellow'},500, function() {
				$("#aheading1").removeClass("z-index1000000")
		  		$('#addressValue1').addClass('circle-css z-index1000000').effect("highlight", {color: 'yellow'}, 500, function() {
	  				$('#addressValue1').removeClass('circle-css z-index1000000');
	  				$("#outputAValue2").append("<span id='output2' class='ct-code-b-yellow'>"+ $("#addressValue1").text()+"</span>");
			  	 	fromEffectWithTweenMax("#addressValue1", "#output2", function() {
			  			setTimeout(function () {
							$('#printDefinition').removeClass('visibility-hidden');
							intro.nextStep();
						},1000);
				  	});  
	 			});
	  		}); 
	  	});
	});
}

function animate1() {
	$('.introjs-duplicate-nextbutton').remove();	
	intro.nextStep();
}

/*$('#table1').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
	
});*/