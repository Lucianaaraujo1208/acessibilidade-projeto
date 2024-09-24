const pa11y = require('pa11y');

// Função para rodar o teste de acessibilidade na página HTML local
async function runAccessibilityTest() {
    const results = await pa11y('file://' + __dirname + '/index.html');
    console.log(results);
}

// Executa o teste
runAccessibilityTest();