
var elemento
elemento = document.getElementById("titulo")
/**alert(elemento) */

/**Exemplo 2 */
function mudarTitulo(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.innerHTML = "Alterando o Título via JS"
}

/**Exemplo 3  */
function mudarEstilo(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.style.color = "lightBlue"
    titulo.style.backgroundColor = "black"
    titulo.style.fontSize = "68px"
}

/**Exemplo 4 */
function destacar(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.classList.add("destacado")
}

/**Exemplo 5 */
function remover(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.classList.remove("destacado")
}

/**Exemplo 6*/
function alternar(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.classList.toggle("destacado")
}

/**Exemplo 7 */
function adicionarTexto(){
    var novo
    novo = document.createElement("p")
    novo.id = "paragrafo"
    novo.innerText = "Novo parágrafo criado com JS"

    var div = document.getElementById("container")
    div.appendChild(novo)
}

/**Exemplo 8 */
function removerTexto(){
    var p = document.getElementById("paragrafo")
    if(p){
        p.remove()
    }else{
        alert("Não há texto para remover!")
    }
}