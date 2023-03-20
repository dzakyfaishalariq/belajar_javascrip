// evry dan some

const nilai = [60,70,80,70,90,80]
const ceknilai = nilai.every((m)=>{
    return m >= 70 // dicek satu satu apabila ada yang tidak sesuai di salah satu array maka akan bernilai salah
})

const ceknilai2 = nilai.some((m)=>{
    return m > 70 // dicek satu satu apabila ada yang ada tidak sesuai di salah satu array maka akan bernilai benar yang bersifat or
})
console.log(ceknilai)
console.log(ceknilai2)

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
const  cekFilem = filem.every((n)=>{
    return n.rating > 50
})
console.log(cekFilem)