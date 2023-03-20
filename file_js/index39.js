// reduce

const nilaiMahasiswa = [60,70,40,80,90,95,40,50]

const totalNilai = nilaiMahasiswa.reduce((total,nilai)=>{
    console.log(`${total} + ${nilai}`)
    return total + nilai
})
console.log(totalNilai)
console.log(totalNilai/nilaiMahasiswa.length)

// mencari nilai tetrbesar
const nilai = [1,2,3,6,2,3,9,1,3,10,2,3,4,5,6,7,8]

let nilaiMax = nilai.reduce((maxNilai, n) => {
    console.log(`bandingkan ${maxNilai} dan ${n}`)
    if (maxNilai > n) {
        return maxNilai
    }
    return n
})
console.log(nilaiMax)