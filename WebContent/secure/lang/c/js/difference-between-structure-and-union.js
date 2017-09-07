var intro;
var typingInterval = 1;

var diffBetweenStructureAndUnionReady = function() {
	$(".line").hide();
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {  //tab pressed
	        objEvent.preventDefault(); // stops its action
	    }
	});
	$("#restart").click(function() {
		location.reload(); 
	});
		intro = introJs();
		intro.setOptions({
			showStepNumbers: false,
			exitOnOverlayClick: false,
			showBullets: false,
			exitOnEsc: false,
			keyboardNavigation: false,
			steps : [/* {
				element : "#heading",
				intro : "",
				position:"right"
			},*/{
				element : "#structureKeyword",
				intro : "",
				position:"right"
			},{
				element : "#structureDeclaration",
				intro : "",
				position:"right"
			},{
				element : "#unionKeyword",
				intro : "",
				position:"right"
			},{
				element : "#unionDeclaration",
				intro : "",
				position:"left"
			},{
				element : "#structureDefinition",
				intro : "",
				position:"left"
			},{
				element : "#unionDefinition",
				intro : "",
				position:"left"
			},{
				element : "#structureInitialization",
				intro : "",
				position:"left"
			},{
				element : "#totalInitialization",
				intro : "",
				position:"right"
			},{
				element : "#unionInitialization",
				intro : "",
				position:"left"
			},{
				element : "#structureMemory",
				intro : "",
				position:"left"
			},{
				element : "#unionMemory",
				intro : "",
				position:"left"
			},{
				element : "#totalInitialization",
				intro : "",
				position:"right"
			},{
				element : "#structureMemory",
				intro : "",
				position:"left"
			},{
				element : "#unionInitialization",
				intro : "",
				position:"left"
			},{
				element : "#unionMemory",
				intro : "",
				position:"left"
			},{
				element : "#structureAccessing",
				intro : "",
				position:"left"
			},{
				element : "#unionAccessing",
				intro : "",
				position:"left"
			},{
				element : "#restart",
				intro : "",
				position:"right",
				tooltipClass: "restart-tooltip-min-width"
			}
		]});
		
			intro.onafterchange(function(targetElement) {
			var elementId = targetElement.id;
			switch (elementId) {
			/*case "heading":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				var text = "Let us see the difference between the <span class='ct-code-b-yellow'>structures</span>"
							+ " and <span class='ct-code-b-yellow'>unions</span>.";
				typing(".introjs-tooltiptext", text, function() {
					$('.introjs-nextbutton, .introjs-prevbutton').show();
				});
				break;*/
			case "structureKeyword":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				//$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structuresDiv").removeClass("opacity00");
					$("#structureKeyword").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "In <span class='ct-code-b-yellow'>structure</span>, the keyword "
									+ "<span class='ct-code-b-yellow'>struct</span> is used to declare a structure.";
						typing(".introjs-tooltiptext", text, function() {
							$("#structureKeyword").removeClass("animated zoomIn");
							$('.introjs-nextbutton').show();
						});
					});
			//	});
				break;
			case "structureDeclaration":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureRemainingDecleration").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "This is a <span class='ct-code-b-yellow'>structure</span>  declaration.";
						typing(".introjs-tooltiptext", text, function() {
							$("#structureRemainingDecleration").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "unionKeyword":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionsDiv").removeClass("opacity00");
					$("#unionKeyword").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "In <span class='ct-code-b-yellow'>unions</span>, "
									+ "the keyword <span class='ct-code-b-yellow'>union</span> is used for declaration.";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionKeyword").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "unionDeclaration":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionRemainingDecleration").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "This is an <span class='ct-code-b-yellow'>union</span> declaration.";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionRemainingDecleration").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "structureDefinition":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureDefinition").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#structureDefinition").removeClass('animated zoomIn');
						var text = "This is a <span class='ct-code-b-yellow'>structure</span> definition.";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionRemainingDecleration").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "unionDefinition":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionDefinition").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#unionDefinition").removeClass('animated zoomIn');
						var text = "This is an <span class='ct-code-b-yellow'>union</span> definition.";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionRemainingDecleration").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "structureInitialization":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureInitialization").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						$("#structureInitialization").removeClass("animated zoomIn");
						var text = "A structure can be  initialized by initializing " 
							+ "<span class='ct-code-b-yellow'>all</span> the <span class='ct-code-b-yellow'>members</span> at" 
							+ " once.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "totalInitialization":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 11) {
						var text = "The sequence in which the <span class='ct-code-b-yellow'>members</span> are declared in the structure, will be followed "
									+" when memory is allocated to the structure.";
						typing(".introjs-tooltiptext", text, function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					} else {
						$("#anotherInitializationOfStructure").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "We can also initialize each member of <span class='ct-code-b-yellow'>structure</span> individually.";
							typing(".introjs-tooltiptext", text, function() {
								$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					}
				});
				break;
			case "unionInitialization":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 13) {
						$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
						var text = "Based on the <span class='ct-code-b-yellow'>largest</span> datatype of the member of union, the memory will be allocated.";
						typing(".introjs-tooltiptext", text, function() {
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					} else {
						$("#unionInitialization").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "Initialization of the members of an <span class='ct-code-b-yellow'>union</span> should be done one "
								+"member at a time.";
							typing(".introjs-tooltiptext", text, function() {
								$("#unionInitialization").removeClass("animated zoomIn");
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					}
				});
				break;
			case "structureMemory":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 12) {
						var text = "Every member's value will be stored in its allocated <span class='ct-code-b-yellow'>memory</span> address.";
						typing(".introjs-tooltiptext", text, function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValuesinStructure();'>Next &#8594;</a>");
						});
					} else {
						$("#structureMemory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "In a <b class='ct-code-b-yellow'>structure</b> every member has its own memory allocated.";
							typing(".introjs-tooltiptext", text, function() {
								$("#structureMemory").removeClass("animated zoomIn");
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					}
				});
				break;
			case "unionMemory":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					if (intro._currentStep == 14) {
						var text = "<ul><li>At any point of time, only <span class='ct-code-b-yellow'>one member</span> can be accessed in the union, "
							+ "as union uses the <span class='ct-code-b-yellow'>same memory </span> for all its members.</li>"
							+ "<li>Memory is used efficiently in the <span class='ct-code-b-yellow'>union</span>.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#anotherInitializationOfStructure").removeClass("animated zoomIn");
							$(".introjs-tooltipbuttons").append("<a class='introjs-button nextButton' onclick = 'moveValuesinUnion();'>Next &#8594;</a>");
						});
					} else {
						$("#unionMemory").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
							var text = "<ul><li>In union memory will be allocated based on the member with the <b class='ct-code-b-yellow'>largest</b> datatype.</li></br></br>"
										+ "<li>Here, a memory of <span class='ct-code-b-yellow'>4</span> bytes will be allocated to the union <span class='ct-code-b-yellow'>book</span>"
										+ " <span class='ct-code-b-yellow'>b</span> as the <b class='ct-code-b-yellow'>largest</b> datatype is "
										+ "<span class='ct-code-b-yellow'>float</span> which occupies <span class='ct-code-b-yellow'>4 bytes</span> of memory.</li></ul>";
							typing(".introjs-tooltiptext", text, function() {
								$("#unionMemory").removeClass("animated zoomIn");
								$('.introjs-nextbutton, .introjs-prevbutton').show();
							});
						});
					}
				});
				break;
			case "structureAccessing":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#structureAccessing").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "<ul><li>Accessing the members of structure is done using the <span class='ct-code-b-yellow'>dot(.)</span> operator.</li>" 
							+ "<li>In structure all the members can be accessed at <span class='ct-code-b-yellow'>once</span>.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#structureAccessing").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "unionAccessing":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					$("#unionAccessing").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
						var text = "<ul><li>Accessing the members of union is done using the <span class='ct-code-b-yellow'>dot(.)</span> operator.</li>" 
							+ "<li>In union all the members <span class='ct-code-b-yellow'>should not be accessed</span> at once, it will result in incorrect data.</li></ul>";
						typing(".introjs-tooltiptext", text, function() {
							$("#unionAccessing").removeClass("animated zoomIn");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						});
					});
				});
				break;
			case "restart":
				$('.introjs-nextbutton, .introjs-prevbutton').hide();
				$(".introjs-helperLayer ").one('transitionend', function() {
					TweenMax.to("#restart", 1, {"opacity" : "1", onComplete:function() {
						var text = "Click to restart.";
						typing(".introjs-tooltiptext", text, function() {
						});
					}});
				});
			break;
			
			}
		});
		intro.start();
		$('.introjs-nextbutton, .introjs-prevbutton').hide();
		$('.introjs-prevbutton').hide();
		$('.introjs-skipbutton').hide();
		$('.introjs-bullets').hide();
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
	TweenMax.to($(selector), 0.3, {rotationX : -90, onComplete:function() {
		$(selector).html(val);
		TweenMax.to($(selector), 0.3, {rotationX : 0, onComplete:function() {
			if (typeof callBackFunction === "function") {
				callBackFunction();
			}
		}});
	}});
}

function moveValuesinStructure() {
	$('.nextButton').hide();
	var l1= $("#aName").offset();
	$("#aName").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
		$("#pname").text($("#aName").text()).removeClass("opacity00").offset({
			"top":l1.top,
			"left":l1.left
		});
		TweenMax.to("#pname", 1, {top:0, left:0, onComplete:function() {
			$("#aName").removeClass("z-index-class");
			var l1= $("#aPages").offset();
			$("#ppages").text($("#aPages").text()).removeClass("opacity00").offset({
				"top":l1.top,
				"left":l1.left
			});
			$("#aPages").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
				TweenMax.to("#ppages",1,{top:0,left:0, onComplete:function() {
					$("#aPages").removeClass("z-index-class");
					var l1= $("#aPrice").offset();
					$("#pprice").text($("#aPrice").text()).removeClass("opacity00").offset({
						"top":l1.top,
						"left":l1.left
					});
					$("#aPrice").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
						TweenMax.to("#pprice",1,{top:0,left:0, onComplete:function() {
							$("#aPrice").removeClass("z-index-class");
							$('.introjs-nextbutton, .introjs-prevbutton').show();
						}});
					});
				}});
			});
		}});
	});
}

function moveValuesinUnion() {
	$('.nextButton').hide();
	var l1= $("#series").offset();
	$("#tabletd1").text($("#series").text()).removeClass("opacity00").offset({
		"top":l1.top,
		"left":l1.left
	});
	$("#series").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
		$("#changingBytes").removeClass("opacity00").addClass("animated zoomIn").one("animationend", function() {
			$("#changingBytes").effect("highlight",{color: 'yellow'}, 1000, function() {
				TweenMax.to("#tabletd1",1,{top:0,left:0, onComplete:function() {
					$("#series").removeClass("z-index-class");
					$("#changingBytes").removeClass("animated zoomIn");
					$("#pages").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
						$("#changingBytes").effect("highlight",{color: 'yellow'}, 1000, function() {
							flipEffect("#changingBytes", "b.pages(2 bytes)", function() {
								var l1= $("#pages").offset();
								$("#tabletd1").text($("#pages").text()).removeClass("opacity00").offset({
									"top":l1.top,
									"left":l1.left
								});
								TweenMax.to("#tabletd1",1,{top:0,left:0, onComplete:function() {
									$("#pages").removeClass("z-index-class");
									$("#changingBytes").effect("highlight",{color: 'yellow'}, 1000, function() {
										flipEffect("#changingBytes", "b.price(4 bytes)", function() {
											$("#price").addClass("z-index-class").effect("highlight",{color: 'yellow'}, 1000, function() {
												var l1= $("#price").offset();
												$("#tabletd1").text($("#price").text()).removeClass("opacity00").offset({
													"top":l1.top,
													"left":l1.left
												});
												TweenMax.to("#tabletd1",1,{top:0,left:0, onComplete:function() {
													$("#price").removeClass("z-index-class");
													$('.introjs-nextbutton, .introjs-prevbutton').show();
												}});
											});
										});
									});
								}});
							});
						});
					});
				}});
			});
		});
	});
}