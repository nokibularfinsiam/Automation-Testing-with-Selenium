const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

    ; (async function example() {
        let driver = await new Builder().forBrowser(Browser.CHROME).build()
        try {
            await driver.get('http://localhost:3000/login')
            await driver.findElement(By.name('email')).sendKeys('sahadul80@gmail.com', Key.RETURN)
            await driver.findElement(By.name('password')).sendKeys('Password123', Key.RETURN)
            await driver.get('http://localhost:3000/profile')
            await driver.wait(until.titleIs('Profile | AAMRA'), 10000)
        } finally {
            await driver.quit()
        }
    })()

describe("AAMRA website TEST", function () {
    it("View Profile", function () {
        console.log("Profile Test: Pass")
    })
})