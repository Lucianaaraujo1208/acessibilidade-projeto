import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const testAccessibility = async () => {
    try {
      setError(null);
      const response = await axios.post('http://localhost:5000/test-accessibility', { url });
      setResults(response.data);
    } catch (err) {
      setError('Erro ao testar acessibilidade');
    }
  };

  return (
    <div className="App">
      <h1>Teste de Acessibilidade Web</h1>
      <input
        type="text"
        placeholder="Insira a URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={testAccessibility}>Testar Acessibilidade</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {results && (
        <div>
          <h2>Resultados:</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;