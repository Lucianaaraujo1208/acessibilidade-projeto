const pa11y = require('pa11y');

pa11y('http://localhost:3000', {
    timeout: 120000, // Aumentado para 120 segundos
    // outras configurações
})
.then(results => {
    console.log(results);
})
.catch(error => {
    console.error(error);
});