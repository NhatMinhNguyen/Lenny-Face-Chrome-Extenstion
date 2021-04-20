// function showAlert() {
//     alert("test!");
// }

// chrome.scripting.executeScript({
//     function: showAlert
// });
// chrome.action.onClicked.addListener(tab => { … });
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});