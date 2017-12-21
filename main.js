const {
    app,
    BrowserWindow
} = require('electron');
let win;

    app.commandLine.appendSwitch('disable-web-security'); 
    app.commandLine.appendSwitch('--disable-web-security'); 
    app.commandLine.appendSwitch('allow_displaying_insecure_content');


function createWindow() {
    // Create the browser window.

    app.commandLine.appendSwitch('disable-web-security'); 
    app.commandLine.appendSwitch('--disable-web-security'); 
    app.commandLine.appendSwitch('allow_displaying_insecure_content');

    

    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/images/logo.png`,
        "node-integration": "iframe", // and this line
        "web-preferences": {
            "web-security": false,
            "allow-displaying-insecure-content": true
        }
    })

    win.toggleDevTools();

    win.loadURL(`file://${__dirname}/dist/index.html`)
    //// uncomment below to open the DevTools.
    // win.webContents.openDevTools()
    // Event when the window is closed.
    win.on('closed', function () {
        win = null
    })
}
// Create window on electron intialization
app.on('ready', createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
})
