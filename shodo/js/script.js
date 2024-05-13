'use strict';

/*文字サイズ・背景色変更 */
function changeFontSize(size){
    /*mainタグにサイズを設定*/
    document.querySelector("main").style.fontSize = size + "rem";
    //セッションに保存
    sessionStorage.setItem('fontSize', size);

    /*ボタンにactiveのclassを追加 or 削除、背景色変更*/
    let buttons = document.querySelectorAll('[data-fs]');
    for(let i = buttons.length; i--;){
        if(buttons[i].dataset.fs == size){
            buttons[i].classList.add("active");
            buttons[i].style.background = "#ef9206";
        } else{
            buttons[i].classList.remove("active");
            buttons[i].style.background = "#00f";
        }
    }
}

//初期化
let size = '1.1';

if(sessionStorage.getItem('fontSize')){
    //フォントサイズがセッションに保存されていれば上書き
    size = sessionStorage.getItem('fontSize');
}
changeFontSize(size);


/**ドロップダウンリスト調整中 */
/*ドロップダウンリストの表示 */
{
const dropMenu = document.querySelectorAll('.main-menu');
console.log(dropMenu);

for (let i = 0; i < dropMenu.length; i++) {
   dropMenu[i].addEventListener('mouseover', dropDownMenuOpen);
   dropMenu[i].addEventListener('mouseleave', dropDownMenuClose);
  }
}
/*ドロップダウンメニュー開く処理 */
function dropDownMenuOpen(e) {
    /*子要素a要素取得 */
    const dropDown = e.currentTarget.querySelectorAll('.drop-link');
    console.log(dropDown);
    /*is_activeを付加 */
    for (let i = 0; i < dropDown.length; i++) {
        dropDown[i].classList.add('is-active');
    }

}

     // ドロップダウンメニューを閉じる処理
  function dropDownMenuClose(e) {
    // 子メニューリンク
    const dropDown = e.currentTarget.querySelectorAll('.drop-link');
    console.log(dropDown);

    // is-activeを削除
    for (let i = 0; i < dropDown.length; i++) {
      dropDown[i].classList.remove('is-active');
    }

  }


