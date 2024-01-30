describe('System admin can add domains', () => {
    beforeEach(() => {
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
    });

    it('should navigate to the dashboard and verify "Test management"', () => {
        cy.get('div >ul >li .flex').eq(2).click();
        cy.get('li> div .mat-icon').eq(4).click();
    });

});
