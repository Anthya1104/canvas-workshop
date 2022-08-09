function drawPolygons() {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  context.strokeStyle = 'palevioletred';
  context.fillStyle = 'pink';

  //設定八邊形
  let num = 8;
  //設定外接圓半徑
  let radius = 20;
  //起始點
  context.moveTo(300, 1000 - radius);

  for (let i = 0; i < num; i++) {
    angle = ((360 / num) * (i + 1) * Math.PI) / 180;
    actAngle = angle - Math.PI / 2;
    x = Math.cos(actAngle) * radius;
    y = Math.sin(actAngle) * radius;
    context.lineTo(x, y);
  }
  context.stroke();
}
window.addEventListener('load', drawPolygons);
