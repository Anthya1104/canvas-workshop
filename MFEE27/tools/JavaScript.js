事件
1.建立事件聆聽
  包含一個物件(body) + 一個事件(onload) + 一個處理函數(doFirst())
  (1). html <body onload = "doFirst()">
  (2). js window.onload = doFirst //doFirst後不可寫小括號
  (3). js w3c推薦方式  window.addEventListener('load', doFirst)


2.事件分類
(1) 輸入裝置(滑鼠)
    click 
    mousedown
    mouseup 
    //mousedown + mouseup 完成 click事件
    
    dblclick 
    //少用 同個物件不要同時使用 click 跟 dblclick 設定

    mousemove 

    //支援 bubble 事件
    mouseover 
    mouseout 

    //沒有支援 bubble 事件
    mouseenter 
    mouseleave 

    //快取功能表(鎖右鍵)
    //ES5文件表示 盡量少用 虛假的防盜圖防盜文 實際上不防 反而影響用戶體驗
    contextmenu 

(2)鍵盤
  //三位一體 keydown+keyup完成keypress
  //keypress 比較少用
  //最常用 keyup ( ex: 打字即時偵測事件)
    keypress
    keydown
    keyup

(3)瀏覽器

    load 
    unload //離開瀏覽器時做什麼 -> 少用 ( ex: 中國網站離開時拼命跳 alert 跳不出去)
    beforeunload //因為寫在 doFirst 裡面有些事情可能跳走後資料會直接被清除 ( ex: 填寫會員資料、註冊、登入 ) 為了防呆，可以寫 beforeunload 事件 先把寫到一半的資料存起來

    resize 
    scroll 

    cut | paste | copy //並非所有瀏覽器都支援

(4) 表單
    submit // input | button | input image ( ex: 在 map 中尋找座標 / 找圖片上的特定位置，發生 click 事件 / 在地圖內點地點 連到相關頁面 ) 限定能使用的 type 
    // https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_areamap
    reset
      theForm.onreset = function(){
        return confirm('Are you sure you want to reset the form?')
      } 

    focus //填表單時聚焦
    blur //離開表單後回歸原樣

    change
    input  
    select //發生在可填寫表單 -> 通常用在填寫表單 要重複確認時 為了不讓使用者直接複製 鎖住不讓它發生 
    scroll (textarea)


3.事件物件的屬性和方法
-屬性:
  target
  type

  //因為不同瀏覽器有不同名稱，故有很多種寫法
  clientX | clientY //螢幕上的(x,y)座標 
  pageX | pageY //螢幕上的(x,y)座標 
  
-方法:
    preventDefault() 取消預設行為
    //ex: 超連結連到google 取消這件事 在js做事
    stopPropagation() 停止冒泡事件

4.引用事件物件

theButton.onclick = function(e){//引用事件物件用法 -> 如果不須回傳東西，寫個e就好 ->代表button本身
  //在此，只要有使用任何一個事件物件的屬性或方法，就要「引用事件物件」

  //e.target相當於this
  //這邊不寫this是因為太多指向都會使用this 未免搞錯 分開來寫
  console.log(e.target); //ex: <button>click me</button>
  console.log(e.type.nodeName); //BUTTON (印出節點名稱)
  console.log(e.type);//type
  e.preventDefault()
}

-------------------------------------------------------------------------



JS 呼叫函數:
1.  直接呼叫: drawing() //直接呼叫要接小括號 -> 小括號就逮表直接執行
2.  事件聆聽: theButton.onclick = drawing //有條件的呼叫 ->不加小括號(避免被直接執行)
3.  計時器: setInterval(drawing, 1000) //有條件的呼叫 ->不加小括號(避免被直接執行)

------------------------------------------------------------------------
[setter & getter]
img物件.width = 300
img物件.setAttribute('width', 300)      //setter
let ans = img物件.getAttribute('width') //getter

//jquery
$('img').attr('width', 300)       //setter
let ans = $('img').attr('width')  //getter

------------------------------------------------------------------------