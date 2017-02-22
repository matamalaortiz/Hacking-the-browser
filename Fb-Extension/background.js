function callback(details) {
  var method = details.method;
  var type = details.type;
  var url = details.url;
  console.log(method, type, url);


  if (details.url.indexOf('facebook') !== -1) {
    var fullURL = chrome.extension.getURL('goodbye.html');
    return { redirectUrl: fullURL };
    }

}

var filter = {
  urls: ['<all_urls>']
};

var extraInfo = ['blocking'];

chrome.webRequest.onBeforeRequest.addListener(
  callback, filter, extraInfo);
