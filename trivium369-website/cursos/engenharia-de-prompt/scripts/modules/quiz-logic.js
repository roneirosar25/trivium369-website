// Módulo: Quiz Logic
// Responsabilidade: Armazenar todos os dados dos exames (perguntas, opções, respostas).

export const quizzes = {
  "0-2-a-etica-e-o-pensamento-estrategico.html": {
    titulo: "Exame do Módulo 0: A Mente do Arquiteto",
    perguntas: [
      {
        pergunta:
          "A transição de GUI para NLI transfere o poder e a responsabilidade para quem?",
        opcoes: [
          "O Desenvolvedor do Software",
          "A Inteligência Artificial",
          "O Usuário / Arquiteto de Prompt",
          "A Empresa de Tecnologia",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta:
          "Qual dos '3 Pilares do Arquiteto' foca em controlar a matéria-prima da IA para evitar 'alucinações'?",
        opcoes: [
          "O Objetivo Final",
          "A Fonte da Verdade",
          "A Análise de Risco",
          "O Formato do Resultado",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta:
          "No paradigma NLI, qual é a habilidade mais crítica para se obter resultados de alta qualidade?",
        opcoes: [
          "Velocidade de digitação",
          "Conhecimento de programação",
          "Capacidade de navegar em menus",
          "Engenharia de Instrução (Prompt)",
        ],
        respostaCorreta: 3,
      },
      {
        pergunta:
          "A pergunta 'Como isto pode dar errado e como eu posso evitar?' corresponde a qual dos 3 Pilares?",
        opcoes: [
          "O Objetivo Final",
          "A Fonte da Verdade",
          "A Análise de Risco",
          "A Audiência",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta:
          "O pilar do 'Objetivo Final' instrui o engenheiro a focar-se em quê?",
        opcoes: [
          "Na resposta que a IA vai gerar.",
          "No resultado tangível que precisa ser alcançado no mundo real.",
          "Na quantidade de dados fornecidos.",
          "Na persona que a IA deve adotar.",
        ],
        respostaCorreta: 1,
      },
    ],
  },
  "1-2-a-arte-dos-verbos-de-comando.html": {
    titulo: "Exame do Módulo 1: A Gramática da IA",
    perguntas: [
      {
        pergunta:
          "No framework P.T.D.F., qual componente é responsável por definir 'quem a IA deve ser'?",
        opcoes: ["[T] Tarefa", "[P] Personagem", "[F] Formato", "[D] Dados"],
        respostaCorreta: 1,
      },
      {
        pergunta:
          "Na 'Escala da Ação', qual é o nível mais avançado de comando, focado em cenários hipotéticos?",
        opcoes: ["Extração", "Criação", "Estruturação", "Simulação"],
        respostaCorreta: 3,
      },
      {
        pergunta:
          "Qual o principal objetivo do framework P.T.D.F. como um todo?",
        opcoes: [
          "Apenas dar um contexto para a IA.",
          "Eliminar a ambiguidade e estruturar o comando para um resultado preciso.",
          "Conversar com a IA de forma mais natural.",
          "Testar os limites de criatividade da IA.",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta:
          "Dentro do framework P.T.D.F., qual componente é mais crítico para evitar que a IA 'alucine'?",
        opcoes: [
          "[P] Personagem",
          "[T] Tarefa",
          "[D] Dados / Contexto",
          "[F] Formato",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta:
          "Na 'Escala da Ação', um comando como 'Liste os 5 pontos principais de um texto' pertence a qual nível?",
        opcoes: [
          "Nível 4: Simulação",
          "Nível 3: Criação",
          "Nível 2: Estruturação",
          "Nível 1: Extração",
        ],
        respostaCorreta: 3,
      },
    ],
  },
  "2-2-analise-comparativa-e-geracao-de-insights.html": {
    titulo: "Exame do Módulo 2: Análise e Síntese",
    perguntas: [
      {
        pergunta:
          "Ao pedir para a IA reescrever um conceito com as próprias palavras, qual tipo de resumo você está solicitando?",
        opcoes: [
          "Resumo Extrativo",
          "Resumo de Tópicos",
          "Resumo Abstrativo",
          "Resumo Específico",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta:
          "Qual é o primeiro e mais crucial comando ao realizar uma análise comparativa entre múltiplos documentos?",
        opcoes: [
          "Pedir um insight imediatamente.",
          "Forçar a comparação ativa com o verbo 'compare'.",
          "Perguntar qual documento é melhor.",
          "Fornecer um Dossiê com todas as fontes devidamente rotuladas.",
        ],
        respostaCorreta: 3,
      },
      {
        pergunta:
          "Instruir a IA a gerar uma resposta em formato 'Tabela Markdown' corresponde a qual das 4 Lentes da Extração?",
        opcoes: [
          "A Lente da Audiência",
          "A Lente do Formato",
          "A Lente da Abstração",
          "A Lente da Extração Específica",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta: "No contexto da análise comparativa, o que é um 'insight'?",
        opcoes: [
          "Um fato que está claramente escrito em um dos documentos.",
          "Um resumo de todos os documentos combinados.",
          "Uma nova hipótese ou conclusão que não existe em nenhuma das fontes isoladas.",
          "Uma lista de todas as palavras-chave em comum.",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta:
          "Se você precisa dos nomes de todas as empresas mencionadas em um longo relatório, qual das 4 Lentes é a mais eficiente?",
        opcoes: [
          "A Lente da Extração Específica",
          "A Lente da Audiência",
          "A Lente da Abstração",
          "A Lente do Formato",
        ],
        respostaCorreta: 0,
      },
    ],
  },
  "3-3-automacao-de-conteudo-em-escala.html": {
    titulo: "Exame do Módulo 3: Criação e Automação",
    perguntas: [
      {
        pergunta:
          "Qual é a principal função de um 'Prompt-Mestre' na técnica de automação de conteúdo?",
        opcoes: [
          "Gerar uma única imagem de alta resolução.",
          "Corrigir erros de gramática em um texto.",
          "Conter todo o 'DNA do projeto' para gerar múltiplos ativos de forma coesa.",
          "Conversar com a IA de forma casual.",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta:
          'Ao invés de pedir um ativo de cada vez, a técnica da "Cascata de Conteúdo" sugere pedir um "Kit de Ativos". Qual a maior vantagem dessa abordagem?',
        opcoes: [
          "É mais rápido de digitar o comando.",
          "Garante consistência de tom, estilo e informação entre todas as peças de conteúdo geradas.",
          "Funciona apenas para gerar textos curtos, como tweets.",
          "Permite usar diferentes IAs ao mesmo tempo.",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta:
          'Dentro da automação de conteúdo, o que é a "Matriz de Ativos"?',
        opcoes: [
          "Uma fórmula matemática para calcular o custo do projeto.",
          "Uma lista estruturada e clara, fornecida no prompt, que detalha todos os diferentes formatos de conteúdo que a IA deve criar.",
          "Um diagrama visual que a IA gera como resultado.",
          "O nome da inteligência artificial que executa a tarefa.",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta:
          "Qual é o primeiro e mais fundamental comando ao se iniciar o processo de criação de conteúdo em escala?",
        opcoes: [
          "Pedir para a IA se apresentar.",
          "Solicitar um resumo do tema.",
          "Fornecer o plano de projeto completo ou o 'DNA do projeto' como contexto.",
          "Perguntar sobre as limitações do modelo.",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta:
          'Qual o objetivo final da técnica "Cascata de Conteúdo" apresentada na aula?',
        opcoes: [
          "Escrever o artigo de blog mais longo possível.",
          "Maximizar a produção de conteúdo, gerando um grande volume de ativos variados (posts, e-mails, tweets) a partir de uma única fonte de verdade e comando.",
          "Criar um chatbot para atendimento ao cliente.",
          "Testar a capacidade de memória da IA.",
        ],
        respostaCorreta: 1,
      },
    ],
  },
  "4-2-construindo-seu-ecossistema-de-vanguarda.html": {
    titulo: "Exame Final: O Sistema do Arquiteto",
    perguntas: [
      {
        pergunta:
          'De acordo com a aula, quais são os três pilares que sustentam um "Sistema Operacional Pessoal de Vanguarda"?',
        opcoes: [
          "Hardware, Software e Conexão com a Internet.",
          "Princípios (Sua 'Carta Magna'), Pilha de Ferramentas e Fluxos de Trabalho.",
          "Rapidez, Eficiência e Baixo Custo.",
          "Inteligência Artificial, Machine Learning e Big Data.",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta:
          'O que significa definir seus "Princípios" ou sua "Carta Magna" no contexto da construção do seu ecossistema?',
        opcoes: [
          "Escolher o computador mais potente do mercado.",
          "Assinar os termos de serviço de todas as ferramentas.",
          "Estabelecer suas próprias regras e diretrizes sobre como você lida com a informação, o trabalho e a tomada de decisão.",
          "Aprender a programar em Python.",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta:
          'Ao montar sua "Pilha de Ferramentas", qual é a recomendação principal da aula?',
        opcoes: [
          "Usar o maior número de ferramentas possível.",
          "Usar apenas ferramentas gratuitas.",
          "Escolher ferramentas para funções distintas e soberanas, evitando sobreposição e confusão.",
          "Trocar de ferramentas toda semana para testar as novidades.",
        ],
        respostaCorreta: 2,
      },
      {
        pergunta:
          'O que são os "Fluxos de Trabalho" no pilar final do seu sistema pessoal?',
        opcoes: [
          "As atualizações automáticas dos seus aplicativos.",
          "O processo que conecta as habilidades do curso com suas ferramentas e princípios para realizar tarefas de forma eficiente.",
          "O manual de instruções de cada software.",
          "A velocidade da sua internet.",
        ],
        respostaCorreta: 1,
      },
      {
        pergunta:
          'Qual o objetivo principal de se construir um "Ecossistema de Vanguarda" como proposto no Módulo 4?',
        opcoes: [
          "Ter os softwares mais caros e exclusivos.",
          "Criar um sistema pessoal, coeso e eficiente para pensar, criar e operar com clareza e alto desempenho.",
          "Passar mais tempo configurando aplicativos do que trabalhando.",
          "Formatar o computador todos os meses.",
        ],
        respostaCorreta: 1,
      },
    ],
  },
};
