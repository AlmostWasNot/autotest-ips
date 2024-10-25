import { ChainablePromiseElement } from 'webdriverio'
import { PageObject } from './PageObject'

class SettingsPage extends PageObject {
    protected url: string = 'https://github.com/settings/profile'

    constructor(browser: WebdriverIO.Browser) {
        super(browser)
    }

    private getProfilePage(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@class="application-main "]')
    }

    private getNameField(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@id="user_profile_name"]')
    }

    private getUpdateButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//*[@data-target="waiting-form.submit"]')
    }

    public async setName(login: string): Promise<void> {
        await this.getNameField().waitForDisplayed({
            timeoutMsg: 'Name input was not displayed',
        })
        await this.getNameField().setValue('Kukaratca')
    }

    public async submit(): Promise<void> {
        await this.getUpdateButton().waitForClickable({
            timeoutMsg: 'Update button was not clickable',
        })
        await this.getUpdateButton().click()
    }

    public async waitForDisplayedProfilePage(): Promise<void> {
        await this.getProfilePage().waitForDisplayed({
            timeoutMsg: 'Profile form was not displayed',
        })
    }

    public async name(): Promise<void> {
        await this.waitForDisplayedProfilePage()
        await this.submit()
    }

}

export {
    SettingsPage
}