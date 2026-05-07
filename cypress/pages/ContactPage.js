import BasePage from './BasePage';

export class ContactPage extends BasePage {


    visit() {
        cy.visit('/');
    }

    // get contactUsButton() {
    //     return cy.get('[data-test="contact-us-button"]');
    // }

    

    fillContactForm(firstName,lastName, email, message) {
        cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#email').type(email);
        cy.get('#message').type(message);
    }

    submitContactForm() {
        cy.get('[data-test="contact-submit"]').should('be.visible').should('not.be.disabled').click();
    }

    selectSubject(subject) {
      cy.get('#subject').select(subject);
    }

    verifySuccessMessage() {
      cy.get('[data-test="contact-success"]').should('be.visible').and('contain', 'Thanks for your message! We will contact you shortly.');
    }

    verifyHeaderVisible(headerText) {
        cy.get('h1')
          .should('contain.text', headerText)
          .and('be.visible');
    }   
}

export default new ContactPage();