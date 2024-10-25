import { LoginPage } from "../../page-objects/Login.page"
import { MainPage } from "../../page-objects/Main.page"
import { SettingsPage } from "../../page-objects/Settings.page"
import { auth } from "../../secrets/credentials"

describe('Login form', () => {
    let loginPage: LoginPage
    let mainPage: MainPage
    let settingsPage: SettingsPage


    before(async () => {
        loginPage = new LoginPage(browser)
        mainPage = new MainPage(browser)
        settingsPage = new SettingsPage(browser)
    })

    beforeEach(async () => {
        await loginPage.open()
    })

    it('Login with valid data', async () => {
        await loginPage.login(auth)

        const itDisplayedElement: boolean = await mainPage.isDisplayedUserLogin()

        expect(itDisplayedElement).toEqual(true)
    })


})
