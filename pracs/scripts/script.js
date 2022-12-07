let centerImg = document.getElementById('center-img')
let centerImgCont = centerImg.parentElement

centerImg.style.left = `${(centerImgCont.offsetWidth - centerImg.offsetWidth) / 2}px`
centerImg.style.top = `${(centerImgCont.offsetHeight - centerImg.offsetHeight) / 2}px`

let likeBtns = document.getElementsByClassName("like_btn")
let likeCanvasOn = false

for (let likeBtn of likeBtns) {
	likeBtn.addEventListener('click', ({ target }) => {
		let span = target.getElementsByTagName('span')[0]
		let num = +span.textContent

		if (target.classList.contains('liked')) {
			span.textContent = num - 1
			target.classList.remove('liked')
		} else {
			span.textContent = num + 1
			target.classList.add('liked')
		}
	})
}

document.getElementById('like-canvas-toggle').addEventListener('click', e => {
	likeCanvasOn = !likeCanvasOn
})

document.getElementById('like-canvas').addEventListener('mousemove', e => {
	if (!likeCanvasOn) return

	let rect = e.target.getBoundingClientRect()
	let x = e.clientX - rect.left
	let y = e.clientY - rect.top

	let heart = document.createElement('i')
	heart.classList.add('fa-solid', 'fa-heart')
	heart.style.position = 'absolute'
	heart.style.left = x + 'px'
	heart.style.top = y + 'px'

	e.target.appendChild(heart)
})