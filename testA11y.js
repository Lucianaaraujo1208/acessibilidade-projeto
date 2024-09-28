import pa11y from 'pa11y';

const url = process.argv[2];

if (!url) {
    console.log('Por favor, forneça uma URL para testar.');
    process.exit(1);
}

async function runTest() {
    try {
        const results = await pa11y(url);
        console.log(JSON.stringify(results, null, 2)); // Mostrar os resultados formatados
    } catch (error) {
        console.error('Erro ao testar a URL:', error);
    }
}

// Executar o teste
runTest();