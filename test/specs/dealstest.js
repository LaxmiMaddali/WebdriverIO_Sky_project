const DealsPage = require('../pages/dealspage');

describe('validating prices on deals page', () => {

    before(() =>{
        DealsPage.open();
        DealsPage.acceptCookie();
    })

    it('Clicking and validating deals page', () => {
        waitForElement(DealsPage.deals);
        DealsPage.deals.click()
        expect(browser).toHaveUrl('https://www.sky.com/shop/offers')
    })

    it('validating the offers on deals page',()=>{
       DealsPage.getListofOfferPrices();
        
    })
})
