
 class ContactPage  {


    visit() {
        cy.visit('/');
    }

    clickonContactLink() {
        cy.get('[data-test="nav-contact"]')
          .should('be.visible')
          .click();
    }

    fillContactForm(firstName,lastName, email, message) {
        cy.get('#first_name').type(firstName);
        cy.get('#last_name').type(lastName);
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
        cy.get('h3')
          .should('contain.text', headerText)
          .and('be.visible');
    }   

    getAlertMessage() {
    return cy.get('.alert')
             .should('be.visible')
             .invoke('text');
}
}

export default new ContactPage();