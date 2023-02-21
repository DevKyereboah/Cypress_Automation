describe("Check UI Elements", ()=>{
    // it("Checking Radio Buttons", ()=>{
    //     cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    //     cy.get("input#male").should("be.visible")
    //     cy.get("input#female").should("be.visible")
        
    //     //selecting radio buttons
    //     cy.get("input#male").should("not.be.checked")
    //     cy.get("input#female").check().should("be.checked")
    // })
    it("Checking check boxes", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input#monday").should("be.visible")

        //selecting single check box
        // cy.get("input#monday").check().should("be.checked")
        // cy.get("input#monday").uncheck().should("not.be.checked")
        // cy.get('.form-check-input[type="checkbox"]').first().check().should("be.checked")
        // cy.get('input.form-check-input[type="checkbox"').uncheck().should("not.be.checked")
        cy.get('.form-check-input[type="checkbox"]').first().check().should("be.checked")
        cy.get('.form-check-input[type="checkbox"]').last().check().should("be.checked")

        //selecting all the check boxes

    })
})