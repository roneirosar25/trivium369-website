// ARQUIVO: main.js (COM NOTIFICAÇÕES TOAST)

import { getProgresso, salvarProgresso } from "./modules/state-manager.js";
import { quizzes } from "./modules/quiz-logic.js";
import { inicializarSimuladores } from "./modules/simulators.js";
import { inicializarGeradorDeCertificado } from "./modules/certificate-generator.js";
import { atualizarInterfaceGeral } from "./modules/ui-updater.js";

const CONSTS = {
  // IDs
  BTN_CONCLUIR: "btnConcluir",
  BTN_REFAZER_QUIZ: "btnRefazerQuiz",
  MODAL_CERTIFICADO: "modalCertificado",
  SELO_FINAL: "selo-final",
  TELA_QUIZ: "tela-quiz",
  TELA_RESULTADO: "tela-resultado",
  QUIZ_PERGUNTA: "quiz-pergunta",
  QUIZ_OPCOES: "quiz-opcoes",
  QUIZ_PROGRESSO_TEXTO: "quiz-progresso-texto",
  RESULTADO_PONTUACAO: "resultado-pontuacao",
  RESULTADO_FEEDBACK: "resultado-feedback",
  RESULTADO_TITULO: "resultado-titulo",
  TOAST_CONTAINER: "toast-container",

  // Classes
  PAINEL_CONQUISTAS: "painel-conquistas",
  CONQUISTA_ITEM: "conquista-item",
  DATA_CONQUISTA: "data-conquista",
  CONQUISTA_DESBLOQUEADO: "desbloqueado",
  CONQUISTA_BLOQUEADO: "bloqueado",
  QUIZ_CONTAINER: "quiz-container",
  QUIZ_OPCAO: "quiz-opcao",
  OPCAO_CORRETA: "correta",
  OPCAO_INCORRETA: "incorreta",
  ESTADO_BOTAO_ACAO: "estado-acao",
  ESTADO_BOTAO_CONCLUIDO: "estado-concluido",
  ESTADO_BOTAO_BLOQUEADO: "estado-bloqueado",

  // Outros
  PREFIXO_SELO_MOD: "selo-mod-",
  NOME_ARQUIVO_PAGINA_FINAL:
    "4-2-construindo-seu-ecossistema-de-vanguarda.html",
};

export const estruturaCurso = [
  // ... (a estrutura do curso continua a mesma, foi omitida por brevidade)
  {
    modulo: "MÓDULO 0: A MENTE DO ARQUITETO",
    aulas: [
      {
        nome: "0.1 A Nova Interface Humano-Computador",
        arquivo: "0-1-a-nova-interface-humano-computador.html",
      },
      {
        nome: "0.2 A Ética e o Pensamento Estratégico",
        arquivo: "0-2-a-etica-e-o-pensamento-estrategico.html",
      },
    ],
  },
  {
    modulo: "MÓDULO 1: A GRAMÁTICA DA IA",
    aulas: [
      {
        nome: "1.1 Os 4 Componentes Fundamentais (P.T.D.F.)",
        arquivo: "1-1-os-4-componentes-fundamentais.html",
      },
      {
        nome: "1.2 A Arte dos Verbos de Comando",
        arquivo: "1-2-a-arte-dos-verbos-de-comando.html",
      },
    ],
  },
  {
    modulo: "MÓDULO 2: ANÁLISE E SÍNTESE",
    aulas: [
      {
        nome: "2.1 Extraindo e Resumindo Inteligência",
        arquivo: "2-1-extraindo-e-resumindo-inteligencia.html",
      },
      {
        nome: "2.2 Análise Comparativa e Geração de Insights",
        arquivo: "2-2-analise-comparativa-e-geracao-de-insights.html",
      },
    ],
  },
  {
    modulo: "MÓDULO 3: CRIAÇÃO E AUTOMAÇÃO",
    aulas: [
      {
        nome: "3.1 Ideação e Brainstorming Estruturado",
        arquivo: "3-1-ideacao-e-brainstorming-estruturado.html",
      },
      {
        nome: "3.2 Do Esboço ao Plano de Ação",
        arquivo: "3-2-do-esboco-ao-plano-de-acao.html",
      },
      {
        nome: "3.3 Automação de Conteúdo em Escala",
        arquivo: "3-3-automacao-de-conteudo-em-escala.html",
      },
    ],
  },
  {
    modulo: "MÓDULO 4: SIMULAÇÃO E OPERAções",
    aulas: [
      {
        nome: "4.1 A IA como seu Copiloto Estratégico",
        arquivo: "4-1-a-ia-como-seu-copiloto-estrategico.html",
      },
      {
        nome: "4.2 Construindo seu Ecossistema de Vanguarda",
        arquivo: "4-2-construindo-seu-ecossistema-de-vanguarda.html",
      },
    ],
  },
];

// --- NOVA FUNÇÃO PARA EXIBIR NOTIFICAÇÕES TOAST ---
function showToast(message, type = "success") {
  const container = document.getElementById(CONSTS.TOAST_CONTAINER);
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  // Adiciona a classe para mostrar o toast (ativa a animação de entrada)
  setTimeout(() => {
    toast.classList.add("show");
  }, 10); // Pequeno delay para garantir que a transição CSS funcione

  // Define um tempo para remover o toast
  setTimeout(() => {
    toast.classList.remove("show");

    // Espera a animação de saída terminar antes de remover o elemento do DOM
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 4000); // O toast ficará visível por 4 segundos
}

function inicializarPainelConquistas() {
  const progresso = getProgresso();
  const painel = document.querySelector(`.${CONSTS.PAINEL_CONQUISTAS}`);
  if (!painel) return;

  let modulosCompletos = 0;

  estruturaCurso.forEach((modulo, index) => {
    const aulasDoModulo = modulo.aulas.map((aula) => aula.arquivo);
    const moduloConcluido = aulasDoModulo.every((aula) => progresso[aula]);

    if (moduloConcluido) {
      modulosCompletos++;
    }

    const seloId = `${CONSTS.PREFIXO_SELO_MOD}${index}`;
    const seloEl = document.getElementById(seloId);

    if (seloEl && moduloConcluido) {
      const itemConquistaEl = seloEl.closest(`.${CONSTS.CONQUISTA_ITEM}`);
      itemConquistaEl.classList.add(CONSTS.CONQUISTA_DESBLOQUEADO);
      seloEl.classList.remove(CONSTS.CONQUISTA_BLOQUEADO);

      if (!itemConquistaEl.querySelector(`.${CONSTS.DATA_CONQUISTA}`)) {
        const ultimaAulaDoModulo = aulasDoModulo[aulasDoModulo.length - 1];
        const dataConclusao = progresso[ultimaAulaDoModulo].data;
        const dataEl = document.createElement("p");
        dataEl.className = CONSTS.DATA_CONQUISTA;
        dataEl.textContent = `Desbloqueado em: ${dataConclusao}`;
        itemConquistaEl.querySelector("p").after(dataEl);
      }
    }
  });

  const seloFinalEl = document.getElementById(CONSTS.SELO_FINAL);
  if (seloFinalEl) {
    const totalModulos = estruturaCurso.length;
    if (modulosCompletos === totalModulos) {
      seloFinalEl
        .closest(`.${CONSTS.CONQUISTA_ITEM}`)
        .classList.add(CONSTS.CONQUISTA_DESBLOQUEADO);
      seloFinalEl.classList.remove(CONSTS.CONQUISTA_BLOQUEADO);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  atualizarInterfaceGeral();
  inicializarPainelConquistas();
  inicializarSimuladores();
  inicializarGeradorDeCertificado();

  const nomeArquivoAtual = window.location.pathname.split("/").pop();
  const quizData = quizzes[nomeArquivoAtual];
  const btnConcluir = document.getElementById(CONSTS.BTN_CONCLUIR);
  const isPaginaFinal = nomeArquivoAtual === CONSTS.NOME_ARQUIVO_PAGINA_FINAL;

  function marcarAulaComoConcluida(nomeArquivo) {
    const progressoAtual = getProgresso();
    if (!progressoAtual[nomeArquivo]) {
      progressoAtual[nomeArquivo] = {
        data: new Date().toLocaleDateString("pt-BR"),
      };
      salvarProgresso(progressoAtual);
      atualizarInterfaceGeral();
      // --- CHAMADA DA NOVA FUNÇÃO DE TOAST ---
      showToast("Progresso salvo!");
    }
  }

  if (btnConcluir) {
    const progresso = getProgresso();
    btnConcluir.classList.remove(
      CONSTS.ESTADO_BOTAO_ACAO,
      CONSTS.ESTADO_BOTAO_CONCLUIDO,
      CONSTS.ESTADO_BOTAO_BLOQUEADO
    );
    if (progresso[nomeArquivoAtual]) {
      if (isPaginaFinal) {
        btnConcluir.textContent = "Gerar Certificado";
        btnConcluir.classList.add(CONSTS.ESTADO_BOTAO_ACAO);
        btnConcluir.disabled = false;
      } else {
        btnConcluir.textContent = "Aula Concluída";
        btnConcluir.classList.add(CONSTS.ESTADO_BOTAO_CONCLUIDO);
        btnConcluir.disabled = true;
      }
    } else if (quizData) {
      btnConcluir.textContent = isPaginaFinal
        ? "Responda o Exame Final"
        : "Responda o Exame para Concluir";
      btnConcluir.classList.add(CONSTS.ESTADO_BOTAO_BLOQUEADO);
      btnConcluir.disabled = true;
    } else {
      btnConcluir.textContent = "Marcar como Concluída";
      btnConcluir.classList.add(CONSTS.ESTADO_BOTAO_ACAO);
      btnConcluir.disabled = false;
    }
    btnConcluir.addEventListener("click", (e) => {
      e.preventDefault();
      if (btnConcluir.disabled) return;
      if (isPaginaFinal) {
        document.getElementById(CONSTS.MODAL_CERTIFICADO).style.display =
          "flex";
        return;
      }
      marcarAulaComoConcluida(nomeArquivoAtual);
    });
  }

  if (quizData) {
    const quizContainer = document.querySelector(`.${CONSTS.QUIZ_CONTAINER}`);
    if (quizContainer) {
      const tituloExame = quizContainer.previousElementSibling;
      tituloExame.textContent = quizData.titulo;
      const telaQuiz = document.getElementById(CONSTS.TELA_QUIZ);
      const telaResultado = document.getElementById(CONSTS.TELA_RESULTADO);
      const perguntaEl = document.getElementById(CONSTS.QUIZ_PERGUNTA);
      const opcoesEl = document.getElementById(CONSTS.QUIZ_OPCOES);
      const progressoTextoEl = document.getElementById(
        CONSTS.QUIZ_PROGRESSO_TEXTO
      );
      let perguntaAtual = 0,
        pontuacao = 0;

      const carregarQuiz = () => {
        telaQuiz.hidden = false;
        telaResultado.hidden = true;
        const btnRefazer = document.getElementById(CONSTS.BTN_REFAZER_QUIZ);
        if (btnRefazer) btnRefazer.hidden = true;

        progressoTextoEl.textContent = `Pergunta ${perguntaAtual + 1} de ${
          quizData.perguntas.length
        }`;
        const dadosPergunta = quizData.perguntas[perguntaAtual];
        perguntaEl.innerText = dadosPergunta.pergunta;
        opcoesEl.innerHTML = "";
        dadosPergunta.opcoes.forEach((opcao, index) => {
          const botao = document.createElement("button");
          botao.innerText = opcao;
          botao.classList.add(CONSTS.QUIZ_OPCAO);
          botao.onclick = () =>
            selecionarResposta(index, dadosPergunta.respostaCorreta);
          opcoesEl.appendChild(botao);
        });
      };

      const selecionarResposta = (indexSelecionado, respostaCorreta) => {
        const todosBotoes = opcoesEl.querySelectorAll(`.${CONSTS.QUIZ_OPCAO}`);
        todosBotoes.forEach((b) => (b.disabled = true));
        if (indexSelecionado === respostaCorreta) {
          pontuacao++;
          todosBotoes[indexSelecionado].classList.add(CONSTS.OPCAO_CORRETA);
        } else {
          todosBotoes[indexSelecionado].classList.add(CONSTS.OPCAO_INCORRETA);
          todosBotoes[respostaCorreta].classList.add(CONSTS.OPCAO_CORRETA);
        }
        setTimeout(() => {
          perguntaAtual++;
          if (perguntaAtual < quizData.perguntas.length) carregarQuiz();
          else mostrarResultados();
        }, 1200);
      };

      const mostrarResultados = () => {
        telaQuiz.hidden = true;
        telaResultado.hidden = false;
        const totalPerguntas = quizData.perguntas.length;
        const porcentagemFinal = Math.round((pontuacao / totalPerguntas) * 100);
        document.getElementById(
          CONSTS.RESULTADO_PONTUACAO
        ).textContent = `Você acertou ${pontuacao} de ${totalPerguntas} (${porcentagemFinal}%)`;
        const feedbackEl = document.getElementById(CONSTS.RESULTADO_FEEDBACK);
        const tituloEl = document.getElementById(CONSTS.RESULTADO_TITULO);
        const btnRefazer = document.getElementById(CONSTS.BTN_REFAZER_QUIZ);

        if (pontuacao === totalPerguntas) {
          tituloEl.textContent = "MAESTRIA ALCANÇADA!";
          // A função marcarAulaComoConcluida já chama o showToast
          marcarAulaComoConcluida(nomeArquivoAtual);
          if (btnConcluir) {
            btnConcluir.classList.remove(CONSTS.ESTADO_BOTAO_BLOQUEADO);
            if (isPaginaFinal) {
              feedbackEl.textContent =
                "Parabéns! Você concluiu o curso. Clique no botão abaixo para gerar seu certificado.";
              btnConcluir.textContent = "Gerar Certificado";
              btnConcluir.classList.add(CONSTS.ESTADO_BOTAO_ACAO);
              btnConcluir.disabled = false;
            } else {
              feedbackEl.textContent =
                "Parabéns, você dominou este módulo! A aula já foi marcada como concluída.";
              btnConcluir.textContent = "Aula Concluída";
              btnConcluir.classList.add(CONSTS.ESTADO_BOTAO_CONCLUIDO);
              btnConcluir.disabled = true;
            }
          }
          if (btnRefazer) btnRefazer.hidden = true;
        } else {
          tituloEl.textContent = "REVISÃO NECESSÁRIA";
          feedbackEl.textContent =
            "Um arquiteto revisita as fundações para construir uma estrutura mais forte. Reveja os conceitos deste módulo e prepare-se para a próxima tentativa.";
          if (btnRefazer) btnRefazer.hidden = false;
        }
      };

      const btnRefazerQuiz = document.getElementById(CONSTS.BTN_REFAZER_QUIZ);
      if (btnRefazerQuiz) {
        btnRefazerQuiz.onclick = () => {
          perguntaAtual = 0;
          pontuacao = 0;
          carregarQuiz();
        };
      }
      carregarQuiz();
    }
  }
});
