import {Success, Error} from "./errorHandler.js";
import { GetLastWord, ImageDownload } from "./util.js";

export function is_true(url){
  return url.includes("pbs.twimg.com/media");
}

export function Update(tab){
  let url = new URL(tab.url);
  url.searchParams.set("name", "orig");

  let updating = browser.tabs.update(
    tab.id,
    {url: url.toString()}
  );

  updating.then(() => {
    const fileName = GetLastWord(url.pathname, "/");
    const format = url.searchParams.get("format");
    const fullFileName = `${fileName}.${format}`;

    const result = ImageDownload(
      url.toString(),
      fullFileName
    );

    if(result) {
      Success();
    } else {
      Error();
    }
  }, () => {
    Error();
  });
}