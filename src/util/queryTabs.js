import { TabHandler } from "./tabHandler.js";

export function QueryTabs() {
  browser.tabs.query({currentWindow: true}, (tabs) => {
    for (let tab of tabs) {
      TabHandler(tab);
    }
  });
}