import * as tw from "./twitter.js";
import * as img from "./image.js";
import { GetLastWord, ImageDownload } from "./util.js";


export function TabHandler(tab) {
  if(tw.is_true(tab.url)){
    tw.Update(tab);
  } else if(img.is_true(tab.url)) {
    const file_name = GetLastWord(tab.url, "/");
    ImageDownload(tab.url, file_name);
  } else {
    console.log("Not Image Page");
  }
}