describe('element', ()=>{
    it('Interacting with elements', ()=>{
        cy.visit('https://demoqa.com/')
        cy.get('[src="/images/Toolsqa.jpg"]').should('be.visible')
        cy.get('[src="/images/WB.svg"]').should('be.visible')
        cy.get('.home-banner').should('be.visible').click()
        cy.title().should('include', 'selenium-training/')
       
       
    })

    it('Elements', function(){
        cy.visit('https://demoqa.com/')
        cy.get('.card-up').first().click()
        cy.get('.main-header', {timeout: 10000}).should('have.text', "Elements")
        cy.get('.header-text').first().should('have.text', 'Elements').click()
        cy.get('.header-wrapper').first().click()
        cy.location('protocol').should('eq', 'https')
    })
})