import { ChainablePromiseElement } from 'webdriverio'
import { PageObject } from './PageObject'

class MainPage extends PageObject {
    private getUserLogin(): ChainablePromiseElement<WebdriverIO.Element> {
        return this.browser.$('//form[@action="sessions/verifyed-device"] | //*[@data-login="AlmostWasNot"]')
    }

    public isDisplayedUserLogin(): Promise<boolean> {
        return this.getUserLogin().isDisplayed()
    }


}

export {
    MainPage
}