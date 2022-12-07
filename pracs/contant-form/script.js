let n = Math.trunc(Math.random() * 100 % 50)
let m = Math.trunc(Math.random() * 100 % 50)
let attempt = 'letter'
let submitBtn = document.getElementById('submit-btn')
let captchaBtn = document.getElementById('captcha-btn')
let captchaEl = document.getElementById('captcha')
let form = document.getElementById('captcha-form')
let titleEl = form.getElementsByClassName('captcha__text')[0]
let letterCaptcha

function updateCaptcha() {
	if (attempt === 'letter') {
		letterCaptcha = genLetterCaptcha(6)
		titleEl.textContent = `Введита капчу: ${letterCaptcha}`
	} else {
		n = Math.trunc(Math.random() * 100 % 50)
		m = Math.trunc(Math.random() * 100 % 50)
		titleEl.textContent = `Введита значение суммы: ${ n } + ${ m } = `
	}
}

function genLetterCaptcha(length) {
	let result = ''
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	let charactersLength = characters.length
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result
}

form.addEventListener('submit', e => {
	e.preventDefault()

	let formData = new FormData(e.target)
	let captcha = formData.get('captcha')

	if (attempt === 'letter') {
		if (captcha === letterCaptcha) {
			captchaEl.classList.add('close')
			alert('Успешно')
			submitBtn.disabled = false
			captchaBtn.remove()
		} else {
			alert('Ошибка')
			attempt = 'number'
			updateCaptcha()
		}
	} else {
		if (+captcha === n + m) {
			captchaEl.classList.add('close')
			alert('Успешно')
			submitBtn.disabled = false
			captchaBtn.remove()
		} else {
			alert('Ошибка')
			captchaEl.classList.add('close')
		}
	}
})

captchaBtn.addEventListener('click', e => {
	if (captchaEl.classList.contains('close')) {
		updateCaptcha()
		captchaEl.classList.remove('close')
	} else {
		captchaEl.classList.add('close')
	}
})

captchaEl.addEventListener('click', e => {
	if (e.target === form) return

	if (e.target.classList.contains('close')) {
		e.target.classList.remove('close')
	} else {
		e.target.classList.add('close')
	}
})
