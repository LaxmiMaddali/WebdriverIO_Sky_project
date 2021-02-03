const SearchPage = require('../pages/searchpage')

describe ('validating the editorial section via search bar', ()=>{
    
    before(()=> {
        SearchPage.open();
        SearchPage.acceptCookie(); 
    })

it('click on search button on homepage',()=>{
    SearchPage.searchicon.click();
})

it('enter value into the search field', ()=>{
       SearchPage.enterValueInSearchField.addValue('Sky');
       SearchPage.clickOnSearchIcon.click();
       
})
 it('Validating the editorial section on Sky page',()=>{
     waitForElement(SearchPage.editorialSection)
     expect(SearchPage.editorialSection).toBeVisible();
 })

})
