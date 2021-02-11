const SigninPage = require('../pages/signinpage');

describe('Sign In Validation', () => {

    before(()=> {
        SigninPage.open();
        SigninPage.acceptCookie(); 
    })

    it('Clicking on signin link on homepaege', () => {
        browser.setTimeout({ 'implicit': 10000 })
        SigninPage.signInLink.click()
        SigninPage.signInPageTitle.waitForDisplayed({timeout : 3000})
        expect(browser).toHaveTitle('Sky - Sign in')
    })

    it('Entering the username', ()=> {
        SigninPage.userName.addValue('laxmi');
        expect(SigninPage.userName).toHaveValue('laxmi')
    })

    it('Entering the password ', ()=> {
        SigninPage.password.setValue('maddali');
    })

    it('click on sign-in',()=>{
        SigninPage.signInButton.click();
    })

    it('validating the error message',()=>{
        const errorMessage = $('#signInPanel ul > li')
        browser.setTimeout({ 'implicit': 10000 })
        expect(errorMessage.getText()).toHaveTextContaining('Sorry, we did not recognise either your username or password')
    })
})

