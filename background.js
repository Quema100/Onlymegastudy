chrome.tabs.onCreated.addListener((tab) => {
    console.log('New Tab:', tab);
    if (tab.pendingUrl === 'chrome://newtab/') return chrome.tabs.update(tab.id, { url: 'https://www.megastudy.net' });
});