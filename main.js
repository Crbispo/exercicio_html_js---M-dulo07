document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    // Obtém os valores dos campos
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const messageDiv = document.getElementById('message');

    if (campoB > campoA) {
        messageDiv.textContent = 'Formulário válido! Obrigado.';
        messageDiv.className = 'message valid';
    } else {
        messageDiv.textContent = 'Formulário inválido! Campo B deve ser maior que Campo A';
        messageDiv.className = 'message invalid';
    }
});