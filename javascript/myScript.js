

var picList = new Array(5);
var caption = new Array(5);
var whichPic = 0;

var fButtonListener;
var bButtonListener;

picList[0] = "Pictures/clubfair14.jpg";
picList[1] = "Pictures/clubfair15.jpg";
picList[2] = "Pictures/mwaward15.JPG";
picList[3] = "Pictures/gillette.png";
picList[4] = "Pictures/toys2015.jpg";

caption[0] = "SHADES Promoting at the Club Fair in 2014";
caption[1] = "SHADES Promoting at the Club Fair in 2015";
caption[2] = "Co-Head Jammil Telfort receiving the Metro West award for his diversity work";
caption[3] = "SHADES volunteering at Gilette stadium during the fall of 2013";
caption[4] = "SHADES frundraising for the annual Toys For Tots drive";

window.onload = function(){
	document.getElementById("picView").src = picList[whichPic];
	document.getElementById("Caption").src = caption[whichPic];

	fButtonListener = document.getElementById("forwardButton");
	bButtonListener = document.getElementById("backButton");

	fButtonListener.addEventListener('click', function(event){
		++whichPic;
		if (whichPic >= picList.length) {
			whichPic = 0;
		}
		document.getElementById("picView").src = picList[whichPic];
		document.getElementById("Caption").innerHTML = caption[whichPic];




	});

	bButtonListener.addEventListener('click', function(event){
		--whichPic;
		if (whichPic < 0) {
			whichPic = picList.length - 1;
		}
		document.getElementById("picView").src = picList[whichPic];
		document.getElementById("Caption").innerHTML = caption[whichPic];

	});



}












































