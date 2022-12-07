let count = 0
let notifyActionsEl = document.getElementById('notification-actions')
let notifyTotalCountEl = document.getElementById('notification-total')
let notifyActionsBadgeEl = document.getElementById('notification-actions-badge')
let notifyHeaderEl = document.getElementById('notification-header')

function increaseNotification() {
	if (!notifyTotalCountEl && !notifyActionsBadgeEl) {
		notifyTotalCountEl = document.createElement('span')
		notifyTotalCountEl.id = 'notification-total'
		notifyTotalCountEl.classList.add('notification__badge')

		notifyActionsBadgeEl = document.createElement('span')
		notifyActionsBadgeEl.id = 'notification-actions-badge'
		notifyActionsBadgeEl.classList.add('item-badge')

		notifyHeaderEl.prepend(notifyTotalCountEl)
		notifyActionsEl.prepend(notifyActionsBadgeEl)
	}

	count++
	notifyTotalCountEl.textContent = count.toString()
	notifyActionsBadgeEl.textContent = count.toString()
}

let interval = setInterval(increaseNotification, 3000)

document.getElementById('notification-btn').addEventListener('click', e => {
	console.log('clear interval 3 sec')
	clearInterval(interval)

	setTimeout(() => {
		console.log('set interval')
		interval = setInterval(increaseNotification, 3000)
	}, 3_000)
})