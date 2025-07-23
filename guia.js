// Array 'guia' com os dados dos serviços do IFMS
const guia = [
  {id: 1, nome: "noticia", descricao: "Atualização de última hora", categoria: "informativo"},
  {id: 2, nome: "moodle", descricao: "Aba do ambiente virtual Moodle", categoria: "academico"},
  {id: 3, nome: "projetos", descricao: "Informações sobre projetos do IFMS", categoria: "academico"},
  {id: 4, nome: "editais", descricao: "Lista de editais e publicações do IFMS", categoria: "informativo"},
  {id: 5, nome: "calendario", descricao: "Calendário acadêmico do IFMS", categoria: "informativo"},
  {id: 6, nome: "sugestão", descricao: "Envie suas sugestões para o IFMS", categoria: "sugestão"}, // Categoria consistente com o select
  {id: 7, nome: "biblioteca", descricao: "Acesso ao acervo da biblioteca do IFMS", categoria: "academico"},
  {id: 8, nome: "servidor", descricao: "Área restrita do servidor", categoria: "informativo"},
  {id: 9, nome: "Eventos", descricao: "Eventos IFMS", categoria: "informativo"},
  {id: 10, nome: "Denúncias", descricao: "Área de denúcias", categoria: "informativo"},
  {id: 11, nome: "Novo Card", descricao: "Área de denúcias", categoria: "informativo"},
  {id: 12, nome: "Novo Card", descricao: "Área de denúcias", categoria: "informativo"},
];




// Função para renderizar cards dinamicamente
function renderizarCards(dados = guia) {
  const container = document.querySelector('.conteudo-principal'); // Seleciona o container <main> com a classe
  // Verifica se o container foi encontrado
  if (!container) {
      console.error("Erro: Elemento com a classe '.conteudo-principal' não encontrado no HTML. Os cards não serão renderizados.");
      return; // Sai da função se o container não for encontrado
  }

  // Gera o HTML dos cards a partir dos dados do array
  container.innerHTML = dados.map(item => `
      <div class="card ${item.nome}"> <h2>${item.nome.charAt(0).toUpperCase() + item.nome.slice(1)}</h2> <p>${item.descricao}</p>
          <small>Categoria: ${item.categoria}</small>
      </div>
  `).join(''); // Usa .join('') para concatenar os elementos do array em uma única string HTML
}

// Função para pesquisar por texto nos cards
function pesquisar(termo) {
  const termoLower = termo.toLowerCase().trim(); // Converte o termo para minúsculas e remove espaços extras
  const filtrados = guia.filter(item =>
      item.nome.toLowerCase().includes(termoLower) ||
      item.descricao.toLowerCase().includes(termoLower) ||
      item.categoria.toLowerCase().includes(termoLower)
  );
  renderizarCards(filtrados); // Renderiza apenas os cards que correspondem à pesquisa
}

// Função para filtrar por categoria
function filtrarPorCategoria(categoria) {
  // Se a categoria for uma string vazia (valor da opção "Todas as categorias"), mostra todos os itens
  const filtrados = categoria === '' ? guia :
      guia.filter(item => item.categoria === categoria);
  renderizarCards(filtrados); // Renderiza apenas os cards da categoria selecionada
}

function ativarBusca() {
  const valor = document.getElementById('pesquisa').value;
  pesquisar(valor);
}


// Inicializar a renderização dos cards quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  renderizarCards(); // Chama a função para mostrar todos os cards ao carregar a página
});

// A função toggleDescricao foi removida pois não se encaixa na lógica atual de filtragem/pesquisa