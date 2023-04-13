import 'cypress-iframe'
describe("handeling frames",()=>{
    it('appraoch1', ()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe")

       const iframe =  cy.get("#mce_0_ifr")
        .its('0.contentDocument.body').
        should('be.visible')
        .then(cy.wrap);

        iframe.clear().type('Welcome {ctrl+a}')
        cy.get("[aria-label='Bold']").click()
    })

    it('Approach 2-by using custom command', ()=>{
        cy.visit("http://the-internet.herokuapp.com/iframe")
           cy.getIframe('#mce_0_ifr').clear().type("welcome {ctrl+a}");
           cy.get("[aria-label='Bold']").click();
           

           cy.frameLoaded("#mce_0_ifr");
           cy.iframe('mce_o_ifr').clear().type("welcome")
            
    
            
        })
    })
