// ARQUIVO: /scripts/funcionalidades-curso.js
// VERSÃO: CORRIGIDA E SINCRONIZADA - 22/07/2025

document.addEventListener("DOMContentLoaded", function () {
  const basePath = "/cursos/engenharia-de-prompt/aulas";

  const estruturaCurso = [
    {
      titulo: "MÓDULO 1: FUNDAÇÃO - O RENASCIMENTO ELÉTRICO",
      pasta: "modulo-1",
      aulas: [
        {
          titulo: "Aula 1.0: Introdução ao Curso",
          arquivo: "aula-1-0.html",
        },
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

  const pathAtual = window.location.pathname;
  let todasAsAulas = [];
  estruturaCurso.forEach((mod) => {
    mod.aulas.forEach((aula) => {
      todasAsAulas.push({
        ...aula,
        modulo: { titulo: mod.titulo, pasta: mod.pasta },
      });
    });
  });
  const indiceAulaAtual = todasAsAulas.findIndex((aula) =>
    pathAtual.endsWith(aula.arquivo)
  );
  const aulaAtualInfo =
    indiceAulaAtual !== -1 ? todasAsAulas[indiceAulaAtual] : null;
  const aulaAnteriorInfo =
    indiceAulaAtual > 0 ? todasAsAulas[indiceAulaAtual - 1] : null;
  const aulaProximaInfo =
    indiceAulaAtual < todasAsAulas.length - 1
      ? todasAsAulas[indiceAulaAtual + 1]
      : null;

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
      moduloDiv.className = "sidebar-modulo";
      const tituloModulo = document.createElement("h4");
      tituloModulo.textContent = modulo.titulo;
      tituloModulo.className = "modulo-titulo-clicavel"; // Adiciona a classe para o clique
      moduloDiv.appendChild(tituloModulo);
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
        } else {
          s.classList.add("nao-iniciado");
        }
        k.appendChild(s);
        k.append(aula.titulo);
        l.appendChild(k);
        listaAulas.appendChild(l);
      });
      moduloDiv.appendChild(listaAulas);
      menuContainer.appendChild(moduloDiv);
    });
  }

  function inicializarAccordionMenu() {
    const titulos = document.querySelectorAll(".modulo-titulo-clicavel");
    titulos.forEach((titulo) => {
      titulo.addEventListener("click", function () {
        const listaAulas = this.nextElementSibling;
        if (
          listaAulas &&
          listaAulas.classList.contains("sidebar-lista-aulas")
        ) {
          this.classList.toggle("contraido");
          listaAulas.classList.toggle("contraido");
        }
      });
    });
  }

  function atualizarNavegacaoRodape() {
    const c = document.querySelector(".navegacao-aula");
    if (!c) return;
    c.innerHTML = "";
    if (aulaAnteriorInfo) {
      const a = document.createElement("a");
      a.href = gerarLinkAbsoluto(aulaAnteriorInfo);
      a.className = "botao-nav";
      a.textContent = "Aula Anterior";
      c.appendChild(a);
    } else {
      const s = document.createElement("span");
      s.className = "botao-nav desativado";
      s.textContent = "Início do Curso";
      c.appendChild(s);
    }
    if (aulaProximaInfo) {
      const a = document.createElement("a");
      a.href = gerarLinkAbsoluto(aulaProximaInfo);
      a.className = "botao-nav";
      a.textContent = "Próxima Aula";
      c.appendChild(a);
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
      if (confirm("Tem certeza?")) {
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
      a.click();
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
      t.textContent = "Chave API carregada.";
      t.className = "api-key-status success";
    }
    s.addEventListener("click", () => {
      const e = i.value.trim();
      if (e) {
        localStorage.setItem("trivium_gemini_api_key", e);
        t.textContent = "Chave API salva com sucesso no navegador!";
        t.className = "api-key-status success";
      } else {
        localStorage.removeItem("trivium_gemini_api_key");
        t.textContent = "Chave API removida.";
        t.className = "api-key-status error";
      }
    });
  }

  function inicializarKairos() {
    const b = document.getElementById("kairos-chat-button");
    const c = document.getElementById("kairos-chat-container");
    const x = document.getElementById("kairos-close-button");
    const s = document.getElementById("kairos-send-button");
    const u = document.getElementById("kairos-user-input");
    const m = document.querySelector(".kairos-chat-messages");
    if (!b || !c || !x || !s || !u || !m) return;

    // --- CORREÇÃO APLICADA ---
    // Altera a classe de 'oculto' para 'visivel' para sincronizar com o CSS.
    b.addEventListener("click", () => c.classList.toggle("visivel"));
    x.addEventListener("click", () => c.classList.remove("visivel"));
    // --- FIM DA CORREÇÃO ---

    const h = async () => {
      const p = u.value.trim();
      if (p === "") return;
      const k = localStorage.getItem("trivium_gemini_api_key");
      if (!k) {
        alert(
          'Por favor, insira sua chave API do Google AI Studio na área de "Configurações" para usar o chat.'
        );
        return;
      }
      u.value = "";
      const d = document.createElement("div");
      d.className = "message user";
      d.textContent = p;
      m.appendChild(d);
      m.scrollTop = m.scrollHeight;
      const t = document.createElement("div");
      t.className = "message kairos loading";
      t.textContent = "...";
      m.appendChild(t);
      m.scrollTop = m.scrollHeight;
      const a = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${k}`;
      try {
        const r = await fetch(a, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Contexto: Curso TRIVIUM 369, Aula: "${
                      aulaAtualInfo?.titulo || "Geral"
                    }". Pergunta do aluno: "${p}"`,
                  },
                ],
              },
            ],
          }),
        });
        const j = await r.json();
        if (!r.ok || j.error) {
          throw new Error(
            j.error?.message || "A resposta da API não foi bem-sucedida."
          );
        }
        if (
          j.candidates &&
          j.candidates.length > 0 &&
          j.candidates[0].content
        ) {
          t.textContent = j.candidates[0].content.parts[0].text;
        } else {
          t.textContent =
            "A IA não pôde fornecer uma resposta para esta pergunta. Tente reformular.";
        }
        t.classList.remove("loading");
      } catch (e) {
        console.error("Erro na chamada da API:", e);
        t.textContent = `Ocorreu um erro: ${e.message}. Verifique se sua chave API é válida e se a 'Generative Language API' está ativada.`;
        t.classList.remove("loading");
      } finally {
        m.scrollTop = m.scrollHeight;
      }
    };
    s.addEventListener("click", h);
    u.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        h();
      }
    });
  }

  function inicializarLaboratorio() {
    const l = document.querySelector(".laboratorio-container");
    if (!l) return;
    const e = document.getElementById("lab-executar-btn");
    const p = document.getElementById("lab-prompt-textarea");
    const r = document.getElementById("lab-resultado-area");
    const t = document.getElementById("lab-resultado-texto");
    e.addEventListener("click", async function () {
      const a = localStorage.getItem("trivium_gemini_api_key");
      if (!a) {
        alert(
          'Por favor, insira sua chave API do Google AI Studio na área de "Configurações" na barra lateral direita antes de usar o laboratório.'
        );
        return;
      }
      const o = p.value;
      if (o.trim() === "") {
        alert("Por favor, escreva um prompt no laboratório antes de executar.");
        return;
      }
      r.style.display = "block";
      t.textContent = "Kairos está pensando...";
      e.disabled = true;
      r.classList.add("loading");
      const n = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${a}`;
      try {
        const i = await fetch(n, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: [{ parts: [{ text: o }] }] }),
        });
        const s = await i.json();
        if (s.error) {
          throw new Error(s.error.message);
        }
        t.textContent = s.candidates[0].content.parts[0].text;
      } catch (c) {
        console.error("Erro na chamada da API:", c);
        t.textContent = `Ocorreu um erro: ${c.message}. Verifique se sua chave API é válida e se possui créditos.`;
      } finally {
        e.disabled = false;
        r.classList.remove("loading");
      }
    });
  }

  // --- BLOCO DE INICIALIZAÇÃO COMPLETO E CORRETO ---
  if (aulaAtualInfo) {
    atualizarTitulos();
    gerarSidebar();
    inicializarAccordionMenu(); // Função do menu acordeão é chamada aqui
    atualizarNavegacaoRodape();
    atualizarBarraDeProgresso();
    inicializarAnotacoes();
    inicializarLaboratorio();
  }
  inicializarGerenciadorDeChave();
  inicializarKairos();
});
// Espera o documento carregar completamente
document.addEventListener("DOMContentLoaded", () => {
  // Encontra os elementos do laboratório no HTML
  const promptA_Input = document.getElementById("promptA");
  const executarA_Btn = document.getElementById("executarA");
  const resultadoA_Display = document.querySelector("#resultadoA pre code");

  const promptB_Input = document.getElementById("promptB");
  const executarB_Btn = document.getElementById("executarB");
  const resultadoB_Display = document.querySelector("#resultadoB pre code");

  // Função genérica para chamar a API da IA
  async function executarPrompt(promptTexto, botao, display) {
    // Pega a chave API salva no navegador
    const apiKey = localStorage.getItem("googleApiKey");
    if (!apiKey) {
      display.textContent =
        "ERRO: Chave API do Google não configurada. Por favor, configure-a na barra lateral ou na página de configuração.";
      return;
    }

    // Desabilita o botão e mostra mensagem de "carregando"
    botao.disabled = true;
    botao.textContent = "Executando...";
    display.textContent = "Aguardando resposta da IA...";

    // O endpoint da API do Google Gemini
    const apiURL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: promptTexto,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }

      const data = await response.json();
      const resultadoTexto = data.candidates[0].content.parts[0].text;
      display.textContent = resultadoTexto;
    } catch (error) {
      console.error("Falha ao executar o prompt:", error);
      display.textContent = `Ocorreu um erro: ${error.message}. Verifique o console para mais detalhes.`;
    } finally {
      // Reabilita o botão
      botao.disabled = false;
      botao.textContent = `Executar Prompt ${
        botao.id.includes("A") ? "A" : "B"
      }`;
    }
  }

  // Adiciona os "escutadores" de clique aos botões
  if (executarA_Btn) {
    executarA_Btn.addEventListener("click", () => {
      const promptTexto = promptA_Input.value;
      if (promptTexto.trim() === "") {
        alert("Por favor, digite algo no Prompt A.");
        return;
      }
      executarPrompt(promptTexto, executarA_Btn, resultadoA_Display);
    });
  }

  if (executarB_Btn) {
    executarB_Btn.addEventListener("click", () => {
      const promptTexto = promptB_Input.value;
      if (promptTexto.trim() === "") {
        alert("Por favor, digite algo no Prompt B.");
        return;
      }
      executarPrompt(promptTexto, executarB_Btn, resultadoB_Display);
    });
  }
});
// Dentro do seu arquivo scripts/funcionalidades-curso.js

function suaFuncaoQueGeraOMenu() {
  const menuContainer = document.querySelector(".menu-aulas");
  if (!menuContainer) return; // Se não encontrar o container, para a execução

  // =================================================================
  // ||| ADIÇÃO 1: INSERIR O LINK DO LABORATÓRIO PRIMEIRO |||
  // =================================================================
  const linkLaboratorioHTML = `
    <ul class="sidebar-lista-aulas">
      <li>
        <a href="laboratorio.html" class="link-laboratorio">
          <i class="fas fa-flask" style="width: 10px; text-align: center;"></i> 
          <span>Laboratório</span>
        </a>
      </li>
    </ul>
    <hr style="border-color: rgba(255,255,255,0.1); margin: 15px 0;">
  `;
  menuContainer.innerHTML = linkLaboratorioHTML;
  // =================================================================

  // AQUI COMEÇA O SEU CÓDIGO EXISTENTE que percorre os módulos
  // Certifique-se de que ele agora ADICIONA ao HTML em vez de substituir
  // Troque menuContainer.innerHTML = ... por menuContainer.innerHTML += ...

  estruturaDoSeuCurso.forEach((modulo) => {
    // seu código que cria o título do módulo...
    // seu código que cria a lista de aulas...
    // IMPORTANTE: Use o operador "+=" para adicionar ao menu
    menuContainer.innerHTML += htmlDoModulo;
  });

  // ... resto da sua função
}
// ...continuação da sua função que gera o menu

function suaFuncaoQueGeraOMenu() {
  // ... todo o código que já vimos acima ...

  // =================================================================
  // ||| ADIÇÃO 2: MARCAR O LINK DO LABORATÓRIO COMO ATIVO |||
  // =================================================================
  if (window.location.pathname.includes("laboratorio.html")) {
    const linkLab = document.querySelector(".link-laboratorio");
    if (linkLab) {
      linkLab.classList.add("ativo");
    }
  }
  // =================================================================
}

// Chame a sua função para executar tudo
suaFuncaoQueGeraOMenu();
