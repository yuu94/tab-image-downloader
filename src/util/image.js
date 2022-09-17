export function is_true(url){
  const image_extension = ["jpg", "jpeg", "png", "gif"];
  const url_image_extension = url.split(".").slice(-1)[0].toLowerCase();
  return image_extension.indexOf(url_image_extension) !== -1;
}