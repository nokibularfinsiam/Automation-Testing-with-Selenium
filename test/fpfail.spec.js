const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

    ; (async function example() {
        let driver = await new Builder().forBrowser(Browser.CHROME).build()
        try {
            await driver.get('http://localhost:3000/forgetpassword')
            await driver.findElement(By.name('email')).sendKeys('sahadul@gmail.com', Key.RETURN)
            await driver.wait(until.titleIs('Login | AAMRA'), 10000)
        } finally {
            await driver.quit()
        }
    })()

describe("AAMRA website TEST", function () {
    it("Check Forget Password", function () {
        console.log("Forget Password: failed")
        throw Error("Test Failed!")
    })
})