

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
    formdata.append('apikey','DZZdqD82P5kqvZQervYkIrkTWDsUAkaR');
    //- コメント
    formdata.append('query',comment);

    fetch('https://api.a3rt.recruit.co.jp/talk/v1/smalltalk',{
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
