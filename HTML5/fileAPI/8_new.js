function doFirst() {
  //跟畫面產生關聯
  //物件發生change事件時 -> 呼叫fileChange函式
  //event listener寫法:
  // document.getElementById('theFile').addEventListener('change', fileChange);
  document.getElementById('theFile').onchange = fileChange;
}
function fileChange() {
  //files[0] -> 因為files 可以multiple 會回傳一個array 如果只有單一檔案 就會是陣列裡的第一個index
  let file = document.getElementById('theFile').files[0];
  // console.log(file);
  let info = '';
  info += `File name: ${file.name}\n`;
  info += `File type: ${file.type}\n`;
  info += `File size: ${file.size} byte\n`;
  info += `Last Modified: ${file.lastModifiedDate}\n`;
  //把info內容寫入textarea
  document.getElementById('fileInfo').value = info;
  //偶爾會遇到type沒有內容 -> HTML沒有定義該檔案類型

  let readFile = new FileReader(); //contracter -> 指定型態 之後才能用屬於此型態的屬性及方法
  //找到檔案的檔名路徑
  readFile.readAsDataURL(file);
  //放檔案屬於 將外部檔案鑲嵌進html檔案中 需要發生load事件
  readFile.addEventListener('load', function () {
    let myMovie = document.getElementById('myMovie');
    myMovie.src = readFile.result;
    myMovie.controls = true;
    myMovie.width = 520;
  });
}
window.addEventListener('load', doFirst);
