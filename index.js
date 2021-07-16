const electron = require('electron')
const { app, BrowserWindow, Menu } = electron

let mainWindow;

const mainView = `${__dirname}/index.html`

const MAIN_MENU_OPTIONS = [
    {
        label: 'File'
    }
]

app.on('ready', () => {
    mainWindow = new BrowserWindow({})
    mainWindow.loadURL(mainView)

    // const mainMenu = Menu.buildFromTemplate(MAIN_MENU_OPTIONS);
    // Menu.setApplicationMenu(mainMenu)

})