import * as mz from "./mozilla.js";
import * as tw from "./twitter.js";
import * as img from "./image.js";
import { GetLastWord, ImageDownload } from "./util.js";


export function TabHandler(tab) {
  if(tw.is_true(tab.url)){
    console.log("twitter")
    tw.Update(tab);
  } else if(img.is_true(tab.url)) {
    console.log(".image")
    const file_name = GetLastWord(tab.url, "/");
    ImageDownload(tab.url, file_name);
  } else if(mz.is_true(tab.url)) {
    mz.Update(tab.id);
  } else {
    console.log("Not Image Page");
  }
}