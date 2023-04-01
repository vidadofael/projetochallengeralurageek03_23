const verTudoBtn = document.querySelector('.produto__link--verTudo');
const itensOcultos = document.querySelectorAll('.hidden');

verTudoBtn.addEventListener('click', () => {
  itensOcultos.forEach(item => {
    item.classList.remove('hidden');
  });
});
