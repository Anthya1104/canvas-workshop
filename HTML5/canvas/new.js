function doFirst() {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  canvas.width = 400;
  canvas.height = 450;

  //函數要宣告再函式之前
  let clock = 0;
  //每隔30毫秒重畫一次
  //參考用時間 可能會比較慢做完(但反正不會小於30毫秒)
  setInterval(drawing, 50);
  drawing();

  function drawing() {
    clock++;

    //先擦掉再重畫
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 格線
    context.beginPath();
    for (let i = 0; i < 100; i++) {
      let interval = i * 50;
      // 水平線
      context.moveTo(0, interval);
      context.lineTo(canvas.width, interval);
      context.fillText(interval, 0, interval);

      // 垂直線
      context.moveTo(interval, 0);
      context.lineTo(interval, canvas.height);
      context.fillText(interval, interval, 10);
    }
    context.strokeStyle = 'rgba(0,0,0,0.3)';
    context.stroke();
    // =====

    //劃地板
    context.beginPath();
    context.moveTo(25, 350);
    context.lineTo(375, 350);
    context.strokeStyle = 'rgb(0,0,0)';
    context.lineWidth = 2;
    context.stroke();

    context.lineWidth = 1;
    //左邊
    context.beginPath();
    context.rect(50, 150, 150, 200);
    context.fillStyle = '#fff1b0';
    context.fill();
    context.stroke();

    //左邊屋頂
    context.beginPath();
    context.moveTo(50, 150);
    context.lineTo(125, 75);
    context.lineTo(200, 150);
    context.fillStyle = '#fff1b0';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(50, 150);
    context.lineTo(75, 125);
    context.lineTo(125, 150);
    context.closePath();
    context.fillStyle = '#f6ab1c';
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(75, 125, 33, 25);
    context.rect(108, 125, 33, 25);
    context.rect(141, 125, 33, 25);
    context.fillStyle = '#f6ab1c';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(174, 125);
    context.lineTo(200, 150);
    context.lineTo(174, 150);
    context.closePath();
    context.fillStyle = '#f6ab1c';
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(108, 100, 33, 25);
    context.fillStyle = '#8fcedf';
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo(50, 150);
    context.lineTo(25, 150);
    context.lineTo(125, 50);
    context.lineTo(225, 150);
    context.lineTo(200, 150);
    context.lineTo(125, 75);
    context.closePath();
    context.fillStyle = '#8fbc6b';
    context.fill();
    context.stroke();

    //左邊門
    context.beginPath();
    context.rect(135, 275, 40, 75);
    context.fillStyle = '#9f815b';
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(135, 200, 20, 45);
    context.rect(155, 200, 20, 45);

    context.rect(75, 200, 20, 45);
    context.rect(95, 200, 20, 45);

    context.rect(75, 275, 20, 45);
    context.rect(95, 275, 20, 45);

    context.fillStyle = '#8fcedf';
    context.fill();
    context.stroke();

    //右邊
    context.beginPath();
    context.rect(200, 250, 150, 100);
    context.fillStyle = '#fde062';
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(225, 275, 50, 45);
    context.rect(275, 275, 50, 45);
    context.fillStyle = '#8fcedf';
    context.fill();
    context.stroke();

    //右邊屋頂
    context.beginPath();
    context.moveTo(200, 175);
    context.lineTo(325, 175);
    context.lineTo(360, 250);
    context.lineTo(200, 250);
    context.closePath();

    context.fillStyle = '#8fbe62';
    context.fill();
    context.stroke();

    //車子
    context.fillStyle = '#fff';
    context.strokeStyle = 'palevioletred';

    //考慮到車身 讓整個路徑包含車身
    //用取餘數的方式做 以保證路徑一定再canvas內執行
    let carX = -40 + (clock % (400 + 40)); //-40(車身)~399+40(車身)(canvas)
    context.fillRect(carX, 325, 40, 25);
    context.strokeRect(carX, 325, 40, 25);
    //輪子

    context.fillStyle = 'rgb(15, 17, 17)';
    //後輪
    context.beginPath();
    context.arc(carX + 10, 350, 5, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    //前輪
    context.beginPath();
    context.arc(carX + 30, 350, 5, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
  }
}

window.addEventListener('load', doFirst);
