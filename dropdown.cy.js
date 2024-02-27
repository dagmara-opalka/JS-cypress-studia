/// <reference types="cypress" />

describe ('Dropdowns tests', () => {


  it('Select from dropdown', () => {
    cy.viewport(1024, 768);
      cy.visit('https://devexpress.github.io/testcafe/example/'); //wejście na stronę
      cy.get('#preferred-interface').select('JavaScript API');
      cy.get('#preferred-interface').should('have.value', 'JavaScript API'); //sprawdza czy jest tam wartość JavaScript API;
      cy.get('#preferred-interface').select(2);
      cy.get('#preferred-interface').should('not.have.value', 'JavaScript API') //sprawdza czy nie ma wybranej wartości JavaScript APi <w tym momencie>;


    cy.screenshot();      
    cy.screenshot('myScreenFullPage',{capture: 'fullPage'});
    cy.screenshot('mojScreenViewPort', {capture: 'viewport'});
    cy.screenshot({capture: 'runner'});

    cy.get('.col-2').screenshot('kolumna'); //robi screena samej kolumny i nazywa go ,,kolumna";

    cy.get('h1').scrollIntoView(); //scrolluje do wpisanego selektora



  })

})