/// <reference types="cypress" />

describe('Job Application Form - Mandatory Fields Blank', () => {
  beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
          return false; 
      });

      cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should show validation errors when mandatory fields are left blank', () => {
    cy.get('#submit').click(); 

    // Validate First Name field is required
    cy.get('#firstName').should('have.attr', 'required'); 

    // Validate Last Name field is required
    cy.get('#lastName').should('have.attr', 'required');

    // Validate Mobile Number field
    cy.get('#userNumber').should('have.attr', 'required');

    // Validate Email field
    cy.get('#userEmail').should('have.attr', 'required');

    // Ensure gender selection remains unselected
    cy.get('#gender-radio-1').should('not.be.checked');
});

});
