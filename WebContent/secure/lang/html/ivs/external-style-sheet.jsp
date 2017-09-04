
<!DOCTYPE html PUBLIC>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/introjs.css">
<link rel="stylesheet" href="/css/introjs-ct.css">
<link rel="stylesheet" href="/css/animate.css">

<script src="/js/jquery-latest.js"></script>
<script src="/js/intro.js"></script>
<script src="/js/bootstrap.js"></script>
<script src="/js/jquery-ui-all.js"></script>
<script src="/js/typewriting.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/gs/TweenMax.min.js"></script>
<title>External Style Sheet</title>
<style>
.margin-top-25 {
	margin-top: 25px;
}

pre {
	-moz-tab-size: 3;
	margin: 0;
}

img {
	width: 100%;
}

#browser {
	border-radius: 8px;
	padding: 0; 
}

.browser-text {
 	border: 1px solid black; 
 	padding-left: 8px;
 	height: 150px;
}

#h1Style {
	display: inline-block;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	z-index: 9999999;
}

.z-index {
	z-index: 9999999;
	background-color: white;
	position: relative;
	border-radius: 2px;
}

#cssStyle {
	display: inline-block;
}

#linking {
	display: ruby;
}

.blink {
	animation: blinking 1s infinite;
}

@keyframes blinking {
	50% {background: yellow}
}

[contenteditable=true]:empty:before {
	content: " ";
	color: #B8B8A0;
}

.styleClass {
	display: inline-block;
	min-height: 15px;
	min-width: 30px;
}

.usr-btn {
	background-color: green;
}

.ct-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}
</style>
<script>
var count = 0;
var introjs;
$(document).ready(function() {
	initIntroJS();
	
	$("#restart").click(function() {
		location.reload();
	});
	//drag option disabled
	$("body").attr({ondragstart : "return false"});
});

function initIntroJS() {
	introjs = introJs();
	introjs.setOptions({
		showStepNumbers: false,
		showBullets: false,
		exitOnOverlayClick: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
					element: '#program',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#externalTag',
					intro: ''
				}, {
					element: '#browser',
					intro: '',
					tooltipClass: 'hide'
				}, {
					element: '#externalTag',
					intro: ''
				}, {
					element: '#styleSheet',
					intro: ''
				}, {
					element: '#linking',
					intro: ''
				}, {
					element: '#coloring',
					intro: ''
				}, {
					element: '#fontType',
					intro: ''
				}, {
					element: '#alignment',
					intro: ''
				}, {
					element: '#restart',
					intro: '',
					position: 'right'
				}]
	});
	
	introjs.onafterchange(function(targetElement) {
		var elementId = targetElement.id;
		switch(elementId) {
			case "program":
				$('.introjs-nextbutton').hide();
				$("#program").removeClass("opacity00");
				basicTags();
				break;
				
			case "externalTag":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					if (introjs._currentStep == 1) {
						$("#externalTag").removeClass("opacity00");
						$("h1Style").addClass("z-index");
						var text = "Basic html page with <span class='ct-code-b-yellow'>&lt;h1&gt;</span> tag.";
						typing('.introjs-tooltiptext', text, function() {
							$('.introjs-nextbutton').show();
						});
					} else {
						$('.introjs-helperLayer').one('transitionend', function() {
							var text = "Let us apply style for this <span class='ct-code-b-yellow'>&lt;h1&gt;</span>"
									+ " tag in separate file called <span class='ct-code-b-yellow'>external style sheet</span>";
							typing('.introjs-tooltiptext', text, function() {
								$('.introjs-nextbutton').show();
							});
						});
					}
				});
				break;
				
			case "browser":
				$(".introjs-nextbutton").hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#externalTag").addClass("z-index").effect("transfer", {to: $("#externalBrowser"), className: "ui-effects-transfer"}, 1500, function() {
						$("#externalBrowser").removeClass("opacity00");
						$("#externalTag").removeClass("z-index");
						setTimeout(function() {
							introjs.nextStep();
						}, 800);
					});
				});
				break;
				
			case "styleSheet":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#browser").removeClass("z-index");
					$("#styleSheet").removeClass("opacity00");
					var text = "For this h1 tag we create a style in another page named as <span class='ct-code-b-yellow'>style-sheet.css</span>. It is called "
							+ "<span class='ct-code-b-yellow'>external style sheet</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$(".file-name").effect("highlight", {color: "yellow"}, 800);
						$("#externalTag").addClass("z-index");
						$("#h1Tag").effect("transfer", {to: $("#h1Selector"), className: "ui-effects-transfer"}, 1500, function() {
							$("#h1Selector").removeClass("opacity00");
							$("#externalTag").removeClass("z-index");
							$(".brace").removeClass("opacity00");
							$('.introjs-nextbutton').show();
						}); 
					});
				});
				break;
	
			case "linking":
				$('.introjs-tooltip').css({"width": "400"});
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "<span class='ct-code-b-yellow'>Link</span> up <span class='ct-code-b-yellow'>style-sheet.css</span>" 
								+ " & <span class='ct-code-b-yellow'>HTML Document</span> by using <span class='ct-code-b-yellow'>&lt;link&gt;</span>.";
					typing('.introjs-tooltiptext', text, function() {
						$("#linking").removeClass("opacity00");
						var text = $("#linking").html();
						typing('#linking', text, function() {
							introjs.refresh();
							$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(0)">Next &#8594;</a>');
						});
					});
				});
				break;
				
			case "coloring":
				$('.introjs-tooltip').css({"width": "200"});
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Change h1 color to blue. <span class='ct-code-b-yellow'>Enter<br> color: blue;</span>";
					typing('.introjs-tooltiptext', text, function() {
						events("#colorSpan", "color: blue;", 4);
					});
				});
				break;
				
			case "fontType":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Change font type. Enter <span class='ct-code-b-yellow'>font-family: monospace;</span>";
					typing('.introjs-tooltiptext', text, function() {
						events("#fontFmly", "font-family: monospace;", 5);
					});
				});
				break;
				
			case "alignment":
				$('.introjs-nextbutton').hide();
				introjs.refresh();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text = "Change alignment to center. Enter <br><span class='ct-code-b-yellow'>text-align: center;</span>";
					typing('.introjs-tooltiptext', text, function() {
						events("#alignmentType", "text-align: center;", 6);
					});
				});
				break;
				
			case "restart":
				$(".z-index").removeClass("z-index");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$("#restart").removeClass("opacity00");
					var text = "Click to restart";
					typing(".introjs-tooltiptext", text);
				});
				break;
		}
	});
	
	introjs.start();
	$('.introjs-skipbutton').hide();
	$('.introjs-prevbutton').hide();
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval": "5",
		"cursor_color": "white",
	}, function() {
		$(selector).removeClass('typingCursor');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	})
}

function events(id, text, count) {
	$("[contenteditable = false]").attr("contenteditable", "true");
	$(id).css({"outline" : "none"});
	$(id).focus();
	introjs.refresh();
	
	//paste option disabled
	$(id).off("paste");
	$(id).on("paste", function(e) {
		e.preventDefault();
	});
	
	$(id).off("keydown");
	$(id).on("keydown", function(e) {
		var max = $(this).attr("maxlength");
		introjs.refresh();
		
		//backspace = 8, delete = 46, leftarrow = 37, rightarrow = 39, esc = 27, enter = 13, ctrl = 17, tab = 9;
		if ($.inArray(e.keyCode, [8, 46, 37, 39, 27]) !== -1) {
			return;
		}
		
		if (e.keyCode == 13 || e.keyCode == 17 || e.keyCode == 9) {
			e.preventDefault();
		}
		
		if ($(id).text().length >= max) {
			e.preventDefault();
		}
	});
	
	$(id).on("keyup", function(e) {
		$(".usr-btn, .ct-red").remove();
		introjs.refresh();
		if ($(id).text() == text) {
			$("[contenteditable = true]").attr("contenteditable", "false");
			$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton('+count+')">Next &#8594;</a>');
		} else {
			$('.introjs-nextbutton, .usr-btn').hide();
			$('.introjs-tooltiptext').append('<div class="ct-red">Properly write above text</div>');
		}
	});
}

function userButton(count) {
	count++;
	$(".usr-btn").remove();
	if (count == 1) {
		$('.introjs-tooltiptext').append('<div class="link-text"></div>');
		var text = "The link element contains three important attributes: <span class='ct-code-b-yellow'>rel</span>,"
					+ " <span class='ct-code-b-yellow'>type</span> and <span class='ct-code-b-yellow'>href</span>";
		typing('.link-text', text, function() {
			nextBtn(count);
		});
	} else if (count == 2) {
		$(".rel-type").addClass("opacity00").removeClass("hide");
		introjs.refresh();
		$(".rel-type").removeClass("opacity00");
		var text = $(".rel-type").html();
		typing(".rel-type", text, function() {
			setTimeout(function() {
				$('.introjs-tooltiptext').append('<ul><li></li></ul>');
				var text = "the value of the <span class='ct-code-b-yellow'>rel</span> attribute is always <span class='ct-code-b-yellow'>stylesheet</span>.";
				typing('.introjs-tooltiptext > ul li:last-child()', text, function() {
					nextBtn(count);
				});
			}, 1500);
		});
	} else if (count == 3) {
		$(".style-type").addClass("opacity00").removeClass("hide");
		introjs.refresh();
		$(".style-type").removeClass("opacity00");
		var text = $(".style-type").html();
		typing(".style-type", text, function() {
			$('.introjs-tooltiptext > ul').append('<li></li>');
			var text = "the value of the <span class='ct-code-b-yellow'>type</span> attribute is always <span class='ct-code-b-yellow'>text/css</span>.";
			typing('.introjs-tooltiptext > ul li:last-child()', text, function() {
				nextBtn(count);
			});
		});
	} else if (count == 4) {
		$(".file-path").addClass("opacity00").removeClass("hide");
		introjs.refresh();
		$(".file-path").removeClass("opacity00")
		var text = $(".file-path").html();
		typing('.file-path', text, function() {
			introjs.refresh();
			$("#fileName").append("style-sheet.css").addClass("opacity00");
			introjs.refresh();
			$(".file-name").effect("transfer", {to: $("#fileName"), className: "ui-effects-transfer"}, 1500, function() {
				$("#fileName").removeClass("opacity00");
				$('.introjs-tooltiptext > ul').append('<li></li>');
				var text = "<span class='ct-code-b-yellow'>href</span> attribute will change according to which <span class='ct-code-b-yellow'>"
							+ "style-sheet.css</span> file you're referring to.";
				typing('.introjs-tooltiptext > ul li:last-child()', text, function() {
					$('.introjs-nextbutton').show();
				});
			});
		});
	} else if (count == 5) {
		$("#browser").addClass("z-index");
		$("#browserText").effect("highlight", {color: "yellow"}, 800, function() {
			$("#coloring").effect("transfer", {to: $("#browserText"), className: "ui-effects-transfer"}, 1500, function() {
				$("#externalBrowser").css({"color": "blue"});
				$('.introjs-nextbutton').show();
			});
		});
	} else if (count == 6) {
		$("#browserText").effect("highlight", {color: "yellow"}, 800, function() {
			$("#fontType").effect("transfer", {to: $("#browserText"), className: "ui-effects-transfer"}, 1500, function() {
				$("#externalBrowser").css({"font-family": "monospace"});
				$('.introjs-nextbutton').show();
			});
		});
	} else if (count == 7) {
		$("#browserText").effect("highlight", {color: "yellow"}, 800, function() {
			$("#alignment").effect("transfer", {to: $("#browserText"), className: "ui-effects-transfer"}, 1500, function() {
				$("#externalBrowser").addClass("text-center");
				$('.introjs-nextbutton').show();
			});
		});
	}
}

function nextBtn(count) {
	$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton('+count+')">Next &#8594;</a>');
	count++;
}

function fontFmlyBtn() {
	$(".usr-btn").remove();
	$('.introjs-tooltiptext > ul').append('<li></li>');
	var text = "Now change text type to monospace";
	typing('.introjs-tooltiptext > ul li:last-child', text, function() {
		$("#fontType").removeClass("opacity00");
		var text = $("#fontType").html();
		typing('#fontType', text, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(5)">Next &#8594;</a>');
		});
	});
}

function alignmentBtn() {
	$(".usr-btn").remove();
	$('.introjs-tooltiptext > ul').append('<li></li>');
	var text = "Now change alignment for h1";
	typing('.introjs-tooltiptext > ul li:last-child', text, function() {
		$("#alignment").removeClass("opacity00");
		var text = $("#alignment").html();
		typing('#alignment', text, function() {
			$('.introjs-tooltipbuttons').append('<a class="introjs-button usr-btn" onclick="userButton(6)">Next &#8594;</a>');
		});
	});
}

function zoomInEffect(id, callBackFunction) {
	$(id).removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
		$(this).removeClass("animated zoomIn");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		} 
	})
}

function basicTags() {
	TweenMax.to($("#docType"), 1, {opacity: 1, onComplete: function() {
		TweenMax.to($("#htmlOpen, #htmlClose"), 1, {opacity: 1, onComplete: function() {
			TweenMax.to($("#headOpen, #headClose"), 1, {opacity: 1, onComplete: function() {
				TweenMax.to($("#titleTag"), 1, {opacity: 1, onComplete: function() {
					$("#browser").addClass("z-index").removeClass("opacity00").addClass("animated zoomIn").one('animationend', function() {
						$(this).removeClass("animated zoomIn");
						setTimeout(function() {
							$("#browser").removeClass("z-index");
							TweenMax.to($("#bodyOpen, #bodyClose"), 1, {opacity: 1, onComplete: function() {
								$('.introjs-tooltip').removeClass("hide");
								var text = "Basic html page";
								typing('.introjs-tooltiptext', text, function() {
									$('.introjs-nextbutton').show();
								});
							}});
						}, 800);
					});
				}});
			}});
		}});
	}});
}
</script>
</head>

<body>
	<div class="text-center margin-top-25">
		<h4 class="label ct-demo-heading" id="heading">External</h4>
	</div>
		<div class="col-xs-12">
		<div class="col-xs-12 margin-top-25 padding0">
<pre class="col-xs-6 opacity00 padding0" id="program">
<span id="docType" class="opacity00">&lt;!DOCTYPE html&gt;</span>
<span id="htmlOpen" class="opacity00">&lt;html&gt;</span>
	<span id="headOpen" class="opacity00">&lt;head&gt;</span>
		<span id="titleTag" class="opacity00">&lt;title&gt;External Style Sheet&lt;/title&gt;</span> 
 		<span id="linking" class="opacity00">&lt;link<span class="rel-type hide"><span id='relType'> rel</span>="stylesheet"</span><span class="style-type hide"><span id='type'> type</span>="text/css"</span><span class="file-path hide"><span id='hrefType'> href</span>="<span id=fileName></span>"</span>&gt;</span> 
	<span id="headClose" class="opacity00">&lt;/head&gt;</span>
	<span id="bodyOpen" class="opacity00">&lt;body&gt;</span>
		<span id="externalTag" class="opacity00"><span id="h1Tag">&lt;h1&gt;</span><span id="externalText">Welcome to CodeTantra</span>&lt;/h1&gt;</span> 
	<span id="bodyClose" class="opacity00">&lt;/body&gt;</span>
<span id="htmlClose" class="opacity00">&lt;/html&gt;</span>
</pre>
			<pre class="col-xs-3 col-xs-offset-2 opacity00 margin-top-25" id="styleSheet">
<span class="ct-blue-color file-name">style-sheet.css</span>
<span id="cssStyle"> <span id="h1Selector" class="opacity00">h1</span> <span class="brace opacity00"> {</span>
	<div id="coloring" class="styleClass"><span id="colorSpan" contenteditable="true" maxlength="12" spellcheck="false"></span></div> 
	<div id="fontType" class="styleClass"><span id="fontFmly" contenteditable="true" maxlength="23" spellcheck="false"></span></div> 
	<span id="alignment" class="styleClass"><span id="alignmentType" contenteditable="true" spellcheck="false" maxlength="19"></span></span>
 <span class="brace opacity00">}</span></span>
 </pre>
		</div>
		<div class="col-xs-12 margin-top-25">
			<div class="col-xs-6 col-xs-offset-3 opacity00" id="browser">
				<img src="/images/external.png">
				<div class="browser-text">
					<h1 id="externalBrowser" class="opacity00"><span id="browserText">Welcome to CodeTantra</span></h1>
				</div>
			</div>
		</div>
		<div class="col-xs-12 text-center margin-top-25">
			<span class="btn btn-warning opacity00" id="restart">Restart</span>
		</div>
	</div>
</body>
</html>