const identitas = {
    nama: 'Dzaky Faishalariq',
    hobi: 'Belajar Teknologi dan sains',
    kenalan : function (){
        console.log(`hallo, nama saya ${this.nama}. hobi saya ${this.hobi}`)
    }
}
identitas.kenalan()