// Funcionalidade 1 e 2: Calcular Média e Verificar Situação
function calcularResultado() {
    // Captura as notas do formulário
    const nota1 = parseFloat(document.getElementById('nota1').value) || 0;
    const nota2 = parseFloat(document.getElementById('nota2').value) || 0;
    const nota3 = parseFloat(document.getElementById('nota3').value) || 0;
    
    // Cálculo da média
    const media = ((nota1 + nota2 + nota3) / 3).toFixed(1);
    
    // Verificação de Situação
    let situacao = "";
    let classeCor = "";

    if (media >= 7) {
        situacao = "APROVADO";
        classeCor = "#d4edda"; // Verde claro
    } else if (media >= 5 && media < 7) {
        situacao = "RECUPERAÇÃO";
        classeCor = "#fff3cd"; // Amarelo claro
    } else {
        situacao = "REPROVADO";
        classeCor = "#f8d7da"; // Vermelho claro
    }

    // Funcionalidade 3: Calcular Frequência (Considerando 50 aulas no total)
    const aulasTotais = 50;
    const faltas = parseInt(document.getElementById('faltas').value) || 0;
    const aulasFrequentadas = aulasTotais - faltas;
    const frequencia = ((aulasFrequentadas / aulasTotais) * 100).toFixed(0);
    
    let sitFrequencia = frequencia >= 75 ? "Frequência adequada" : "Reprovado por faltas";

    // Exibir o resultado na tela
    const divResultado = document.getElementById('resultado-calculo');
    divResultado.style.display = 'block';
    divResultado.style.backgroundColor = classeCor;
    divResultado.innerHTML = `
        <p><strong>Média:</strong> ${media}</p>
        <p><strong>Situação Acadêmica:</strong> ${situacao}</p>
        <hr style="margin: 10px 0; border: 1px solid #ccc;">
        <p><strong>Frequência:</strong> ${frequencia}%</p>
        <p><strong>Status de Presença:</strong> ${sitFrequencia}</p>
    `;

    // Atualiza o card superior de frequência dinamicamente
    document.getElementById('card-frequencia').innerText = `${frequencia}%`;
}

// Botão Limpar
function limparFormulario() {
    document.getElementById('form-notas').reset();
    document.getElementById('resultado-calculo').style.display = 'none';
}

// Botão Calcular Média (Foca no formulário)
function focarCalculadora() {
    document.getElementById('area-calculo').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('nome').focus();
}
