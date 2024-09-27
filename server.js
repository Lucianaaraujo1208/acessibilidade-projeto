// Adicione a rota para receber uma URL do frontend
app.post('/test-accessibility', async (req, res) => {
    const { url } = req.body;

    try {
        // Executa o pa11y na URL fornecida
        const results = await pa11y(url);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao testar acessibilidade' });
    }
});