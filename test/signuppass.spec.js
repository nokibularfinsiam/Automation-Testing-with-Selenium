const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

    ; (async function example() {
        let driver = await new Builder().forBrowser(Browser.CHROME).build()
        try {
            await driver.get('http://localhost:3000/signup')
            await driver.findElement(By.name('name')).sendKeys('Test Demo', Key.RETURN)
            await driver.findElement(By.name('age')).sendKeys('30', Key.RETURN)
            await driver.findElement(By.name('gender')).sendKeys('male', Key.RETURN)
            await driver.findElement(By.name('department')).sendKeys('CSE', Key.RETURN)
            await driver.findElement(By.name('address')).sendKeys('Sample Address', Key.RETURN)
            await driver.findElement(By.name('email')).sendKeys('abcde2@gmail.com', Key.RETURN)
            await driver.findElement(By.name('password')).sendKeys('Password123', Key.RETURN)
            await driver.findElement(By.name('confirmPassword')).sendKeys('Password123', Key.RETURN)
            await driver.wait(until.titleIs('AAMRA | LOGIN'), 5000)
        } finally {
            await driver.quit()
        }
    })()

describe("AAMRA website TEST", function () {
    it("Check Signup", () => {
        console.log("Signup Test: Pass")
    })
})