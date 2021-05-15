//画面をうごかす処理
//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){//headerの高さ以上になったら
      $('#header').addClass('fixed');//fixedというクラス名を付与
    }else{//それ以外は
      $('#header').removeClass('fixed');//fixedというクラス名を除去
    }
}

//ナビゲーションをクリックした際のスムーススクロール
$('#g-navi a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  var pos = Math.round($(elmHash).offset().top-120);  //headerの高さを引く
  $('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
  return false;//リンクの無効化
});


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});



window.addEventListener('DOMContentLoaded',()=>{
    //- イベントリスナー登録
    document.getElementById('talkapi__request').addEventListener('click',handler_request_reply);
});

/*---------------------------------------*/
/* 返答をリクエスト */
/*---------------------------------------*/
function handler_request_reply(ev){
   
    const comment = document.getElementById('talkapi__input').value;
    
    var newElement = document.createElement("p"); // p要素作成
    var text="あなた:"+comment
    var newContent = document.createTextNode(text); // テキストノードを作成
    newElement.appendChild(newContent); 
    var parentDiv = document.getElementById("honbun");
    // 追加
    parentDiv.appendChild(newElement)
   
    let formdata = new FormData();
    //- apikeyパラメーター 
    formdata.append('apikey','DZZff02h0tFvmNIDQVZKg6PHxY0hlsWu');
    //- コメント
    formdata.append('query',comment);

    fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',{
        method: 'post',
        body: formdata,
    }).then(response => {
        //- レスポンス取得
        response.json().then(data => {
            //- 返答取得
            const reply = data.results[0].reply;
  
  
            var pcreate = document.createElement("p"); // p要素作成
            var text2="AI:"+reply;
            var newContent2 = document.createTextNode(text2); // テキストノードを作成
            pcreate.appendChild(newContent2);
            var parentDiv = document.getElementById("honbun");
            var textForm = document.getElementById('talkapi__input');
            textForm.value = '';
            // 追加
            parentDiv.appendChild(pcreate);
            //- 出力
            //document.getElementById('talkapi__reply').innerHTML = reply;
        });
    });
    
}
