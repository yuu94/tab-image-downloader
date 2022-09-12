import { CreateMenue } from "./UI/menu";
import { TabHandler } from "./util/tabHandler";


CreateMenue();

browser.contextMenus.onClicked.addListener(() => {
  browser.tabs.query({currentWindow: true}, (tab) => {
    TabHandler(tab);
  });
})