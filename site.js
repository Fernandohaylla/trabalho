const searchInput = document.getElementById('searchInput');
const cardContainer = document.getElementById('cardContainer');

// Dados dos cards
const cardsData = [
  { tipo: 'noticia', texto: 'Notícia sobre o campus' },
  { tipo: 'moodle', texto: 'Acesso ao Moodle IFMS' },
  { tipo: 'projetos', texto: 'Projetos de extensão 2024' },
  { tipo: 'editais', texto: 'Editais abertos' },
  { tipo: 'noticia', texto: 'Notícia sobre evento escolar' },
  { tipo: 'projetos', texto: 'Projeto InFlow Podcast' }
];

// Cria os cards dinamicamente
cardsData.forEach(card => {
  const div = document.createElement('div');
  div.classList.add('card', card.tipo);
  div.textContent = card.texto;
  cardContainer.appendChild(div);
});

// Filtro de busca
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('#cardContainer .card');

  cards.forEach(card => {
    const content = card.textContent.toLowerCase();
    card.classList.toggle('hidden', !content.includes(query));
  });
});
