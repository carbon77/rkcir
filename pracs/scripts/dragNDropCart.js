document.getElementById('gallery__books').addEventListener('mousedown', e=> {
	let target = e.target
	let parent

	if (
		target.classList.contains('gallery__item') ||
		target.parentElement.classList.contains('gallery__item')
	) {
		if (target.classList.contains('gallery__item')) {
			parent = target
			target = target.firstChild
		} else {
			parent = target.parentElement
		}

		let shiftX = e.clientX - target.getBoundingClientRect().left
		let shiftY = e.clientY - target.getBoundingClientRect().top
		
		target.style.position = 'absolute'
		target.style.zIndex = 10000
		target.style.width = 130 + 'px'
		document.body.append(target)
		
		moveAt(e.pageX, e.pageY)

		function moveAt(pageX, pageY) {
			target.style.left = pageX - shiftX + 'px'
			target.style.top = pageY - shiftY + 'px'
		}

		let currentDroppable = null
		function onMouseMove(e) {
			moveAt(e.pageX, e.pageY)

			target.hidden = true
			let elemBelow = document.elementFromPoint(e.clientX, e.clientY)
			target.hidden = false

			if (!elemBelow) return

			let droppableBelow = elemBelow.closest('.droppable')
			if (currentDroppable != droppableBelow) {
				if (currentDroppable) {
					currentDroppable.classList.remove('dropping')
				}

				currentDroppable = droppableBelow
				if (currentDroppable) {
					currentDroppable.classList.add('dropping')
				}
			}
		}

		document.addEventListener('mousemove', onMouseMove)

		target.onmouseup = function() {
			document.removeEventListener('mousemove', onMouseMove)

			if (currentDroppable?.classList.contains('droppable')) {
				currentDroppable.classList.remove('dropping')
				const index = target.getAttribute('_book')
				cartBooks.push(books[index])
				updateCart(cartBooks)

				showNotification({
					title: "Успешно",
					text: "Книга добавлена в корзину!",
					delay: 1000,
				})
			}

			parent.append(target)
			target.style.position = ''
			target.style.width = '100%'
			target.onmouseup = null
		}

		target.ondragstart = () => false
	}
})