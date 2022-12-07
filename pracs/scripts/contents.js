const links = [
	{
		text: 'Фэнтези',
		url: 'https://www.litres.ru/genre/knigi-fentezi-5018/',
	},
	{
		text: 'Фантастика',
		url: 'https://www.litres.ru/genre/knigi-detektivy-5022/',
	},
	{
		text: 'Боевики',
		url: 'https://www.litres.ru/genre/knigi-boeviki-ostrosugetnaya-5014/',
	},
]

const contents = document.getElementById('contents')

links.forEach(({ text, url }) => {
	const a = `<a href="${ url }" target="_blank">${ text }</a><br>`
	contents.innerHTML += a
})

contents.addEventListener('click', e => {
	if (e.target.tagName === 'A') {
		if (!confirm('Перейти по ссылке?')) {
			e.preventDefault()
		}
	}
})