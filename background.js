chrome.tabs.onCreated.addListener((tab) => {
    console.log('New Tab:', tab);
    if (tab.pendingUrl === 'chrome://newtab/') return chrome.tabs.update(tab.id, { url: 'https://www.megastudy.net' });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status !== "complete") return;
    console.log(tab);
    if (tab.url === 'chrome://extensions/') return chrome.tabs.update(tab.id, { url: 'https://www.megastudy.net' });
});