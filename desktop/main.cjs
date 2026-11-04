const { app, BrowserWindow, shell } = require("electron");
const path = require("node:path");
function createWindow() {
  const window = new BrowserWindow({
    width: 1280, height: 850, minWidth: 900, minHeight: 600,
    icon: path.join(__dirname, "../TravelMap.ico"),
    webPreferences: { nodeIntegration: false, contextIsolation: true, sandbox: true, preload: path.join(__dirname, "preload.cjs") }
  });
  window.webContents.setWindowOpenHandler(({ url }) => {
    try {
      const link = new URL(url);
      if (link.protocol === "https:" && ["console.amap.com", "lbs.amap.com"].includes(link.hostname)) shell.openExternal(url);
    } catch {}
    return { action: "deny" };
  });
  window.webContents.on("will-navigate", event => event.preventDefault());
  window.loadFile(path.join(__dirname, "app.html"));
}
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => { if (!BrowserWindow.getAllWindows().length) createWindow(); });
});
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });

