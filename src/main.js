import { CreateMenue } from "./UI/menu";
import { TabHandler } from "./util/tabHandler";


CreateMenue();

browser.contextMenus.onClicked.addListener(() => {
  browser.tabs.query({currentWindow: true}, (tabs) => {
    for(let tab of tabs) {
      TabHandler(tab);
    }
  });
});