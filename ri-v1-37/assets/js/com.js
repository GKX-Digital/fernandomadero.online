function dateMinus(what) {
    var today = Date.now()
    var nw = today - what * 10000
    var newd = new Date()
    newd.setTime(nw)
    var mthName = ['Janeiro', 'Fevereiro', 'MarÃ§o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    var mthNm = mthName[newd.getMonth()]
    return (newd.getDate() +
        ' de ' +
        mthNm +
        ' de ' +
        newd.getFullYear() +
        ' ' +
        newd.getHours() +
        ':' +
        round(newd.getMinutes()))
}



setTimeout(function() {
    $('#add-to-cart').show()
}, 20000)
var today = new Date()
today.setDate(today.getFullYear() + 1)
setCookie('returningVisitor', 'yes', today)
