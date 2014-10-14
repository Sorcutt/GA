var images = ["img/0_thumb.jpg","img/1_thumb.jpg","img/2_thumb.jpg","img/3_thumb.jpg","img/4_thumb.jpg","img/5_thumb.jpg","img/6_thumb.jpg","img/7_thumb.jpg"]
var currentImage = 0;

function changeImage(whichNum) {
	var img = document.getElementById('main-image');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}
//line by line console.log
function nextImage(whichNum) {
	currentImage++;
	if(currentImage===images.length){
		currentImage = 0;
	}
	var img = document.getElementById('main-image');
	img.setAttribute('src', images[whichNum]);
}

function prevImage(whichNum) {
	currentImage = currentImage - 1;
	if(currentImage===-1){
		currentImage = 0;
	}
	var img = document.getElementById('main-image');
	img.setAttribute('src', images[whichNum]);
}