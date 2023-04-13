import 'cypress-iframe'
//require ('@4tw/cypress-drag-drop')
describe("Mouse Operations", ()=>{
    it.skip("MouseHover", ()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").
        trigger('mouseover').click()
        cy.get('.nav-link').eq(1).click()

    })

    it("Right click", ()=>{
     cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");
     cy.get(".context-menu-one").trigger('contextmenu')
   
     cy.get(".context-menu-icon-copy > span").should('be.visible').click()
    })

    it.skip("Doublke click", ()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded("#frameResult");
        cy.iframe('#iframeResult').find("button[ondbclick='myFunction()']").dbclick();
        cy.iframe('#iframeResult').find("#field2").should('have.value', 'Hellow world!');


    })

    it("Drag and drop using plugin", ()=>{
      cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html") 
      cy.get("#box6").should('be.visible')
      cy.wait(3000);
      cy.get('#box6').drag('#box106', {force:true})

    });

    it.only("Scroll a page", ()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        cy.get(":nth-child(1) > tbody > :nth-child(86) > :nth-child(2)")
        .scrollIntoView({duration:2000})
        cy.get(":nth-child(1) > tbody > :nth-child(86) > :nth-child(2)").should('be.visible')
        cy.get(":nth-child(1) > tbody > :nth-child(4) > :nth-child(2)")
        .scrollIntoview('duration:2000');

    });
    //#menu>[class="collapse navbar-collapse"]>ul>li:nth-child(1)>a
})