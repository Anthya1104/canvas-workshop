// 事件聆聽功能
// 瀏覽器laod進來後先做這件事

//先定義再執行
function doFirst() {
  //先跟HTML 畫面產生關聯，建立事件聆聽功能
  //canvas標籤只要是以id命名 就不用先get 可以直接使用
  //但通常還是會乖乖用get宣告，因為如果id名稱被別人宣告為變數 原本的id就會失效
  let canvas = document.getElementById('canvas');
  //宣告canvas為2D繪圖環境
  let context = canvas.getContext('2d');

  //顏色要先宣告 之後畫圖才能知道
  context.fillStyle = 'pink';
  context.strokeStyle = 'palevioletred';

  //html座標 x:上+下- y:上+下-  網頁座標 x:上+下- y:上-下+
  context.fillRect(100, 100, 300, 200); //填滿
  context.strokeRect(100, 100, 300, 200); //描邊
  context.clearRect(150, 150, 50, 50); //擦掉

  context.rect(700, 500, 300, 300); //先設定矩形
  context.fill(); //指定要做什麼事

  //做橡皮擦(全擦掉)
  // context.clearRect(0, 0, 1000, 800); //擦掉不要把數據寫死
  //這裡因為width height都是canvas自帶屬性 所以可以直接寫. 來使用
  // context.clearRect(0, 0, canvas.width, canvas.height);

  //與HTML溝通 使用style
  //canvas.style.width = '1200px' //會直接寫進inlin-style

  //與CSS溝通 使用getComputedStyle
  //canvas不這樣寫 因為會花費太多資源在繞去與CSS溝通上
  //window可以省略 所以也可以寫成
  //let temp = getComputedStyle(canvas).width
  // let temp = window.getComputedStyle(canvas).width;
  // alert(temp);
}

window.addEventListener('load', doFirst);
//第二種寫法
// winow.onload =doFirst
