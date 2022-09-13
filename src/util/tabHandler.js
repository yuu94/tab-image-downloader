import * as mz from "./mozilla.js";
import * as tw from "./twitter.js";
import * as img from "./image.js";
import { GetLastWord, ImageDownload } from "./util.js";


export function TabHandler(tab) {
  if(tw.is_true(tab.url)){
    tw.Update(tab);
  } else if(img.is_true(tab.url)) {
    const file_name = GetLastWord(tab.url, "/");
    ImageDownload(tab.url, file_name);
  } else if(mz.is_true(tab.url)) {
    mz.Update(tab.id);i
  } else {
    // other 関係ないタブは一覧化?
    pass
  }
}