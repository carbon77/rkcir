function notifyContainerClick(e) {
	if (e.target.classList.contains('notify__remove-btn')) {
		e.target.parentElement.parentElement.classList.add('close')
	}
}

function showNotification({
							  title, text, delay = 5000,
						  }) {
	let notifyContainer = document.getElementById('notification-container')

	if (!notifyContainer) {
		notifyContainer = document.createElement('div')
		notifyContainer.id = 'notification-container'
		notifyContainer.classList.add('notification-container')
		notifyContainer.addEventListener('click', notifyContainerClick)
		document.body.appendChild(notifyContainer)
	}

	let titleEl = document.createElement('strong')
	titleEl.classList.add('notify__title')
	titleEl.textContent = title

	let textEl = document.createElement('p')
	textEl.classList.add('notify__text')
	textEl.textContent = text

	let infoEl = document.createElement('div')
	infoEl.classList.add('notify__info')
	infoEl.append(titleEl, textEl)

	let iconEl = document.createElement('div')
	iconEl.classList.add('notify__icon-el')
	iconEl.innerHTML = '<i class="fa-solid fa-exclamation notify__icon"></i>'

	let removeEl = document.createElement('div')
	let removeBtn = document.createElement('button')
	removeBtn.classList.add('notify__remove-btn')
	removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
	removeEl.classList.add('notify__remove')
	removeEl.appendChild(removeBtn)

	let notifyEl = document.createElement('div')
	notifyEl.classList.add('notification', 'close')
	notifyEl.append(iconEl, infoEl, removeEl)

	notifyContainer.prepend(notifyEl)

	setTimeout(() => {
		notifyEl.classList.remove('close')
	}, 10)

	setTimeout(() => {
		notifyEl.classList.add('close')
	}, delay)

	notifyEl.addEventListener('transitionend', e => {
		if (e.propertyName === 'opacity' && e.currentTarget.classList.contains('close')) {
			notifyEl.remove()

			if (!notifyContainer.hasChildNodes()) {
				notifyContainer.removeEventListener('click', notifyContainerClick)
				notifyContainer.remove()
			}
		}
	})
}