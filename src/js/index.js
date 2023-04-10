const dadosFormulario = document.querySelectorAll(".inputs")
const btnEnviar = document.querySelector(".btn-enviar")

btnEnviar.addEventListener("click", () => {
    dadosFormulario.forEach(input => {
        if (input.value == "") {
            dadosInvalidos(input);
        } else {
            dadosValidos(input);
        }
    })
})

function dadosInvalidos(input) {
    if (input.classList.contains("valido")) {
        input.classList.remove("valido")
    }

    input.classList.add("obrigatorio")
    input.nextElementSibling.classList.add("show")
}

function dadosValidos(input) {
    input.classList.add('valido')
    input.nextElementSibling.classList.remove('show')

}