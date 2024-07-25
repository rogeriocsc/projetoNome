function verifica() {
    var nom = window.document.querySelector('#msg')
    var nome = (nom.value)
    var res = document.querySelector('div#res')
    res.innerHTML=`Nome: ${nome}`
}
// imprimindo o nome