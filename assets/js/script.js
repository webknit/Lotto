/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/


	var lotteryArray = [];
	var lotteryNumbers = [];
	var chosenNumbers = [];

	for (var i=1; i<50; i++) {
		lotteryArray.push(i);
	}
	
	console.log (lotteryArray);
	
	function pickNumbers () {
		
			// Generate a random number from the array
			var random = Math.floor(Math.random() * lotteryArray.length);
			var number = lotteryArray[random];
			
			console.log(number);
			
			// Add the number to the array
			lotteryArray.splice(random, 1);
			lotteryNumbers.push(number); 
			
			//print the array out
			var chosenNumbers = lotteryNumbers.join(",");
			
			$("#list").append('<li>' + number + '</li>');
		
	}
	
	function start() { 
	
		timer = setInterval(function() {
	
			pickNumbers();
			
			if(lotteryNumbers.length > 5) {
				window.clearInterval(timer);
				var sortNumbers = lotteryNumbers.sort(function(a,b){return a-b;});
				$('#list li').each(function (index) {
				    $(this).text(sortNumbers[index]);
				});
			}
		}, 1000); 
	
	}
			
	
	
	
	
	
	