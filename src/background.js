const filters = {
  urls: ["<all_urls>"]
}
const optExtraInfoSpec = []

chrome.webRequest.onBeforeRequest.addListener(() => {
  console.log(arguments)
}, filters, optExtraInfoSpec);
