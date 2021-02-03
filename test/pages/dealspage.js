const Page = require('./page');

class DealsPage extends Page {

    get deals(){
    return $('a=Deals');
    }
    open(){
        super.open("https://sky.com");
    }
  
    acceptCookie(){
        super.acceptCookie();
    }

    waitForElement(element){
        super.waitForElement(element)
    }

getListofOfferPrices(){
    for(var i=2; i<4; i++){
        it('',function(){
           let elements= $$('#tab-1')[0]
           var childElem = elements.$$('div')[i].$('span[class="c-price__main"]')
           
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
}


}

module.exports = new DealsPage();
