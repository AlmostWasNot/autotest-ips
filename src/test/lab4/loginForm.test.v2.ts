import { LoginPage } from "../../page-objects/Login.page"
import { MainPage } from "../../page-objects/Main.page"
import { auth } from "../../secrets/password"

describe('Login form', () => {
    let loginPage: LoginPage

    before(async () => {
        loginPage = new LoginPage(browser)
    })

    beforeEach(async () => {
        await loginPage.open()
    })

    it('Login with valid data', async () => {
        const loginPage: LoginPage = new LoginPage(browser)
        await loginPage.login(auth)

        const mainPage: MainPage = new MainPage(browser)
        const itDisplayedElement: boolean = await mainPage.isDisplayedUserLogin()

        expect(itDisplayedElement).toEqual(true)
    })
})
