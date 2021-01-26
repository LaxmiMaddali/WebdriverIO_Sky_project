const DealsPage = require('../pages/dealspage');

describe('validating prices on deals page', () => {

    before(() =>{
        DealsPage.open();
        DealsPage.acceptCookie();
    })

    it('Clicking and validating deals page', () => {
        browser.setTimeout({ 'implicit': 50000 })
        DealsPage.deals.click()
        browser.setTimeout({ 'implicit': 50000 })
        expect(browser).toHaveUrl('https://www.sky.com/shop/offers')
    })

    it('validating the offers on deals page',()=>{
       
        for(var i=2; i<4; i++){
         it('',function(){
            let elements= $$('#tab-1')[0]
            var childElem = elements.$$('div')[i].$('span[class="c-price__main"]')
            
            console.log("this is the value --------- ")
            childElem.scrollIntoView()
            console.log(childElem.getText())

            if(i=2){
                expect(childElem).toHaveTextContaining('39')
            } else if(i=3){
                expect(childElem).toHaveTextContaining('47')
            } else if(i=4){
                expect(childElem).toHaveTextContaining('25')
                 }
          })
        }
    })
})


/*

  var firstOffer = $('#TP42 span[class="c-price__main"]')
         expect(firstOffer).toHaveTextContaining('39')

         var secondOffer = $('#TPUF span[class="c-price__main"]')
         expect(secondOffer).toHaveTextContaining('47')

         var thirdOffer = $('#sabb span[class="c-price__main"]')
         expect(thirdOffer).toHaveTextContaining('25')


        }*/