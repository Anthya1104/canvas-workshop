function doFirst() {
  //跟HTML畫面連動 建立事件聆聽功能
  image = document.getElementById('image');
  image.addEventListener('dragstart', startDrag);
  image.addEventListener('dragend', endDrag);

  rightbox = document.getElementById('rightbox');
  //上兩個 單純是取消預設行為 讓瀏覽器允許做到 drop 這件事
  rightbox.addEventListener('dragenter', function (e) {
    e.preventDefault();
  });
  rightbox.addEventListener('dragover', function (e) {
    e.preventDefault();
  });
  rightbox.addEventListener('drop', dropped);
}
function startDrag(e) {
  // let data = `<img src="../../MFEE27/images/Shinnosuke/Shinnosuke6.png" >
  // `;
  let data = `<img src="${image.src}" >
  `;
  // e.dataTransfer.setData(type, data);
  // e.dataTransfer.setData('image/png', data);
  e.dataTransfer.setData('aaa', data); //預設式type 但盡量不要寫type 寫自定義名會比較好 -> 當網頁上有很多圖時 可以辨識要作用的是哪張圖
}
function endDrag() {
  //藏起來
  image.style.visibility = 'hidden';
}
function dropped(e) {
  e.preventDefault();
  //其實是把被拖曳目標的參數 用innerHTML的方式寫進div裡面
  // rightbox.innerHTML = e.dataTransfer.getData('image/png');
  rightbox.innerHTML = e.dataTransfer.getData('aaa');
}
window.addEventListener('load', doFirst);
