chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Clicked');
  chrome.tabs.executeScript(null, {file: "js/topkek.js"});
  /**
  chrome.tabs.executeScript({
    code: 'alert("Hi");'
  });
  **/
});
