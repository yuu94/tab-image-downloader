export function GetLastWord(sentence, split_word){
  return sentence.split(split_word).slice(-1)[0];
}

export function ImageDownload(url, file_name){
  let option = {url: url};

  if(file_name) {
    option['filename'] = file_name;
  }

  let download = browser.downloads.download(option);

  download.then(() => {
    return true;
  }, () => {
    return false;
  });
}