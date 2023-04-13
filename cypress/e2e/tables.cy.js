describe("Handling Tables", ()=>{
    beforeEach("Login", ()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        //cy.title().should("eq", 'OpenCart')
        cy.get("input[type='text']").type("demo");
        cy.get("input[type='password']").type("demo");
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();

        //customers main menu
        cy.get("#menu-customer>a").click();
        cy.get("#menu-customer>ul>li:first-child>a").click()
    })

    it("check number rows and columns", ()=>{
        cy.get("[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');
        cy.get("[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7');
    })

      it("Check cell data from specific row & column",()=>{
        cy.get("[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .should("contain", "princytrainings4@gmail.com")
      })

      it("Read all the rows and columns data in the first page", ()=>{
        cy.get("[class='table table-bordered table-hover']>tbody>tr").
        each(($row, index, $rows)=>{
           // cy.wrap($rows).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })

                it.only("Pagination", ()=>{
                    //find total number of pages
                    let totalPages;
                    cy.get(".col-sm-6 text-end").then((e)=>{
                        let mytext = e.text();
                       totalPages= mytext.substring( mytext.indexof("(")+1, mytext.indexOf("pages")-1);
                       cy.log("Total number of pages====>"+totalpages)
                    })
                    
                })
            })
        
            })
        })
      