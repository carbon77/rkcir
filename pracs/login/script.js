document.getElementById('register-link').addEventListener('click', () => {
	let choice = confirm('Желаете пройти регистрацию на сайте?')

	if (choice) {
		alert('Круто!')
	} else {
		alert('Попробуйте еще раз')
	}
})

document.getElementById('signin-btn').addEventListener('click', () => {
	let login = prompt('Введите логин для входа')

	if (!login) {
		alert('Отменено')
	} else if (login === 'Админ') {
		let password = prompt('Введите пароль')

		if (!password) {
			alert('Отменено')
		} else if (password === 'Я главный') {
			alert('Здравствуйте!')
		} else {
			alert('Неверный пароль')
		}
	} else {
		alert('Я вас не знаю')
	}
})