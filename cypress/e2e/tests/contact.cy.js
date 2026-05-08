import ContactPage from '../../pages/ContactPage';

describe('Contact Test', () => {

  it('User should submit the contact form successfully', () => {
    cy.fixture('contact').then((contactInfo) => {

      ContactPage.visit();

      ContactPage.clickonContactLink();

      ContactPage.verifyHeaderVisible('Contact');

      ContactPage.fillContactForm(
        contactInfo.contactInfo.firstName,
        contactInfo.contactInfo.lastName,
        contactInfo.contactInfo.email,
        contactInfo.contactInfo.message
      );

      ContactPage.selectSubject(contactInfo.contactInfo.subject);

      ContactPage.submitContactForm();

      ContactPage.getAlertMessage().then((text) => {

          expect(text)
            .to.contain(contactInfo.contactInfo.alertMessage);

      });

    });

  });

});