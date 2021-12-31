    kousin(document.getElementById('number').value);
    function newtab() {
      let tmp = document.getElementsByName("ntab");
      let ch = document.getElementById("new-check");

      if (ch.checked) {
        for (var i = 0; i < tmp.length; i++) {
          //id追加
          tmp[i].setAttribute("target", "_blank");
        }
      } else {
        for (var i = 0; i < tmp.length; i++) {
          //id追加
          tmp[i].removeAttribute("target");
        }
      }
    }

    function problem1() {
      let tmp = document.getElementsByName("prob");
      let ch = document.getElementById("pro");

      if (ch.checked) {
        for (var i = 0; i < tmp.length; i++) {
          //id追加
          tmp[i].setAttribute("class","kakusi");
        }
      } else {
        for (var i = 0; i < tmp.length; i++) {
          //id追加
          tmp[i].removeAttribute("class");
        }
      }
    }

    function kousin(kai) {
      const endpoint =
        "https://script.google.com/macros/s/AKfycbxKPwcDdvSJ75p2dtFmBneQAXWGo1vilJfc1FlIexkcLmA5rXUeCSOoQgWoqht3NMXM5Q/exec?text=" +
        kai;

      //APIを使って非同期データを取得する
      fetch(endpoint)
        .then((response) => response.json())
        /*成功した処理*/
        .then((data) => {
          //JSONから配列に変換
          console.log(data);
          const arr = JSON.parse(JSON.stringify(data));
          var tab = document.getElementById("tab");
          while (tab.firstChild) {
            tab.removeChild(tab.firstChild);
          }

          let bool = 1;

          let tro = document.createElement("tr");
          let datao = document.createElement("td");
          let datao2 = document.createElement("td");
          let datao3 = document.createElement("td");
          let ch = document.getElementById("new-check");
          datao.innerHTML = "情報";
          datao2.innerHTML = "問題概要";
          datao3.innerHTML = "URL";
          tro.appendChild(datao);
          tro.appendChild(datao2);
          tro.appendChild(datao3);
          tab.appendChild(tro);

          for (i = 0; i < arr.length; i++) {
            let tr = document.createElement("tr");
            let data = document.createElement("td");
            let data2 = document.createElement("td");
            let data3 = document.createElement("td");
            let url = document.createElement("a");
            let pt = document.createElement("p");

            tr.classList.add("long");
            url.href = arr[i]["url"];
            url.name = "ntab";
            url.classList.add("long");
            pt.setAttribute("name","prob");

            if (ch.checked) {
              url.target = "_blank";
            }
            url.innerHTML = arr[i]["url"];
            data.innerHTML = arr[i]["year"];
            pt.innerHTML = arr[i]["problem"];
            data2.appendChild(pt);
            data3.appendChild(url);
            tr.appendChild(data);
            tr.appendChild(data2);
            tr.appendChild(data3);
            tab.appendChild(tr);
            newtab();
            problem1();
          }
        });
    }
