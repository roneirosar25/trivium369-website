// Arquivo: scripts/laboratorio-api.js

function executarPrompt(promptText, elementoResultado) {
  const apiKey = localStorage.getItem("googleApiKey");
  if (!apiKey) {
    elementoResultado.textContent =
      "ERRO: Salve sua chave API nas Configurações.";
    return;
  }
  // ... Lógica para chamar a API ...
  elementoResultado.textContent = `Resposta para: "${promptText}"`;
}

// Exporta a função principal para ser usada pelo main.js
export function initLabAPI() {
  const btnExecutarA = document.getElementById("executarA");
  const btnExecutarB = document.getElementById("executarB");
  const apiKeySaveBtn = document.getElementById("api-key-save-btn");

  if (btnExecutarA) {
    btnExecutarA.addEventListener("click", () => {
      const promptA = document.getElementById("promptA");
      const resultadoA = document
        .getElementById("resultadoA")
        .querySelector("code");
      executarPrompt(promptA.value, resultadoA);
    });
  }

  if (btnExecutarB) {
    btnExecutarB.addEventListener("click", () => {
      const promptB = document.getElementById("promptB");
      const resultadoB = document
        .getElementById("resultadoB")
        .querySelector("code");
      executarPrompt(promptB.value, resultadoB);
    });
  }

  if (apiKeySaveBtn) {
    apiKeySaveBtn.addEventListener("click", () => {
      const apiKeyInput = document.getElementById("api-key-input");
      const apiKeyStatus = document.querySelector(".api-key-status");
      localStorage.setItem("googleApiKey", apiKeyInput.value);
      apiKeyStatus.textContent = "Chave salva!";
      setTimeout(() => (apiKeyStatus.textContent = ""), 2000);
    });
  }
}
