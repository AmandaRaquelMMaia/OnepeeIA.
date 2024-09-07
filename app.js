function pesquisar(){

let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById("campo-pesquisa").value;

if (campoPesquisa == ""){
    section.innerHTML= "Insira uma palavra-chave"
    return
}

if (campoPesquisa.trim() === "") {
    section.innerHTML = "Insira uma palavra-chave";
    return;
  }

console.log(campoPesquisa);

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let chave = "";

for (let dado of dados){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    chave = dado.chave.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || chave.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
        <h2>${dado.titulo}</h2>
        <p class="descricao-meta">${dado.descricao} </p>
        <p class="descricao-meta">${dado.funcionalidades} </p>
        <a href=${dado.link} target="_blank">Aperte aqui para mais informações!</a>
    </div>
    `
    }


}

if (!resultados){
    resultados = "Nada encontrado, tente outra palavra chave"
}

section.innerHTML = resultados   

}


