var btn_luas = document.getElementById("btn_luas");
var btn_keliling = document.getElementById("btn_keliling");

var card_luas = document.getElementById("luas_card");
var card_keliling = document.getElementById("keliling_card");

var jawaban_luas = document.getElementById("jawaban_luas");
var jawaban_keliling = document.getElementById("jawaban_keliling");

var sisiluas_Input = document.getElementById("sisiluas_Input");
var sisikeliling_Input = document.getElementById("sisikeliling_Input");

var btn_hitung_luas = document.getElementById("btn_hitung_luas");
var btn_hitung_keliling = document.getElementById("btn_hitung_keliling");

btn_luas.onclick = function () {
    card_luas.style.display = 'block'
    card_keliling.style.display = 'none'
}

btn_keliling.onclick = function () {
    card_keliling.style.display = 'block'
    card_luas.style.display = 'none'
}

btn_hitung_luas.onclick = function () {
    var sisi = sisiluas_Input.value;
    var hasil = sisi * sisi;

    if (sisi) {
        jawaban_luas.style.display = 'block'

        var nodeList = document.querySelectorAll("span[id^=sisiluas]")
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = sisi;
        }
        
        var nodeList = document.querySelectorAll("span[id^=hasilluas]")
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = hasil;
        }
    }
    
}

btn_hitung_keliling.onclick = function () {
    var sisi = sisikeliling_Input.value;
    var hasil = 4 * sisi;

    if (sisi) {
        jawaban_keliling.style.display = 'block'

        var nodeList = document.querySelectorAll("span[id^=sisikeliling]")
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = sisi;
        }
        
        var nodeList = document.querySelectorAll("span[id^=hasilkeliling]")
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = hasil;
        }
    }
    
}

function reset() {
    jawaban_keliling.style.display = 'none'
    jawaban_luas.style.display = 'none'
}
    