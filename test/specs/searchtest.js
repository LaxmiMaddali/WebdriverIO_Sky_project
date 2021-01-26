const SearchPage = require('../pages/searchpage')

describe ('validating the editorial section via search bar', ()=>{
    
    before(()=> {
        SearchPage.open();
        SearchPage.acceptCookie(); 
    })

it('click on search button on homepage',()=>{
    browser.setTimeout({implicit : 10000})
    SearchPage.searchicon.click();
})

it('enter value into the search field', ()=>{
       SearchPage.enterValueInSearchField.addValue('Sky');
       SearchPage.clickOnSearchIcon.click();
       browser.setTimeout({implicit : 10000})
})
 it('Validating the editorial section on Sky page',()=>{
     browser.setTimeout({implicit : 10000})
     expect(SearchPage.editorialSection).toBeVisible();
 })

})