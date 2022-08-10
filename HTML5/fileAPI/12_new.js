function doFirst() {
  //跟畫面產生關聯

  document.getElementById('dropZone').ondragover = dragOver;
  document.getElementById('dropZone').ondrop = dropped;
}
function dragOver(e) {
  //取消瀏覽器預設行為讓我可以放東西
  e.preventDefault();
}
function dropped(e) {
  e.preventDefault();

  let file = e.dataTransfer.files[0];
  // console.log(file);
  document.getElementById('fileName').innerText = file.name;
  let readFile = new FileReader(); //contracter -> 指定型態 之後才能用屬於此型態的屬性及方法
  readFile.readAsText(file);
  //放檔案屬於 將外部檔案鑲嵌進html檔案中 需要發生load事件
  readFile.addEventListener('load', function () {
    document.getElementById('fileContent').value = readFile.result;
  });
}

window.addEventListener('load', doFirst);
