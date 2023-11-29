/* These codes are switching the image automatically */
window.onload = function () {
	var img1 = document.getElementById("img1");

	var imgArr = ["images&videos/homebanner.png", "images&videos/homebanner2.png", "images&videos/homebanner3.png"];

	var index = 0;
	setInterval(function(){
		index++;

		if(index >= imgArr.length){
			index = 0;
		}
		img1.src = imgArr[index];
	}, 2500);
};