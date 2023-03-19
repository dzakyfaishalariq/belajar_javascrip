// menghasilkan sebuah function

function randomhasil(){
    const hasil = Math.floor(Math.random()*10) + 1
    if (hasil > 5){
        return function (){
            console.log('hasil lebih dari 5')
        }
    }else {
        return function (){
            console.log('hasil kurang dari 5')
        }
    }
}
const hasil = randomhasil();
hasil()
