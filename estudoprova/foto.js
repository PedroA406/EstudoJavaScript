let lista = document.getElementById('lista')
let imagem = document.getElementById('imagem')
let legenda = document.getElementById('legenda')

function mudarfoto(){

imagem.src = lista.value

legenda.innerText=lista.value
}

lista.addEventListener('change', mudarfoto)