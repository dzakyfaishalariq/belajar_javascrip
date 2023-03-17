// const buah = ['pisang','jeruk','salak','semangka']
//
// for (const b of buah) {
//     console.log(b)
// }

const kumpulanSiswa = [
    ['andini','koni','budi'],
    ['anton','sinta','tiara'],
]
let a = 1
for (const kelompok of kumpulanSiswa) {
    console.log(`kelompok ke-${a}`)
    for (const siswa of kelompok) {
        console.log(`-> ${siswa}`)
    }
    a++
}