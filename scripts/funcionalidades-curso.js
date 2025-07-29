// ARQUIVO: /scripts/funcionalidades-curso.js
// VERSÃO: 27.0 - FINAL, MESCLADO, COMPLETO E VERIFICADO

document.addEventListener("DOMContentLoaded", function () {
  let aulaAtualInfo = null;

  // INICIALIZAÇÃO GERAL
  inicializarInterface();
  inicializarConteudoAula();

  // ===============================================================
  // FUNÇÃO 1: CONTROLA A INTERFACE GERAL (MENUS, CHAT UI)
  // ===============================================================
  function inicializarInterface() {
    const body = document.body;
    const btnNav = document.getElementById("btn-toggle-nav");
    const sidebarNav = document.querySelector(".sidebar-navegacao");
    const btnTools = document.getElementById("btn-toggle-tools");
    const sidebarTools = document.querySelector(".sidebar-ferramentas");
    const mainContent = document.querySelector(".conteudo-aula-container");

    if (btnNav && sidebarNav && btnTools && sidebarTools && mainContent) {
      const fecharTodosOsMenus = () => {
        body.classList.remove("nav-esquerda-aberta", "nav-direita-aberta");
        sidebarNav.classList.remove("aberto");
        btnNav.classList.remove("aberto");
        sidebarTools.classList.remove("aberto");
        btnTools.classList.remove("aberto");
      };
      btnNav.addEventListener("click", (e) => {
        e.stopPropagation();
        body.classList.toggle("nav-esquerda-aberta");
        sidebarNav.classList.toggle("aberto");
        btnNav.classList.toggle("aberto");
      });
      btnTools.addEventListener("click", (e) => {
        e.stopPropagation();
        body.classList.toggle("nav-direita-aberta");
        sidebarTools.classList.toggle("aberto");
        btnTools.classList.toggle("aberto");
      });
      mainContent.addEventListener("click", fecharTodosOsMenus);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") fecharTodosOsMenus();
      });
    }
  }

  // ===============================================================
  // FUNÇÃO 2: CONTROLA TODO O CONTEÚDO DINÂMICO E FUNCIONALIDADES
  // ===============================================================
  function inicializarConteudoAula() {
    if (!document.querySelector(".conteudo-aula-container")) return;

    const basePath = "/cursos/engenharia-de-prompt/aulas";
    const estruturaCurso = [
      {
        titulo: "MÓDULO 1: FUNDAÇÃO",
        pasta: "modulo-1",
        aulas: [
          { titulo: "Aula 1.0: Introdução ao Curso", arquivo: "aula-1-0.html" },
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
      {
        titulo: "MÓDULO 2: O ARSENAL DO PRATICANTE",
        pasta: "modulo-2",
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
      },
      {
        titulo: "MÓDULO 3: O MÉTODO DA VINCI",
        pasta: "modulo-3",
        aulas: [
          {
            titulo: "Aula 3.1: Pensamento Conectivo",
            arquivo: "aula-3-1.html",
          },
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
      },
      {
        titulo: "MÓDULO 4: O MÉTODO TESLA",
        pasta: "modulo-4",
        aulas: [
          { titulo: "Aula 4.1: Do Ponto ao Sistema", arquivo: "aula-4-1.html" },
          { titulo: "Aula 4.2: O Raio-X Sistêmico", arquivo: "aula-4-2.html" },
          { titulo: "Aula 4.3: Da Peça à Rede", arquivo: "aula-4-3.html" },
          {
            titulo: "Aula 4.4: Simulação de Intervenções",
            arquivo: "aula-4-4.html",
          },
          {
            titulo: "Aula 4.5: O Laboratório do Engenheiro",
            arquivo: "aula-4-5.html",
          },
        ],
      },
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

    const todasAsAulas = [];
    estruturaCurso.forEach((mod) =>
      mod.aulas.forEach((aula) =>
        todasAsAulas.push({
          ...aula,
          modulo: { titulo: mod.titulo, pasta: mod.pasta },
        })
      )
    );
    const pathAtual = window.location.pathname;
    const indiceAulaAtual = todasAsAulas.findIndex((aula) =>
      pathAtual.endsWith(aula.arquivo)
    );

    if (indiceAulaAtual === -1) return;

    aulaAtualInfo = todasAsAulas[indiceAulaAtual];

    // --- Chamada de todas as funções de conteúdo ---
    atualizarTitulos();
    gerarSidebar();
    atualizarNavegacaoRodape();
    atualizarBarraDeProgresso();
    inicializarAnotacoes();
    inicializarGerenciadorDeChave();
    inicializarKairos();

    function gerarLinkAbsoluto(aulaInfo) {
      if (!aulaInfo) return "#";
      return `${basePath}/${aulaInfo.modulo.pasta}/${aulaInfo.arquivo}`;
    }

    function atualizarTitulos() {
      if (!aulaAtualInfo) return;
      const elModulo = document.getElementById("titulo-modulo");
      const elAula = document.getElementById("titulo-aula");
      if (elModulo) elModulo.textContent = aulaAtualInfo.modulo.titulo;
      if (elAula) elAula.textContent = aulaAtualInfo.titulo;
      document.title = `${aulaAtualInfo.titulo} | TRIVIUM 369`;
    }

    function gerarSidebar() {
      const menuContainer = document.querySelector(".menu-aulas");
      if (!menuContainer || !aulaAtualInfo) return;
      const moduloAtualPasta = aulaAtualInfo.modulo.pasta;
      menuContainer.innerHTML = "";
      estruturaCurso.forEach((modulo) => {
        const moduloDiv = document.createElement("div");
        const tituloModulo = document.createElement("h4");
        tituloModulo.textContent = modulo.titulo;
        tituloModulo.className = "modulo-titulo-clicavel";
        const listaAulas = document.createElement("ul");
        listaAulas.className = "sidebar-lista-aulas";
        if (modulo.pasta !== moduloAtualPasta) {
          listaAulas.classList.add("contraido");
          tituloModulo.classList.add("contraido");
        }
        modulo.aulas.forEach((aula) => {
          const i = todasAsAulas.findIndex((a) => a.arquivo === aula.arquivo);
          const l = document.createElement("li");
          const k = document.createElement("a");
          k.href = gerarLinkAbsoluto(todasAsAulas[i]);
          const s = document.createElement("i");
          s.className = "status-icon";
          if (i < indiceAulaAtual) {
            s.classList.add("concluido");
          } else if (i === indiceAulaAtual) {
            k.classList.add("ativo");
            s.classList.add("em-andamento");
          }
          k.appendChild(s);
          k.append(aula.titulo);
          l.appendChild(k);
          listaAulas.appendChild(l);
        });
        moduloDiv.appendChild(tituloModulo);
        moduloDiv.appendChild(listaAulas);
        menuContainer.appendChild(moduloDiv);
      });
      inicializarAccordionMenu();
    }

    function inicializarAccordionMenu() {
      const titulos = document.querySelectorAll(".modulo-titulo-clicavel");
      titulos.forEach((titulo) => {
        titulo.addEventListener("click", function () {
          this.classList.toggle("contraido");
          this.nextElementSibling.classList.toggle("contraido");
        });
      });
    }

    function atualizarNavegacaoRodape() {
      const c = document.querySelector(".navegacao-aula");
      if (!c) return;
      c.innerHTML = "";
      c.classList.remove("so-proxima"); // Garante que a classe é removida antes de começar

      const todasAsAulas = [];
      estruturaCurso.forEach((mod) =>
        mod.aulas.forEach((aula) =>
          todasAsAulas.push({
            ...aula,
            modulo: { titulo: mod.titulo, pasta: mod.pasta },
          })
        )
      );
      const indiceAulaAtual = todasAsAulas.findIndex((aula) =>
        window.location.pathname.endsWith(aula.arquivo)
      );
      if (indiceAulaAtual === -1) return;
      const aulaAtualInfo = todasAsAulas[indiceAulaAtual];

      const aulaAnteriorInfo =
        indiceAulaAtual > 0 ? todasAsAulas[indiceAulaAtual - 1] : null;
      const aulaProximaInfo =
        indiceAulaAtual < todasAsAulas.length - 1
          ? todasAsAulas[indiceAulaAtual + 1]
          : null;

      if (aulaAnteriorInfo) {
        const a = document.createElement("a");
        a.href = gerarLinkAbsoluto(aulaAnteriorInfo);
        a.className = "botao-nav";
        a.textContent = "← Aula Anterior";
        c.appendChild(a);
      }

      if (aulaProximaInfo) {
        const a = document.createElement("a");
        a.href = gerarLinkAbsoluto(aulaProximaInfo);
        a.className = "botao-nav";

        // LÓGICA PARA ALTERAR O TEXTO DO BOTÃO
        if (aulaAtualInfo && aulaAtualInfo.arquivo === "aula-1-0.html") {
          a.textContent = "Começar a Jornada";
        } else {
          a.textContent = "Próxima Aula →";
        }

        c.appendChild(a);
      }

      // LÓGICA PARA ADICIONAR A CLASSE DE CENTRALIZAÇÃO
      if (aulaProximaInfo && !aulaAnteriorInfo) {
        c.classList.add("so-proxima");
      }
    }

    function atualizarBarraDeProgresso() {
      if (!aulaAtualInfo) return;
      const p = ((indiceAulaAtual + 1) / todasAsAulas.length) * 100;
      const b = document.querySelector(".barra-progresso-preenchimento");
      const t = document.querySelector(".progresso-texto");
      if (b) b.style.width = `${p}%`;
      if (t) t.textContent = `${Math.round(p)}%`;
    }

    function inicializarAnotacoes() {
      const t = document.getElementById("anotacoesPessoais");
      if (!t || !aulaAtualInfo) return;
      const l = document.getElementById("btn-limpar-anotacoes");
      const d = document.getElementById("btn-baixar-anotacoes");
      if (!l || !d) return; // Segurança extra
      const k = "anotacoes_trivium_" + aulaAtualInfo.arquivo;
      t.value = localStorage.getItem(k) || "";
      let o;
      t.addEventListener("input", () => {
        clearTimeout(o);
        o = setTimeout(() => {
          localStorage.setItem(k, t.value);
        }, 500);
      });
      l.addEventListener("click", () => {
        if (
          confirm("Tem certeza que deseja limpar as anotações para esta aula?")
        ) {
          t.value = "";
          localStorage.removeItem(k);
        }
      });
      d.addEventListener("click", () => {
        const x = t.value;
        if (x.trim() === "") {
          alert("Não há anotações para baixar.");
          return;
        }
        const b = new Blob([x], { type: "text/plain" });
        const a = document.createElement("a");
        a.download = `anotacoes-${aulaAtualInfo.arquivo.replace(
          ".html",
          ""
        )}.txt`;
        a.href = window.URL.createObjectURL(b);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(a.href);
      });
    }

    function inicializarGerenciadorDeChave() {
      const i = document.getElementById("api-key-input");
      const s = document.getElementById("api-key-save-btn");
      const t = document.querySelector(".api-key-status");
      if (!i || !s || !t) return;
      const k = localStorage.getItem("trivium_gemini_api_key");
      if (k) {
        i.value = k;
      }
      s.addEventListener("click", () => {
        const e = i.value.trim();
        if (e) {
          localStorage.setItem("trivium_gemini_api_key", e);
          mostrarStatus("Chave API salva com sucesso!", "success", t);
        } else {
          localStorage.removeItem("trivium_gemini_api_key");
          mostrarStatus("Chave API removida.", "error", t);
        }
      });
      function mostrarStatus(mensagem, tipo, statusEl) {
        statusEl.textContent = mensagem;
        statusEl.className = `api-key-status ${tipo} ativo`;
        setTimeout(() => {
          statusEl.classList.remove("ativo");
        }, 3000);
      }
    }

    function inicializarKairos() {
      const b = document.getElementById("kairos-chat-button");
      const c = document.getElementById("kairos-chat-container");
      const x = document.getElementById("kairos-close-button");
      const s = document.getElementById("kairos-send-button");
      const u = document.getElementById("kairos-user-input");
      const m = document.querySelector(".kairos-chat-messages");
      if (!b || !c || !x || !s || !u || !m) return;

      b.addEventListener("click", () => c.classList.toggle("visivel"));
      x.addEventListener("click", () => c.classList.remove("visivel"));

      const enviarMensagem = async () => {
        const p = u.value.trim();
        if (p === "") return;
        const k = localStorage.getItem("trivium_gemini_api_key");
        if (!k) {
          alert("Por favor, insira sua chave API para usar o chat.");
          return;
        }
        u.value = "";
        adicionarMensagem(p, "user", m);
        const aiMessageElement = adicionarMensagem("...", "kairos", m, true);
        const promptCompleto = `Contexto: Você é Kairos, um assistente de IA para o curso TRIVIUM 369. O aluno está na aula "${
          aulaAtualInfo?.titulo || "Geral"
        }". Responda à pergunta do aluno: "${p}"`;
        const apiURL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${k}`;
        try {
          const r = await fetch(apiURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: promptCompleto }] }],
            }),
          });
          const j = await r.json();
          if (!r.ok || j.error) {
            throw new Error(
              j.error?.message || "A resposta da API não foi bem-sucedida."
            );
          }

          if (j.candidates && j.candidates[0].content) {
            aiMessageElement.textContent =
              j.candidates[0].content.parts[0].text;
          } else {
            aiMessageElement.textContent =
              "A IA não pôde fornecer uma resposta.";
          }
        } catch (e) {
          console.error("Erro na chamada da API:", e);
          aiMessageElement.textContent = `Ocorreu um erro: ${e.message}.`;
        } finally {
          aiMessageElement.classList.remove("loading");
          m.scrollTop = m.scrollHeight;
        }
      };

      s.addEventListener("click", enviarMensagem);
      u.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          enviarMensagem();
        }
      });

      function adicionarMensagem(texto, tipo, container, loading = false) {
        const div = document.createElement("div");
        div.className = `message ${tipo}`;
        if (loading) div.classList.add("loading");
        div.textContent = texto;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
        return div;
      }
    }
  } // ===============================================================
  // FUNÇÃO ADICIONADA: CONTROLA A INTERFACE GERAL (MENUS)
  // ===============================================================
  function inicializarInterface() {
    const body = document.body;
    const btnNav = document.getElementById("btn-toggle-nav");
    const sidebarNav = document.querySelector(".sidebar-navegacao");
    const btnTools = document.getElementById("btn-toggle-tools");
    const sidebarTools = document.querySelector(".sidebar-ferramentas");
    const mainContent = document.querySelector(".conteudo-aula-container");

    if (btnNav && sidebarNav && btnTools && sidebarTools && mainContent) {
      const fecharTodosOsMenus = () => {
        body.classList.remove("nav-esquerda-aberta", "nav-direita-aberta");
        sidebarNav.classList.remove("aberto");
        btnNav.classList.remove("aberto");
        sidebarTools.classList.remove("aberto");
        btnTools.classList.remove("aberto");
      };

      btnNav.addEventListener("click", (e) => {
        e.stopPropagation();
        body.classList.toggle("nav-esquerda-aberta");
        sidebarNav.classList.toggle("aberto");
        btnNav.classList.toggle("aberto");
      });

      btnTools.addEventListener("click", (e) => {
        e.stopPropagation();
        body.classList.toggle("nav-direita-aberta");
        sidebarTools.classList.toggle("aberto");
        btnTools.classList.toggle("aberto");
      });

      mainContent.addEventListener("click", fecharTodosOsMenus);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") fecharTodosOsMenus();
      });
    }
  }
});
