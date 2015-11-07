/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope


	function randomColorGenerator(){
		// generate rgb color number
		var red = Math.floor(Math.random() * 256)
		, green = Math.floor(Math.random() * 256)
		, blue = Math.floor(Math.random() * 256);
		console.log(red, 'red');
		console.log(green, 'green');
		console.log(blue, 'blue');

		// turn to hex number
		var hexRed = red.toString(16)
		, hexGreen = green.toString(16)
		, hexBlue = blue.toString(16);
		console.log(hexRed, 'hexRed');
		console.log(hexRed, 'hexGreen');
		console.log(hexRed, 'hexBlue');

		// if random number generator returns a length of 1 then add 0 in front
		if(hexRed.length === 1){
			hexRed = '0' + hexRed;
		}

		if(hexGreen.length === 1){
			hexGreen = '0' + hexGreen;
		}

		if(hexRed.length === 1){
			hexBlue = '0' + hexBlue;
		}

		// contatinate var into a hex value 
		var hexColor = '#' + hexRed + hexGreen + hexBlue;
		return hexColor;

	}

	var color = randomColorGenerator();
	console.log(color);

	$('.js-hover').on('mouseenter', function(){
		$(this).css('background-color', randomColorGenerator() );
		$(this).css('box-shadow', "0 0 8px #fff inset");
	});	

	$(".js-hover").on("mouseleave", function () {
		$(this).css('box-shadow', "none");
	});

})();
