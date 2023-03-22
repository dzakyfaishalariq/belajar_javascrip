const funTambah = (a = 2, b=2) => {
    alert(`Hasil penjumlahan dari ${a} + ${b} = ${a + b}`)
};

let a = 1;
setInterval(()=>{
    const pesan2 = document.querySelector('#pesan2');
    const pesan = document.querySelector('#pesan');
    const tombol = document.querySelector('#tambah');
    pesan2.innerHTML = a;
    if (a >= 5 && a <= 10 ){
        // disabel tombol
        tombol.disabled = true;
    }else {
        tombol.disabled = false;
    }
    if (a >= 20){
        a = 0;
    }
    a++
},1000)