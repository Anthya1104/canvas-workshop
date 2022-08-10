function doFirst() {
  //先跟HTML畫面產生關連
  myMovie = document.getElementById('myMovie');
  playButton = document.getElementById('playButton');
  defaultBar = document.getElementById('defaultBar');
  progress = document.getElementById('progress');

  playButton.addEventListener('click', playOrPause);
  myMovie.addEventListener('click', playOrPause);
  defaultBar.addEventListener('click', clickedBar);

  //抓到defaultBar的width長度
  barSize = parseInt(getComputedStyle(defaultBar).width); //因為要做加減乘除 所以把px拿掉(轉成int)
  // alert(barSize);

  //通常會把function拉出來寫再做 因為這邊這個按鈕之後會註解掉所以才簡便寫 直接做event
  fullButton.addEventListener('click', function () {
    myMovie.webkitEnterFullScreen();
    //讓myMovie變成全螢幕
  });
}
function playOrPause() {
  //判斷影片狀態
  if (!myMovie.paused && !myMovie.ended) {
    //正在跑 -> 既非暫停且非結束
    myMovie.pause(); //讓影片停住
    playButton.innerText = 'Play'; //改變playbutton的內容
  } else {
    //暫停中 or 結束了 (總之是停住的狀態)
    myMovie.play();
    playButton.innerText = 'Pause';
    //呼叫函式讓卷軸也跟著動
    setInterval(update, 300);
  }
}
function update() {
  if (!myMovie.ended) {
    let size = (barSize / myMovie.duration) * myMovie.currentTime;
    progress.style.width = `${size}px`;
  } else {
    //播完後歸零
    progress.style.width = `0px`;
    playButton.innerText = 'Play';
    myMovie.currentTime = 0;
  }
}
function clickedBar(e) {
  //使用了物件屬性 所以要給個e
  //defaultBar物件跟螢幕左邊距離
  // defaultBar.offsetLeft
  //點擊在螢幕上的位置 - 物件跟螢幕左邊的距離 = progress長度
  let mouseX = e.clientX - defaultBar.offsetLeft;
  progress.style.width = `${mouseX}px`;

  // 影片時間 = 目前長度 / 每秒跑的長度
  let newTime = mouseX / (barSize / myMovie.duration);
  myMovie.currentTime = newTime;
}
window.addEventListener('load', doFirst);
