// Arquivo: scripts/main.js

// Importa as funções de inicialização dos outros arquivos
import { initMenu } from "./laboratorio.js";
import { initKairosChat } from "./kairos-chat.js";
import { initLabAPI } from "./laboratorio-api.js";

// Espera o DOM carregar completamente
document.addEventListener("DOMContentLoaded", () => {
  // Inicializa cada funcionalidade em uma ordem controlada
  initMenu();
  initKairosChat();
  initLabAPI();

  console.log("Sistema TRIVIUM 369 inicializado com sucesso.");
});
