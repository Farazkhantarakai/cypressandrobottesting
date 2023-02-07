// describe("Contact Page",() => {
//     it("Verify if the contact page is reachable",() => {
//         cy.viewport(393,851)
//         cy.visit("https://www.google.com/")
//         cy.get('.SDkEP').type("Bloodbourne.{enter}",{
//             delay:400
//         })
// })
// })
// describe('ContactPage',() => {
// it("Verify the page is reachable or not",() => 
// {
//      cy.visit('https://docs.cypress.io/api/commands/should')
//      cy.get('[href="/examples/recipes"]').should('be.visible'
// })
// })

// describe("Form Practice",() => {

// it('if all the content is working or not',() => {

//     cy.visit('https://www.play1.automationcamp.ir/forms.html')
//     cy.get('#check_python').check()
//     // cy.get('#check_validate').contains("PYTHON")
//     cy.wait(500)
//     cy.get('#check_python').uncheck();
// })
// })


// describe('Contact' ,() => {

// it('verify the textfield is working or not',() => {

//     cy.visit('https://www.play1.automationcamp.ir/forms.html')
//     cy.get('#exp').type('Melbourne.{Enter}',{
//         delay:5
//     })
//     cy.contains('Melbourne')


// })

// })


describe('Contace',() => {
    it('Verify the page ',() => {
        cy.visit('https://www.play1.automationcamp.ir/forms.html')
        // cy.get('#check_java').check()
        // cy.contains('JAVA')
        // cy.get('#check_python').should('not.be.checked')
        // cy.get('#rad_selenium').check()
        // cy.get('#rad_selenium').should('be.checked').should('be.visible')
        // cy.contains('SELENIUM')
        // cy.get('#upload_cv').click()
        // cy.get('#select_tool').select('Selenium').should('have.value','sel')
        // cy.wait()
        // cy.contains('sel')
        // how to select options from multiple 
        // cy.get('#select_tool').select(['Selenium','Cypress']).invoke('val').should('deep.equal',['sel','cyp']) 
        

    })
})