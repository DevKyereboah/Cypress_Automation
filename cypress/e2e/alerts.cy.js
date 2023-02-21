
describe('Alert Windows', ()=>{
    it('JS Alerts', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('h3').should('have.text', 'JavaScript Alerts')
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert', (t)=>{
            expect(t).to.equal('I am a JS Alert')
        })
        cy.get('#result').contains('You successfully clicked an alert')
    })
    it('JS comfirm', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:comfirm', (e)=>{
            expect(e).to.equal('I am a JS Confirm')
        })
        cy.on('window:confirm', ()=> false);
        cy.get('#result').contains('You clicked: Cancel')

    })
    it('JS Prompt', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsPrompt()"').click()
        cy.on('window:prompt', (s)=>{
            expect(s).to.equal('I am a JS prompt')
        })
        // cy.on('window:prompt', ()=>false)
        cy.get('#result').contains('You entered: welcome')
    })
})