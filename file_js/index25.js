function aritmatika(a, b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        console.log('Maaf nilai tidak terdeteksi')
    }else {
        return a+b
    }
}
let a = aritmatika(10,5)
console.log(a)

// perbedaan variabel let, const dan var
// -> let => memiliki block scope yang mana diletakan di dalam scop baik itu di fungsi if, for dan stetmen fungsi lainnya tidak dapat di akses
// -> const => sama dengan let
// -> var => bisa di akses di manapun tidak ada block scop sehingga tidak di rekomendasikan untuk digunakan