/// <reference types="cypress" />

describe('Books tests', () => {
	it('Visit page', () => {
		cy.visit('https://books.toscrape.com'); //wejście na stronę
		cy.get('.nav li ul li').should('be.visible');
		cy.get('.nav li ul li').first().should('be.visible'); // po dodaniu .first().sprawdza czy pierwszy selektor jest widoczny;
		cy.get('.nav li ul li').last().should('be.visible'); // po dodaniu .last().sprawdza czy ostatni selektor jest widoczny;
		//cy.wait(5000);oczekiwanie na elementy - zła praktyka ;
		//cy.pause(); czeka aż ponownie klikniemy Resume;
		cy.log('tutaj był wait'); //służy do pokazania tekstu w teście, komentarza itp.;
		cy.get('.nav li ul li').eq(7).should('be.visible'); // po dodaniu .eq(7).sprawdza czy ósmy selektor jest widoczny;
		cy.get('.nav li ul li').eq(-7).should('be.visible'); // po dodaniu .eq(-7).sprawdza czy siódmy selektor od końca;
		cy.get('.nav li ul li').its('length').should('eq', 50);
		cy.get('a').contains('Travel').should('be.visible'); //wyszukuje wszystkich linków z Travel, które mają 'a' - kiepska praktyka;
		cy.get('a').contains('Fiction').click(); //kiepska praktyka, szuka po nazwie, nie po selektorze;
		cy.contains('Fiction').click(); //kiepska praktyka, szuka po nazwie, nie po selektorze;
		cy.log('koniec testu');
		cy.reload(); //odświeżenie;

		/*  cy.url().should('include', 'example.com')  //asercja
        cy.url().should('match', /example..../); // kropki zastępują dowolne znaki np. e..mple.com
        cy.get('h1').should('be.visible');
        cy.get('h2').should('not.exist'); //shift+alt+strzałka w dół - powtarza linijkę* nie kopiuje się do schowka
        ctrl+S - automatycznie odpala test w cypress*/
	});
});
