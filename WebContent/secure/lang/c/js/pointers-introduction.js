var introjs;
var typingInterval = 1;

var pointersIntroductionReady = function() {
	$('.introjs-nextbutton').keydown(function(e) {
		if (e.which == 13) {
			e.preventDefault();
		}
	});

	$('#restartBtn').click(function() {
		location.reload();
	});

	introJsFunction();
}

function typing(typingId, typingContent, typingInterval, cursorColor, typingCallbackFunction) {
	$(typingId).typewriting(typingContent, {
		"typing_interval": typingInterval,
		"cursor_color": cursorColor
	}, function() {
		$(typingId).removeClass('typingCursor');
		if (typeof typingCallbackFunction === "function") {
			typingCallbackFunction();
			introjs._introItems[introjs._currentStep].intro = $(".introjs-tooltiptext").html();
			introjs._introItems[introjs._currentStep].tooltipClass = "";
			introjs._introItems[introjs._currentStep].isCompleted = "true";
		}
	});
}

function introJsFunction() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
			element : "#preCode",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#line1",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#xBox",
			intro : "",
			animateStep : "xBoxAnimate",
			tooltipClass: 'hide',
			isCompleted : "false"
		}, {
			element : "#line2",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#yBox",
			intro : "",
			animateStep : "yBoxAnimate",
			tooltipClass: 'hide',
			isCompleted : "false"
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "1",
			isCompleted : "false"
		}, {
			element : "#line3",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#line4",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#zBox",
			intro : "",
			animateStep : "zBoxAnimate",
			tooltipClass: 'hide',
			isCompleted : "false"
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "2",
			isCompleted : "false"
		}, {
			element : "#printf1",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#xBox",
			intro : "",
			animateStep : "xValuePrint",
			isCompleted : "false"
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf2",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#xBox",
			intro : "",
			animateStep : "xAddressPrint",
			isCompleted : "false"
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf3",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#yBox",
			intro : "",
			animateStep : "yValuePrint",
			isCompleted : "false"
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf4",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#yBox",
			intro : "",
			animateStep : "yAddressPrint",
			isCompleted : "false"
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf5",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#zBox",
			intro : "",
			animateStep : "zValuePrint",
			isCompleted : "false"
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf6",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#zBox",
			intro : "",
			animateStep : "zAddressPrint",
			isCompleted : "false"
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#printf7",
			intro : "",
			isCompleted : "false"
		}, {
			element : "#animationDiv",
			intro : "",
			animateStep : "*zValuePrint",
			isCompleted : "false"
		}, {
			element : "#outputBox",
			tooltipClass: "hide"
		}, {
			element : "#restartBtn",
			intro : "Click to restart.",
			position : "right"
		} ]});

	introjs.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-prevbutton, .introjs-skipbutton').hide();
		var elementId = targetElement.id;
		switch (elementId) {
		case "preCode":
			if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
				var typingContent = 'Let us understand <span class="ct-code-b-yellow">pointers</span> in <span class="ct-code-b-yellow">C</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton').show();
				});
			} else {
				$('.introjs-nextbutton').show();
			}
			break;
		case "line1":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'A variable <span class="ct-code-b-yellow">x</span> of type <span class="ct-code-b-yellow">int</span>,'
										+ ' is initialized with a value of <span class="ct-code-b-yellow">3</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "xBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "xBoxAnimate":
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					animationXBox(function() {
						$('.introjs-tooltip').removeClass('hide');
							var typingContent = 'The variable <span class="ct-code-b-yellow">x</span> is of type ' +
											'<span class="ct-code-b-yellow">int</span>, which occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
											' in memory and is stored in some address (i.e. location).<br><br> Let us assume the address to be ' +
											'<span class="ct-code-b-yellow">1111</span>. The variable <span class="ct-code-b-yellow">x</span>' +
											' is initialized to <span class="ct-code-b-yellow">3</span>.';
							typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
					});
					} else {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					}
					
					break;
				case "xValuePrint":
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
						$('#xValue').addClass('blinking-border-background-blue');
						var typingContent = 'The blinking value is returned by <span class="ct-code-b-yellow">x</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					} else {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					}
					break;
				case "xAddressPrint":
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
						$('#xAddress').addClass('blinking-border-background-blue');
						var typingContent = 'The blinking value is the address returned by <span class="ct-code-b-yellow">&x</span>.<br> ' +
											'<br><span class="ct-code-b-yellow">&</span> (ampersand) returns the address.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					} else {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					}
					break;
				}
			});
			break;
		case "line2":
			$('.introjs-helperLayer').one('transitionend', function () {
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'A variable <span class="ct-code-b-yellow">y</span> of type <span class="ct-code-b-yellow">int</span>, is ' +
										'initialized with the value of <span class="ct-code-b-yellow">x</span> (x = 3).';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "yBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "yBoxAnimate":
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					animationYBox(function() {
						$('.introjs-tooltip').removeClass('hide');
						var typingContent = 'The variable <span class="ct-code-b-yellow">y</span> is of type ' +
											'<span class="ct-code-b-yellow">int</span>, which occupies <span class="ct-code-b-yellow">2 bytes</span> ' +
											' in memory and is stored in some address (i.e. location).<br><br> Let us assume the address to be ' +
											'<span class="ct-code-b-yellow">1234</span>. The variable <span class="ct-code-b-yellow">y</span> is initialized' +
											' to <span class="ct-code-b-yellow">x</span> (i.e. <span class="ct-code-b-yellow">3</span>).';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
					break;
				case "yValuePrint":
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
						$('#yValue').addClass('blinking-border-background-blue');
						var typingContent = 'The blinking value is returned by <span class="ct-code-b-yellow">y</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					} else {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					}
					break;
				case "yAddressPrint":
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
						$('#yAddress').addClass('blinking-border-background-blue');
						var typingContent = 'The blinking value is the address returned by <span class="ct-code-b-yellow">&y</span>.<br> ' +
											'<br><span class="ct-code-b-yellow">&</span> (ampersand) returns the address.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					} else {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					}
					break;
				}
			});
			break;
		case "animationDiv":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
				case "1":
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
						var typingContent = 'Two variables <span class="ct-code-b-yellow">x</span> and'
											+ ' <span class="ct-code-b-yellow">y</span> are stored in memory at two different locations. '
											+ 'These two variables are initialized with the same value (i.e., <span class="ct-code-b-yellow">3</span>).'
											+ '<br><br>Using <span class="ct-code-b-yellow">pointers</span>, these two variables('
											+ '<span class="ct-code-b-yellow">x</span>, <span class="ct-code-b-yellow">y</span>) can point to a'
											+ ' single memory location that holds the value <span class="ct-code-b-yellow">3</span>. '
											+ ' So, <span class="ct-code-b-yellow">pointers</span> are used to manage memory efficiently.'
											+ '<br><br> In <b>pointers</b> we have two <span class="ct-code-b-yellow">unary</span> operators. They are : ' 
											+ '<ul><li><span class="ct-code-b-yellow">&</span> (ampersand) - This returns the <span class="ct-code-b-yellow"> '
											+ 'address</span> of the variable.</li><li><span class="ct-code-b-yellow">*</span> (asterisk) - ' 
											+ 'This returns the <span class="ct-code-b-yellow">value</span> at that address.</li></ul>';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					} else {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					}
					break;
				case "2":
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
						var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">z</span>'+
											' has the address of variable <span class="ct-code-b-yellow">x</span>.<br> To get the value of ' +
											'<span class="ct-code-b-yellow">x</span> we use <span class="ct-code-b-yellow">*z</span>.' +
											'<br><br><span class="ct-code-b-yellow">' +
											'z</span> has the address of <span class="ct-code-b-yellow">x</span>, so <span class="ct-code-b-yellow">' +
											'*z</span> returns the value at the address pointed by <span class="ct-code-b-yellow">z</span>.';
						typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					} else {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					}
					break;
				case "*zValuePrint":
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
						TweenMax.to($('.svg-line').show(), 1, {attr: {x2: '32.5%', y2: '41%'}, onComplete: function() {
							$('#xValue').addClass('blinking-border-background-blue');
							var typingContent = 'Since <span class="ct-code-b-yellow">*</span> (asterisk) returns the value at that address, ' +
												'<span class="ct-code-b-yellow">*z</span> means the value at <span class="ct-code-b-yellow">z</span>\'s ' +
												'value (i.e. the value stored at <span class="ct-code-b-yellow">1111</span>).<br>' +
												'<br>The blinking value is returned by <span class="ct-code-b-yellow">*z</span>.';
							typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
								$('.introjs-nextbutton').show();
							});
						}});
					} else {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					}
					break;
				}
			});
			break;
		case "line3":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
				var typingContent = 'In \'<span class="ct-code-b-yellow">C</span>\', pointers are declared using'+
									' <span class="ct-code-b-yellow">*</span> (asterisk).<br><br>' + 
									' In the above statement, we have declared a <span class="ct-code-b-yellow">pointer</span> variable ' +
									'<span class="ct-code-b-yellow">*z</span> of type <span class="ct-code-b-yellow">int</span>.';
				typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});				
			break;
		case "line4":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">z</span> is ' +
										'assigned with <span class="ct-code-b-yellow">&x</span> (address of <span class="ct-code-b-yellow">x</span>' + 
										' (i.e., <span class="ct-code-b-yellow">1111</span>)).';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "zBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				var animateStep = introjs._introItems[introjs._currentStep].animateStep;
				switch (animateStep) {
					case "zBoxAnimate":
						if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
							animationZBox(function() {
								$('.introjs-tooltip').removeClass('hide');
								var typingContent = 'The <span class="ct-code-b-yellow">pointer</span> variable <span class="ct-code-b-yellow">' +
													'z</span> is of type <span class="ct-code-b-yellow">int</span>, which occupies ' +
													'<span class="ct-code-b-yellow">2 bytes</span> of memory,' +
													' and is stored in some address (i.e. location).<br><br> Let us assume the address to be ' +
													'<span class="ct-code-b-yellow">2222</span>. The variable <span class="ct-code-b-yellow">z</span> is initialized' +
													' to <span class="ct-code-b-yellow">&x</span> (i.e. <span class="ct-code-b-yellow">&x</span> ' +
													'is the address of <span class="ct-code-b-yellow">x</span>).';
								typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
									$('.introjs-nextbutton, .introjs-prevbutton').show();
								});
							});
						} else {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						}
					break;
					case "zValuePrint":
						if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
							$('#zValue').addClass('blinking-border-background-blue');
							var typingContent = 'The blinking value is returned by <span class="ct-code-b-yellow">z</span>.';
							typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						} else {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						}
					break;
					case "zAddressPrint":
						if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
							$('#zAddress').addClass('blinking-border-background-blue');
							var typingContent = 'The blinking value is the address returned by <span class="ct-code-b-yellow">&z</span>.<br><br> ' +
												'<span class="ct-code-b-yellow">&</span> (ampersand) returns the address.';
							typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						} else {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						}
					break;
				}
			});
			break;
		case "printf1":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">x</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton, .introjs-prevbutton').show();
					});
				} else {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				}
			});
			break;
		case "printf2":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'This statement prints the <span class="ct-code-b-yellow">address</span> of <span class="ct-code-b-yellow">x</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					} else {
						$('.introjs-nextbutton').show();
					}
			});
			break;
		case "printf3":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">y</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					} else {
						$('.introjs-nextbutton').show();
					}
			});
			break;
		case "printf4":
			$('.introjs-helperLayer').one('transitionend', function () {
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'This statement prints the <span class="ct-code-b-yellow">address</span> of <span class="ct-code-b-yellow">y</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					} else {
						$('.introjs-nextbutton').show();
					}
			});
			break;
		case "printf5":
			$('.introjs-helperLayer').one('transitionend', function () {
					if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">z</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					} else {
						$('.introjs-nextbutton').show();
					}
			});
			break;
		case "printf6":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'This statement prints the <span class="ct-code-b-yellow">address</span> of <span class="ct-code-b-yellow">z</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					} else {
						$('.introjs-nextbutton').show();
					}
			});
			break;
		case "printf7":
			$('.introjs-helperLayer').one('transitionend', function () {
				if (introjs._introItems[introjs._currentStep].isCompleted == "false") {
					var typingContent = 'This statement prints the <span class="ct-code-b-yellow">value</span> of <span class="ct-code-b-yellow">*z</span>.';
					typing('.introjs-tooltiptext', typingContent, typingInterval, 'white', function() {
						$('.introjs-nextbutton').show();
					});
					} else {
						$('.introjs-nextbutton').show();
					}
			});
			break;
		case "outputBox":
			$('.introjs-helperLayer').one('transitionend', function () {
				$('.blinking-border-background-blue').removeClass('blinking-border-background-blue');
				$('.svg-line').hide();
				var selector = $('.output-console-body > .visibility-hidden').eq(0);
				var typingContent = selector.removeClass('visibility-hidden').html();
				typing(selector, typingContent, 30, 'white', function() {
					setTimeout(function() {
						introjs.nextStep();
					}, 1000);
				});
				
			});
			break;
		case "restartBtn":
			$('.introjs-tooltip').css({'min-width' : '125px'});
			$('.introjs-helperLayer').one('transitionend', function () {
				$("#restartBtn").removeClass('visibility-hidden');
			});
			break;
		}
	});
	introjs.start();
}

function fromEffectWithTweenMax(selector1, selector2, callBackFunction) {
	var l1 = $(selector1).offset();
	var l2 = $(selector2).offset();
	var topLength = l1.top - l2.top;
	var leftLength = l1.left - l2.left;
	TweenMax.from($(selector2), 1, {top: topLength, left: leftLength, onComplete: function() {
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

function animationXBox(callBackFunction) {
	$('#xBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#xBox').removeClass('animated zoomIn');
		$('#valueOfX').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#valueOfX').removeClass('circle-css');
			$('#xValue').removeClass('visibility-hidden');
			fromEffectWithTweenMax('#valueOfX', '#xValue', function() {
				callBackFunction();
			});
		});
	});
}

function animationYBox(callBackFunction) {
	$('#yBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#yBox').removeClass('animated zoomIn');
		$('#xValue').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#xValue').removeClass('circle-css');
			$('#yValue').removeClass('visibility-hidden');
			fromEffectWithTweenMax('#xValue', '#yValue', function() {
				callBackFunction();
			});
		});
	});
}

function animationZBox(callBackFunction) {
	$('#zBox').toggleClass('visibility-hidden animated zoomIn').one('animationend', function() {
		$('#zBox').removeClass('animated zoomIn');
		$('#xAddress').addClass('circle-css').effect("highlight", {color: '#FFFFFF'}, 1000, function() {
			$('#xAddress').removeClass('circle-css');
			$('#zValue').removeClass('visibility-hidden');
			fromEffectWithTweenMax('#xAddress', '#zValue', function() {
				callBackFunction();
			});
		});
	});
}