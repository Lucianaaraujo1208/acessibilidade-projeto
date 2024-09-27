// testA11y.js
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
        
        // Exibe os resultados de forma organizada
        console.log(`Resultados da análise de acessibilidade para: ${url}`);
        
        if (results.issues.length > 0) {
            console.log(`Foram encontrados ${results.issues.length} problemas de acessibilidade:\n`);
            results.issues.forEach(issue => {
                console.log(`- ${issue.message} (Código: ${issue.code})`);
                console.log(`  Localização: ${issue.selector}`);
                console.log(`  Impacto: ${issue.impact}`);
                console.log(`  Snippet: ${issue.snippet}\n`);
            });
        } else {
            console.log('Sem problemas encontrados.');
        }
    } catch (error) {
        console.error('Erro ao realizar o teste de acessibilidade:', error);
    }
})();