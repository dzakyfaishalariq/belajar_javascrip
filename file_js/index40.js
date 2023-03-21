const mulai = () => {
    alert('hallo selamat pagi')
}

let a = 1
const fungsiPembatas = () => {
    document.getElementById('hitung_maju').innerHTML=`${a}`
    if (a == 20){
        a = 0
    }
    if (a > 5 && a < 10){
        document.getElementById('pesan').innerHTML=`
            <button class="btn btn-primary" onclick="mulai()" disabled>Klik</button>
        `;
    }else {
        document.getElementById('pesan').innerHTML = `
            <button class="btn btn-primary" onclick="mulai()">Klik</button>
            <hr>
            <h3>Ini sudah aktif</h3>
        `;
    }
    a++
}
setInterval(fungsiPembatas, 1000)