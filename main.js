// packages
const electron = require('electron');
const { app, BrowserWindow, Menu, ipcMain } = electron;

// windows
const windows = {};

// settings
const standardBrowserSettings = {
    icon: "assets/counter.ico"
}


// start up
app.on('ready', () => {
    // setup main window
    const mainWindow = new BrowserWindow({
        width: 300,
        height: 200,
        maxHeight: 200,
        minWidth: 300,
        minHeight: 200,
        ...standardBrowserSettings
    });
    mainWindow.loadFile('template/main.html');
    mainWindow.setMenu(null);

    // quit when closed
    mainWindow.on('closed', () => {
        app.quit()
    });

    windows['main'] = mainWindow;
});

