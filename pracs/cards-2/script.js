function truncate(str, maxLength) {
	let newText = str.slice(0, maxLength)
	newText += (str.length > maxLength ? '...' : '')
	return newText
}

let texts = [
	'До –50% на сотни хитов – триллеры, проза, любовные романы, фэнтези и фантастика!',
	'Взгляните на главные бестселлеры месяца – вдруг вы что-то упустили!',
	'Читайте и слушайте книги из нашей подборки, чтобы стать долгожителем!',
]

let cartTextItems = document.getElementsByClassName('card__text')
for (let i = 0; i < cartTextItems.length; i++) {
	cartTextItems[i].textContent = truncate(texts[i], 70)
}