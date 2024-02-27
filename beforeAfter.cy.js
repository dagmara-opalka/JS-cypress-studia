/// <reference types="cypress" />

//before wykonuje sie przed wszystkim, ale dotyczy tylko pierwszego testu
//beforeEach wykona sie przed każdym

beforeEach(() => {
	cy.viewport(400, 300);
	cy.visit('http://zero.webappsecurity.com/login.html', {
		failOnStatusCode: false,
	});
});

afterEach(() => {
	cy.log('koniec testów');
	//after.Each wyświetla log po każdym
	//after wyświetla po pierwszym

	/*
cy.clearAllCookies();
cy.clearAllLocalStorage();
czyszczenie cache 
*/
});

describe('Before After tests', () => {
	it.only('Login into bank account', () => {
		// cy.visit('http://zero.webappsecurity.com/login.html', {failOnStatusCode: false});

		cy.get('#user_login').as('myUsername');
		cy.get('#user_password').as('myPassword');

		cy.get('@myUsername').clear();
		cy.get('@myUsername').type('username', { delay: 100 });

		cy.get('@myPassword').clear();
		cy.get('@myPassword').type('password', { delay: 100 });

		cy.get('[name="submit"]').click();
		// cy.go(-2);
		// cy.go('forward');
		cy.title().should('include', 'Zero - Account Summary');
		cy.xpath('//*[@id="account_summary_tab"]')
			.should('be.visible')
			.and('contain', 'Account Summary');
		cy.get('#account_summary_tab')
			.should('be.visible')
			.and('contain', 'Account Summary');
	});
});
