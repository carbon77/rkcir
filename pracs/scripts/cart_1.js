function Accumulator(startingValue) {
	this.value = startingValue
	this.values = [startingValue]

	this.read = () => {
		let extraValue = +prompt("Enter value: ")
		this.value += extraValue
		this.values.push(extraValue)
	}
}

function updateCart() {
	cartBody.textContent = ''
	cartInfo.textContent = `Value: ${accumulator?.value ? accumulator.value : 0}`

	if (!accumulator?.values) return
	accumulator.values.forEach(value => {
		let cartItem = document.createElement('div')
		cartItem.classList.add('cart__item')
		cartItem.textContent = `New value: ${value}`
		cartBody.appendChild(cartItem)
	})
}

let cart = document.getElementById('cart')
let cartBody = document.getElementById('cart-body')
let cartInfo = document.getElementById('cart-info')
let accumulator = null

document.getElementById('cart-add').onclick = e => {
	if (accumulator !== null) {
		accumulator.read()
	} else {
		accumulator = new Accumulator(+prompt("Enter starting value: "))
	}

	updateCart()
}
