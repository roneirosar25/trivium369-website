// ARQUIVO DEDICADO PARA A PÁGINA laboratorio.html
// PASSO 1: Foco em consertar o menu lateral.
// CORREÇÃO: Usando caminhos absolutos para maior robustez.

document.addEventListener("DOMContentLoaded", function () {
  // --- CORREÇÃO APLICADA AQUI ---
  // Em vez de '..', usamos o caminho completo a partir da raiz do servidor.
  // Isso evita qualquer confusão sobre a localização do arquivo HTML.
  const basePath = "/cursos/engenharia-de-prompt";

  // --- ESTRUTURA DO CURSO (A "Receita" do Menu) ---
  const estruturaCurso = [
    {
      titulo: "MÓDULO 1: FUNDAÇÃO",
      pasta: "modulo-1",
      aulas: [
        {
          titulo: "Aula 1.1: Bem-vindo ao Renascimento Elétrico",
          arquivo: "aula-1-1.html",
        },
        {
          titulo: "Aula 1.2: A Armadilha da Conveniência",
          arquivo: "aula-1-2.html",
        },
        {
          titulo: "Aula 1.3: Jogos Finitos vs. Infinitos",
          arquivo: "aula-1-3.html",
        },
        {
          titulo: "Aula 1.4: O Arquiteto do Pensamento",
          arquivo: "aula-1-4.html",
        },
      ],
    },
    // Adicione aqui os outros módulos do seu curso
    {
      titulo: "MÓDULO 5: ARQUITETURA AVANÇADA",
      pasta: "modulo-5",
      aulas: [
        {
          titulo: "Aula 5.1: Orquestração Cognitiva",
          arquivo: "aula-5-1.html",
        },
        {
          titulo: "Aula 5.2: A Dialética da Máquina",
          arquivo: "aula-5-2.html",
        },
        {
          titulo: "Aula 5.3: A Arte da Convergência",
          arquivo: "aula-5-3.html",
        },
        { titulo: "Aula 5.4: A Explosão Criativa", arquivo: "aula-5-4.html" },
        {
          titulo: "Aula 5.5: Oficina do Projeto Capstone",
          arquivo: "aula-5-5.html",
        },
      ],
    },
  ];

  // --- FUNÇÃO PARA GERAR O MENU LATERAL ---
  function gerarSidebar() {
    const menuContainer = document.querySelector(".menu-aulas");
    if (!menuContainer) {
      console.error("Elemento '.menu-aulas' não encontrado!");
      return;
    }

    // Os links agora usam o basePath absoluto
    const linkLaboratorioHTML = `
  <ul class="sidebar-lista-aulas">
    <li>
      <a href="${basePath}/aulas/laboratorio.html" class="link-laboratorio ativo">
        <i class="fas fa-flask" style="width: 10px; text-align: center;"></i> 
        <span>Laboratório</span>
      </a>
    </li>
  </ul>
  <hr style="border-color: rgba(255,255,255,0.1); margin: 15px 0;">
`;
    menuContainer.innerHTML = linkLaboratorioHTML;

    let menuAulasHTML = "";
    estruturaCurso.forEach((modulo) => {
      let aulasHTML = modulo.aulas
        .map(
          (aula) =>
            `<li><a href="${basePath}/aulas/${modulo.pasta}/${aula.arquivo}"><i class="status-icon nao-iniciado"></i>${aula.titulo}</a></li>`
        )
        .join("");

      menuAulasHTML += `
      <div class="sidebar-modulo">
        <h4 class="modulo-titulo-clicavel contraido">${modulo.titulo}</h4>
        <ul class="sidebar-lista-aulas contraido">
          ${aulasHTML}
        </ul>
      </div>
    `;
    });
    menuContainer.innerHTML += menuAulasHTML;
  }

  // --- FUNÇÃO PARA FAZER O MENU EXPANDIR/RECOLHER (Acordeão) ---
  function inicializarAccordionMenu() {
    const titulos = document.querySelectorAll(".modulo-titulo-clicavel");
    titulos.forEach((titulo) => {
      titulo.addEventListener("click", function () {
        this.classList.toggle("contraido");
        this.nextElementSibling.classList.toggle("contraido");
      });
    });
  }

  // --- INICIALIZAÇÃO DO MENU ---
  gerarSidebar();
  inicializarAccordionMenu();
});
