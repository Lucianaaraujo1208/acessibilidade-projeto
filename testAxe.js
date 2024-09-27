import { Builder, By } from 'selenium-webdriver';
import AxeBuilder from 'axe-webdriverjs';

(async () => {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.canva.com/');
        const results = await AxeBuilder(driver).analyze();

        console.log('Resultados da Análise de Acessibilidade:', results);
    } catch (error) {
        console.error('Erro ao realizar a análise de acessibilidade:', error);
    } finally {
        await driver.quit();
    }
})();