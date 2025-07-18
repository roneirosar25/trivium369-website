document.addEventListener("DOMContentLoaded", function () {
  // Estrutura de dados completa do curso. Este é o nosso "mapa".
  const estruturaCurso = [
    {
      titulo: "MÓDULO 1: FUNDAÇÃO - O RENASCIMENTO ELÉTRICO",
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
      pasta: "modulo-1",
    },
    {
      titulo: "MÓDULO 2: O ARSENAL DO PRATICANTE",
      aulas: [
        {
          titulo: "Aula 2.1: O Princípio do Andaime Socrático",
          arquivo: "aula-2-1.html",
        },
        {
          titulo: "Aula 2.2: Prática - Construindo seu Advogado do Diabo",
          arquivo: "aula-2-2.html",
        },
        {
          titulo: "Aula 2.3: O Motor de Perspectivas",
          arquivo: "aula-2-3.html",
        },
        {
          titulo: "Aula 2.4: Prática - Montando seu Conselho",
          arquivo: "aula-2-4.html",
        },
        {
          titulo: "Aula 2.5: O Simulador de Futuros",
          arquivo: "aula-2-5.html",
        },
        {
          titulo: "Aula 2.6: Prática - Rodando sua Simulação",
          arquivo: "aula-2-6.html",
        },
      ],
      pasta: "modulo-2",
    },
    {
      titulo: "MÓDULO 3: O MÉTODO DA VINCI",
      aulas: [
        { titulo: "Aula 3.1: Pensamento Conectivo", arquivo: "aula-3-1.html" },
        {
          titulo: "Aula 3.2: Metáforas como Motores de Inovação",
          arquivo: "aula-3-2.html",
        },
        { titulo: "Aula 3.3: A Ponte Analógica", arquivo: "aula-3-3.html" },
        {
          titulo: "Aula 3.4: O Caderno Digital Vivo",
          arquivo: "aula-3-4.html",
        },
      ],
      pasta: "modulo-3",
    },
    {
      titulo: "MÓDULO 4: O MÉTODO TESLA",
      aulas: [
        { titulo: "Aula 4.1: Do Ponto ao Sistema", arquivo: "aula-4-1.html" },
        { titulo: "Aula 4.2: O Raio-X Sistêmico", arquivo: "aula-4-2.html" },
        { titulo: "Aula 4.3: Da Peça à Rede", arquivo: "aula-4-3.html" },
        {
          titulo: "Aula 4.4: Encontrando os Pontos de Alavancagem",
          arquivo: "aula-4-4.html",
        },
        {
          titulo: "Aula 4.5: O Laboratório do Engenheiro",
          arquivo: "aula-4-5.html",
        },
      ],
      pasta: "modulo-4",
    },
    {
      titulo: "MÓDULO 5: ARQUITETURA AVANÇADA",
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
      pasta: "modulo-5",
    },
  ];

  const sidebarContainer = document.querySelector(".sidebar-navegacao");
  const pathAtual = window.location.pathname;

  // --- Função para gerar a sidebar ---
  function gerarSidebar() {
    if (!sidebarContainer) return;

    sidebarContainer.innerHTML = "<h3>Navegação do Curso</h3>";

    estruturaCurso.forEach((modulo) => {
      const moduloDiv = document.createElement("div");
      moduloDiv.className = "sidebar-modulo";

      const tituloModulo = document.createElement("h4");
      tituloModulo.textContent = modulo.titulo;
      moduloDiv.appendChild(tituloModulo);

      const listaAulas = document.createElement("ul");
      listaAulas.className = "sidebar-lista-aulas";

      modulo.aulas.forEach((aula) => {
        const itemLista = document.createElement("li");
        const linkAula = document.createElement("a");

        // Ajusta o caminho para ser relativo à pasta raiz do curso
        linkAula.href = `../${modulo.pasta}/${aula.arquivo}`;

        const statusIcon = document.createElement("img");
        statusIcon.className = "status-icon";
        // Futuramente, a lógica de progresso irá alterar este ícone
        statusIcon.src = "../../../../assets/img/icon-status-pendente.png"; // Ícone padrão
        statusIcon.alt = "Status da aula";

        linkAula.appendChild(statusIcon);
        linkAula.append(aula.titulo); // Adiciona o texto após o ícone

        // Destaca a aula atual
        if (pathAtual.includes(aula.arquivo)) {
          linkAula.classList.add("aula-atual");
        }

        itemLista.appendChild(linkAula);
        listaAulas.appendChild(itemLista);
      });

      moduloDiv.appendChild(listaAulas);
      sidebarContainer.appendChild(moduloDiv);
    });
  }

  // --- Função para atualizar a barra de progresso ---
  function atualizarBarraDeProgresso() {
    // Esta função será expandida na próxima etapa com a lógica de conclusão
    const barraProgresso = document.getElementById("barraProgresso");
    const progressoTexto = document.getElementById("progressoTexto");

    if (barraProgresso && progressoTexto) {
      // Por enquanto, vamos simular um progresso de 10% para visualização
      const progresso = 10;
      barraProgresso.style.width = `${progresso}%`;
      progressoTexto.textContent = `${progresso}% concluído`;
    }
  }

  // --- Inicialização ---
  gerarSidebar();
  atualizarBarraDeProgresso();
});
