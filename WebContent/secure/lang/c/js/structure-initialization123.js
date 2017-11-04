
var typingSpeed = 1;
var structureIntializationReady = function() {
	intro =  introJs();
	intro.setOptions({
		showStepNumbers: false,
		exitOnOverlayClick: false,
		showBullets: false,
		exitOnEsc: false,
		keyboardNavigation: false,
		steps : [ {
					element : "#heading",
					intro : "",
					position : "left",
				}, {
					element : "#firstPre",
					intro : "",
					position : "right",
					action : "firstSyntax",
					tooltipClass: 'hide',
				} ]
		});

	intro.onafterchange(function(targetElement) {
		$('.introjs-nextbutton, .introjs-skipbutton, .introjs-prevbutton').hide();
		var ElementId = targetElement.id;
		switch (ElementId) {
		case "heading":
			$(".introjs-helperLayer").one("transitionend", function() {
				
			});
		break;
		}
	});
	intro.start();
	
	$("#restart").click(function() {
		 location.reload();
	});
}

function typing(selector, text, callBackFunction) {
	$(selector).typewriting( text , {
		"typing_interval": typingSpeed,
		"cursor_color": 'white',
	}, function() {
		$(selector).removeClass("typingCursor");
		if (typeof callBackFunction === "function") {
			callBackFunction();
			intro._introItems[intro._currentStep].intro = $(".introjs-tooltiptext").html();
		}
	});
}
