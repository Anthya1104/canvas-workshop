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

  //二分之一線
  //畫之前先歸零
  context.beginPath();

  context.moveTo(0, 400);
  context.lineTo(1000, 400);
  context.strokeStyle = 'rgba(0,0,0,0.8)';

  context.stroke();

  // =====
  context.font = 'bold 25px Tahoma';
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  //上 -- linear gradient
  context.fillText('linear gradient', 50, 50);

  // let gradient = context.createLinearGradient(100, 100, 600, 350);//左上到右下
  let gradient = context.createLinearGradient(100, 225, 600, 225); //左到右 -> 找中間點
  // gradient.addColorStop(number, 'color');//(相對位置0~1,顏色)
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(0.5, 'blue');
  gradient.addColorStop(1, 'palevioletred');
  context.fillStyle = gradient;

  context.fillRect(100, 100, 500, 250);

  //下 -- radial gradient
  // context.createRadialGradient(x1, y1, r1, x2, y2, r2);//(內圓參數,外圓參數)
  let raGradient = context.createRadialGradient(350, 650, 50, 280, 625, 150); //可以透過移動內外圓圓心調整漸層方向 但內圓一定要在外圓內 如果內圓跑出來形狀會壞掉
  raGradient.addColorStop(0, 'red');
  raGradient.addColorStop(1, 'blue');

  context.fillText('radial gradient', 50, 450);

  context.fillStyle = raGradient;

  context.fillRect(100, 500, 500, 250);

  //參考9_arcMore_line.js
}

window.addEventListener('load', doFirst);
//第二種寫法
// window.onload =doFirst
