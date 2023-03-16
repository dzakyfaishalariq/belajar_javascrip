// penggunaan logikal && || dan !=

// maka penggunaannya
const password = '1234indigo pin'
const userRole = 'admin'
if (password.length >= 6 && password.indexOf(' ') === -1){
    console.log('password valid')
}else {
    console.log('password kurang valid')
}

if(userRole === 'admin' || userRole === 'spv'){
    console.log('boleh mengakses')
}else {
    console.log('tidak boleh mengakses')
}

if(userRole !== 'admin'){
    console.log('akses di terima')
}else {
    console.log('akses di tolak')
}