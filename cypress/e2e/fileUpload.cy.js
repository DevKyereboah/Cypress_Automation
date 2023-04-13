import 'cypress-file-upload';
describe("File Uploads", ()=>{


    it.skip("Single File Upload", ()=>{
        
    cy.visit("http://the-internet.herokuapp.com/upload")
    cy.get('#file-upload').attachFile('Database.docx');
    cy.get('#file-submit').click();
    cy.wait(3000);
    cy.get('div[class="example"]>h3').should('have.text', 'File Uploaded!')
    })

    it.skip("File Upload - Rename", ()=>{
    cy.visit("http://the-internet.herokuapp.com/upload")
    cy.get('#file-upload').attachFile({filePath:'Database.docx', fileName:"TITLE.docx"});
    cy.get('#file-submit').click();
    cy.wait(3000);
    cy.get('div[class="example"]>h3').should('have.text', 'File Uploaded!')


    })

    it.skip("File Upload - Drag and drop", ()=>{
    cy.visit("http://the-internet.herokuapp.com/upload")
    cy.get('div[id="drag-drop-upload"]').attachFile("TITLE.docx", {subjectType:'drag-n-drop'});
    cy.wait(3000)
    cy.get('div[class="dz-filename"]>span').should('have.text', 'TITLE.docx');
    })

    it("Multiple files Upload", ()=>{
       cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
       cy.get('#filesToUpload').attachFile(['TITLE.docx', 'Database.docx'])
       cy.wait(5000);
       cy.get(":nth-child(6) > strong").should('have.text', 'Files You Selected:');

    })

    it.only("File upload -shadow Dom", ()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('Database.docx')
        cy.get('.smart-item-name', {includeShadowDom:true}).contains("Database.docx")

    })
})