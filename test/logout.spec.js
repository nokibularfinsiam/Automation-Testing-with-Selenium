const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get('http://localhost:3000/login');
        await driver.findElement(By.name('email')).sendKeys('sahadul80@gmail.com', Key.RETURN);
        await driver.findElement(By.name('password')).sendKeys('Password123', Key.RETURN);
        await driver.wait(until.titleIs('Index | EducationAssistant'), 10000);
        await driver.findElement(By.id('menu')).click();
        await driver.findElement(By.id('logout')).click();
        await driver.wait(until.urlIs('http://localhost:3000/login'), 10000);
    } finally {
        await driver.quit();
    }
})();

describe("AAMRA website TEST", function () {
    it("Check Logout", function () {
        console.log("Logout Test: Pass");
    });
});
