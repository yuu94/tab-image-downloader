export function CreateMenue() {
  browser.contextMenus.create({
    id: "update-active-window-url",
    title: "ActiveなウィンドウのURLを変換",
    contexts: ["all", "tab"]
  });  
}

export function HandleClick() {
  browser.runtime.openOptionsPage()
  
}