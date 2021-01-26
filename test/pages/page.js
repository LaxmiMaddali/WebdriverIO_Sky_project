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
     browser.pause(5000);
     browser.switchToFrame(frame);
     browser.setTimeout({ 'implicit': 10000 })     
     let clickAgree =   $('button[title="Agree"]');   
     clickAgree.click();
     browser.switchToParentFrame();
   }
}
