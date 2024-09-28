import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3002;

// Serve arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para testar a acessibilidade
app.get('/test', async (req, res) => {
    const { url } = req.query;

    if (!url) {
        return res.status(400).send('URL não fornecida.');
    }

    // Remova a chamada do pa11y daqui, pois não devemos importar ou chamar diretamente aqui.
    res.send('Análise de acessibilidade deve ser feita através do comando no terminal.');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});