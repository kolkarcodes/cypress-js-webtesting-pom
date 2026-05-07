import ContactPage from '../../pages/ContactPage';

describe('Contact Test', () => {

  it('should submit the contact form successfully', () => {
      ContactPage.visit();
      ContactPage.clickContactLink();
      ContactPage.verifyHeaderVisible('Contact');
      ContactPage.fillContactForm('John', 'Doe', 'john.doe@example.com', 'This is a test message to check functionality purposes.');
      ContactPage.selectSubject('Webmaster');
      ContactPage.submitContactForm();
      ContactPage.verifySuccessMessage();

  });
});