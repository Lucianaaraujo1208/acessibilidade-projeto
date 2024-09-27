import pa11y from 'pa11y';

const args = process.argv.slice(2);
const url = args[0]; // Pega a URL passada como argumento

if (!url) {
    console.error('Por favor, forneça uma URL para testar.');
    process.exit(1);
}

(async () => {
    try {
        const results = await pa11y(url);
        console.log(results);
    } catch (error) {
        console.error('Erro ao realizar o teste de acessibilidade:', error);
    }
})();