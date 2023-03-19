// menggunakan objek untuk menampung function

const myMethod = {
    perkalian:function (a,b){
        return a * b;
    },
    pembagian:function (a,b){
        return a / b;
    }
}
console.log(myMethod.perkalian(4,3))