事件
1.建立事件聆聽
  包含一個物件(body) + 一個事件(onload) + 一個處理函數(doFirst())
  (1). html <body onload = "doFirst()">
  (2). js window.onload = doFirst //doFirst後不可寫小括號
  (3). js w3c推薦方式  window.addEventListener('load', doFirst)






JS 呼叫函數:
1.  直接呼叫: drawing() //直接呼叫要接小括號 -> 小括號就逮表直接執行
2.  事件聆聽: theButton.onclick = drawing //有條件的呼叫 ->不加小括號(避免被直接執行)
3.  計時器: setInterval(drawing, 1000) //有條件的呼叫 ->不加小括號(避免被直接執行)