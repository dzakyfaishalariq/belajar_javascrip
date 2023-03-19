function pesan(msg){
    try{
    console.log(msg.toUpperCase())
    }catch (error){
        console.error(error)
        // console.log('error')
    }
}
pesan(1234)