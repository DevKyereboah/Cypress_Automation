describe('handling frames', ()=>{
    it('Approach1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        iframe.clear().type('Welcome {cmd+a}');
    })
})