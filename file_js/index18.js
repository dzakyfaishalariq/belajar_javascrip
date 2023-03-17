const identitas = [
    [1,2,3,4,5,6],
    [2,3,4,5,7,8],
]

for (let i = 0; i < identitas.length; i++){
    console.log(`->area ke-${i+1}`)
    for (let j = 0; j < identitas[i].length; j++){
        console.log(`-->isi ke-${j+1} : ${identitas[i][j]}`)
    }
}