function gerar() {
    let num = document.getElementById("tnum")
    let tab = document.getElementById("ttab")

    if (num.value.length == 0) {
        window.alert("Faltam Dados!")
    } else {
        let n = Number(num.value)
        tab.innerHTML = ""

       for (let c = 1; c <= 10; c++) {
        let item = document.createElement("option")
        item.text = `${n} x ${c} = ${n * c}`
        tab.appendChild(item)

       }
    }
}
function apagar(params) {
    let tab = document.getElementById('ttab')
    let num = document.getElementById('tnum')
    tab.innerHTML = ''
    num.value = ''
    num.focus()
}

