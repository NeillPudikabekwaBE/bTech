const { app, BrowserWindow } = require('electron');
const path = require('path');

let loginWindow, mainWindow;

function createLoginWindow() {
  loginWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join('C:', 'Users', 'neill', 'Desktop', 'booycotech', 'icon.png'), // Path to your icon file
    webPreferences: {
      nodeIntegration: false, // Disable nodeIntegration for security
      contextIsolation: true, // Enable contextIsolation
      preload: path.join(__dirname, 'preload.js'), // Preload script
    },
  });
  loginWindow.loadFile('login.html');
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join('C:', 'Users', 'neill', 'Desktop', 'booycotech', 'icon.png'), // Path to your icon file
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Preload script
    },
  });
  mainWindow.loadFile('main_menu.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
    app.quit(); // Optional: Close the entire app when main window is closed
  });
}

app.on('ready', createLoginWindow);
