function doFirst() {
  //跟畫面產生關聯

  document.getElementById('dropZone').ondragover = dragOver;
  document.getElementById('dropZone').ondrop = dropped;
}
function dragOver(e) {
  //取消瀏覽器預設行為讓我可以放東西
  e.preventDefault();
}
function dropped(e) {
  e.preventDefault();

  let file = e.dataTransfer.files;
  // console.log(file);

  let readFile = new FileReader(); //contracter -> 指定型態 之後才能用屬於此型態的屬性及方法

  for (let i = 0; i < file.length; i++) {
    let fileName = document.getElementById('fileName');
    fileName.innerText += `${file[i].name} & `;
    readFile.readAsDataURL(file[i]);
    readFile.addEventListener('load', function () {
      //動態新增 <img> ->用來放file檔案
      // 1.先建標籤 e.g. let image = document.creatElement('img') (必須是HTML裡本來就已存在定義的標籤)

      let image = document.createElement('img');

      // 2.將該標籤的屬性和方法先寫好 e.g. image.src = '' / image.width = 300 / image.style.width = 300

      image.src = readFile.result;

      // 3.找到爸爸(parent node)，加進去
      //  e.g. 指定parrentNode.appendChild(image) -> 這裡的appendChild指element node(也可放innerText等等) ->這個寫法一定會被放在最後(變成最小的小孩)
      //  e.g. 想當老大(或想進指定位置)可以改這樣寫 -> 指定parrentNode.insertBefore(image, 其他sibling nodes )
      //  e.g. 或 指定parrentNode.replaceChild(image, 其他siblings nodes)

      let dropZone = document.getElementById('dropZone');
      // dropZone.appendChild(image);
      dropZone.insertBefore(image, dropZone.firstChild);

      // 4. 刪除物件 e.g. 指定parrentNode.removeChild(image)
      // 5.修改
      //   (1)內容
      //       innerHTML
      //       innerText | textContent
      //    (2)CSS Style
      //       e.g. 指定物件.style.color = 'red'
      //            指定物件.style.fontSize = '20px' ->原本font-size轉為駝峰是寫法
      //    (3)HTML TAG
      //        e.g. image.src = ''
      //        e.g. 物件.id = ''
      //        e.g. input物件.value = ''
      //        e.g. jquery簡化 -> $(':text').val()
      //        e.g. 例外 e.class = ''是不行的 要寫成e.className(然後給屬性)  lable物件.for = 'myLable'
    });
  }
}

window.addEventListener('load', doFirst);
