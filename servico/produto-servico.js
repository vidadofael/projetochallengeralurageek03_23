
/*conecta com a API (promessa de resposta)*/
const listaProdutos = () => {
    return fetch(`http://localhost:3000/produtos`)
    .then(resposta => {
        return resposta.json()
    })
}

export const produtoService = {
    listaProdutos
}

/*produtoService.listaProdutos*/