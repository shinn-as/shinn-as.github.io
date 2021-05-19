weatherjs = { "北海道東北": { "北海道": { "稚内": "011000", "旭川": "012010", "留萌": "012020", "網走": "013010", "北見": "013020", "紋別": "013030", "根室": "014010", "釧路": "014020", "帯広": "014030", "室蘭": "015010", "浦河": "015020", "札幌": "016010", "岩見沢": "016020", "倶知安": "016030", "函館": "017010", "江差": "017020" }, "青森県": { "青森": "020010", "むつ": "020020", "八戸": "020030" }, "岩手県": { "盛岡": "030010", "宮古": "030020", "大船渡": "030030" }, "宮城県": { "仙台": "040010", "白石": "040020" }, "秋田県": { "秋田": "050010", "横手": "050020" }, "山形県": { "山形": "060010", "米沢": "060020", "酒田": "060030", "新庄": "060040" }, "福島県": { "福島": "070010", "小名浜": "070020", "若松": "070030" } }, "関東": { "茨城県": { "水戸": "080010", "土浦": "080020" }, "栃木県": { "宇都宮": "090010", "大田原": "090020" }, "群馬県": { "前橋": "100010", "みなかみ": "100020" }, "埼玉県": { "さいたま": "110010", "熊谷": "110020", "秩父": "110030" }, "千葉県": { "千葉": "120010", "銚子": "120020", "館山": "120030" }, "東京都": { "東京": "130010", "大島": "130020", "八丈島": "130030", "父島": "130040" }, "神奈川県": { "横浜": "140010", "小田原": "140020" } }, "中部": { "新潟県": { "新潟": "150010", "長岡": "150020", "高田": "150030", "相川": "150040" }, "富山県": { "富山": "160010", "伏木": "160020" }, "石川県": { "金沢": "170010", "輪島": "170020" }, "福井県": { "福井": "180010", "敦賀": "180020" }, "山梨県": { "甲府": "190010", "河口湖": "190020" }, "長野県": { "長野": "200010", "松本": "200020", "飯田": "200030" }, "岐阜県": { "岐阜": "210010", "高山": "210020" }, "静岡県": { "静岡": "220010", "網代": "220020", "三島": "220030", "浜松": "220040" }, "愛知県": { "名古屋": "230010", "豊橋": "230020" } }, "関西": { "三重県": { "津": "240010", "尾鷲": "240020" }, "滋賀県": { "大津": "250010", "彦根": "250020" }, "京都府": { "京都": "260010", "舞鶴": "260020" }, "大阪府": { "大阪": "270000" }, "兵庫県": { "神戸": "280010", "豊岡": "280020" }, "奈良県": { "奈良": "290010", "風屋": "290020" }, "和歌山県": { "和歌山": "300010", "潮岬": "300020" } }, "中国": { "鳥取県": { "鳥取": "310010", "米子": "310020" }, "島根県": { "松江": "320010", "浜田": "320020", "西郷": "320030" }, "岡山県": { "岡山": "330010", "津山": "330020" }, "広島県": { "広島": "340010", "庄原": "340020" }, "山口県": { "下関": "350010", "山口": "350020", "柳井": "350030", "萩": "350040" } }, "四国": { "徳島県": { "徳島": "360010", "日和佐": "360020" }, "香川県": { "高松": "370000" }, "愛媛県": { "松山": "380010", "新居浜": "380020", "宇和島": "380030" }, "高知県": { "高知": "390010", "室戸岬": "390020", "清水": "390030" } }, "九州沖縄": { "福岡県": { "福岡": "400010", "八幡": "400020", "飯塚": "400030", "久留米": "400040" }, "佐賀県": { "佐賀": "410010", "伊万里": "410020" }, "長崎県": { "長崎": "420010", "佐世保": "420020", "厳原": "420030", "福江": "420040" }, "熊本県": { "熊本": "430010", "阿蘇乙姫": "430020", "牛深": "430030", "人吉": "430040" }, "大分県": { "大分": "440010", "中津": "440020", "日田": "440030", "佐伯": "440040" }, "宮崎県": { "宮崎": "450010", "延岡": "450020", "都城": "450030", "高千穂": "450040" }, "鹿児島県": { "鹿児島": "460010", "鹿屋": "460020", "種子島": "460030", "名瀬": "460040" }, "沖縄県": { "那覇": "471010", "名護": "471020", "久米島": "471030", "南大東": "472000", "宮古島": "473000", "石垣島": "474010", "与那国島": "474020" } } }
window.onload = function () {
    // ページ読み込み時に実行したい処理
    tihou = document.getElementById('tihou');

    tihouf(tihou.value);
}

function tihouf(val) {

    ken = document.getElementById('ken');
    while (ken.lastChild) {
        ken.removeChild(ken.lastChild);
    }


    for (todouhuken in weatherjs[val]) {
        var option = document.createElement("option");
        option.text = todouhuken;
        option.value = todouhuken;
        ken.appendChild(option);
    }
    kenf(ken.value);
}

function kenf(val) {
    tihou = document.getElementById('tihou');
    tiiki = document.getElementById('tiiki');
    while (tiiki.lastChild) {
        tiiki.removeChild(tiiki.lastChild);
    }

    for (todouhuken in weatherjs[tihou.value][val]) {
        var option = document.createElement("option");
        option.text = todouhuken;
        option.value = todouhuken;
        tiiki.appendChild(option);
    }
    forecast(0);
}

function forecast() {
    tihou = document.getElementById('tihou');
    ken = document.getElementById('ken');
    tiiki = document.getElementById('tiiki');

    var elems = document.getElementsByName("hoge");
    for (var i = 0; i < elems.length; i++) {
        if(elems[i].checked)
        {
            val=i;
            break
        }
    }


    var honbun = document.getElementById("honbun")
    while (honbun.lastChild) {
        honbun.removeChild(honbun.lastChild);
    }

    var url = "https://weather.tsukumijima.net/api/forecast/city/" + weatherjs[tihou.value][ken.value][tiiki.value];
    console.log(url);
    fetch(url).then(function (response) {
        return response.text();
    }).then(function (tmp) {
        tmp = tmp.replace(/null/g, '"none"');
        var json = JSON.parse(tmp);
        console.log(json);
        var tmp2 = json["description"]["text"];
        tmp2 = tmp2.replace(/\r?\n/g, "");
        tmp2 = tmp2.replace(/　/g, '');

        var midasi = document.createElement("h2");
        var komi1 = document.createElement("h3");
        var tenki = document.createElement("p");
        var komi2 = document.createElement("h3");
        var kousui = document.createElement("p");
        midasi.classList.add("sita")
        midasi.textContent = ken.value + " " + tiiki.value + "の天気予報(" + json["forecasts"][val]["date"] + ")";

        komi1.textContent = "天気"

        tenki.textContent = "└予報:" + json["forecasts"][val]["telop"] + "\n└最高気温:" + json["forecasts"][val]["temperature"]["max"]["celsius"] + "\n└最低気温:" + json["forecasts"][val]["temperature"]["min"]["celsius"]
        tenki.innerHTML = tenki.textContent.replace(/\n/g, '<br>');

        komi2.textContent = "降水確率"

        kousui.textContent = "└06-12:" + json["forecasts"][val]["chanceOfRain"]["T06_12"] + "\n└12-18:" + json["forecasts"][val]["chanceOfRain"]["T12_18"] + "\n└18-24:" + json["forecasts"][val]["chanceOfRain"]["T18_24"]
        kousui.innerHTML = kousui.textContent.replace(/\n/g, '<br>');

        honbun.appendChild(midasi);
        honbun.appendChild(komi1);
        honbun.appendChild(tenki);
        honbun.appendChild(komi2);
        honbun.appendChild(kousui);

        if (val == 0) {
            var komi3 = document.createElement("h3");
            var shousai = document.createElement("p");

            komi3.textContent = "詳細"
            shousai.textContent = tmp2

            honbun.appendChild(komi3);
            honbun.appendChild(shousai);

        }
        var hukag = document.createElement("div");
        hukag.classList.add("huka");
        var huka = document.createElement("p");
        huka.textContent = "データ取得日時:" + new Date() + "\n予報発表日時:" + json["publicTimeFormatted"] + "\n発表管区:" + json["publishingOffice"] + "\nデータ取得リンク:\n" + json["link"] + "\n使用API:\nhttps://weather.tsukumijima.net/"
        huka.innerHTML = huka.textContent.replace(/\n/g, '<br>');
        hukag.appendChild(huka);
        honbun.appendChild(hukag);



    });


}