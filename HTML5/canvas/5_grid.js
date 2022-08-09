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
  context.strokeStyle = 'palevioletred';
  context.stroke();

  // //先畫水平線
  // context.moveTo(0, 50);
  // context.lineTo(1000, 50);
  // context.stroke();

  //垂直線
  // context.moveTo(50, 0);
  // context.lineTo(50, 1000);
  // context.stroke();
}

window.addEventListener('load', doFirst);
//第二種寫法
// winow.onload =doFirst
