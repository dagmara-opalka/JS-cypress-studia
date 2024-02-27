const selectors = {

    loginTextbox: '#user_login',
    passwordTextbox: '#user_password',
    signInButton: '[name="submit"]',


};
class LoginPage {   //definicja klasy musi być duża literą!
    verifyIfBasicElementsAreDisplayed(){

        cy.get(selectors.loginTextbox).should('be.visible');
        cy.get(selectors.passwordTextbox).should('be.visible');
        cy.get(selectors.signInButton).should('be.visible');


    }
    fillCredentialsData(usernameData, passwordData) {
        cy.get(selectors.loginTextbox).type(usernameData);
        cy.get(selectors.passwordTextbox).type(passwordData);


    }

    clickSignInButton() {

        cy.get(selectors.signInButton).click();
        
    }

}


export default LoginPage;