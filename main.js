const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 800,
        title: "KitchenPro - Dapur Racik Dinda (Online Mode)",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        autoHideMenuBar: true, // Menyembunyikan menu bar bawaan agar lebih rapi
        icon: path.join(__dirname, 'icon.ico') // Opsional: jika Anda punya ikon
    });

    // Memuat file index.html yang sudah berisi fitur lengkap & Firebase
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});