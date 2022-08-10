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

  //左上的圓

  //希望圓心是(0,0)
  context.translate(250, 200); //讓 (250,200) 變成 (0,0)

  context.beginPath();
  context.lineWidth = 15;

  //最後一個參數 預設是false
  // context.arc(x, y, radius, Math.PI / 180 * startAngle, Math.PI / 180 * endAngle, anticlockwise);
  //圓心x, 圓心y, 半徑, 圓上起始點(角度), 圓上結束點(角度), 方向
  // context.arc(250, 200, 150, 0, 2 * Math.PI, false);
  context.arc(0, 0, 150, 0, 2 * Math.PI, false); //因應translate改變圓心座標
  context.stroke();
  context.translate(-250, -200); //事情做完 恢復原狀

  //左下
  //lineCap
  context.fillText('lineCap', 50, 450);

  context.beginPath();
  // context.lineCap='butt | round | square';
  context.lineCap = 'butt';
  context.moveTo(100, 500);
  context.lineTo(200, 500);
  context.stroke();

  context.beginPath();
  context.lineCap = 'round';
  context.moveTo(100, 550);
  context.lineTo(200, 550);
  context.stroke();

  context.beginPath();
  context.lineCap = 'square';
  context.moveTo(100, 600);
  context.lineTo(200, 600);
  context.stroke();

  // context.lineWidth = 15;
  // context.arc(250, 600, 150, 0, 2 * Math.PI, false);
  context.stroke();

  //右下
  //lineJoin
  context.fillText('lineJoin', 550, 450);
  // context.lineJoin='miter | bevel | round';
  context.lineJoin = 'miter';
  context.strokeRect(550, 500, 100, 150);
  context.lineJoin = 'bevel';
  context.strokeRect(700, 500, 100, 150);
  context.lineJoin = 'round';
  context.strokeRect(850, 500, 100, 150);

  //右上
  //radial gradient
  context.fillText('radial gradient', 550, 50);

  context.translate(750, 200);
  context.beginPath();
  context.lineWidth = 20;

  let radius = 150;
  let raGradient = context.createRadialGradient(
    0,
    0,
    radius * 0.95, //線的厚度
    0,
    0,
    radius * 1.05 //線的厚度
  );
  //可用來做邊框
  raGradient.addColorStop(0, 'pink');
  raGradient.addColorStop(0.5, '#fff');
  raGradient.addColorStop(1, 'pink');

  context.strokeStyle = raGradient;

  context.arc(0, 0, radius, 0, 2 * Math.PI, false); //因應translate改變圓心座標
  context.stroke();

  //事情做完 復原
  context.translate(-750, -200);
}

window.addEventListener('load', doFirst);
//第二種寫法
// window.onload =doFirst
