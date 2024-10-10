const express = require('express');
const app = express();
const PORT = 3002;

// Rota de teste
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});