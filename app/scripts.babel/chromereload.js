// Reload client for Chrome Apps & Extensions.
// The reload client has a compatibility with livereload.
// WARNING: only supports reload command.

const LIVERELOAD_HOST = "localhost:";
const LIVERELOAD_PORT = 35729;
const connection = new WebSocket("ws://" + LIVERELOAD_HOST + LIVERELOAD_PORT + "/livereload");

var lastReload = false;

chrome.runtime.onInstalled.addListener(function(details) {
    lastReload = Date.now();
});

connection.onerror = error => {
    console.log("reload connection got error:", error);
};

connection.onmessage = e => {
    if(!e.data) return;
    const data = JSON.parse(e.data);
    if (data && data.command === "reload") {
        chrome.runtime.reload();
        chrome.developerPrivate.reload(chrome.runtime.id, {failQuietly: true});
    }
};
