// mengambil element berdasarkan id
const merah = () => {
    document.getElementById("pesan").style.color = "red";
    document.getElementById("text").innerHTML = "ini warna merah";
    document.getElementById("text").style.color = 'blue';
    alert("ini warna merah");
}

const kuning = () => {
    document.getElementById("pesan").style.color = "yellow";
    document.getElementById("text").innerHTML = "ini warna kuning";
    document.getElementById("text").style.color = 'blue';
    alert("ini warna kuning");
}