function verifica() {
    var nom = window.document.querySelector('#msg')
    var nome = (nom.value)
    var res = document.querySelector('div#res')
    res.innerHTML=`Muito Prazer! ${nome}`
}
// imprimindo o nome