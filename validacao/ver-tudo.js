const listaProdutos = document.getElementById("lista-produtos");
const itensProdutos = listaProdutos.querySelectorAll("[data-itemProduto]");
const btnVerTudo = document.getElementById("verTudo");

const maxItensExibidos = 6;
for (let i = maxItensExibidos; i < itensProdutos.length; i++) {
  itensProdutos[i].classList.add("hidden");
}

btnVerTudo.addEventListener("click", function () {
  // Mostra todos os itens e oculta o botão "Ver tudo"
  for (let i = 0; i < itensProdutos.length; i++) {
    itensProdutos[i].classList.remove("hidden");
  }
  btnVerTudo.style.display = "none";
});
