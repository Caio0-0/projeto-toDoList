let input = document.getElementById("input-txt")
let btnAdd = document.getElementById("btnAdd")
let main = document.getElementById("areaLista")

function addTarefa(){
    let valorInput = input.value

    if ((valorInput!=="") && (valorInput!==null) && (valorInput!==undefined)){
        let novoItem = `<div class="item">
        <div class="item-icone"><i class="fa-regular fa-circle"></i></div>
        <div class="item-nome">Texto de teste</div>
        <div class="item-botao"><button class="delete"><i class="fa-solid fa-trash"></i></button></div>
        
    </div>`
        main.innerHTML +=novoItem

    }
}