function doFirst() {
  //跟畫面產生關聯
  //物件發生change事件時 -> 呼叫fileChange函式
  //event listener寫法:
  // document.getElementById('theFile').addEventListener('change', fileChange);
  document.getElementById('theFile').onchange = fileChange;
}
function fileChange() {
  //files[0] -> 因為files 可以multiple 會回傳一個array 如果只有單一檔案 就會是陣列裡的第一個index
  let file = document.getElementById('theFile').files;
  let info = '';
  // console.log(file);
  for (let i = 0; i < file.length; i++) {
    info += `File name: ${file[i].name}\n`;
    info += `File type: ${file[i].type}\n`;
    info += `File size: ${file[i].size} byte\n`;
    info += `Last Modified: ${file[i].lastModifiedDate}\n`;
  }
  document.getElementById('fileInfo').value = info;
}
window.addEventListener('load', doFirst);
