let storage = localStorage;
function doFirst() {
  let itemString = storage.getItem('addItemList');
  //先處理字串要計算的是除去最後兩位元(, )index數量
  let items = itemString.substr(0, itemString.length - 2).split(', ');
  // let items = itemString.split(', ');
  console.log(items); //['A1001', 'A1005', 'A1006']

  //先建立標籤
  newDiv = document.createElement('div');
  newTable = document.createElement('table');

  //table放進div裡 再把div放進carlist
  newDiv.appendChild(newTable);
  cartList.appendChild(newDiv);

  total = 0;
  for (let i = 0; i < items.length; i++) {
    //items存的是已經放進購物車的商品ID
    //storage的KEY值是商品ID
    let itemInfo = storage.getItem(items[i]);
    total += parseInt(itemInfo.split('|')[2]);
    creatCarList(items[i], itemInfo);
  }
  document.getElementById('total').innerText = total;
}

function creatCarList(itemId, itemValue) {
  // alert(`${itemId}: ${itemValue}`);
  let itemInfo = itemValue.split('|');
  itemTitle = itemInfo[0];
  itemImg = 'imgs/' + itemInfo[1];
  itemPrice = parseInt(itemInfo[2]);
  // console.log(itemPrice);

  //建立清單區域 --tr
  let productArea = document.createElement('tr');
  productArea.className = 'item';

  //把tr放進table
  newTable.appendChild(productArea);

  //建立商品圖片 --td1
  let tdImg = document.createElement('td');
  tdImg.style.width = '200px';

  let image = document.createElement('img');
  image.src = itemImg;
  image.style = 'width: 100%; height: 100%; object-fit: cover';

  //把img放進td
  tdImg.appendChild(image);
  //把td放進tr
  productArea.appendChild(tdImg);

  //建立商品名稱ID等 刪除按鈕 --td2
  let tdTitle = document.createElement('td');
  tdTitle.style.width = '280px';
  tdTitle.id = itemId;

  let pTitle = document.createElement('p');
  pTitle.innerText = itemTitle;

  let delButton = document.createElement('button');
  delButton.innerText = 'Delete';
  delButton.addEventListener('click', deleteItem);

  tdTitle.appendChild(pTitle);
  tdTitle.appendChild(delButton);

  productArea.appendChild(tdTitle);

  //建立商品價格 --td3

  let tdPrice = document.createElement('td');
  tdPrice.style.width = '170px';

  let pPrice = document.createElement('p');
  pPrice.innerText = itemPrice;

  tdPrice.appendChild(pPrice);
  productArea.appendChild(tdPrice);
  //建立商品數量 --td4

  let tdAmount = document.createElement('td');
  tdAmount.style.width = '60px';

  let pAmount = document.createElement('p');

  let inputAmount = document.createElement('input');
  inputAmount.type = 'number';
  inputAmount.value = 1;
  inputAmount.min = 1;
  inputAmount.addEventListener('input', changeItemcount);

  pAmount.appendChild(inputAmount);
  tdAmount.appendChild(pAmount);
  productArea.append(tdAmount);

  function deleteItem(e) {
    //點了delete以後 回到父層 再找父層屬性的id
    let itemId = e.target.parentNode.id;

    // 1.先扣除總金額
    let itemValue = storage.getItem(itemId);
    total -= parseInt(itemValue.split('|')[2]);
    document.getElementById('total').innerText = total;
    // 2.清除 storage
    //拿掉該Key值 (整個被拿掉)
    storage.removeItem(itemId);
    storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `, ``);

    // 3.刪除該筆 <tr>
  }

  function changeItemcount() {
    alert('作業');
  }
}
window.addEventListener('load', doFirst);
