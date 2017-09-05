var intro;
var typingInterval = 1; 
function selfReferentialStructure() {
	$(".line").hide();
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefaulemptyt(); // stops its action
	    }
	});
	$("#restart").click(function(){
		location.reload(); 
	});
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#codeDiv1",
			intro : "",
		},{
			element : "#intType",
			intro : "",
		},{
			element : "#floatType",
			intro : "",
		},{
			element : "#innerStruct",
			intro : "",
		},{
			element : "#informationDiv",
			tooltipClass:"hide"
		},{
			element : "#codeDiv",
			intro : "",
		},{
			element : "#structDeceleration",
			intro : "",
		},{
			element : "#variables",
			intro : "",
		},{
			element : "#s1variable",
			intro : "",
		},{
			element : "#animationDiv",
			intro : "",
			animateStep: "s1VariableAnimation"
		},{
			element : "#s2variable",
			intro : "",
		},{
			element : "#animationDiv",
			intro : "",
			position:"bottom",
			animateStep : "s2VariableAnimation"
		},{
			element : "#s1Printf",
			intro : "",
		},{
			element : "#outputDiv",
			animateStep: "s1EnterStmt",
			tooltipClass: "hide"
		},{
			element : "#s1Scanf",
			intro : "",
		},{
			element : "#outputDiv",
			intro : "",
			animateStep: "s1ScanStmt",
		},{
			element : "#data1",
			tooltipClass:"hide"
		},{
			element : "#s2Printf",
			intro : "",
		},{
			element : "#outputDiv",
			animateStep: "s2EnterStmt",
			tooltipClass: "hide"
		},{
			element : "#s2Scanf",
			intro : "",
		},{
			element : "#outputDiv",
			intro : "",
			animateStep: "s2ScanStmt",
		},{
			element : "#data2",
			tooltipClass:"hide"
		},{
			element : "#stmt1",
			intro : "",
		},{
			element : "#animationDiv",
			animateStep: "stmt1VariableAnimation"
		},{
			element : "#stmt2",
			intro : "",
			position:"bottom"
		},{
			element : "#animationDiv",
			animateStep: "stmt2VariableAnimation"
		},{
			element : "#printf",
			intro : "",
			position:"bottom"
		},{
			element : "#outputDiv",
			animateStep: "printStmt",
			tooltipClass:"hide"
		},{
			element : "#informationDiv",
			tooltipClass:"hide"
		},{
			element : "#restart",
			intro : "",
			position:"right",
			tooltipClass: "introjs-tooltip-min-width-custom"
		}
		]});
	
		intro.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
		case "codeDiv1":
			var text = "This is the declaration of a user defined datatype" 
						+ " <span class='ct-code-b-yellow'>student</span>.";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
		break;	
		case "intType":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "Variable <b class='ct-code-b-yellow'>number</b> of type <b class='ct-code-b-yellow'>int</b> is a member of struct <b class='ct-code-b-yellow'>student</b> ";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "floatType":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "<span class='ct-code-b-yellow'>marks</span> is the member of struct <span class='ct-code-b-yellow'>student</span> "
							+ "of type <span class='ct-code-b-yellow'>float</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "innerStruct":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This statement gives a compile time <span class='ct-code-b-yellow'>error</span> as "
							+ " the declaration of struct <span class='ct-code-b-yellow'>student</span> is not complete yet.";
				typing(".introjs-tooltiptext", text, function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'flips();'>Next &#8594;</a>");
				});
			});
		break;
		case "informationDiv":
			$('.introjs-nextbutton').hide();
			$("#animation1").remove();
			intro.refresh();
			$(".introjs-helperLayer").one('transitionend', function() {
				if (intro._currentStep == 28) {
					$("#lastPoint").removeClass("opacity00");
					var text = "The self referential structures are mainly used in linked list concept of data structures.";
					typing("#lastPoint", text, function() {
						setTimeout(function() {
							intro.nextStep();
						}, 1000);
					});
				} else {
					$("#informationDiv, #mainDiv").removeClass("visibility-hidden");
					$('.introjs-nextbutton').hide();
					$("#li1").fadeTo(1000, 1, function() {
						$("#li2").fadeTo(1000, 1, function() {
							$("#informationDiv").addClass("z-index-class")
							$("#table").removeClass("opacity00");
							intro.nextStep();
						});
					});
				}
			});
			break;
		case "codeDiv" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				$("#codeDiv").removeClass("opacity00").hide().fadeIn(1500,function() {
					var text = "Let us consider an example.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
		break;
		case "structDeceleration":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This is the declaration of a user defined datatype <span class='ct-code-b-yellow'>example</span>.</br></br> "
							+ " This struct example contains one <span class='ct-code-b-yellow'>int</span>"
							+" datatype and one <span class='ct-code-b-yellow'>pointer</span> datatype.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "variables":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "We have defined two struct variables "
							+"<span class='ct-code-b-yellow'>s1</span> and "
							+"<span class='ct-code-b-yellow'>s2</span> of type <span class='ct-code-b-yellow'>example</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "s1variable":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "All the member variables of the <span class='ct-code-b-yellow'>struct example</span> will"
							+" be allocated memory as per their datatype."
							+"<br/><br/>Two bytes of memory will be allocated to <span class='ct-code-b-yellow'>s1</span> i.e. the "
							+" <span class='ct-code-b-yellow'>self referential structure</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "s2variable":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "All the member variables of the <span class='ct-code-b-yellow'>struct example</span> will"
					+" be allocated memory as per their datatype."
					+"<br/><br/>Two bytes of memory will be allocated to <span class='ct-code-b-yellow'>s2</span>  i.e. the"
					+"<span class='ct-code-b-yellow'>self referential structure</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "animationDiv":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "s1VariableAnimation" :
						$("#s1memory, #s1").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#s1memory, #s1").removeClass("animated zoomIn");
							var text = "Memory allocated for struct <span class='ct-code-b-yellow'>s1</span>: <br/><br/>"
										+" Two bytes for int <span class='ct-code-b-yellow'>data</span>. <br/>"
										+" Two bytes for pointer <span class='ct-code-b-yellow'>p</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
						break;
						case "s2VariableAnimation" :
						$("#s2memory, #s2").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							$("#s2memory, #s2").removeClass("animated zoomIn");
							var text = "Memory allocated for <span class='ct-code-b-yellow'>s2</span>: <br/><br/>"
										+" Two bytes for int <span class='ct-code-b-yellow'>data</span>. <br/>"
										+" Two bytes for pointer <span class='ct-code-b-yellow'>p</span>.";
							typing(".introjs-tooltiptext", text, function() {
								$('.introjs-nextbutton').show();
							});
						});
						break;
						case "stmt1VariableAnimation" :
							$(".introjs-tooltiptext").text("").append("<span class='opacity00 ct-code-b-yellow position' "
									+ "id='storeAddress'>s1.p = "
									+ "<span class='position' id='s2aAddress'>&s2</span></span>");
							$("#storeAddress").removeClass("opacity00");
							fromEffectWithTweenMax("#stmt1", "#storeAddress", function() {
								flipEffect("#s2aAddress", $("#address2").text(), function() {
									fromEffectWithTweenMax("#address2", "#p1", function() {
										$("#arrowMark1").show();
										TweenMax.to("#arrowMark1", 1, {attr:{x2: "55.2%", y2: "64%" }, onComplete:function() {
											$("#stmt1").removeClass('z-index-class');
											$('.introjs-nextbutton').show();
										}});
									});
								});
							});
						break;
						case "stmt2VariableAnimation" :
							$(".introjs-tooltiptext").text("").append("<span class='opacity00 ct-code-b-yellow'"
									+ "id='storeNullVak'><span id='s2address'>s2.p</span> = <span class='position' id='assignNullVal'>NULL</span></span>");
							$("#storeNullVak").removeClass("opacity00");
							fromEffectWithTweenMax("#stmt2", "#storeNullVak", function() {
								$("#s2address").effect( "highlight",{color: 'yellow'}, 1000, function() {
									$("#s2memory").effect( "highlight",{color: 'yellow'}, 1000, function() {
										$("#secondp").effect( "highlight",{color: 'blue'}, 1000, function() {
											$("#p2").effect( "highlight",{color: 'yellow'}, 1000, function() {
												fromEffectWithTweenMax("#assignNullVal", "#p2", function() {
													$("#stmt2").removeClass('z-index-class');
													$('.introjs-nextbutton').show();
												});
											});
										});
									});
								});
							});
						break;
				}
			});
			break;
		case "s1Printf":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This statement is used to print the given string to console.";
				$("#output").append('<span id="enterData1"></span>'
						+ '<span class="padding3 containnumbers" contenteditable="true"'
						+ ' id="s1value" maxlength="3" spellcheck="false"></span><br>');
				numbers();
				typing(".introjs-tooltiptext", text, function() {stmt3
					$("#outputDiv").removeClass("opacity00").hide().fadeIn(1000,function() {
						$('.introjs-nextbutton').show();
					});
				});
			});
			break;
		case "outputDiv":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one('transitionend', function() {
				var animateStep = intro._introItems[intro._currentStep].animateStep;
				switch(animateStep) {
					case "s1EnterStmt":
						var text = "Enter a value for s1 : ";
						typing("#enterData1", text, function() {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
						break;
					case "s1ScanStmt":
						$("#s1value").effect( "highlight",{color: 'yellow'}, 1500);
						$("#s1value").focus();
						var text = "Please enter a value for <span class='ct-code-b-yellow'>s1</span>.";
						typing(".introjs-tooltiptext", text);
						break;
					case "s2EnterStmt":
						var text = "Enter a value for s2 : ";
						typing("#enterData2", text, function() {
							setTimeout(function() {
								intro.nextStep();
							}, 1000);
						});
						break;
					case "s2ScanStmt" :
						$("#s2value").effect( "highlight",{color: 'yellow'}, 1500);
						$("#s2value").focus();
						var text = "Please enter a value for <span class='ct-code-b-yellow'>s2</span>.";
						typing(".introjs-tooltiptext", text);
						break;
					case "printStmt" :
						var text = $("#data1").text() + " --> " + $("#data2").text();
						typing("#details", text, function() {
							$("#printdetails").effect( "highlight",{color: 'yellow'}, 1500);
							$("#printdetails").focus();
							var text = "enter a value for <span class='ct-code-b-yellow'>s2</span>.";
							typing(".introjs-tooltiptext", text, function() {
								setTimeout(function() {
									intro.nextStep();
								}, 1000);
							});
						});
						break;
				} 
			});
			break;
		case "s1Scanf":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This statement reads the value of <span class='ct-code-b-yellow'>s1</span> from standard input device(keyboard).";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "data1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				$("#s1value").attr("contenteditable", false);
				$("#data1").addClass("opacity00");
				$("#data1").text($("#s1value").text());
				$("#data1").removeClass("opacity00").hide().fadeIn(1000,function() {
					intro.nextStep();
				});
			});
			break;
		case "s2Printf" :
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This statement reads the value of <span class='ct-code-b-yellow'>s2</span> from standard input device(keyboard).";
				$("#output").append('<span id="enterData2"></span><span class="padding3 containnumbers" contenteditable="true" id="s2value" maxlength="3" spellcheck="false"></span><br>');
				numbers();
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "s2Scanf":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				var text = "This statement reads the value of <span class='ct-code-b-yellow'>s2</span> from standard input device(keyboard).";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "data2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one('transitionend', function() {
				$("#s2value").attr("contenteditable", false);
				$("#data2").addClass("opacity00");
				$("#data2").text($("#s2value").text());
				$("#data2").removeClass("opacity00").hide().fadeIn(1000,function() {
					intro.nextStep();
				});
			});
			break;
		case "stmt1":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer").one('transitionend', function() {
				var text = "This statement will store <span class='ct-code-b-yellow'>address</span> of " 
							+ "<span class='ct-code-b-yellow'>s2</span> in pointer variable"
							+ " <span class='ct-code-b-yellow'>p</span> of <span class='ct-code-b-yellow'>s1</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
			break;
		case "stmt2":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
			var text = "This statement will store <span class='ct-code-b-yellow'>NUll</span>"
						+" in pointer variable <span class='ct-code-b-yellow'>p</span>" 
						+ " of <span class='ct-code-b-yellow'>s2</span> i.e, it does not link to the next structure variable.";
			typing(".introjs-tooltiptext", text, function() {
				$('.introjs-nextbutton').show();
			});
		});
		break;
		case "printf":
			$('.introjs-nextbutton').hide();
			$(".introjs-helperLayer ").one('transitionend', function() {
				$("#output").append('<span id="details"></span>');
				var text = "This statement will prints <span class='ct-code-b-yellow'>s1.data, s1.p->data</span> to the console.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		break;
		case "restart":
			$('.introjs-nextbutton').hide();
			$('#informationDiv').css({"z-index": "0"});
			$(".introjs-helperLayer ").one('transitionend', function() {
				TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
					var text = "Click to restart.";
					typing(".introjs-tooltiptext", text);
				}});
			});
		break;
		}
	});
	intro.start();
	$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton, .introjs-bullets').hide();
}

function typing(typingId, typingContent,callBackFunction) {
	$('.nextButton').hide();
	$(typingId).typewriting( typingContent , {
		"typing_interval": typingInterval,
		"cursor_color": 'white',
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function flipEffect(selector, val, callBackFunction) {
	$(selector).effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.to($(selector), 0.5, {rotationX : -90, onComplete:function() {
		$(selector).html(val);
		TweenMax.to($(selector), 0.5, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}


function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	$(selector2).removeClass('opacity00')
	$(selector1).addClass('z-index1000000').effect( "highlight",{color: '#ffff33'}, 500);
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		$(selector1).removeClass('z-index1000000');
		$("#dummy").remove();
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}


function flips() {
	$('.nextButton').hide();
	$("#sValue").effect("highlight",{color: 'blue'}, 800, function() {
		flipEffect("#sValue", "*s", function() {
			$("#sValue").effect("highlight",{color: 'blue'}, 800, function() {
				intro.refresh();
				var text = "Here, adding a <span class='ct-code-b-yellow'>*</span> to "
							+ "<span class='ct-code-b-yellow'>s</span> which is a "
							+ "<span class='ct-code-b-yellow'>struct</span> pointer variable "
							+ " makes the statement valid.<br><br> " 
							+ "<span class='ct-code-b-yellow'>2 bytes</span>"
							+ " of memory is allocated to store the <span class='ct-code-b-yellow'>address</span>" 
							+ " of the struct <span class='ct-code-b-yellow'>student</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		});
	});
}

function numbers() {
	$("[contenteditable=true]").on('keydown', function(e) {
		$('.ct-code-b-red').remove();
		var max = $(this).attr('maxlength');
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		if (e.keyCode == 109 || e.keyCode == 189 || e.keyCode == 173) {
			if ($(this).text().length < 1) {	
				return;
			} else {
				e.preventDefault();
			}
		}
		if (((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) || (e.keyCode == 13 || e.keyCode ==9)){
			e.preventDefault();
		}
		if ($(this).text().length > max - 1) {
			$('.introjs-tooltiptext').append('<div class="ct-code-b-red">Please restrict the maximum length to 3 digits only.</div>')
			e.preventDefault();
		}
	});
	$("[contenteditable=true]").on('keyup', function(e) {
		var max = $(this).attr('maxlength');
		if ($(this).text().length != max ) {
			$('.ct-code-b-red').remove();
		}
		if ($(this).text().length != 0) {
			$('.introjs-nextbutton').show();
			if ($('.introjs-nextbutton[style="display: inline-block;"]').length == 1 && e.keyCode == 13) {
				intro.nextStep();
			}
		} else {
			if ($('ct-code-b-red').length == 0) {
				$('.introjs-tooltiptext').append('<div class="ct-code-b-red">Please enter any integer.</div>');
			}
			$('.introjs-nextbutton').hide();
		}
	});
}