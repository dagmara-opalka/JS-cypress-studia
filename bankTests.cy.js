/// <reference types="cypress" />

describe ('Bank tests', () => {


    it('Login into bank account', () => {
      cy.visit('http://zero.webappsecurity.com/login.html', {failOnStatusCode: false}) ;
      
      cy.get('#user_login').as('myUserName'); //alias
      
      //cy.get('#user_login').clear(); //czyszczenie pola;

      cy.get('@myUserName').clear(); //czyszczenie pola;
      cy.get('@myUserName').type('username', {delay: 100}); //delay - opóźnienie


      cy.get('#user_password').as('myPasswordName'); //alias
      //cy.get('#user_password').clear();
      cy.get('@myPasswordName').clear();
      cy.get('@myPasswordName').type('password', {delay: 100});

      cy.get('[name="submit"]').click();
      cy.go('back'); //przenosi nas na stronę wstecz ;
      cy.go('forward');
      //cy.go(-2) cofa nas o 2;

      cy.get('#account_summary_tab')
      .should('be.visible') //asercja => teraz dopiero jest to test;
      .and('contain', 'Account summary');
      cy.title().should('include', 'Zero') //sprawdza czy tytuł zawiera Zero






      
      /*  cy.url().should('include', 'example.com')  //asercja
        cy.url().should('match', /example..../); // kropki zastępują dowolne znaki np. e..mple.com
        cy.get('h1').should('be.visible');
        cy.get('h2').should('not.exist'); //shift+alt+strzałka w dół - powtarza linijkę* nie kopiuje się do schowka
        ctrl+S - automatycznie odpala test w cypress*/


    })

    it('Login into bank account', () => {
      cy.viewport(4000, 3000);
      cy.visit('http://zero.webappsecurity.com/login.html', {failOnStatusCode: false}) ;
      
      cy.get('div.container div div div a').focus();

})




})