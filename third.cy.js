/// <reference types="cypress" />

describe('Email Field - Invalid Format Validation', () => {
  beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
          return false; 
      });

      cy.visit('https://demoqa.com/automation-practice-form');
  });

  const invalidEmails = [
      'invalid-email',
      'invalid@',
      'invalid@domain',
      'invalid@.com',
      '@domain.com'
  ];

  invalidEmails.forEach((email) => {
      it(`Should show validation error for invalid email: ${email}`, () => {
          cy.get('#userEmail').clear().type(email);
          cy.get('#submit').click(); 

          cy.get('#userEmail').then(($input) => {
              expect($input[0].validationMessage).to.contain('Please include an "@" in the email address.');
          });
      });
  });
});
