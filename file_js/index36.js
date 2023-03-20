// digunakan untuk menjalankan menunggu eksekusi selama waktu yang ditentukan
// console.log('hallo') // langsung di eksekusi
//
// setTimeout(()=>{
//     console.log('apakah ada orang')
// }, 2000) // sudah di eksekusi tapi tunggu 2 detik
//
// console.log('saya pergi dada...') // langsung dieksekusi

// digunakan untuk menjalankan secara realtime terus menerus dengan setInterval
// setInterval(()=>{
//     console.log(Math.floor(Math.random()*10)+1)
// },2000)
let a = 1
const fun = () => {
    console.log(`akar dari ${a} = ${a*a}`)
    a++
}
setInterval(fun,1000)