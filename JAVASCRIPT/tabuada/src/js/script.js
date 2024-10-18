//1 selecionando os elementos
const multiplicationForm = document.querySelector("#multiplication-form") // formulario com os inputs e o submit
const numberInput = document.querySelector("#number") // input que vai o valor de qual é a tabuada
const multiplicationInput = document.querySelector("#multiplicator") // input que vai o valor de ate quanto vai a multiplicacao
const multiplicationTable = document.querySelector("#multiplication-operations") // vai mostrar o resultado

const multiplicationTitle = document.querySelector("#multiplication-tilte span") // vai mostrar o titulo de qual é a tabuada


//3 funcoes
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""; // vai limpar table

    for(i =1; i <= multiplicatorNumber; i++) {
        const result = number * i // o calculo dos inputs

        const template = `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`; // o template de exibicao (tabuada)

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html") // transforma uma string em html
        const row = htmlTemplate.querySelector(".row") // vai chamar o template
        multiplicationTable.appendChild(row)
    }
    multiplicationTitle.innerText = number // vai mostrar o valor que qual é a tabuada, no titulo 
}

//2 eventos baseados na selecao de elementos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); // nao recarrega a pagina

    const multiplicationNumber = +numberInput.value // se torne um numero inteiro
    const multiplicatorNumber = +multiplicationInput.value // 

    // validacao
    if(!multiplicationNumber || !multiplicatorNumber) return; // so vai exibir o resultado se ambos os inputs for preenchido
 
    createTable(multiplicationNumber, multiplicatorNumber) // chamando a funcao
})