let newBook = new Book(
	'Искусство программирования. Том 1. Основные алгоритмы',
	'Дональд Кнут',
	1000,
	'https://firebasestorage.googleapis.com/v0/b/book-store-83a29.appspot.com/o/books%2FRO7TdQC5jRYC92Xsjcad.webp?alt=media&token=42c055d4-91e7-4aeb-950d-ad9f17e6bc37'
)

let cart = document.getElementById('cart')
let cartBody = document.getElementById('cart-body')
let cartInfo = document.getElementById('cart-info')
let cartBooks = []

function updateCart(books) {
	cartBody.innerText = cartInfo.innerText = ''
	let totalPrice = 0

	books.forEach((book, idx) => {
		let bookEl = document.createElement('div')
		bookEl.classList.add('book-item')
		bookEl.setAttribute('key', idx)

		let img = document.createElement('img')
		img.classList.add('book-item__cover')
		img.src = book.url

		let infoEl = document.createElement('div')
		infoEl.classList.add('book-item__info')

		let nameEl = document.createElement('h4')
		nameEl.classList.add('book-item__name')
		nameEl.textContent = book.name

		let authorEl = document.createElement('p')
		authorEl.classList.add('book-item__author')
		authorEl.textContent = book.author

		let priceEl = document.createElement('small')
		priceEl.classList.add('book-item__price')
		priceEl.textContent = `Цена: ${book.price}`
		totalPrice += book.price

		let removeBtn = document.createElement('button')
		removeBtn.classList.add('book-item__remove')
		removeBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
		removeBtn.setAttribute('key', idx)
		removeBtn.addEventListener('click', e => {

			let key = +e.target.getAttribute('key')
			books.splice(key, 1)
			updateCart(books)
		})

		infoEl.append(nameEl, authorEl, priceEl)
		bookEl.append(img, infoEl, removeBtn)
		cartBody.appendChild(bookEl)
	})

	cartInfo.textContent = `Итоговая цена: ${totalPrice}`
}

document.getElementById('cart-add').onclick = e => {
	let i = +prompt('Выберите книгу на какую поменять (начиная с 0)')
	cartBooks[i] = newBook
	updateCart(cartBooks)
}

function filter(books, fromPrice, toPrice) {
	return books.filter(book => fromPrice <= book.price && book.price <= toPrice)
}

document.getElementById('cart-filter-form').onsubmit = e => {
	e.preventDefault()
	let formData = new FormData(e.target)
	let fromPrice = formData.get("from-price")
	fromPrice = fromPrice === '' ? -Infinity : +fromPrice

	let toPrice = formData.get("to-price")
	toPrice = toPrice === '' ? Infinity : +toPrice

	let sort = formData.get("sort-type")

	let filteredBooks = filter(cartBooks, fromPrice, toPrice)

	filteredBooks.sort((a, b) => {
		if (sort === 'default')
			return 0

		return sort === 'sort' ? a.price - b.price : b.price - a.price
	})
	updateCart(filteredBooks)
}

// Toggle cart
function toggleCart() {
	if (cart.classList.contains('close')) {
		// Opening cart
		cart.classList.remove('close')
		document.body.style.overflow = 'hidden'
		updateCart(cartBooks)
	} else {
		// Closing cart
		cart.classList.add('close')
		document.body.style.overflow = 'auto'
	}
}

document.getElementById('cart-toggle').onclick = e => {
	e.preventDefault()
	toggleCart()
}

cart.onclick = ({ target }) => {
	if (target === document.getElementById('cart')) {
		toggleCart()
	}
}
