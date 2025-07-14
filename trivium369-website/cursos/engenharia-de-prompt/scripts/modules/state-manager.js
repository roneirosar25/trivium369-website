// Módulo: State Manager
// Responsabilidade: Salvar e carregar o progresso do aluno no localStorage.

export const getProgresso = () =>
  JSON.parse(
    localStorage.getItem("TRIVIUM 369_curso_progresso_kairos") || "{}"
  );

export const salvarProgresso = (progresso) =>
  localStorage.setItem(
    "TRIVIUM 369_curso_progresso_kairos",
    JSON.stringify(progresso)
  );
