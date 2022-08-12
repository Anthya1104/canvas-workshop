let storage = localStorage;
function doFirst() {
  //初值給空字串
  //要判斷不存在才能給初值(不然使用者只要重新整理 整個值又會被清空)
  if (storage['addItemList'] == null) {
    // storage['addItemList'] = '';
    //也可以這樣寫
    storage.setItem('addItemList', '');
  }
  //幫所有 Add Cart btn建立事件聆聽功能
  let addBtns = document.querySelectorAll('.addButton'); //找出來變陣列
  for (let i = 0; i < addBtns.length; i++) {
    addBtns[i].addEventListener('click', function (e) {
      //要先知道id
      //就能藉由id 找到child層 input的value值
      // e.target 就是 this
      let teddyInfo = document.querySelector(`#${e.target.id} input`).value;

      //確定能找到
      // alert(teddyInfo); //找到物件本身id值

      //把info跟id送回
      addItem(e.target.id, teddyInfo);
    });
  }
}
//接收被送回的info跟id
function addItem(itemId, itemValue) {
  //放圖

  //確定能接收
  // alert(`${itemId}, ${itemValue}`);
  //先建立標籤
  let image = document.createElement('img');
  //把value值切割成陣列
  let valueInfo = itemValue.split('|');
  //找到path所在的那個index
  image.src = 'imgs/' + valueInfo[1];
  //確定有傳對
  // console.log(valueInfo[1]);

  //放品項名稱
  //先建立span
  let title = document.createElement('span');
  title.innerText = valueInfo[0];

  //放錢
  let price = document.createElement('span');
  //split轉出來後會是string 為了往後做數字加減 記得轉成整數
  price.innerText = parseInt(valueInfo[2]);

  //跟原本存在的DOM物件建立關聯
  let newItem = document.getElementById('newItem');
  //處理重複按時不能同時出現
  //先判斷物件是否已存在，如果存在需先刪除
  //用while迴圈刪 (因為HTML內只要有換行就被視為child物件)

  while (newItem.childNodes.length >= 1) {
    //確認只要newItem下面還有child物件存在 就進來刪掉第一個child物件
    newItem.removeChild(newItem.firstChild);
  }

  //把剛剛建立好的DOM物件加進去
  newItem.appendChild(image);
  newItem.appendChild(title);
  newItem.appendChild(price);

  //判斷有沒有買過
  if (storage[itemId] != null) {
    alert('已經在購物車中了哦!');
  } else {
    //沒買過才放進去
    //存入storage
    storage['addItemList'] += `${itemId}, `;
    storage.setItem(itemId, itemValue);
  }

  //計算購買數量和小計
  let itemString = storage.getItem('addItemList');
  //先處理字串要計算的是除去最後兩位元(, )index數量
  let items = itemString.substr(0, itemString.length - 2).split(', ');
  // let items = itemString.split(', ');
  console.log(items); //['A1001', 'A1005', 'A1006']
  let subTotal = 0;
  for (let i = 0; i < items.length; i++) {
    let itemInfo = storage.getItem(items[i]);
    let itemPrice = itemInfo.split('|')[2];
    // let itemPrice = valueInfo[2];
    subTotal += parseInt(itemPrice);
  }
  //計算總共按過多少樣商品
  document.getElementById('itemCount').innerText = items.length;

  document.getElementById('subtotal').innerText = subTotal;
}
window.addEventListener('load', doFirst);
