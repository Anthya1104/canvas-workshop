// 事件聆聽功能
// 瀏覽器laod進來後先做這件事

//先定義再執行
function doFirst() {
  let canvas = document.getElementById('canvas');
  let context = canvas.getContext('2d');

  //以下要符合CSS語法 因為是要與CSS溝通
  context.font = ' bold 50px Tahoma';

  // context.textBaseline='top | hanging | middle | alphabetic | ideographic | bottom';
  //設定字出現的基準位置
  //排版方式
  context.textBaseline = 'bottom';

  //第一個字
  context.fillText('Style', 100, 100);

  //輔助線
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.strokeStyle = 'palevioletred';
  context.stroke();
  //起始圈圈
  context.arc(100, 100, 5, 0, 2 * Math.PI);
  context.stroke();

  // 第二個字
  context.shadowColor = 'red';
  //位置
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 5;
  //暈開效果
  context.shadowBlur = 5;
  context.fillText('Style', 100, 250);
  // 第三個字
  context.shadowColor = 'blue';
  //位置
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 15;
  context.fillStyle = '#fff';

  context.strokeText('Style', 100, 400);
  // 第四個字
  context.fillText('Style', 100, 550);

  // 第五個字
  context.shadowBlur = 10;
  context.shadowOffsetX = 5;
  context.shadowOffsetY = 5;
  context.shadowColor = 'blue';

  context.fillText('Style', 100, 700);
  context.shadowColor = 'red';
  context.fillText('Style', 100, 700);
}

window.addEventListener('load', doFirst);
//第二種寫法
// winow.onload =doFirst
