import express from 'express';
import pa11y from 'pa11y';
import path from 'path';

const app = express();
const port = 3000;

// Serve arquivos estáticos
app.use(express.static('public'));

// Endpoint para testar a acessibilidade
app.get('/test', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).send('URL não fornecida.');
    }

    try {
        const results = await pa11y(url);
        res.send(JSON.stringify(results, null, 2)); // Enviar os resultados formatados
    } catch (error) {
        res.status(500).send(`Erro ao executar a análise: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});