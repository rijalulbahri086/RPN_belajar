let nama = ""
let peran = ""

if (nama == false) {
    console.log("nama tidak boleh kosong")
} else if (peran == "Ksatria") {
    console.log(`halo ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
} else if (peran == "Tabib") {
    console.log(`halo Tabib ${nama} , kamu akan membantu temanmu yang terluka`)
} else if (peran == "Penyihir") {
    console.log(`halo penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`)
} else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih gak ada")
};