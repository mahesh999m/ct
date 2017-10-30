
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>review</title>
<link href="/css/bootstrap.min.css" rel="stylesheet">
<link href="/css/introjs.css" rel="stylesheet">
<link href="/css/introjs-ct.css" rel="stylesheet">
<link rel="stylesheet" href="/css/jquery-ui.css">
<link rel="stylesheet" href="/css/animate.css">
<link href="/css/font-awesome.min.css" rel="stylesheet">

<script src="/js/jquery-latest.js"></script>
<script src="/js/bootstrap.js"></script>
<script type="text/javascript" src="/js/jquery-ui-latest.js"></script>
<script src="/js/intro.js" type="text/javascript"></script>
<script src="/js/typewriting.min.js" type="text/javascript"></script>
<script src="/js/gs/TweenMax.min.js" type="text/javascript"></script>
<style>
.margin-top-20 {
	margin-top: 20px;
}

.margin-top-40 {
	margin-top: 40px;
}

.box-border {
	border: 1px solid gray;
    border-radius: 8px;
}

.creampretab4 {
	-moz-tab-size: 1;
	tab-size: 1;
	background-color:#fffae6 !important;
	line-height: 2.5;
}

.Vertical-text-center {
    line-height: 20px;
    text-align: right;
}
.padding-col0 {
	padding: 0px;
}

.border-height-css {
	border: 1px solid;
	height: 22px;
}

.box-height {
	height: 113px;
}

.output-console {
    margin: 0;
}

.output-console-body {
	height: 120px;
	font-size: 14px;
	line-height: 2.5;
	white-space: nowrap;
}

.ui-effects-transfer {
	border: 1px solid #003399;
	border-radius: 6px;
	position: relative;
	z-index: 10000000;
}

 .z-index {
	background-color: white;
	position: relative;
	z-index: 10000000 !important;	
} 

.input-char {
  width: 30px;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
  text-align: center;
}

.input-all {
  width: 100%;
  border-width: 0px 0 0 0;
  background-color: #000;
  color: #0f0;
}

.error-msg {
	color: red;
	font-weight: bold;
}

.circle-css {
	border: 1px solid;
	border-radius: 50%;
	padding: 2px;
	position: relative;
	z-index: 9999999;
	background-color: white;
}

.blinking-orange {
	animation-name: blink-background-orange ;
	animation-duration: 1s;
	animation-iteration-count: 1s;
	animation-direction: alternate;
}

@keyframes blink-background-orange { 
	50% {
		background-color: orange;
	}
}

.ct-code-b-red {
	color: red;
	font-family: monospace;
	font-weight: bold;
}

</style>
</head>
<body>
<script>
var typingSpeed = 5;
var intro;
$(document).ready(function() {
	$( "span[id^=exampleTwo]").addClass('opacity00');
	
	 $("#restart").click(function() {
		 window.location.search =  "?restart = 1";
		});
	$("#inputChar").on("keyup", function(e) {
		$('.introjs-tooltiptext').removeClass('error-msg');
		if ($('#inputChar').val() == "") {
			$('.introjs-nextbutton').hide();
			$('.introjs-tooltiptext').addClass('error-msg');
		} else {
			$('.introjs-nextbutton').show();
		}
	});
	
	$("input").attr('disabled','disabled');
	$("#typingDiv >li").addClass("opacity00");
	$('table td:even').css('background-color', 'LightGray');
	$('table tr:even').css('background-color', 'LightBlue');
	$('table tr:odd td').css('background-color', 'LightYellow'); 
	$('table th').css('font-family','monospace');
	var typingId;
	var typingContent;
	var typingInterval;
	var cursorColor;
	var typingCallbackFunction;
	intro = introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [{
			element : "#typingDiv",
			intro : "",
			tooltipClass : "hide" 
		}, 	{
			element : "#typingDiv",
			intro : "",
			position : "bottom"
		}, 	{
			element : "#myTable",
			intro : "",
			position : "left"
		},  {
			element : "#exampleOneChar",
			intro : "",
			position : "right"
		},  {
			element : "#charBox",
			intro : "",
			tooltipClass : "hide",
			action : "charBoxReveal"
		},  {
			element : "#firstPrintf",
			intro : "",
			position : "right"
		},  {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide",
			action : "firstPrintfText"
		},  {
			element : "#firstScanf",
			intro : "",
			position : "right"
		},  {
			element : "#consoleId",
			intro : "",
			position : "left",
			action : "firstPrintfValue"
		},  {
			element : "#charBox",
			intro : "",
			tooltipClass : "hide",
			action : "charBoxStroring"
		}, {
			element : "#exampleTwoInt",
			intro : "",
			position : "right"
		},  {
			element : "#intBox",
			intro : "",
			tooltipClass : "hide"
		},  {
			element : "#exampleTwoFloat",
			intro : "",
			position : "right"
		},  {
			element : "#floatBox",
			intro : "",
			tooltipClass : "hide"
		},  {
			element : "#exampleTwoSecondPrintf",
			intro : "",
			position : "right"
		},  {
			element : "#consoleId",
			intro : "",
			tooltipClass : "hide",
			action : "exampleTwoSecondPrintfText"
		},  {
			element : "#exampleTwoSecondScanf",
			intro : "",
			position : "top"
		},  {
			element : "#consoleId",
			intro : "",
			position : "left",
			action : "exampleTwoSecondPrintfValue"
		},  {
			element : "#memoryDiv1",
			intro : "",
			position : "left",
			tooltipClass : "hide"
		},  {
			element : "#restart",
			intro : "",
			position : "left"
		}
		]});
	intro.onbeforechange(function(targetElement) {
		var elementId = targetElement.id;
		switch (elementId) {
			case "typingDiv":
			$('.introjs-nextbutton').hide();
			if (intro._currentStep == 1) {
				setTimeout(function(){
				var text = "<b class ='ct-code-b-yellow'>'control_string'</b> represents the format characters, which are used to read input values of different data types.";
		 		typing(".introjs-tooltiptext", text, function() {
		 			$('.introjs-nextbutton').show();
		 		});
				},500);
			};
			break;
			case "myTable":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#myTable').removeClass('opacity00');
					var text ="The different format characters use to read different data types are given in the following table.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "exampleOneChar":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$('#codeAnimation, #mainMemoryDiv').removeClass('opacity00');
					var text ="A variable <b class='ct-code-b-yellow'>ch</b> of type character is being declared.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			case "charBox":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var action = intro._introItems[intro._currentStep].action;
					switch(action) {
					case "charBoxReveal":
						$('#charBox').removeClass('opacity00');
						$('#charBox').toggleClass('animated zoomIn').one('animationend', function() {
							intro.nextStep();
						});
						break;
					case "charBoxStroring":
						$("input").attr('disabled','disabled');
						storingElement("#xValue","#inputChar",function() {
							intro.nextStep();
						});
						
						break;
					}
				});
			break;
			
			case "intBox":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#intBox').removeClass('opacity00');
					$('#intBox').toggleClass('animated zoomIn').one('animationend', function() {
						intro.nextStep();
					});
				});
			break;
			
			
			case "floatBox":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#floatBox').removeClass('opacity00');
					$('#floatBox').toggleClass('animated zoomIn').one('animationend', function() {
						intro.nextStep();
					});
				});
			break;
			
			case "firstPrintf":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					$('#consoleId').removeClass('opacity00');
					var text ="The <b class='ct-code-b-yellow'>printf()</b> function prints the text to the console/standard output.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "exampleTwoSecondPrintf":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text ="The <b class='ct-code-b-yellow'>printf()</b> function prints the text to the console/standard output.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "consoleId":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var action = intro._introItems[intro._currentStep].action;
					switch(action) {
					case "firstPrintfText":
						$("#firstPrintf").addClass("z-index").effect("highlight", {color: 'yellow'}, 500, function() {
							$('#firstPrintf').effect( "transfer", { to: $('.output-console-body > div [maxlength="1"]').siblings(), className:"ui-effects-transfer" }, 1500, function() {
								$('#firstPrintf').removeClass('z-index');
								$('.output-console-body > div [maxlength="1"]').siblings().removeClass('opacity00');
								setTimeout(function(){
								intro.nextStep();
								},500);
							});
						});    
						break;
						
						
					case "firstPrintfValue":
						$(".introjs-tooltip").css("min-width", "200px");
						$("#inputChar").removeAttr('disabled');
						$("#inputChar").focus();
						var text ="Enter a character.";
						typing(".introjs-tooltiptext", text, function() {
						});
						break;
						
					case "exampleTwoSecondPrintfValue":
						$(".introjs-tooltip").css("min-width", "400px");
						var text ="Enter an integer and a float value each separated by a <b class='ct-code-b-yellow'>space</b>.<br/><br/>For example,"
						+" if your integer is <b class='ct-code-b-yellow'>24</b> and the float value is" 
						+" <b class='ct-code-b-yellow'>3.14</b> respectively enter them as <b class='ct-code-b-yellow'>24 3.14</b>";
						typing(".introjs-tooltiptext", text, function() {
							arr = [];
							$("#secondInput").addClass("blinking-orange");
							$("#secondInput").removeAttr('disabled');
							$("#secondInput").focus();
							$('#secondInput').on("keydown", function(e) {
								if (arr.length == 2 || arr.length == 0) {
									if (e.keyCode == 32) {
										e.preventDefault();
									}
								}
								
							});
								
							$('#secondInput').on("keyup", function(e) {
								$('.length-error-text').remove();
								if ($(this).val() == "") {
									$(".introjs-nextbutton").hide();
									$('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'><br/>" + 
																			"Please enter an integer and a float value each separated by a space.</span>");
								} 
								var givenText = $(this).val();
								var splittedText = givenText.split(" ");
								arr = [];
								
								$.each(splittedText, function(idx, val) {
									if (val != '') {
										arr.push(val);
									}
								});
								if (arr.length == 2) {
									var a0 = $.isNumeric(arr[0]);
									var a1 = $.isNumeric(arr[1]);
									var dot = arr[1].indexOf(".") !== -1;
									var dot1 = arr[0].indexOf(".") == -1;
									if (a0 && a1 && dot && dot1) {
									    $(".introjs-nextbutton").show();
									  } else {
									    $(".introjs-nextbutton").hide();
									    $('.introjs-tooltiptext').append("<span class='ct-code-b-red length-error-text'> "
												+"<br/> Please follow the above format.</span>");
									  }
								
								} else {
									$(".introjs-nextbutton").hide();
									
								}
							});
						});
						break;
						
					case "exampleTwoSecondPrintfText":
						$("#exampleTwoSecondPrintf").addClass("z-index").effect("highlight", {color: 'yellow'}, 500, function() {
							$('#exampleTwoSecondPrintf').effect( "transfer", { to: $('.output-console-body > :nth-child(2) > span'), className:"ui-effects-transfer" }, 1500, function() {
								$('#exampleTwoSecondPrintf').removeClass('z-index');
								$('.output-console-body > :nth-child(2) > span').removeClass('opacity00');
								setTimeout(function(){
								intro.nextStep();
								},500);
							});
						});   
						break;
					}
				});
			break;
			
			case "firstScanf":
				$(".introjs-tooltip").css("min-width", "400px");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text ='The <b class="ct-code-b-yellow">scanf()</b> function uses the '
					+'<b class="ct-code-b-yellow">%c</b> character to read a character from the standard input and store it into the '
					+'character variable <b class="ct-code-b-yellow">ch</b>.<br/><br/> The memory location of variable '
					+'<b class="ct-code-b-yellow">ch</b> is accessed using <b class="ct-code-b-yellow">&ch</b>.';
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "exampleTwoSecondScanf":
				$(".introjs-tooltip").css("min-width", "400px");
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer').one('transitionend', function() {
					var text ='The <b class="ct-code-b-yellow">scanf()</b> function uses <b class="ct-code-b-yellow">%d, %f</b>'
								+' characteres to read an integer and a float value respectively.'
								+'<br><br> <b class="ct-code-b-yellow">&i, &f</b> refer to the memory locations of the '
								+' variables <b class="ct-code-b-yellow">i</b> and '
								+'<b class="ct-code-b-yellow">f</b>. Hence the values read from standard input'
								+' will be stored in the respective memory locations.';
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "exampleTwoInt":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					$("span[id^=exampleTwo]").removeClass('opacity00');
					var text ="A variable <b class='ct-code-b-yellow'>i</b> of type integer is being declared.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			case "exampleTwoFloat":
				$('.introjs-nextbutton').hide();
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text ="A variable <b class='ct-code-b-yellow'>f</b> of type float is being declared.";
					typing(".introjs-tooltiptext", text, function() {
						$('.introjs-nextbutton').show();
					});
				});
			break;
			
			
			case "restart":
				$(".introjs-tooltip").css("min-width", "200px");
				$('.introjs-nextbutton').hide();
				$('#restart').removeClass('opacity00');
				$('.introjs-helperLayer ').one('transitionend', function() {
					var text = "Click to restart.";
			 		typing(".introjs-tooltiptext", text, function() {
			 		});
				});
			break;
			
			case "memoryDiv1":
				
				$('.introjs-nextbutton').hide();
				var text = $('#secondInput').val();
				var i = 0;
				$('#inputVal').empty();
				
				

				var intIndexOfMatch = text.indexOf("  ");

				while (intIndexOfMatch != -1){
				  text = text.replace( "  ", " " )
				  intIndexOfMatch = text.indexOf( "  " );
				}
				
				
				
				$.each(text.split(' '), function (index, val) {
					$("#inputVal").append("<span id='val"+i+"'>" + val + "</span><span id='space"+i+"'>&nbsp;</span>");
					if(i == 1) {
						  $("#space1").remove();
					  }
						i++ 
					});
				
				var dotPos = $('#val1').text().indexOf(".");
				if (dotPos == (($('#val1').text().length) - 1)) {
					$('#val1').text($('#val1').text()+"0");
				} else if (dotPos == 0){
					$('#val1').text("0"+$('#val1').text());
				}
				
				
				
				$('.introjs-helperLayer ').one('transitionend', function() {
				 	storingElement1("#xValue2","#val0",function() {});
					storingElement1("#xValue3","#val1",function() {
						intro.nextStep();
					});
				});
			break;
		}
	});
	intro.start();
	$('.introjs-nextbutton').hide();
	$('.introjs-prevbutton').hide();
	$('.introjs-skipbutton').hide();
	$('.introjs-bullets').hide();
	TweenMax.to($('#typingDiv > li').eq(0), 0.7, {opacity: 1, onComplete: function() {
		TweenMax.to($('#typingDiv > li').eq(1), 0.7, {opacity: 1, onComplete: function() {
			TweenMax.to($('#typingDiv > li').eq(2), 0.7, {opacity: 1, onComplete: function() {
				intro.nextStep();
			}});
		}});
	}});
});


function typing(selector, text, callBackFunction) {
	$(selector).typewriting(text, {
		"typing_interval" : typingSpeed,
		"cursor_color" : 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	});
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

 function storingElement(memoryId, inputId, callBackFunction) {
	$(memoryId).text($(inputId).val()).addClass('circle-css');
	var pos = $(inputId).offset();
	$(memoryId).offset({"top":pos.top,"left":pos.left});
	$(memoryId).removeClass('opacity00');
	TweenMax.to(memoryId, 1, {top : 0, left : 0,onComplete : function() {
		$(memoryId).removeClass('circle-css');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}
 
function storingElement1(memoryId, inputId, callBackFunction) {
	$(memoryId).text($(inputId).text()).addClass('circle-css');
	var pos = $(inputId).offset();
	$(memoryId).offset({"top":pos.top,"left":pos.left});
	$(memoryId).removeClass('opacity00');
	TweenMax.to(memoryId, 1, {top : 0, left : 0,onComplete : function() {
		$(memoryId).removeClass('circle-css');
		if (typeof callBackFunction === "function") {
			callBackFunction();
		}
	}});
}

</script>
	<div class="ct-box-main">
		<div class='text-center'>
			<h1 class='label ct-demo-heading' id="heading">usage of scanf( )</h1>
		</div>
		
		<div class='col-xs-12 text-center'>
			<span id='restart'
				class='btn btn-warning btn-sm opacity00 margin-top-20'>Restart
				&nbsp;<i class='fa fa-refresh'></i>
			</span>
		</div>

		<div
			class="margin-top-20 col-xs-offset-3 col-xs-7">
			<ol id="typingDiv">
				<li>The <b class="ct-blue-color">scanf()</b> function is used to read values of different data types from the standard input.</li>
				<li>The <b class="ct-blue-color">scanf()</b> function is available in  <b class="ct-blue-color">"stdio.h"</b> header file included in the standard library.</li>
				<li>The general format for using a <b class="ct-blue-color">scanf()</b>
					function is <b>scanf (“control_string”,
						argument_list);</b></li>
			</ol>

		</div>
		<div class='col-xs-offset-4  col-xs-8 text-center margin-top-20'>
			<table id='myTable' class='table-bordered opacity00'>
				<tr>
					<th class='text-center'>Conversion character</th>
					<th class='text-center'>Represents</th>
				</tr>
				<tr>
					<td>%d</td>
					<td>decimal integer</td>
				</tr>
				<tr>
					<td>%c</td>
					<td>single character</td>
				</tr>
				<tr>
					<td>%e,%f,%g</td>
					<td>floating-point value</td>
				</tr>
				<tr>
					<td>%h</td>
					<td>short integer value</td>
				</tr>
				<tr>
					<td>%i</td>
					<td>a decimal, hexadecimal or octal</td>
				</tr>
				<tr>
					<td>%o</td>
					<td>octal integer</td>
				</tr>
				<tr>
					<td>%s</td>
					<td>a string followed by a whitespace character</td>
				</tr>
				<tr>
					<td>%u</td>
					<td>unsigned decimal integer</td>
				</tr>
				<tr>
					<td>%x</td>
					<td>hexadecimal integer</td>
				</tr>
			</table>
		</div>
		<div id="mainDiv" class="col-xs-12 margin-top-20">
		<div class="col-xs-offset-1 col-xs-5">
				<pre id="codeAnimation" class="creampretab4 box-border opacity00">
				<span id="exampleOneChar">char ch;</span>
				<span id="firstPrintf">printf("Enter a character = ");</span>
				<span id='firstScanf'>scanf("%c", &ch);</span>
				
				<span id="exampleTwoInt">int i;</span>
				<span id="exampleTwoFloat">float f;</span>
				<span id="exampleTwoSecondPrintf">printf("Enter an interger and a float value = \n");</span>
				<span id="exampleTwoSecondScanf">scanf("%d %f",&i,&f);</span></pre>
			</div>
		<div class="col-xs-5">
		<div class="col-xs-12 box-border box-height opacity00" id="mainMemoryDiv">
					<div id='memoryDiv1'
					class='back-color col-xs-12 margin-top-40'>
					<div id='charBox' class='col-xs-4 padding-col0 opacity00'>

						<div class="col-xs-3 Vertical-text-center padding-col0">ch =</div>
						<div class="col-xs-9 text-center ">
							<div class="border-height-css">
								<span id="xValue" class=''></span>
							</div>
						</div>
					</div>
					<div id='intBox' class='col-xs-4 padding-col0 opacity00'>

						<div class="col-xs-3 Vertical-text-center padding-col0">i &nbsp; = </div>
						<div class="col-xs-9 text-center">
							<div class="border-height-css">
								<span id="xValue2" class=''></span>
							</div>
						</div>
					</div>
					<div id='floatBox' class='col-xs-4 padding-col0 opacity00'>

						<div class="col-xs-3 Vertical-text-center padding-col0">f &nbsp; = </div>
						<div class="col-xs-9 text-center">
							<div class="border-height-css">
								<span id="xValue3" class=''></span>
							</div>
						</div>
					</div>
				</div>
		</div>
				<div class="col-xs-12 box-height margin-top-20">
					<div id="consoleId" class="output-console padding0 opacity00">
						<div class="output-console-title-bar">
							<span>Output</span>
						</div>
						<div class="output-console-body">
						<div><span class="opacity00">Enter a character = </span><input id='inputChar' maxlength='1' class='input-char'/></div>
						<div><span class="opacity00">Enter  an interger and a float value = </span></div>
						<div><span id="inputVal" class='input-all'><input id='secondInput' maxlength='20' class='input-all'/></span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</body>
</html>

