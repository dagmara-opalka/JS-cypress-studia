/// <reference types="cypress" />

beforeEach(() => {
	cy.visit('http://zero.webappsecurity.com/login.html');
});

import LoginPage from '../../pageObjects/loginPage';
import MainPage from '../../pageObjects/mainPage';

const loginPage = new LoginPage();

const mainPage = new MainPage();

describe('Page Object Pattern Bank Tests', () => {
	it('Check if basic elemnts are displayed', () => {
		// cy.visit('http://zero.webappsecurity.com/login.html') ;

		loginPage.verifyIfBasicElementsAreDisplayed();
	});

	it('Login into bank account using hardcoded data', () => {
		// cy.visit('http://zero.webappsecurity.com/login.html') ;

		loginPage.fillCredentialsData('username', 'password');
		loginPage.clickSignInButton();
		mainPage.verifyIfBasicElementsAreDisplayed();
	});
});
