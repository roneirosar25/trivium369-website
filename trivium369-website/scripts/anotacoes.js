// --- MÓDULO: anotacoes.js ---

const ANOTACOES_TEXTAREA_ID = "anotacoes-pessoais";
const STATUS_ID = "anotacoes-status";
const BTN_LIMPAR_ID = "btn-limpar-anotacoes";
const BTN_BAIXAR_ID = "btn-baixar-anotacoes";

let saveTimeout;

export function inicializarAnotacoes() {
  const textarea = document.getElementById(ANOTACOES_TEXTAREA_ID);
  const statusEl = document.getElementById(STATUS_ID);
  const btnLimpar = document.getElementById(BTN_LIMPAR_ID);
  const btnBaixar = document.getElementById(BTN_BAIXAR_ID);

  if (!textarea) return;

  const lessonKey = "anotacoes_trivium_" + window.location.pathname;

  const savedNotes = localStorage.getItem(lessonKey);
  if (savedNotes) {
    textarea.value = savedNotes;
  }

  textarea.addEventListener("input", () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      localStorage.setItem(lessonKey, textarea.value);
      if (statusEl) {
        statusEl.textContent = "Salvo ✓";
        statusEl.classList.add("visivel");
        setTimeout(() => {
          statusEl.classList.remove("visivel");
        }, 2000);
      }
    }, 1000);
  });

  if (btnLimpar) {
    btnLimpar.addEventListener("click", () => {
      if (
        confirm(
          "Tem certeza de que deseja apagar todas as anotações desta aula?"
        )
      ) {
        textarea.value = "";
        localStorage.removeItem(lessonKey);
      }
    });
  }

  if (btnBaixar) {
    btnBaixar.addEventListener("click", () => {
      const text = textarea.value;
      const blob = new Blob([text], { type: "text/plain" });
      const anchor = document.createElement("a");
      anchor.download = `anotacoes-${document.title}.txt`;
      anchor.href = window.URL.createObjectURL(blob);
      anchor.click();
      window.URL.revokeObjectURL(anchor.href);
    });
  }
}
