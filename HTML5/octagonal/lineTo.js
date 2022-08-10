//先放輔助線
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
    context.textBaseline = 'hanging';
    context.fillText(interval, interval, 0);

    //設定兩參數 : 邊數, 外接圓心
    // function drawPolygons(num, radius) {
    //   let canvas = document.getElementById('canvas');
    //   let context = canvas.getContext('2d');
    // }
  }
  context.strokeStyle = 'palevioletred';
  context.stroke();

  // 使圓心為 (0,0)
  context.translate(500, 400);

  //先畫參考線 外接圓
  context.beginPath();
  let radius = 150;
  context.strokeStyle = 'red';
  context.lineWidth = 1;
  context.arc(0, 0, radius, 0, Math.PI * 2);
  context.stroke();

  //內接圓

  context.beginPath();
  let radius2 = radius/2;
  context.strokeStyle = 'red';
  context.lineWidth = 1;
  context.arc(0, 0, radius2, 0, Math.PI * 2);
  context.stroke();

  //開始畫線
  context.beginPath();
}

window.addEventListener('load', doFirst);
