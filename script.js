document.getElementById('botaoTeste').addEventListener('click', async function() {
    alert('Botão clicado! A análise de acessibilidade será realizada no pipeline.');

    const urlToTest = 'http://localhost:3001'; // URL que você quer testar

    try {
        const response = await fetch(`/test?url=${encodeURIComponent(urlToTest)}`);
        if (!response.ok) {
            throw new Error(`Erro: ${response.statusText}`);
        }
        const results = await response.json();
        console.log('Resultados da verificação de acessibilidade:', results);
        alert('Análise de acessibilidade concluída! Verifique o console para os resultados.');
    } catch (error) {
        console.error('Erro ao verificar acessibilidade:', error);
        alert('Erro ao verificar acessibilidade. Tente novamente mais tarde.');
    }
});