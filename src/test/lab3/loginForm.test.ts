import { auth } from "../../secrets/credentials"

describe('Login form', () => {
    beforeEach(async () => {
        await browser.url('https://github.com/login')
    })

    it('Login with valid data', async () => {
        await browser.$('//*[@id="login"]').waitForDisplayed({
            timeoutMsg: 'Login form was not displayed',
        })

        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Email input was not displayed',
        })
        await browser.$('//*[@id="login_field"]').setValue(auth.login)

        await browser.$('//*[@id="password"]').waitForDisplayed({
            timeoutMsg: 'Password input was not displayed',
        })
        await browser.$('//*[@id="password"]').setValue(auth.password)

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable',
        })
        await browser.$('//*[@type="submit"]').click()

        const itDisplayedElement: boolean = await (await browser.$('//form[@action="sessions/verifyed-device"] | //*[@data-login="AlmostWasNot"]')).isDisplayed()

        expect(itDisplayedElement).toEqual(true)
    })


    it('Login with login invalid data', async () => {
        await browser.$('//*[@id="login"]').waitForDisplayed({
            timeoutMsg: 'Login form was not displayed',
        })

        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Email input was not displayed',
        })
        await browser.$('//*[@id="login_field"]').setValue('guest@guest.ru')

        await browser.$('//*[@id="password"]').waitForDisplayed({
            timeoutMsg: 'Password input was not displayed',
        })
        await browser.$('//*[@id="password"]').setValue(auth.password)

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable',
        })
        await browser.$('//*[@type="submit"]').click()

        const itDisplayedElement: boolean = await (await browser.$('//*[@class="js-flash-alert"]')).isDisplayed()

        expect(itDisplayedElement).toEqual(true)
    })

    it('Login with password invalid data', async () => {
        await browser.$('//*[@id="login"]').waitForDisplayed({
            timeoutMsg: 'Login form was not displayed',
        })

        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Email input was not displayed',
        })
        await browser.$('//*[@id="login_field"]').setValue(auth.login)

        await browser.$('//*[@id="password"]').waitForDisplayed({
            timeoutMsg: 'Password input was not displayed',
        })
        await browser.$('//*[@id="password"]').setValue('12345Q')

        await browser.$('//*[@type="submit"]').waitForClickable({
            timeoutMsg: 'Login button was not clickable',
        })
        await browser.$('//*[@type="submit"]').click()

        const itDisplayedElement: boolean = await (await browser.$('//*[@class="js-flash-alert"]')).isDisplayed()

        expect(itDisplayedElement).toEqual(true)
    })

    it('Forgote password', async () => {
        await browser.$('//*[@id="login"]').waitForDisplayed({
            timeoutMsg: 'Login form was not displayed',
        })

        await browser.$('//*[@id="login_field"]').waitForDisplayed({
            timeoutMsg: 'Email input was not displayed',
        })

        await browser.$('//*[@id="password"]').waitForDisplayed({
            timeoutMsg: 'Password input was not displayed',
        })

        await browser.$('//*[@type="submit"]').waitForDisplayed({
            timeoutMsg: 'Login button was not displayed',
        })

        await browser.$('//*[@id="forgot-password"]').waitForClickable({
            timeoutMsg: 'Forgote password link was not clickable'
        })
        await browser.$('//*[@id="forgot-password"]').click()

        const itDisplayedElement: boolean = await (await browser.$('//*[@id="forgot_password_form"]')).isDisplayed()

        expect(itDisplayedElement).toEqual(true)
    })

    afterEach(async () => {
        await browser.reloadSession()
    })
})