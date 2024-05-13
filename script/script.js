'use strict';

/*ポップアップアイテムの開閉*/
{
  // DOM取得
  // 親要素section要素
  const parentItem = document.querySelectorAll('.scheme');
  console.log(parentItem);

  // イベントを付加
  for (let i = 0; i < parentItem.length; i++) {
    parentItem[i].addEventListener('mouseover', popUpOpen);
    parentItem[i].addEventListener('mouseleave', popUpClose);
  }

  //ポップアップアイテムを開く処理
  function popUpOpen(e) {
    // 子 .pop-up-item .text要素
    const childItem = e.currentTarget.querySelectorAll('.pop-up-item .text');
    console.log(childItem);

    // is-activeを付加
    for (let i = 0; i < childItem.length; i++) {
      childItem[i].classList.add('is-active');
    }
  }

  //ポップアップアイテムを閉じる処理
  function popUpClose(e) {
    //  子 .pop-up-item .text要素
    const childItem= e.currentTarget.querySelectorAll('.pop-up-item .text');
    console.log(childItem);

    // is-activeを削除
    for (let i = 0; i < childItem.length; i++) {
      childItem[i].classList.remove('is-active');
    }

  }

}