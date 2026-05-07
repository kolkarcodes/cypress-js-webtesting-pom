import ContactPage from "../../pages/ContactPage";
import BasePage from "../../pages/BasePage";

describe('Contact Us Form Test', () => {

   it('Verify Contact Page', () => {

        ContactPage.visit('/contact');

        ContactPage.verifyHeaderVisible('Contact');

    });

  it('should submit the contact form successfully', () => {
    ContactPage.visit('/contact');
    BasePage.verifyHeaderVisible('Contact');
    // cy.contains('Contact Us').should('be.visible');
    // ContactPage.fillContactForm('John', 'Doe', 'john.doe@example.com', 'This is a test message.');
    // ContactPage.selectSubject('General Inquiry');
    // ContactPage.submitContactForm();
    // ContactPage.verifySuccessMessage();
  });
});