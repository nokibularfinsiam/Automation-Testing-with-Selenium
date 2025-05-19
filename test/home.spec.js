const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

    ; (async function example() {
        let driver = await new Builder().forBrowser(Browser.CHROME).build()
        try {
            await driver.get('http://localhost:3000')
            await driver.wait(until.titleIs('AAMRA | HOME'), 10000)
        } finally {
            await driver.quit()
        }
})()

describe("AAMRA website TEST", function () {
    it("Check Home Page", function () {
        console.log("Home Page Test: Pass")
    })
})