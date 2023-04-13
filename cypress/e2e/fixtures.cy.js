describe('My TestSuite', ()=>{
    it('FixturesDemoTest,', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture('orangehrm.json').then((data)=>{
            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get('button[type="submit"]').click()
        })
    })
})