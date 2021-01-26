const Page = require('./page');

class SearchPage extends Page {

    

    get searchicon(){
        return $('[data-test-id="masthead-search-toggle-button"]');
    }

    get enterValueInSearchField(){
        return $('[data-test-id="input-box"]');
    }
    
    get clickOnSearchIcon(){
        return $('[data-test-id="submit-button"]');
    }

    get editorialSection(){
        return $('[data-test-id="editorial-section"]');
    }
    open(){
        super.open("https://sky.com");
    }
  
    acceptCookie(){
        super.acceptCookie();
    }


}

module.exports = new SearchPage();