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
  //移動到寫字位置
  context.translate(50, 50);
  context.fillText('arc()', 0, 0);
  context.translate(-50, -50);

  context.beginPath();
  //最後一個參數 預設是false
  // context.arc(x, y, radius, Math.PI / 180 * startAngle, Math.PI / 180 * endAngle, anticlockwise);
  //圓心x, 圓心y, 半徑, 圓上起始點(角度), 圓上結束點(角度), 方向
  context.arc(250, 200, 150, 0.1 * Math.PI, 1.2 * Math.PI, false);
  context.stroke();

  //右上
  context.translate(550, 50);
  context.fillText('arcTo()', 0, 0);
  context.translate(-550, -50);

  context.beginPath();
  context.moveTo(600, 250);
  context.arcTo(750, 100, 850, 300, 150);
  context.stroke();

  //輔助線
  context.beginPath();
  context.strokeStyle = 'blue';
  context.lineWidth = 1;
  context.moveTo(600, 250);
  context.lineTo(750, 100);
  context.lineTo(850, 300);
  context.stroke();

  //左下
  context.translate(50, 450);
  context.fillText('quadraticCurveTo()', 0, 0);
  context.translate(-50, -450);

  context.strokeStyle = 'red';
  context.lineWidth = 5;

  context.beginPath();
  context.moveTo(100, 650);
  context.quadraticCurveTo(250, 250, 350, 700);
  context.stroke();

  //輔助線
  context.beginPath();
  context.strokeStyle = 'blue';
  context.lineWidth = 1;
  context.moveTo(100, 650);
  context.lineTo(250, 250);
  context.lineTo(350, 700);
  context.stroke();

  //右下
  context.translate(550, 450);
  context.fillText('bezierCurveTo()', 0, 0);
  context.translate(-550, -450);

  context.strokeStyle = 'red';
  context.lineWidth = 5;

  context.beginPath();
  context.moveTo(600, 650);
  // context.bezierCurveTo(675, 550, 800, 500, 850, 700); //(第一控制點,第二控制點,終點)
  context.bezierCurveTo(675, 475, 700, 750, 850, 700); //平移
  context.stroke();

  //輔助線
  context.beginPath();
  context.strokeStyle = 'blue';
  context.lineWidth = 1;
  context.moveTo(600, 650);
  //平移前參數
  // context.lineTo(675, 550);
  // context.lineTo(800, 500);
  context.lineTo(675, 475);
  context.lineTo(700, 750);
  context.lineTo(850, 700);
  context.stroke();
}

window.addEventListener('load', doFirst);
//第二種寫法
// winow.onload =doFirst
