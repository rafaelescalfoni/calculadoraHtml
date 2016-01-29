				$("button").click(function(){
					var valorDisplay = $("#display").text();	
					if ($(this).hasClass("tecla")) {
						if(valorDisplay == "0") {
							valorDisplay = $(this).attr("value");
						} else {
							valorDisplay = valorDisplay + $(this).attr("value");
						}	
						$("#display").text(valorDisplay);
					}
				});

				$("#teclaLimpar").click(function() {
					$("#display").text("0");
				})
