describe("Contact Page",() => {


    it("Verify the Contact Page ",() => {

       cy.visit('https://www.play1.automationcamp.ir/forms.html')
    //    checking checkbox 
    //    cy.get(':nth-child(3) > .form-group > :nth-child(1) > .form-check-label').contains('Selenium')
    // cy.get('#rad_selenium').check()
    // then to do uncheck 
    // cy.get('#rad_selenium').uncheck() // Unchecks checkbox element
    // cy.contains('button','Submit Form').should('be.visible').click()
    // cy.get('#select_tool').select("Selenium").should('have.value','sel')   
    //  how to select multiple options 
    cy.get('#select_tool').select(['Selenium','Cypress']).invoke('val').should('deep.equal',['sel','cyp'])
    })


})