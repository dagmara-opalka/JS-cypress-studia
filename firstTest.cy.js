/// <reference types="cypress" />

describe ('My first Cypress tests', () => {

    it('First passing test', () => {
        expect(true).to.equal(true);
    })

    it('First failing test', () => {
        expect(true).to.equal(false);
    })

    it('Another passing test', () => {
        expect(7).to.equal(7);
    })

    it('Visit page', () => {
        cy.visit('https://www.example.com', {timeout: 1000, failOnStatusCode: false}); //wejście na stronę
        cy.url().should('include', 'example.com')  //asercja
        cy.url().should('match', /example..../); // kropki zastępują dowolne znaki np. e..mple.com
        cy.get('h1').should('be.visible');
        cy.get('h2').should('not.exist'); //shift+alt+strzałka w dół - powtarza linijkę* nie kopiuje się do schowka


    })

})