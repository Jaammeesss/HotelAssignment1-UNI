var imageCount = 1; 
var total = 5;

function photo(x) { //this fuction cycles through the images that i have named "img"  using the left and right arrows that i have assigned as buttons 
	var image = document.getElementById('image');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	}
window.setInterval(function photoA() { // this function automatically cycles through the images with an 8 second delay between them all
	var image = document.getElementById('image');
	imageCount = imageCount + 1;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "Images/img"+ imageCount +".jpg";
	},8000);