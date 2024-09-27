// testA11y.js
const pa11y = require('pa11y');

const url = process.argv[2];

if (!url) {
    console.log('Por favor, forneça uma URL para testar.');
    process.exit(1);
}

async function runTest() {
    try {
        const results = await pa11y(url);
        console.log(results);
    } catch (error) {
        console.error('Erro ao testar a URL:', error);
    }
}

const results = await pa11y(url, {
    actions: [
        { click: 'a.some-link' }, // Exemplo de ação que você pode querer que o `pa11y` realize
    ],
    chrome: {
        args: ['--headless']
    }
});

runTest();