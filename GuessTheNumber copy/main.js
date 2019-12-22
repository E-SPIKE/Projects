const {app, BrowserWindow} = require('electron')

function createWindow () {
    window = new BrowserWindow({width: 975, height: 750})
    window.loadFile('index.html')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit()
})
