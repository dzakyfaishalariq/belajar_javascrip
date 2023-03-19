// eksekusi dengan fungsi sebagai argumen

function panggilFungsi(sebanyak, func){
    for (let i = 0; i < sebanyak; i++){
        console.log(`lemparan ke-${i+1}`)
        func()
    }
}
function lempardadu(){
    const mataDadu = Math.floor(Math.random()*6)+1
    console.log(mataDadu)
}

panggilFungsi(3,lempardadu)