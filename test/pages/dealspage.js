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
}

module.exports = new DealsPage();