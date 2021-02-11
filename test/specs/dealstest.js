const DealsPage = require('../pages/dealspage');

describe('validating prices on deals page', () => {

    before(() =>{
        DealsPage.open();
        DealsPage.acceptCookie();
    })

    it('Clicking and validating deals page', () => {
        browser.setTimeout({ 'implicit': 10000 })
        DealsPage.deals.click()
        browser.setTimeout({ 'implicit': 10000 })
        expect(browser).toHaveUrl('https://www.sky.com/shop/offers')
    })

    it('validating the offers on deals page',()=>{
       DealsPage.getListofOfferPrices();
        
    })
})
