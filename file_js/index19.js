// menggunakan perulangan while

let a = 0
while (a < 10){
    console.log(`area : ${a+1}`)
    a++
}

let password = prompt('masukan password : ')
while (password !== 'PssWord'){
    password = prompt('masukan password :')
}
alert('password benar')