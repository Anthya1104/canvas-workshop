// 事件聆聽功能
// 瀏覽器laod進來後先做這件事

//先定義再執行
function doFirst() {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');
  //顏色要先宣告 之後畫圖才能知道

  context.strokeStyle = 'palevioletred';
  context.fillStyle = 'pink';

  context.lineWidth = 5;

  //先指定要移動到哪 從哪開始落筆
  context.moveTo(100, 100);
  //開始指定路徑
  context.lineTo(250, 250);
  context.lineTo(400, 50);
  context.lineTo(50, 200);
  //起點終點連起來
  //把路徑封閉
  context.closePath();
  //開始rendering
  //先填滿再畫線 才能維持外框寬度
  context.fill();
  context.stroke();
  //先畫線再填滿 會吃掉一半的外框寬度
  // context.fill();
}

window.addEventListener('load', doFirst);
//第二種寫法
// winow.onload =doFirst
