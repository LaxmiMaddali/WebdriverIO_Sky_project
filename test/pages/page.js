/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
   open (path) {
        return browser.url(path)
   }

   acceptCookie(){
     let frame= browser.$('#sp_message_iframe_207015');
       browser.setTimeout({ 'implicit': 10000 })
     browser.switchToFrame(frame); 
     let clickAgree =   $('button[title="Agree"]');
       browser.setTimeout({ 'implicit': 10000 })
     clickAgree.click();
     browser.switchToParentFrame();
   }

   waitForElement(element){
    browser.waitUntil(() => element.isFocused(), 8000, "Expected frame is not displayed");   
   }
}
