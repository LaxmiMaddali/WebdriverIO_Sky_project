const Page = require('./page');

class SigninPage extends Page {

    get button(){
        return $('button[title="Agree"]');
    }

    get signInLink(){
        return $('[data-test-id="sign-in-link"]');
    }

    get signInPageTitle(){
        return $('input[id="username"]');
    }

    get userName(){
        return $('input[id="username"]');
    }
    
    get password(){
        return $('#password');
    }
    
    get signInButton(){
        return $('#signinButton');
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

}

module.exports = new SigninPage();
