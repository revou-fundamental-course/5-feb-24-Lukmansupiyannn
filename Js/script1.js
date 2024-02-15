const cius = document.querySelector("#input-field")
const hasil = document.querySelector("#hasil-konversi")
const rumus = document.querySelector("#caranya")
const btnKonversi = document.querySelector("#total")
const btnReset = document.querySelector("#hapus")
const btnReverse = document.querySelector("#mundur")

btnKonversi.addEventListener("click", () => {
    hasil.value = ((cius.value * 9) /5 + 32); 
    let x = tai(cius.value, " * 9/5 + 32 = ", hasil.value)
    rumus.innerHTML = x;
})

btnReset.addEventListener("click", () => {
    cius.value= "";
    hasil.value= "";
})

function tai(a, b, c){
    return a + b + c;
}