function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == ""){
        section.innerHTML = "Campo pesquisa deve ser escrito";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa)

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) do array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
        
    }

    if (!resultados){
        resultados = "A pesquina não encontrou nada com o termo '" + campoPesquisa + "'";
    }

    // Atribui o HTML construído à seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}