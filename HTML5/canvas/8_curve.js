// 事件聆聽功能
// 瀏覽器 laod 進來後先做這件事

//先定義再執行
function doFirst() {
  let canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  // 歸零
  context.beginPath();
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

  //四分之一線
  //畫之前先歸零
  context.beginPath();

  context.moveTo(0, 400);
  context.lineTo(1000, 400);
  context.strokeStyle = 'rgba(0,0,0,0.8)';

  context.moveTo(500, 0);
  context.lineTo(500, 800);
  context.strokeStyle = 'rgba(0,0,0,0.8)';

  context.stroke();

  // =====
  context.font = 'bold 25px Tahoma';
  context.strokeStyle = 'red';
  context.lineWidth = 5;

  context.fillText('arc()', 50, 50);

  context.beginPath();
  //最後一個參數 預設是false
  // context.arc(x, y, radius, Math.PI / 180 * startAngle, Math.PI / 180 * endAngle, anticlockwise);
  //圓心x, 圓心y, 半徑, 圓上起始點(角度), 圓上結束點(角度), 方向
  context.arc(250, 200, 150, 0.1 * Math.PI, 1.2 * Math.PI, false);
  context.stroke();
}

window.addEventListener('load', doFirst);
//第二種寫法
// winow.onload =doFirst
