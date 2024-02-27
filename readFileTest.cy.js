/// <reference types="cypress" />

describe ('Read file tests', () => {

  it('Fixtures test', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');

    cy.fixture('credentials.json').then((loginData) => {                             //odnosimy, się z jakiego pliku chcemy pobierać dane, nie musi być rozszerzenia;

      cy.get('#user_login').clear();
      cy.get('#user_login').type(loginData.myLogin);
  
      cy.get('#user_password').clear();
      cy.get('#user_password').type(loginData.myPassword);


    })
  

    cy.get('[name="submit"]').click();

    cy.get('#account_summary_tab')
        .should('be.visible')
        .and('contain', 'Account Summary');
})


it('ReadFile Test', () => {
  cy.visit('http://zero.webappsecurity.com/login.html');

  cy.readFile('cypress/fixtures/credentials.json').then((loginData) => {                             //kopiujemy Relative Path ale zmieniamy slashe w drugą, musi być rozszerzenie;

    cy.get('#user_login').clear();
    cy.get('#user_login').type(loginData.myLogin);

    cy.get('#user_password').clear();
    cy.get('#user_password').type(loginData.myPassword);


})  
})

it.only('WriteFile test', () => {
  cy.visit('http://zero.webappsecurity.com/login.html');

  cy.fixture('credentials.json').then((loginData) => {                     

    cy.get('#user_login').clear();
    cy.get('#user_login').type(loginData.myLogin);

    cy.get('#user_password').clear();
    cy.get('#user_password').type(loginData.myPassword);


  })

  cy.writeFile('cypress/fixtures/credentials.json', {
    
      myLogin: 'WRONG_USERNAME',
      myPassword: 'WRONG_PASSWORD'
  
  
   })

   cy.readFile('cypress/fixtures/credentials.json').then((loginData) => {                

    cy.get('#user_login').clear();
    cy.get('#user_login').type(loginData.myLogin);

    cy.get('#user_password').clear();
    cy.get('#user_password').type(loginData.myPassword);

   })

  cy.get('[name="submit"]').click();

  cy.get('#account_summary_tab')
      .should('be.visible')
      .and('contain', 'Account Summary');

})
})