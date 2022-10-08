let active = false;

function changeTheme(color: string): void {
    document.body.style.backgroundColor = color;
}

chrome.action.onClicked.addListener((tab) => {
    active = !active;
    const color = active ? 'black' : 'white';
    chrome.scripting.executeScript({
        target: {tabId: tab.id ? tab.id : -1},
        func: changeTheme,
        args: [color]
    }).then();
});