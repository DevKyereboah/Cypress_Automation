import login from "../pageObjects/loginPage.js";

describe('Test Suite Name', () => {
    it('Login Test Case - Direct Interaction', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[placeholder="Username"]').type('Admin');
        cy.get('input[placeholder="Password"]').type('admin123');
        cy.get('button[type="submit"]').click();
    });

    it.only('Login Test Case - Using Page Object', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        
        const ln=new login();
        ln.setUserName('Admin');
        ln.setPassword('admin123');
        ln.clickSubmit();
        ln.verifyLogin();
    });
});
