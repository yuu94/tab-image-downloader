import { Success, Error } from "./errorHandler";


export function is_true(url){
  return url.includes("mozilla");
}

export function Update(tab_id){
  let updating = browser.tabs.update(
    tab_id,
    {url: "https://developer.mozilla.org"}
  );
  updating.then( () => {
    Success();
  }, () => {
    Error();
  });
}