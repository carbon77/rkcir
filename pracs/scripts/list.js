function handleButtonClick(e) {
	let text = ''

	do {
		text = prompt('Введите текст пункта')
		if (text) {
			items.push({ text, selected: false})
		}
	} while (text)

	updateList()
}

function updateList() {
	if (!listEl) {
		listEl = document.createElement('ul')
		listEl.classList.add('list')
		listSection.appendChild(listEl)
	} else {
		listEl.innerHTML = ''
	}

	items.forEach((item, index) => {
		listEl.innerHTML += `
			<li class="list__item ${item.selected ? 'selected' : ''}" _item="${index}">${item.text}</li>
		`
	})
}

let items = [
	{
		text: 'Фэнтези',
		selected: false,
	},
	{
		text: 'Фантастика',
		selected: false,
	},
	{
		text: 'Программирование',
		selected: false,
	},
]
const listSection = document.getElementById('list_section')
const listBtn = document.getElementById('list-btn')
let listEl

updateList()

document.getElementById('list_section').addEventListener('click', e => {

	if (e.target.tagName === 'BUTTON') {
		handleButtonClick(e)
	} else if (e.target.tagName === 'LI') {
		const index = e.target.getAttribute('_item')
		if (e.ctrlKey || e.metaKey) {
			items[index].selected = !items[index].selected
		} else {
			items.forEach(item => {
				item.selected = false
			})
			items[index].selected = true
		}
		updateList()
	}
})