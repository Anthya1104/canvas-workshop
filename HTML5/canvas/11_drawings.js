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
  //====

  addEventListener('mousemove', usePen); //設定畫筆
}

function usePen(e) {
  //因為引用 pageX pageY (事件物件屬性) 要給一個參數e
  context.strokeStyle = 'palevioletred';
  context.fillStyle = 'palevioletred';

  //矩形畫筆 有引用事件物件的屬性
  // context.fillRect(e.pageX, e.pageY, 5, 5);

  //圓形畫筆
  context.beginPath();
  context.arc(e.pageX, e.pageY - 150, 5, 0, 2 * Math.PI);
  context.fill();
}

window.addEventListener('load', doFirst);
//第二種寫法
// winow.onload =doFirst
