export function create_menu() {
  browser.contextMenus.create({
    id: "update-active-window-url",
    title: "ActiveなウィンドウのURLを変換",
    contexts: ["all", "tab"]
  });  
}