describe('my first test', function(){
    it('test1-verify title', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM')
        cy.contains('Login')
        cy.contains('Username : Admin')
        cy.contains('Password : admin123')
        cy.contains('Username')
        cy.get('input[placeholder="Username"]').type('sarah owusu')
        cy.contains('Password')
        cy.get('input[type="password').type('admin123')
        cy.get('button[type="submit"]').contains('Login').should('be.visible').click()
        })

        it('verify title-Negative test', function(){
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.title().should('eq', 'OrangeHRM')
        })
})