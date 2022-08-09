// 事件聆聽功能
// 瀏覽器 laod 進來後先做這件事

//先定義再執行
function doFirst() {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

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
  let pic = new Image();
  pic.src = '../MFEE27/images/cityscape.jpg';
  pic.addEventListener('load', function () {
    context.drawImage(pic, 0, 0, canvas.width, canvas.height);
  });
}

window.addEventListener('load', doFirst);
//第二種寫法
// winow.onload =doFirst
