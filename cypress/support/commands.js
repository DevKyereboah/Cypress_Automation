// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="cypress"/>
Cypress.command.add('login', ()=>
{
    cy.visit('https://amap.amalitech-dev.net/');
        cy.url().should('eq', 'https://amap.amalitech-dev.net/');
        cy.wait(3000);
        cy.get('[id="text"]').should('have.text', 'Assess Smarter Hire Better with AMAP');
        cy.contains('SIGN IN').click({ force: true });

        cy.fixture('signIn.json').then((data) => {
            cy.wait(3000);
            cy.contains('Sign in').should('be.visible');
            cy.get('[placeholder="Enter email"]').eq(0).type(data.email);
            cy.get('input[type="password"]').type(data.password);
            cy.get('[id="custom-button"]').click();
            cy.url().should('include', '/dashboard/home');
        });
}
)