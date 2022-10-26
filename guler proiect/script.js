/*eslint-env es6*/
const img = document.getElementById('images');
let toggle = true;
img.addEventListener('click', function(){
	toggle = !toggle;
	if(toggle){
		img.src = 'images/doberman.jpg';
	}else{
		img.src = 'images/gigahagi.jpg';
	}

	img.src = 'images/gigahagi.jpg';
})