// ARQUIVO: certificate-generator.js (COM VALIDAÇÃO MELHORADA)

export function inicializarGeradorDeCertificado() {
  // Confere se as bibliotecas foram carregadas
  if (typeof jspdf === "undefined" || typeof html2canvas === "undefined") {
    console.error(
      "Erro: As bibliotecas jsPDF ou html2canvas não foram carregadas."
    );
    return;
  }

  const { jsPDF } = window.jspdf;

  const modal = document.getElementById("modalCertificado");
  if (!modal) return;

  const btnGerar = document.getElementById("btnGerarCertificado");
  const inputNome = document.getElementById("nomeAlunoCertificado");

  if (!btnGerar || !inputNome) {
    console.error(
      "Erro: O botão ou o campo de nome do certificado não foram encontrados no HTML."
    );
    return;
  }

  btnGerar.addEventListener("click", () => {
    const nomeAluno = inputNome.value.trim();

    // --- INÍCIO DA NOVA LÓGICA DE VALIDAÇÃO ---
    if (!nomeAluno) {
      alert("Por favor, insira seu nome completo.");
      inputNome.focus();
      return;
    }
    if (/\d/.test(nomeAluno)) {
      alert("O nome do certificado não pode conter números.");
      inputNome.focus();
      return;
    }
    if (nomeAluno.length < 6) {
      alert(
        "O nome parece muito curto. Por favor, insira um nome mais completo."
      );
      inputNome.focus();
      return;
    }
    if (!nomeAluno.includes(" ")) {
      alert("Por favor, inclua pelo menos um nome e um sobrenome.");
      inputNome.focus();
      return;
    }
    // --- FIM DA NOVA LÓGICA DE VALIDAÇÃO ---

    const template = document.getElementById("template-certificado");
    const nomeEl = document.getElementById("nome-aluno");
    const dataEl = document.getElementById("data-emissao-certificado");

    if (!template || !nomeEl || !dataEl) {
      console.error(
        "Erro: O template do certificado ou seus elementos internos não foram encontrados."
      );
      return;
    }

    nomeEl.textContent = nomeAluno.toUpperCase();
    dataEl.textContent = `Emitido em: ${new Date().toLocaleDateString(
      "pt-BR"
    )}`;

    // Adiciona uma classe para o botão saber que está carregando
    btnGerar.disabled = true;
    btnGerar.textContent = "Gerando...";

    html2canvas(template, {
      scale: 3,
      useCORS: true,
      backgroundColor: null, // Garante fundo transparente se necessário
    }).then((canvas) => {
      try {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [canvas.width, canvas.height],
        });

        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save(`Certificado R369 - ${nomeAluno}.pdf`);
      } catch (error) {
        console.error("Erro ao gerar o PDF:", error);
        alert("Ocorreu um erro ao gerar o PDF. Tente novamente.");
      } finally {
        // Reabilita o botão e restaura o modal
        btnGerar.disabled = false;
        btnGerar.textContent = "Gerar Certificado";
        modal.style.display = "none";
      }
    });
  });
}
