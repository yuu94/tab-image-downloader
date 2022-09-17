export function onStartedDownload(id){
  console.log(`Started downloading: ${id}`);
}

export function onFailed(error) {
  console.log(`Download failed: ${error}`);
}