// Módulo: Simulators
// Responsabilidade: Inicializar e controlar todos os simuladores interativos do curso.

export function inicializarSimuladores() {
  // LÓGICA DO SIMULADOR DE PLANO DE AÇÃO (AULA 3.2)
  const btnGerarPlano = document.getElementById("btnGerarPlano");
  if (btnGerarPlano) {
    const inputProjeto = document.getElementById("simulador-input-projeto");
    const outputPlano = document.getElementById("simulador-output-plano");
    btnGerarPlano.addEventListener("click", () => {
      const descricaoProjeto = inputProjeto.value;
      if (descricaoProjeto.trim() === "") {
        outputPlano.innerHTML = `<p class="placeholder-output" style="color: var(--cor-laranja-alerta);">Por favor, descreva sua ideia de projeto no campo acima para que o plano possa ser gerado.</p>`;
        return;
      }
      outputPlano.innerHTML = `<div class="loading-spinner"></div><p>Analisando sua ideia e construindo o plano... Isso pode levar alguns segundos.</p>`;
      btnGerarPlano.disabled = true;
      btnGerarPlano.textContent = "Gerando...";
      setTimeout(() => {
        const planoGerado = `
                    <h3>Plano de Ação Estratégico</h3>
                    <p><strong>Projeto:</strong> ${descricaoProjeto}</p>
                    <hr>
                    <h4>CAMADA 1: ESTRATÉGICA (O ESCOPO)</h4>
                    <p><strong>🎯 Objetivo:</strong> Lançar um curso online de sucesso que se torne referência para iniciantes, alcançando alta satisfação dos alunos e gerando receita sustentável.</p>
                    <h5>Resultados-Chave (OKRs) - 1º Trimestre:</h5>
                    <ul>
                        <li><strong>KR1 (Engajamento):</strong> Atingir uma taxa de conclusão do curso de 60%.</li>
                        <li><strong>KR2 (Receita):</strong> Gerar R$ 15.000 em vendas nos primeiros 30 dias.</li>
                        <li><strong>KR3 (Satisfação):</strong> Obter uma nota média de satisfação de 4.8/5.0.</li>
                    </ul>
                    <h4>CAMADA 2: TÁTICA (ESTRUTURA ANALÍTICA DE PROJETO - EAP)</h4>
                    <h5>1. Planejamento de Marketing e Vendas</h5>
                    <ul>
                        <li>1.1. Definição da Persona</li>
                        <li>1.2. Criação da Landing Page de Vendas</li>
                    </ul>
                    <h5>2. Produção do Conteúdo do Curso</h5>
                    <ul>
                        <li>2.1. Definição da ementa e roteiro das aulas</li>
                        <li>2.2. Gravação e edição dos vídeos</li>
                    </ul>
                    <hr>
                    <h4>CAMADA 3: OPERACIONAL (RISCOS E RECURSOS)</h4>
                    <h5>⚠️ Análise de Riscos e Mitigações</h5>
                    <ul>
                        <li><strong>Risco:</strong> Baixa adesão no lançamento. <strong>Mitigação:</strong> Criar campanha de aquecimento de audiência.</li>
                    </ul>`;
        outputPlano.innerHTML = planoGerado;
        btnGerarPlano.disabled = false;
        btnGerarPlano.textContent = "Gerar Novo Plano";
      }, 2500);
    });
  }

  // LÓGICA DO SIMULADOR PTDF (AULA 1.1)
  const btnSimularPtdf = document.getElementById("btn-simular-ptdf");
  if (btnSimularPtdf) {
    const inputP = document.getElementById("ptdf-p");
    const inputT = document.getElementById("ptdf-t");
    const inputD = document.getElementById("ptdf-d");
    const inputF = document.getElementById("ptdf-f");
    const resultadoEl = document.getElementById("resultado-ptdf-ia");

    btnSimularPtdf.addEventListener("click", () => {
      const P = inputP.value || "Assistente prestativo";
      const T = inputT.value;
      const D = inputD.value;
      const F = inputF.value;

      if (!T) {
        resultadoEl.textContent =
          "Erro: O campo [T] Tarefa é obrigatório para a simulação.";
        return;
      }

      let promptConstruido = `PERSONAGEM: ${P}\nTAREFA: ${T}\n`;
      if (D) promptConstruido += `DADOS/CONTEXTO: ${D}\n`;
      if (F) promptConstruido += `FORMATO: ${F}`;

      resultadoEl.textContent =
        "Processando simulação...\n\n==============================\nPROMPT ENVIADO PARA A IA:\n==============================\n" +
        promptConstruido;

      setTimeout(() => {
        let respostaSimulada =
          "\n\n==============================\nRESPOSTA SIMULADA DA IA:\n==============================\n\n";
        if (F.toLowerCase().includes("tabela")) {
          respostaSimulada +=
            "| Ideia de Post             | Detalhes sugeridos                                  |\n|---------------------------|-----------------------------------------------------|\n| 1. O poder do PTDF        | Um carrossel explicando cada letra do framework.    |\n| 2. 3 verbos de comando    | Um vídeo curto mostrando exemplos de verbos.        |\n";
        } else if (T.toLowerCase().includes("e-mail")) {
          respostaSimulada += `ASSUNTO: Potencialize seus Resultados com o Framework PTDF\n\nOlá,\n\nComo um(a) ${P}, você sabe a importância de obter resultados precisos.\n\nAtenciosamente,\nEquipe de Simulação.`;
        } else {
          respostaSimulada += `Claro! Como um(a) ${P}, aqui estão os resultados para a sua tarefa "${T}":\n\n1. **Resultado Simulado Um:** Detalhes baseados no seu pedido.\n2. **Resultado Simulado Dois:** Uma variação criativa.`;
        }
        resultadoEl.textContent += respostaSimulada;
      }, 1500);
    });
  }
}
