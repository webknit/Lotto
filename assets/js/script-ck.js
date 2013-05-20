/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/function pickNumbers(){var e=Math.floor(Math.random()*lotteryArray.length),t=lotteryArray[e];console.log(t);lotteryArray.splice(e,1);lotteryNumbers.push(t);var n=lotteryNumbers.join(",");$("#list").append("<li>"+t+"</li>")}function start(){timer=setInterval(function(){pickNumbers();if(lotteryNumbers.length>5){window.clearInterval(timer);var e=lotteryNumbers.sort(function(e,t){return e-t});$("#list li").each(function(t){$(this).text(e[t])})}},1e3)}var lotteryArray=[],lotteryNumbers=[],chosenNumbers=[];for(var i=1;i<50;i++)lotteryArray.push(i);console.log(lotteryArray);