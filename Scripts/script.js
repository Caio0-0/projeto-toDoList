let contador = 0
let input = document.querySelector(".input-txt")
let btnAdd = document.getElementById("btnAdd")
let main = document.querySelector(".areaLista")

function addTarefa(){
    let valorInput = input.value

    if ((valorInput!=="") && (valorInput!==null) && (valorInput!==undefined)){

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone"><i id="icone_${contador}" class="cicle"></i></i></div>
        <div class="item-nome" onclick="marcarTarefa(${contador})">${valorInput}</div>
        <div class="item-botao"><button onclick="deletar(${contador})" class="delete"><i>X</i></button></div>
        
    </div>`
        main.innerHTML +=novoItem
        input.value =""
        input.focus();

    }
}
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}
function marcarTarefa(id){
    var item = document.getElementById(id)
    var classe = item.getAttribute("class")

    if (classe=="item"){
        item.classList.add("item-clicada")

        var icone = document.getElementById("icone_"+id)
        icone.classList.remove("cicle")
       icone.classList.add("cicle-marcado")

        item.parentNode.appendChild(item)
    }else{
        item.classList.remove("item-clicada")

        var icone = document.getElementById("icone_"+id)
        icone.classList.remove("cicle-marcado")
        icone.classList.add("cicle")
    }
}
input.addEventListener("keyup",function(event){
    if (event.keyCode ===13){
        event.preventDefault()
        btnAdd.click()
    }
})