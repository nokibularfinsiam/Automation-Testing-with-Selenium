const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

    ; (async function example() {
        let driver = await new Builder().forBrowser(Browser.CHROME).build()
        try {
            await driver.get('http://localhost:3000/profile')
            await driver.wait(until.titleIs('Profile | AAMRA'), 10000)
        } finally {
            await driver.quit()
        }
    })()

describe("AAMRA website TEST", function () {
    it("View Profile", function () {
        console.log("Profile Test: Fail")
        throw Error("Test Failed! Missing Pre-requisite LOGIN to view profile!")
    })
})