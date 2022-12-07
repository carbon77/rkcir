function updateMainBook(book) {
	mainBook = book
	galleryMainBook.innerHTML = `<img src="${book.url}" alt="${book.name}"/>`
}

const galleryBooks = document.getElementById('gallery__books')
const galleryMainBook = document.getElementById('gallery__main-book')
let mainBook

updateMainBook(books[0])

books.forEach((book, index) => {
	const imgEl = document.createElement('div')
	imgEl.classList.add('gallery__item')
	imgEl.setAttribute('_book', index.toString())
	imgEl.innerHTML = `<img src="${book.url}" alt="${book.name}" _book="${index}" />`

	galleryBooks.appendChild(imgEl)
})

galleryBooks.addEventListener('click', e => {
	const target = e.target
	if (
		target.classList.contains('gallery__item') ||
		target.parentElement.classList.contains('gallery__item')
	) {
		const index = +e.target.getAttribute('_book')
		updateMainBook(books[index])
	}
})