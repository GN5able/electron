const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', () => {
	let win = new BrowserWindow({width:800, height:600});
	win.loadURL('file:///signin.html')
})

exports.openWindow = (filename) => {
	let win = new BrowserWindow({width:800, height:600})
	win.loadURL('file:///'+filename+'.html')
}

