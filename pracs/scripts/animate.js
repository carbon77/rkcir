function animate({ timing, draw, duration }) {
	let start = performance.now()

	requestAnimationFrame(function animate(time) {
		let timeFraction = ( time - start ) / duration
		if (timeFraction > 1) timeFraction = 1

		let progress = timing(timeFraction)

		draw(progress)

		if (timeFraction < 1) {
			requestAnimationFrame(animate)
		}
	})
}

function bounce(timeFraction) {
	for (let a = 0, b = 1; 1; a += b, b /= 2) {
		if (timeFraction >= ( 7 - 4 * a ) / 11) {
			return -Math.pow(( 11 - 6 * a - 11 * timeFraction ) / 4, 2) + Math.pow(b, 2)
		}
	}
}

function back(x, timeFraction) {
	return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}

document.getElementById('animate-slider-1').addEventListener('click', e => {
	animate({
		duration: 5000,
		timing: bounce,
		draw(progress) {
			sliderItem.style.left = 10 + progress * 260 + 'px'
		},
	})
})

document.getElementById('gallery__main-book').addEventListener('click', ({ target }) => {
	const parent = target.parentElement
	target.style.position = 'fixed'
	target.style.top = '50%'
	target.style.left = '50%'
	target.style.transform = 'translate(-50%, -50%)'
	target.style.width = '300px'

	document.body.append(target)

	animate({
		duration: 3000,
		timing: back.bind(null, 1.5),
		draw(progress) {
			target.style.transform = `translate(-50%, -50%) rotate(${360 * progress}deg) scale(${0.5 + progress})`
		},
	})

	setTimeout(() => {
		parent.append(target)
		target.style.position = ''
		target.style.top = ''
		target.style.left = ''
		target.style.transform = ''
		target.style.width = '100%'
	}, 3500)
})