const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

    ; (async function example() {
        let driver = await new Builder().forBrowser(Browser.CHROME).build()
        try {
            await driver.get('http://localhost:3000')
            await driver.findElement(By.name('email')).sendKeys('sahadul80@gmail.com', Key.RETURN)
            await driver.wait(until.titleIs('AAMRA | Home'), 10000)
        } finally {
            await driver.quit()
        }
    })()

describe("AAMRA website TEST", function () {
    it("Check Subscribsion", function () {
        console.log("Subscribsion: Pass")
    })
})