import {Success, Error} from "./errorHandler.js";


export function is_true(url){
  const image_extension = ["jpg", "jpeg", "png", "gif"];
  const url_image_extension = url.split(".").slice(-1)[0].toLowerCase();
  return image_extension.indexOf(url_image_extension) !== -1;
}

export function Update(tab){
  // updateではなくてdownloadする(多分関数まとめる)
  let updating = browser.tabs.update(
    tab.id,
    {url: "https://www.mozilla.org/ja/about/"}
  );
  updating.then(() => {
    Success();
  }, () => {
    Error();
  });
}