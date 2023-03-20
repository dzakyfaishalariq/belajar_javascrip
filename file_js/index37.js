// menggunakan filter dalam array dan objek

const nilai = [1,2,3,4,5,6,7,8]

let nilaiGanjil = nilai.filter((n)=>{
    return n % 2 !== 0
})

console.log((nilaiGanjil))
const filem = [
    {
        nama:'Axxxx',
        rating:80
    },
    {
        nama:'Bxxxx',
        rating:70
    },
    {
        nama:'Wxxxx',
        rating:60
    },
    {
        nama:'Oxxxx',
        rating:70
    }
]
const filemRaatingTertinggi = filem.filter((n) => {
    return n.rating > 60
})
console.log(filemRaatingTertinggi)

const namaFilemTertinggi = filemRaatingTertinggi.map((n)=>{
    return n.nama.toUpperCase()
})
console.log(namaFilemTertinggi)

filemRaatingTertinggi.forEach((m)=>{
    console.log(`nama Filem : ${m.nama}`)
    console.log(`rating : ${m.rating}`)
})