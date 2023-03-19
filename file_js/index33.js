const nilai = [1,2,3,4,5,6,7,8,10]

nilai.forEach(function (n){
    if (n % 2 === 0){
        console.log(n*n)
    }
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
filem.forEach(function (fil){
    console.log(`${fil.nama}-${fil.rating}/100`)
})