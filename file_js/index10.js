// perbandingan dengan if bersarang
const password = '121idaio'
// mengecek panjang password
if (password.length >= 6){
    if (password.indexOf('A') === -1){
        // mengecek apakaha password ada karakter spasi
        // console.log('password tidak ada spasi'
        console.log(password.indexOf(' '))
        console.log('password valid')
    }else {
        console.log(password.indexOf(' '))
        console.log('password tidak boleh ada spasi')
    }
}else {
    console.log('password harus minimal 6 karakter')
}
