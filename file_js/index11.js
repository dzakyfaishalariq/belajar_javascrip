// penggunaan logikal && || dan !=

// maka penggunaannya
const password = '1234indigo pin'
if (password.length >= 6 && password.indexOf(' ') === -1){
    console.log('password valid')
}else {
    console.log('password kurang valid')
}