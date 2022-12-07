class Book {
	constructor(name, author, price, url) {
		this.name = name
		this.author = author
		this.price = price
		this.url = url
	}
}

let books = [
	new Book(
		'Теоретический минимум по Computer Science. Все что нужно программисту и разработчику',
		'Владстон Феррейра Фило',
		700,
		'https://firebasestorage.googleapis.com/v0/b/book-store-83a29.appspot.com/o/books%2F0r1dfBOhkeGlrnzhx9I6.webp?alt=media&token=d2af81f2-c55e-43a3-acb7-df18711cb900',
	),
	new Book(
		'Академия (Основание)',
		'Айзек Азимов',
		500,
		'https://firebasestorage.googleapis.com/v0/b/book-store-83a29.appspot.com/o/books%2FLQxlHs30HaXjeOBrB0C0.webp?alt=media&token=e610538b-0a13-488c-8485-d89a319345ea',
	),
	new Book(
		'Сияние',
		'Стивен Кинг',
		1000,
		'https://firebasestorage.googleapis.com/v0/b/book-store-83a29.appspot.com/o/books%2FN628PnajgA40tXbAOxsq.webp?alt=media&token=6df26e89-5e72-4140-90f0-0a60a821eefa',
	),
	new Book(
		'Искусство программирования. Том 1. Основные алгоритмы',
		'Дональд Кнут',
		1000,
		'https://firebasestorage.googleapis.com/v0/b/book-store-83a29.appspot.com/o/books%2FRO7TdQC5jRYC92Xsjcad.webp?alt=media&token=42c055d4-91e7-4aeb-950d-ad9f17e6bc37',
	),
]