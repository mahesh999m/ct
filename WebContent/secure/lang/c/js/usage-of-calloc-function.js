var usageOfcallocFunctionReady = function() {
	introGuide();
}

function introGuide() {
	introjs = introJs();
	$("body").keydown(function(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
		}
	});
	
	$("#restart").click(function() {
		location.reload();
	});

	introjs.setOptions({
		showStepNumbers : false,
		exitOnOverlayClick : false,
		showBullets : false,
		exitOnEsc : false,
		keyboardNavigation : false,
		tooltip : false,
		steps :[{
			element :'#infoDiv',
			intro : '',
			tooltipClass : 'hide',
			isCompleted : "false"
		}, {
			element : '#preCode',
			intro : '',
			isCompleted : "false"
		}, {
			element : '#firstExLine1',
			intro : '',
			isCompleted : "false"
		}, {
			element : '#pBox',
			intro : '',
			tooltipClass: 'hide',
			isCompleted : "false"
		}, {
			element : '#size',
			intro : '',
			isCompleted : "false"
		}, {
			element : '#memory',
			intro : '',
			isCompleted : "false"
		}, {
			element : '#callocFunction',
			intro : '',
			isCompleted : "false"
		}, {
			element : '#firstExLine2',
			intro : '',
			isCompleted : "false"
		}, {
			element : '#oneDArrayDiv',
			intro : '',
			tooltipClass: 'hide',
			isCompleted : "false"
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'tweenmax',
			isCompleted : "false"
		}, {
			element : '#firstExDiv',
			intro : '',
			animateStep : 'appendZeros',
			isCompleted : "false"
		}, {
			element : '#preCodeTwo',
			intro : '',
			isCompleted : "false"
		}, {
			element : '#secondExLine1',
			intro : '',
			isCompleted : "false"
		}, {
			element : '#qBox',
			intro : '',
			tooltipClass: 'hide',
			isCompleted : "false"
		}, {
			element : '#callocFor2D',
			intro : '',
			isCompleted : "false"
		}, {
			element : '#secondExLine2',
			intro : '',
			isCompleted : "false"
		}, {
			element : '#twoDArrayDiv',
			intro : '',
			animateStep : 'boxZooming',
			tooltipClass: 'hide',
			isCompleted : "false"
		}, {
			element : '#secondExDiv',
			intro : '',
			isCompleted : "false"
		}, {
			element :'#restart',
			intro : "Click to restart.",
			position : 'right',
		}]
	});
	
	introjs.onafterchange(function(targetElement) {
		$(".introjs-skipbutton, .introjs-prevbutton, .introjs-nextbutton").hide();
		var elementId = targetElement.id;
		switch(elementId) {
		case 'infoDiv':
			//$("#infoDiv").css({height: $("#infoDiv").outerHeight()});
			var text = $("#infoDiv").html();
			$("#list1").fadeTo(300, 1, function() {
				$("#list3").fadeTo(300, 1, function() {
					$("#infoDiv").addClass('z-index9999999');
					setTimeout(function () {
						introjs.nextStep();
					}, 1000);
				});
			});
			break;
		case 'size':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					typing('.introjs-tooltiptext', "<span class='ct-code-b-yellow'>sizeof</span> is an operator that returns the number of bytes " +
								"allocated for the required datatype, variable or constant.", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'memory':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					typing('.introjs-tooltiptext', "Here <span class='ct-code-b-yellow'>5</span> is the size of the one dimensional array and " + 
							"is also the number of memory locations to be allocated on the <span class='ct-code-b-yellow'>heap</span>. " + 
							"<br/><br/>These five locations are allocated in sequence.", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'callocFunction':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					typing('.introjs-tooltiptext', "The <span class='ct-code-b-yellow'>calloc()</span> function<ul><li> Allocates " +
							"a block of memory from the <span class='ct-code-b-yellow'>heap</span> </li> " +
							"<li>Initializes it with value <span class='ct-code-b-yellow'>0</span> </li><li>It returns the base address of the " +
							"allocated block.</li></ul>", function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'preCode':
			introjs.refresh();
			$("#syntax").addClass('z-index9999999');
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					$("#exampleOne").removeClass("opacity00");
					$("#preCode").removeClass("opacity00");
					typing('.introjs-tooltiptext', "Let us consider an example on <span class='ct-code-b-yellow'>calloc()</span>, " +
							"in which memory is allocated for an <span class='ct-code-b-yellow'>one dimensional array</span>.", function() {
						TweenMax.to($("#preCode"), 1, {opacity: 1, onComplete: function() {
							$(".introjs-nextbutton").show();
						}});
					});
				} else {
					$(".introjs-nextbutton").show();
				}
			});
			break;
		case 'firstExLine1':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "A pointer variable <span class='ct-code-b-yellow'>p</span> is declared of datatype " +
								"<span class='ct-code-b-yellow'>int</span>.<br/><br/> " +
								"An int pointer variable, should always point to an <span class='ct-code-b-yellow'>int</span> value.";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'pBox':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					$("#firstExDiv").removeClass("opacity00");
					boxAnimation("#pBox", function() {
						$('.introjs-tooltip').removeClass('hide');
						var text = "The variable pointer <span class='ct-code-b-yellow'>p</span> is of type <span class='ct-code-b-yellow'>int</span> " +
									"and it occupies <span class='ct-code-b-yellow'>2 bytes</span> in memory with some address. " +
									"<br><br>Let us assume this address to be <span class='ct-code-b-yellow'>1112</span>.";
						typing('.introjs-tooltiptext', text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'firstExLine2':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
				var text = "The <span class='ct-code-b-yellow'>calloc()</span> function returns a void pointer.<br/><br/> This pointer stores the " +
							"base address of the block of memory allocated on the <span class='ct-code-b-yellow'>heap</span>.<br/><br/> The values in the " + 
							"allocated block are initialized to <span class='ct-code-b-yellow'>0</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#dataTypeInt1, #dataTypeInt2").addClass("blinking", function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'oneDArrayDiv':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					$("#oneDArrayDiv").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						$("#oneDArrayDiv").removeClass("animated zoomIn");
						$("#smallBox").effect("transfer", { to: $("#addressId")}, 1000).addClass(".ui-effects-transfer", function() {
							$("#addressId").removeClass("opacity00", function() {
								$("#elementId").removeClass("opacity00");
								$('.introjs-tooltip').removeClass('hide');
								var text = "Here the memory is allocated as <span class='ct-code-b-yellow'>5</span> locations and each location occupies " +
											"<span class='ct-code-b-yellow'>2 bytes</span>. <br><br>Let us assume the  base " +
											"address is <span class='ct-code-b-yellow'>1056</span>.";
								typing('.introjs-tooltiptext', text, function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							});
						});
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'firstExDiv':
			var animateStep = introjs._introItems[introjs._currentStep].animateStep;
			switch(animateStep) {
			case 'tweenmax':
				$('.introjs-helperLayer').one("transitionend", function() {
					typing('.introjs-tooltiptext', "Here the base address is stored in the <span class='ct-code-b-yellow'>pointer</span> " +
							"variable <span class='ct-code-b-yellow'>p</span>.", function() {
						tweenmaxAnimation();// no previous button;
					});
				});
				break;
			case 'appendZeros':
				typing('.introjs-tooltiptext', "The memory locations which are allocated by <span class='ct-code-b-yellow'>calloc()</span> " +
						"function are assigned initial value of " +
						"<span class='ct-code-b-yellow'>zeros</span> by default.", function() {
					$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
					$(".user-btn").click(function() {
						$(".user-btn").remove();
						$(".append-zero").removeClass("opacity00");
						TweenMax.staggerFrom(".append-zero", 1, {opacity:1, top:-45, onComplete: function() {
							$(".introjs-nextbutton").show();
						}});
					});
				});
				break;
			}
			break;
		case 'preCodeTwo':
			introjs.refresh();
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					$("#exampleTwo").removeClass("opacity00");
					$("#preCodeTwo").removeClass("opacity00");
					typing('.introjs-tooltiptext', "Let us consider an example on <span class='ct-code-b-yellow'>calloc()</span>, " +
							"in which memory is allocated for a <span class='ct-code-b-yellow'>two dimensional array</span>.", function() {
						TweenMax.to($("#preCodeTwo"), 1, {opacity: 1, onComplete: function(){
							$(".introjs-nextbutton").show();
						}});
					});
				} else {
					$(".introjs-nextbutton").show();
				}
			});
			break;
		case 'secondExLine1':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "A pointer variable <span class='ct-code-b-yellow'>q</span> is declared of datatype " +
								"<span class='ct-code-b-yellow'>float</span>.<br/><br/> " +
								"A float pointer variable, should always point to a <span class='ct-code-b-yellow'>float</span> value.";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();	
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'qBox':
			$('.introjs-fixParent').removeClass('introjs-fixParent');
			$("#secondExDiv").removeClass("opacity00");
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					boxAnimation("#qBox", function() {
						$('.introjs-tooltip').removeClass('hide');
						var text =  "The variable pointer <span class='ct-code-b-yellow'>q</span> is of type <span class='ct-code-b-yellow'>float</span> " +
									"and it occupies <span class='ct-code-b-yellow'>2 bytes</span> in memory with some address. " +
									"<br><br>Let us assume this address to be <span class='ct-code-b-yellow'>1044</span>.";
						typing('.introjs-tooltiptext', text, function() {
							$(".introjs-nextbutton, .introjs-prevbutton").show();
						});
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'callocFor2D':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var text = "Here <span class='ct-code-b-yellow'>3</span> represents a row and <span class='ct-code-b-yellow'>2</span> the column of the two dimensional array.<br><br>" +
								"So memory is allocated into 3 rows and 2 columns with <span class='ct-code-b-yellow'>4 bytes(for float)</span> per location.";
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});

			break;
		case 'secondExLine2':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					$("#dataTypeFloat1, #dataTypeFloat2").addClass("blinking");
					var text =  "<span class='ct-code-b-yellow'>calloc()</span> function here selects<br><span class='ct-code-b-yellow'> 24 bytes ((3 * 2) * 4)</span> of memory from the " +
								"<span class='ct-code-b-yellow'>heap</span>.<br><br>" +
								"The address of first byte(base address) is returned by the <span class='ct-code-b-yellow'>calloc()</span> function " +
								"is typecasted to <span class='ct-code-b-yellow'>float*</span>.<br><br>This " +
								"address is stored in the <span class='ct-code-b-yellow'>float</span> pointer <span class='ct-code-b-yellow'>q</span>.";  
					typing('.introjs-tooltiptext', text, function() {
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'twoDArrayDiv':
			$('.introjs-helperLayer').one("transitionend", function() {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					boxAnimation("#twoDArrayDiv", function() {
						$("#smallBoxTwoD").effect("transfer", { to: $("#twoDAddressId")}, 1000).addClass(".ui-effects-transfer", function() {
							$("#twoDAddressId").removeClass("opacity00", function() {
								$('.introjs-tooltip').removeClass('hide');
								var text = "The memory is allocated as <span class='ct-code-b-yellow'>3 rows</span> and <span class='ct-code-b-yellow'>2 columns</span>.<br>Let the base address of this memory " + 
											"block be <span class='ct-code-b-yellow'>1002</span> with each location occupying " +
											"<span class='ct-code-b-yellow'>4 bytes</span>.";
								typing('.introjs-tooltiptext', text, function() {
									$(".introjs-nextbutton, .introjs-prevbutton").show();
								});
							});
						});
					});
				} else {
					$(".introjs-nextbutton, .introjs-prevbutton").show();
				}
			});
			break;
		case 'secondExDiv':
			$('.introjs-helperLayer').one("transitionend", function() {
				typing('.introjs-tooltiptext', "Here, the base address of the allocated <span class='ct-code-b-yellow'>heap</span> " +
						"is stored in <span class='ct-code-b-yellow'>pointer q</span> " +
						"<br>i.e. <span class='ct-code-b-yellow'>1002</span>.", function() {
					tweenmaxTwoDAnimation();
				});
			});
			break;
		case 'restart':
			$(".introjs-tooltip").css("min-width", "-moz-max-content");
			$(".introjs-tooltip").css("min-width", "max-content");
			$('.introjs-helperLayer').one("transitionend", function() {
				$("#restart").removeClass("opacity00");
			});
			break;
		}
	});
	introjs.start();
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
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
			introjs._introItems[introjs._currentStep].tooltipClass = "";
			introjs._introItems[introjs._currentStep].isCompleted = "true";
		}
	})
}

function boxAnimation(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(id).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
}

function tweenmaxAnimation() {
	var l3 = $("#firstAddressId").offset();
	var l4 = $("#baseAddress").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$("#firstAddressId").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$("#baseAddress").removeClass("opacity00");
		TweenMax.from("#baseAddress", 1, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				var text = "Here the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>p</span> has the " +
							"address of the <span class='ct-code-b-yellow'>dynamic memory</span> allocated, so it can access the " +
							"value at address <span class='ct-code-b-yellow'>1056</span>.";
				typing('.introjs-tooltiptext', text, function() {
					svgAppend($('#firstExDiv'), 'svg1');
					svgMarkerAppend($('#svg1'), 'marker1');
					svgAnimatingLineSelector1RightSideToSelector2LeftSide($('#firstExDiv'), $('#memoryBox1'), $('#smallBox'), $('#svg1'), 'svgLine1', 'marker1', function() {	
						$(".introjs-nextbutton").show();
					});	
				});
			});
		}});
	});
}

function tweenmaxTwoDAnimation() {
	var l3 = $("#twoDBaseAddress").offset();
	var l4 = $("#qValue").offset();
	var topLength = l3.top - l4.top;
	var leftLength = l3.left - l4.left;
	$("#twoDBaseAddress").effect( "highlight", {color:"dodgerblue"}, 1000, function() {
		$("#qValue").removeClass("opacity00");
		TweenMax.from("#qValue", 1, {top: topLength, left: leftLength, onComplete: function() {
			$(".introjs-tooltipbuttons").append("<a class='introjs-button user-btn'>Next &#8594;</a>");
			$(".user-btn").click(function() {
				$(".user-btn").remove();
				var text = "Here the <span class='ct-code-b-yellow'>pointer</span> variable <span class='ct-code-b-yellow'>q</span> has the " +
							"address of <span class='ct-code-b-yellow'>dynamic memory</span> allocated, so it can access the " +
							"value at <span class='ct-code-b-yellow'>*q</span>.";
				typing('.introjs-tooltiptext', text, function() {
					svgAppend($('#secondExDiv'), 'svg2');
					svgMarkerAppend($('#svg2'), 'marker2');
					svgAnimatingLineSelector1RightSideToSelector2LeftSide($('#secondExDiv'), $('#memoryBox2'), $('#smallBoxTwoD'), $('#svg2'), 'svgLine2', 'marker2', function() {	
						$(".introjs-nextbutton, .introjs-prevbutton").show();
					});
				});
			});
		}});
	});
}

function svgAppend(selector, svgId) {
	var code = '<svg class="svg-css" id="' + svgId + '"></svg>';
	$(selector).append(code);
}

function svgMarkerAppend(svgId, svgMarkerId) {
	var marker = document.createElementNS("http://www.w3.org/2000/svg", 'marker');
	marker.setAttribute('id', svgMarkerId);
	marker.setAttribute('refX', '5');
	marker.setAttribute('refY', '2.5');
	marker.setAttribute('markerWidth', '5');
	marker.setAttribute('markerHeight', '5');
	marker.setAttribute('orient', 'auto');
	marker.style.fill = 'gray';
	$(svgId).append(marker);
	var path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	path.setAttribute("d", "M0,0 L5,2.5 L0,5 Z");
	$('#' + svgMarkerId).append(path);
}

function svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x2, y2) {
	var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	line.setAttribute("id", svgLineId);
	line.setAttribute("class", "svg-line");
	line.setAttribute("x1", x1);
	line.setAttribute("y1", y1);
	line.setAttribute("x2", x2);
	line.setAttribute("y2", y2);
	line.style.markerEnd = 'url("#' + svgMarkerId + '")';
	$(svgId).append(line);
}

// from selector1 Right side to selector2 Left side
function svgAnimatingLineSelector1RightSideToSelector2LeftSide(parentSelector, selector1, selector2, svgId, svgLineId, svgMarkerId, callBackFunction) {
	var parentOffset = $(parentSelector).offset();
	var x1 = $(selector1).offset().left - parentOffset.left + $(selector1).outerWidth();
	var y1 = $(selector1).offset().top - parentOffset.top + $(selector1).outerHeight() / 2;
	var x2 = $(selector2).offset().left - parentOffset.left;
	var y2 = $(selector2).offset().top - parentOffset.top + $(selector2).outerHeight() / 2;
	svgLineAppend(svgId, svgLineId, svgMarkerId, x1, y1, x1, y1);
	TweenMax.to($('#' + svgLineId).show(), 1, {attr: {x2: x2, y2: y2}, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}