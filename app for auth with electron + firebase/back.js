const remote = require('electron').remote
const main = remote.require('./main.js')

var button = document.createElement('button')
button.textContent = 'НАЗАД'
button.addEventListener('click', () => {
	var window = remote.getCurrentWindow()
	main.openWindow('signin')
	window.close()
}, false)
document.body.appendChild(button)