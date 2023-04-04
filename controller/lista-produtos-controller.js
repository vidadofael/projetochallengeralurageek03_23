import { produtoService } from "../servico/produto-servico.js";
/*gera template*/
const criaNovoproduto = (imagem, nome, preco) => {
    const linhaNovoItem = document.createElement('ul')
    linhaNovoItem.classList.add('gestao__listaItensProdutos');
    const conteudo = `
        <li class="gestao__itensProdutos" data-li>
            <img src="${imagem}" alt="">
            <div class="gestao__infoProdutos">
                <h3>
                    ${nome}
                </h3>
                <p>
                    R$ ${preco}
                </p>
                <a href="#">Ver mais</a>
            </div>
                            
            <div class="editar__remover">
                <div>
                    <img class="botao__editar" src="../assets/icone-editar.png" alt="icone editar produto">
                </div>
                <div>
                    <img class="botao__excluir" src="../assets/icone-apagar.png" alt="icone apagar produto">
                </div>
            </div>
        </li>
        `
    linhaNovoItem.innerHTML = conteudo
    return linhaNovoItem
}

/*percorre o DOM e busca o corpo da li*/
const tabela = document.querySelector('[data-tabela]')

/*Devolve a resposta para fazer algo com ela*/
produtoService.listaProdutos()
.then(data => {
        data.forEach(elemento => {
        tabela.appendChild(criaNovoproduto(elemento.imagem, elemento.nome, elemento.preco))
})})