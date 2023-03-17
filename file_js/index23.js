const mahasiswas = {
    andini : 20,
    kurnia : 60,
    sandi : 80,
    fahri : 80,
    anton : 98,
}
for (const mahasiswasKey in mahasiswas) {
    console.log(`${mahasiswasKey} mendapatkan nilai : ${mahasiswas[mahasiswasKey]}`)
}

let total = 0
let score = Object.values(mahasiswas)//mengambil nilai key nya menjadi sebuah array

for (const number of score) {
    total += number
}
console.log('rarta rata nilai : ')
console.log(total/score.length)