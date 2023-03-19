// laxial scop => penggunaan fungsi dalam fungsi
function perkerjaan(){
    const jabatan = "Progamer"
    function lebihdalam(){
        function orandalam(){
            let kenalan = `orang dalam bisa masukan ${jabatan}`
            console.log(kenalan)
        }
        orandalam()
    }
    lebihdalam()
}
perkerjaan()