const a = []
// a[0] = 'hallo'
// a[1] = 'baik'
// a[2] = 'cocok'
// a['man'] = 'sangat'
// menambahkan data dari atas ke belakang
a.push(20)
a.push(30)
a.push(10)
a.push(1,2,3)
console.log(a)
// pop menghapus item dari belakang
a.pop()
a.pop()
a.pop()
a.sort()
console.log(a)
a.sort().reverse()
a.push(1,2,10,1,20)
// unsif menghapus data dari depan
a.unshift('baru')
a.unshift('mobil')
console.log(a)
// menghapus dengan sift dari depan
a.shift()
a.shift()
// mengubah data dengan splic berdasarkan index
a.splice(3,0,'diubah 1')
console.log(a)
a.splice(6,2,'hapus 2')
console.log(a)
// multi dimensi array

const b = [
    [null,'O', null],
    ['X',null,'O'],
    ['X','O',null]
]
console.log(b)
console.log(b[0][1])
