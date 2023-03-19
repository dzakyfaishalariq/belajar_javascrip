const nilai = [2,3,4,5,6,7,8]
const nilai2 = nilai.map(function (n){
    return n*n;
})
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
const filemTitle = filem.map(function (fil){
    return fil.nama.toUpperCase()
})
console.log(nilai)
console.log(nilai2)
console.log(filemTitle)
