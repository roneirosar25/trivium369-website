document.addEventListener("DOMContentLoaded", function () {
  // =================================================================================
  // 1. DADOS E ESTRUTURA DO CURSO
  // =================================================================================
  const estruturaCurso = [
    // ... (Toda a sua estrutura de módulos e aulas vai aqui, como no original)
  ];

  const quizzes = {
    // ... (Todo o seu objeto de quizzes vai aqui, como no original)
  };

  // =================================================================================
  // 2. FUNÇÕES GLOBAIS DE APOIO
  // =================================================================================
  const getProgresso = () =>
    JSON.parse(localStorage.getItem("r369_curso_progresso_kairos") || "{}");
  const salvarProgresso = (progresso) =>
    localStorage.setItem(
      "r369_curso_progresso_kairos",
      JSON.stringify(progresso)
    );

  function atualizarInterfaceGeral() {
    const progresso = getProgresso();
    const totalAulas = estruturaCurso.reduce(
      (total, modulo) => total + modulo.aulas.length,
      0
    );
    const aulasConcluidas = Object.keys(progresso).length;
    const porcentagem =
      totalAulas > 0 ? (aulasConcluidas / totalAulas) * 100 : 0;

    const barraProgresso = document.getElementById("barraProgresso");
    const progressoTexto = document.getElementById("progressoTexto");

    if (barraProgresso) barraProgresso.style.width = `${porcentagem}%`;
    if (progressoTexto)
      progressoTexto.textContent = `${Math.round(porcentagem)}% Concluído`;

    document.querySelectorAll(".sidebar-lista-aulas a").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;
      const aulaId = href.split("/").pop();
      const statusImg = link.querySelector("img");

      if (statusImg && progresso[aulaId]) {
        if (statusImg.src.includes("icon-status-bloqueado.png")) {
          statusImg.src = statusImg.src.replace(
            "icon-status-bloqueado.png",
            "icon-status-concluido.png"
          );
        }
      }
      const paginaAtual = window.location.pathname.split("/").pop();
      if (aulaId === paginaAtual) {
        link.classList.add("aula-atual");
      } else {
        link.classList.remove("aula-atual");
      }
    });
  }

  function marcarAulaComoConcluida(nomeArquivo) {
    const progressoAtual = getProgresso();
    if (!progressoAtual[nomeArquivo]) {
      progressoAtual[nomeArquivo] = {
        data: new Date().toLocaleDateString("pt-BR"),
      };
      salvarProgresso(progressoAtual);
      atualizarInterfaceGeral();
    }
  }

  // =================================================================================
  // 3. LÓGICA DE INICIALIZAÇÃO DA PÁGINA
  // =================================================================================

  const nomeArquivoAtual = window.location.pathname.split("/").pop();
  const quizData = quizzes[nomeArquivoAtual];
  const btnConcluir = document.getElementById("btnConcluir");

  // Lógica do Botão Principal
  if (btnConcluir) {
    const isPaginaFinal =
      nomeArquivoAtual === "4-2-construindo-seu-ecossistema-de-vanguarda.html";
    const progresso = getProgresso();

    btnConcluir.classList.remove(
      "estado-acao",
      "estado-concluido",
      "estado-bloqueado"
    );

    if (progresso[nomeArquivoAtual]) {
      if (isPaginaFinal) {
        btnConcluir.textContent = "Gerar Certificado";
        btnConcluir.classList.add("estado-acao");
        btnConcluir.disabled = false;
      } else {
        btnConcluir.textContent = "Aula Concluída";
        btnConcluir.classList.add("estado-concluido");
        btnConcluir.disabled = true;
      }
    } else if (quizData) {
      btnConcluir.textContent = isPaginaFinal
        ? "Responda o Exame Final"
        : "Responda o Exame para Concluir";
      btnConcluir.classList.add("estado-bloqueado");
      btnConcluir.disabled = true;
    } else {
      btnConcluir.textContent = "Marcar como Concluída";
      btnConcluir.classList.add("estado-acao");
      btnConcluir.disabled = false;
    }

    btnConcluir.addEventListener("click", (e) => {
      e.preventDefault();
      if (btnConcluir.disabled) return;
      if (isPaginaFinal) {
        document.getElementById("modalCertificado").style.display = "flex";
        return;
      }
      marcarAulaComoConcluida(nomeArquivoAtual);

      // Atualiza o botão imediatamente após o clique
      btnConcluir.textContent = "Aula Concluída";
      btnConcluir.classList.remove("estado-acao");
      btnConcluir.classList.add("estado-concluido");
      btnConcluir.disabled = true;
    });
  }

  // Lógica do Quiz
  if (quizData) {
    // ... (toda a lógica do quiz que já tínhamos, que sabemos que funciona)
  }

  // Lógica do Certificado
  const btnGerarCertificado = document.getElementById("btnGerarCertificado");
  if (btnGerarCertificado) {
    // ... (toda a lógica do certificado que já tínhamos, com Base64)
  }

  // --- EXECUÇÃO INICIAL ---
  atualizarInterfaceGeral();
});
