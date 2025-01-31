/// <reference types="cypress" />
import 'cypress-file-upload'; // Import file upload support

describe('Job Application Form Automation', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; 
        });

        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Valid form submission with sample data', () => {
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#userEmail').type('johndoe@example.com');
        cy.get('#gender-radio-1').check({ force: true });
        cy.get('#userNumber').type('1234567890');

        
        cy.get('#dateOfBirthInput').click();
        cy.get('.react-datepicker__year-select').select('1995');
        cy.get('.react-datepicker__month-select').select('January');
        cy.get('.react-datepicker__day--001') 
          .not('.react-datepicker__day--outside-month') 
          .first() 
          .click();

        // Enter Subject
        cy.get('#subjectsInput').type('Maths{enter}');

        // Select Hobbies
        cy.get('#hobbies-checkbox-1').check({ force: true });

        // Upload a sample file 
        cy.get('#uploadPicture').attachFile('sample.png');

        // Enter Address
        cy.get('#currentAddress').type('123 Main St, New York');

        // Select State & City
       
        cy.get('#state').click(); // Click dropdown
        cy.get('.css-26l3qy-menu') // This might be the dropdown options container
        .contains('NCR')
        .click();
  
       cy.get('#city').click();
       cy.get('.css-26l3qy-menu')
       .contains('Delhi')
       .click();


        // Submit Form
        cy.get('#submit').click();

        // Verify Success Message
        cy.contains('Thanks for submitting the form').should('be.visible');
    });


  
    
    

});
