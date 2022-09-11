import * as mz from "./mozilla.js";
import * as tw from "./twitter.js";
import * as img from "./image.js";

export function TabHandler(tab) {
  if(tw.is_true(tab.url)){
    tw.Update(tab);
  } else if(img.is_true(tab.url)) {
    // downloadになるかも
    img.Update(tab);
  } else if(mz.is_true(tab.url)) {
    mz.Update(tab.id);
  } else {
    // other 関係ないタブは一覧化?
    pass
  }
}