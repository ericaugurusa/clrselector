var bg = document.querySelector("body")
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');



color1.addEventListener("input", watchColorPicker);

function watchColorPicker(event){

	bg.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}

color2.addEventListener("input", watchColorPicker);

function watchColorPicker(event){

	bg.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
}