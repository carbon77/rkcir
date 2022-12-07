function onSliderMove(e) {
	let newX = +e.pageX
	let deltaX = newX - currentSlider
	currentSlider = newX
	moveSliderItem(deltaX)
}

function moveSliderItem(deltaX) {
	let left = +sliderItem.style.left.slice(0, sliderItem.style.left.length - 2) + deltaX

	if (left < 10) {
		left = 10
	} else if (left > 270) {
		left = 270
	}

	sliderItem.style.left = left + 'px'
}

const sliderItem = document.getElementById('slider__item')
const slider = document.getElementById('slider')
let sliderDragging = false
let currentSlider

sliderItem.addEventListener('mousedown', e => {
	currentSlider = +e.pageX
	sliderItem.classList.add('drag')
	sliderDragging = true
	document.addEventListener('mousemove', onSliderMove)
})

document.addEventListener('mouseup', e => {
	if (sliderDragging) {
		sliderItem.classList.remove('drag')
		sliderDragging = false
		document.removeEventListener('mousemove', onSliderMove)
	}
})