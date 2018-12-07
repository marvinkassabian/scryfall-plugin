import { text, color } from "./consts.mjs";

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: color}, function() {
    console.log(text);
  });
});
