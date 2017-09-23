var putElement;
var introjs = null;
var timelineLite = new TimelineLite();	

var functionCallReady = function() {
	introGuide();
	/* $("[contenteditable=true]").on("click keydown keyup", function(e) {
		$(".errMsg").remove();
		if ($(this).text() == "") {
			$(this).addClass("empty");
		} else {
			$(this).removeClass("empty");
		}
		introjs.refresh();
		
	 	if ($(".empty").length > 0) {
			$(".introjs-nextbutton").hide();
		} else {
			$(".introjs-nextbutton").show();
		}
		
		var max = $(this).attr("maxlength");
		if ($.inArray(e.keyCode, [46, 8, 9, 27]) !== -1 || (e.keyCode >= 37 && e.keyCode <= 39)) {
			return;
		}
	 	if (((e.shiftKey) || (e.keyCode < 48 || e.keyCode > 57)) && ((e.keyCode < 96) || (e.keyCode > 105))) {
			e.preventDefault();
		}
		if ($(this).text().length > max) {
			$(".introjs-tooltiptext").append("<div class='errMsg'>Max Length 2 digits only.</div>")
			e.preventDefault();
		}
		if((e.keyCode >= 65 && e.keyCode <= 90)){
			return;
		}
	});*/
	 $("#restart").click(function(){
		 location.reload();
	});
}

function introGuide() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			 		element : "#totalDiv",
					intro : "",
					tooltipClass : "hide"
				},{
			 		element : "#funName",
					intro : "",
					position : "right",
					isCompleted : "false"
				},{
			 		element : "#parameters",
					intro : "",
					position : "right",
					isCompleted : "false"
				},{
			 		element : "#nameFun",
					intro : "",
					position : "right",
					isCompleted : "false"
				},{
			 		element : "#addFun",
					intro : "",
					position : "right",
					isCompleted : "false"
				},{
			 		element : "#mulFun",
					intro : "",
					position : "right",
					isCompleted : "false"
				},{
			 		element : "#leftDiv",
					intro : "",
					position : "right",
					isCompleted : "false"
				},{
			 		element : "#funDec",
					intro : "",
					position : "right",
					isCompleted : "false"
				},{
			 		element : "#callingFun",
					intro : "",
					position : "right",
					isCompleted : "false"
				},{
			 		element : "#funDef",
					intro : "",
					position : "right",
					isCompleted : "false"
				},{
			 		element : "#printf1",
					intro : "",
					tooltipClass : "hide",
					isCompleted : "false"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide",
					isCompleted : "false"
				}, {
					element: '#endFunc',
					intro: '',
					position: 'right',
					isCompleted : "false"
				},{
			 		element : "#printf2",
					intro : "",
					tooltipClass : "hide",
					isCompleted : "false"
				},{
			 		element : "#outputDiv",
					intro : "",
					tooltipClass : "hide",
					isCompleted : "false"
				},{
			 		element : "#restart",
					intro : "Click to restart.",
					position : "right"
				}
			]});
	
	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		
		/*if (introjs._introItems[introjs._currentStep]["isCompleted"]) {
			console.log(introjs._introItems[introjs._currentStep]["isCompleted"]);
		}*/
		
		var elementId = targetElement.id;
		switch (elementId) {
		case "totalDiv":
			$("#totalDiv").css({"height" : $("#totalDiv").outerHeight()});
			TweenMax.to($("#li1"), 0.5, {opacity: 1, onComplete: function() {
				TweenMax.to($("#li2"), 0.5, {opacity: 1, onComplete: function() {
					$("#li2").append(' &emsp; <a class="introjs-button user-btn">Next &#8594;</a>');
					$('.user-btn').click(function() {
						$("#typingDiv1").addClass('zindex10');
						$(this).remove();
						$("#syntax").removeClass("opacity00");
						introjs.nextStep();
					});
				}});
			}});
		break;
		case "funName":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "Name of the <b class ='ct-code-b-yellow'>function</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton").show();
					});
				} else {
					$(".introjs-nextbutton").show();
				}
			});
		break;
		case "parameters":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "The <span class ='ct-code-b-yellow'>parameter-list</span> is a list of variables that are passed to the function.<br><br> A <span class ='ct-code-b-yellow'>" 
								+ "function call </span> must end with a <span class ='ct-code-b-yellow'>semicolon (;)</span>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$("#example").removeClass("opacity00");
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		break;
		case "nameFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "This is a call to the function <b class ='ct-code-b-yellow'>printName()</b>. "
								+"This function returns <b class ='ct-code-b-yellow'>void</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		break;
		case "addFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "This is a call to the function <b class ='ct-code-b-yellow'>addition()</b>.<br><br> This function "
								+ "has a return type of <b class ='ct-code-b-yellow'>int</b> and the "
								+"<b class ='ct-code-b-yellow'>parameters</b> passed are <b class ='ct-code-b-yellow'>a</b> and"
								+ " <span class ='ct-code-b-yellow'>b</span>."
								+ "<br><br> The returned value will be stored in the variable <b class ='ct-code-b-yellow'>sum</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		break;
		case "mulFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "This is a call to the function <b class ='ct-code-b-yellow'>mul()</b>.<br><br> This function "
								+ "has a return type of <b class ='ct-code-b-yellow'>int</b> and the "
								+"<b class ='ct-code-b-yellow'>parameters</b> passed are <b class ='ct-code-b-yellow'>a</b>,"
								+ " <span class ='ct-code-b-yellow'>b</span> and <span class ='ct-code-b-yellow'>c</span>."
								+ "<br><br> The returned value will be stored in the variable <b class ='ct-code-b-yellow'>total</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		break;
		case "leftDiv":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					$('#leftDiv').removeClass("opacity00");
					var text = "Let's consider an example.<br><br> We will learn <b class ='ct-code-b-yellow'>Function Definition</b>"
								+ ", <b class ='ct-code-b-yellow'>Function Declaration</b> and <b class ='ct-code-b-yellow'>Function Call</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		break;
		case "funDec":
				$(".introjs-helperLayer").one("transitionend", function() {
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
						var text = "This is the <b class ='ct-code-b-yellow'> Function Declaration</b><br>."
								+ " Here, user defined function with name <b class ='ct-code-b-yellow'>printName()</b> is declared.<br><br> This function"
								+ " takes <span class='ct-code-b-yellow'>no parameters</span> and <b class='ct-code-b-yellow'>does not</b> return any value.";
						typing($(".introjs-tooltiptext"), text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					} else {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					}
				});
		break;
		case "callingFun":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "This is a <b class ='ct-code-b-yellow'>Function Call</b>.<br><br> Here, when a call to function is made the control is"
								+ " transferred to the called function,  i.e., <b class ='ct-code-b-yellow'> Function Definition</b> (body)";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		break;
		case "funDef":
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "This is the <b class ='ct-code-b-yellow'>Function Definition</b>.";
					typing($(".introjs-tooltiptext"), text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		break;
		case "printf1":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					introjs._introItems[introjs._currentStep]["isCompleted"] = true;
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				} else {
					$(".introjs-tooltip").removeClass("hide");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		break;
		case "outputDiv":
			if (introjs._currentStep == 11){
			introjs.refresh();
			$("#outputDiv").removeClass("opacity00");
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "<b class='val-color'> Codetantra </b>";
					$("#outputBody").append("<div></div>");
					typing($("#outputBody > div:last-child"), text, function() {
						setTimeout(function(){
							introjs.nextStep();
						}, 1500);
					});
				} else {
					$(".introjs-tooltip").removeClass("hide");
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		 } else if (introjs._currentStep == 14){
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "<b class='val-color'> inside main(), after printName() </b>";
					$("#outputBody").append("<div></div>");
					typing($("#outputBody > div:last-child"), text, function() {
						setTimeout(function(){
							introjs.nextStep();
						}, 1500);
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		 }
		break;
		case "endFunc":
			$('.introjs-helperLayer').one('transitionend', function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "When the end of the function is reached, the control is transferred back to the "
								+"<b class='ct-code-b-yellow'>calling method</b>.";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
		break;
		case "printf2":
			introjs.refresh();
			$(".introjs-helperLayer").one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					setTimeout(function() {
						introjs.nextStep()
					}, 1000);
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
				
			});
		break;
		case "restart":
			$('.introjs-tooltip').css({'min-width' : '120px'});
			$(".introjs-helperLayer").one("transitionend", function() {
				$('#restart').removeClass("opacity00");
			});
		break;
		}
	});
	
	introjs.start();
	$('.introjs-bullets').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : '1',
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
			introjs._introItems[introjs._currentStep].tooltipClass = "";
			introjs._introItems[introjs._currentStep].isCompleted = "true";
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	TweenMax.to($(selector), 1, {rotationX : -90, onComplete:function() {
		$(selector).text(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function charAtEnd(elementId) {
	var element = document.getElementById(elementId);
	element.focus();
	var range = document.createRange();
	range.selectNodeContents(element);
	range.collapse(false);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}