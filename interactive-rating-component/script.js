const buttonSubmit = document.querySelector('[data-button]');
const numeros = document.querySelectorAll('ul li');

let numeroSelecionado = 0;

numeros.forEach((item) => {
  item.addEventListener('click', () => {
    numeros.forEach((el) => el.classList.remove('ativo'));
    item.classList.add('ativo');
    numeroSelecionado = item.textContent.trim();
  });
});

function enviar(e) {
  e.preventDefault();

  if (!numeroSelecionado) {
    alert('Dê uma nota');
    return;
  }

  localStorage.setItem('nota', numeroSelecionado);
  window.location.href = `/interactive-rating-component/enviado.html`;
}

buttonSubmit.addEventListener('click', enviar);
