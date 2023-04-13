///<reference types="cypress"/>

describe('element', ()=>{
    it.skip('Interacting with elements', ()=>{
        cy.visit('https://demoqa.com/')
     
        cy.get('[src="/images/Toolsqa.jpg"]').should('be.visible')
        cy.get('[src="/images/WB.svg"]').should('be.visible')
        cy.get('.home-banner>:nth-child(1)').invoke('removeAttr', 'target').click()
         cy.origin('https://www.toolsqa.com/selenium-training/', () => {
         })
       // cy.location('href').should('eq', 'https://www.toolsqa.com/selenium-training/')

        
       })
    it('Elements', function(){
        cy.visit('https://demoqa.com/')
        cy.get('.card-up').first().click()
        cy.get('.main-header', {timeout: 10000}).should('have.text', "Elements")
        cy.get('.header-text').first().should('have.text', 'Elements').click()
        cy.get('.header-wrapper').first().click()
        cy.url().should('contain','https')
        cy.get('[class="text"]').first().contains('Text Box')
        cy.get('[id="item-0"]').first().click()

         cy.fixture('demoElement.json').then((data)=>{

             cy.get('#userName').type(data.fullName)
             cy.get('input[type="email"]').type(data.email)
             cy.get('textarea[placeholder="Current Address"]').type(data.currentAddress)
            cy.get('[id="permanentAddress"]').type(data.permanentAddress)
         })
     cy.get('button[type="button"]').contains('Submit').click()
     })
 })
