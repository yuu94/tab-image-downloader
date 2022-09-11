import {Success, Error} from "./errorHandler.js";

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
    // 成功したらdownload(多分関数まとめる)
    Success();
  }, () => {
    Error();
  });
}