export function GetLastWord(sentence, split_word){
  return sentence.split(split_word).slice(-1)[0];
}

export function ImageDownload(url, file_name){
  // settings
  const directory = "tab_image_downloader/";
  let option = {
    url: url,
    filename: directory + file_name,
    conflictAction: "overwrite" // settings
  };

  let download = browser.downloads.download(option);

  download.then(() => {
    return true;
  }, () => {
    return false;
  });
}