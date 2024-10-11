const express = require('express');
const pa11y = require('pa11y');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para testar a acessibilidade
app.get('/test', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).send('URL não fornecida.');
    }

    try {
        const results = await pa11y(url);
        res.send(JSON.stringify(results, null, 2)); // Enviar os resultados formatados...
    } catch (error) {
        res.status(500).send(`Erro ao executar a análise: ${error.message}`);
    }
});

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Inicia o servidor

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});