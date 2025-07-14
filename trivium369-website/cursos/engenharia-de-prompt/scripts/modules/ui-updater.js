// ARQUIVO: ui-updater.js (VERSÃO REATORADA)

import { getProgresso } from "./state-manager.js";
// --- CAMINHO DE IMPORTAÇÃO ATUALIZADO ---
// Agora importa a estrutura do curso diretamente do main.js
import { estruturaCurso } from "../main.js";

export function atualizarInterfaceGeral() {
  const progresso = getProgresso();
  const totalAulas = estruturaCurso.reduce(
    (total, modulo) => total + modulo.aulas.length,
    0
  );
  const aulasConcluidas = Object.keys(progresso).length;
  const porcentagem = totalAulas > 0 ? (aulasConcluidas / totalAulas) * 100 : 0;

  if (document.getElementById("barraProgresso")) {
    document.getElementById("barraProgresso").style.width = `${porcentagem}%`;
  }
  if (document.getElementById("progressoTexto")) {
    document.getElementById("progressoTexto").textContent = `${Math.round(
      porcentagem
    )}% Concluído`;
  }

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
    link.classList.remove("aula-atual");
    if (aulaId === paginaAtual) {
      link.classList.add("aula-atual");
    }
  });
}

export function inicializarPainelConquistas() {
  // ... (a lógica do painel de conquistas permanece a mesma)
  // ...
}
