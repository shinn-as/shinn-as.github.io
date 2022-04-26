window.onload = function(){
  if (document.cookie.indexOf('session') === -1) {} else {
    window.location.href =document.referrer
  }
}


function errorlog(error) {
    alert(error["as"])
}

function kaiketu(uservalue,userpass,pasr) {
  let angou=""
    $.ajax({
        type:'GET',
      async: false,
        url:"https://script.google.com/macros/s/AKfycbwgMpBcOvwBZJkk98sUvz0ngkMwxIERrcoKjiq3dyiINaCgIhbwPnl617K8ty4yq3mfng/exec",
    data:{
        "m":"r",
        "id":uservalue
    },
    dataType:'json'
    })
    .done(function(data){
        console.log(data)
        pd=JSON.parse(JSON.stringify(data));
        if(pd["status"]=="fault")
        {
            errorlog(pd)
        }
        else
        {
            console.log(pd["as"])
            decrypted = CryptoJS.AES.decrypt(pd["as"],userpass)
            decrypt = decrypted.toString(CryptoJS.enc.Utf8)
            key=decrypt.split("/")
            angou = CryptoJS.AES.encrypt(key[0],key[1]) ;
            console.log('Source :' + key[0]);
            console.log('Crypto :' + angou);
            pasr(uservalue,userpass,angou)
        }

    })
    .fail(function() {
        alert("通信エラーが発生しました。通信状況を確認してください")
    })
    

}


const pasf=function(uservalue,userpass,angou) {
  console.log("aa="+encodeURIComponent(angou))
  endpoint="https://script.google.com/macros/s/AKfycbwgMpBcOvwBZJkk98sUvz0ngkMwxIERrcoKjiq3dyiINaCgIhbwPnl617K8ty4yq3mfng/exec?m=c&id="+String(uservalue)+"&pass="+encodeURIComponent(angou)
  fetch(endpoint)
    .then((response) => response.json())
        /*成功した処理*/
    .then((data1) => {
      console.log(data1)
      pd = JSON.parse(JSON.stringify(data1));
      if (pd["status"] != "success") {
        errorlog(pd)
      } else {
        document.cookie="session="+pd["as"]+";max-age="
        window.location.href =document.referrer
      }
    })

}

/*
const pasf=function(uservalue,userpass,angou) {
  console.log("aa"+angou)

  jQuery.ajax({
    type: 'GET',
    async: false,
    url: "https://script.google.com/macros/s/AKfycbwgMpBcOvwBZJkk98sUvz0ngkMwxIERrcoKjiq3dyiINaCgIhbwPnl617K8ty4yq3mfng/exec",
    data: {
      "m": "c",
      "id": uservalue,
      "pass": angou
    },
    dataType: 'json'
  }).done(function (data1) {
    console.log(data1)
    pd = JSON.parse(JSON.stringify(data1));
    if (pd["status"] == "fault") {
      errorlog(pd)
    } else {
      alert(pd["as"])
    }
  }).fail(function () {
    alert("通信エラーが発生しました。通信状況を確認してください")
  })

}
*/

function tuusinn() {
    const user = document.getElementById("userID")
    const pass=document.getElementById("password")
    const uservalue = String(user.value)
    const userpass= String(pass.value)
    
    if(uservalue=== undefined||userpass=== undefined)
    {
        return 0
    }
    
    kaiketu(uservalue,userpass,pasf)
}
