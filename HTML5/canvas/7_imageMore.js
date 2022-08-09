// 事件聆聽功能
// 瀏覽器 laod 進來後先做這件事

//先定義再執行
function doFirst() {
  let canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  for (let i = 0; i < 100; i++) {
    let interval = i * 50;
    context.fillStyle = 'palevioletred';

    //先畫水平線
    context.moveTo(0, interval);
    context.lineTo(canvas.width, interval);
    //寫座標
    context.fillText(interval, 0, interval);

    //垂直線
    context.moveTo(interval, 0);
    context.lineTo(interval, canvas.height);
    //寫座標
    //直接寫零的話會看不見
    //因為 basline 預設 top 跑到 0 線上了 看不見
    context.textBaseline = 'hanging';
    context.fillText(interval, interval, 0);
  }
  context.strokeStyle = 'rgba(0,0,0,0.3)';
  context.stroke();

  //放image會發生load事件
  //因為canvas已經畫成一張圖
  //現在又要把另一張外部檔案的圖鑲嵌在canvas這張圖裡面

  //這種寫法必須多重新整理一次才能顯示
  // let pic1 = new Image();
  // pic1.src = '../MFEE27/images/cityscape.jpg';
  // pic1.addEventListener('load', function () {
  //   context.drawImage(pic1, 0, 0, canvas.width, canvas.height);
  // });

  // let pic2 = new Image();
  // pic2.src = '../MFEE27/images/Shinnosuke/Shinnosuke9.png';
  // pic2.addEventListener('load', function () {
  //   context.drawImage(pic2, 0, 0, 300, 300); //左上角
  //   context.drawImage(pic2, 700, 0, 300, 300); //右上角
  //   context.drawImage(pic2, 0, 500, 300, 300); //左下角
  //   context.drawImage(pic2, 700, 500, 300, 300); //右下角
  // });

  //拿掉let 宣告成全域變數
  pic1 = new Image();
  pic1.src = '../MFEE27/images/cityscape.jpg';
  //先load
  pic1.addEventListener('load', loadImage);
  pic2 = new Image();
  pic2.src = '../MFEE27/images/Shinnosuke/Shinnosuke9.png';
  pic2.addEventListener('load', loadImage);
}
//loadImage拉出來等canvas算完後一次做
function loadImage() {
  context.globalAlpha = 0.3;

  context.drawImage(pic1, 0, 0, canvas.width, canvas.height);
  context.globalAlpha = 1;

  context.drawImage(pic2, 0, 0, 300, 300); //左上角
  context.drawImage(pic2, 700, 0, 300, 300); //右上角
  context.drawImage(pic2, 0, 500, 300, 300); //左下角
  context.drawImage(pic2, 700, 500, 300, 300); //右下角
}

window.addEventListener('load', doFirst);
//第二種寫法
// winow.onload =doFirst
