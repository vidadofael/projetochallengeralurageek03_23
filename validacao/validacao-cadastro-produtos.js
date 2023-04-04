function isUrlValid(url) {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(url);
}

function isValidText(value) {
  return value.trim().length >= 3;
}

function mostrarMensagem(id, mensagem, cor) {
  const elementoMensagem = document.getElementById(id);
  elementoMensagem.style.display = "block";
  elementoMensagem.style.color = cor;
  elementoMensagem.innerText = mensagem;
}

document.getElementById("adicionarProduto").addEventListener("click", function (event) {
  event.preventDefault();

  const urlFoto = document.getElementById("urlFoto").value;
  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;
  const descricao = document.getElementById("descricao").value;

  let isValid = true;

  if (isUrlValid(urlFoto)) {
    mostrarMensagem("mensagemUrl", "Insira uma URL válida. Ex.: https://m.media-amazon.com/images/I/81GeFszo5vL._AC_SX425_.jpg", "green");
  } else {
    mostrarMensagem("mensagemUrl", "Insira uma URL válida. Ex.: https://m.media-amazon.com/images/I/81GeFszo5vL._AC_SX425_.jpg", "red");
    isValid = false;
  }

  if (isValidText(nome)) {
    document.getElementById("mensagemNome").style.display = "none";
  } else {
    mostrarMensagem("mensagemNome", "Preencha corretamente este campo.", "red");
    isValid = false;
  }

  if (isValidText(preco)) {
    document.getElementById("mensagemPreco").style.display = "none";
  } else {
    mostrarMensagem("mensagemPreco", "Preencha corretamente este campo.", "red");
    isValid = false;
  }

  if (isValidText(descricao)) {
    document.getElementById("mensagemDescricao").style.display = "none";
  } else {
    mostrarMensagem("mensagemDescricao", "Preencha corretamente este campo.", "red");
    isValid = false;
  }

  if (isValid) {
    window.location.href = "../telas/sucesso-produto.html";
  }
});
