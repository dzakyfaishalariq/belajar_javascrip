let maximum = parseInt(prompt('masukan nilai maksimum !'))
if (!maximum){
    maximum = parseInt(prompt('masukan nilai maksimum !'))
}

let target = Math.floor(Math.random()*maximum)+1
console.log(target)
let tebakanMu = parseInt(prompt('tebakan kamu :'))
let attemp = 1

while (tebakanMu !== target){
    if (tebakanMu > target){
        tebakanMu = parseInt(prompt('tebakan terlalu tinggi'))
        attemp++
    }else{
        tebakanMu = parseInt(prompt('tebakan terlalu rendah'))
        attemp++
    }
}
alert(`tebakan anda benar dengan percobaan ${attemp} kali`)