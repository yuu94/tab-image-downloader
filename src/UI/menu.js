export function CreateMenue() {
  browser.contextMenus.create({
    id: "update-active-window-url",
    title: "ActiveなウィンドウのimageをDownload",
    contexts: ["all", "tab"]
  });  
}

export function HandleClick() {
  browser.runtime.openOptionsPage()
  
}