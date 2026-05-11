import LoginPage from '../../pages/LoginPage';


describe('Login Test', () => {
  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {

      LoginPage.visit();
      cy.contains('Login').should('be.visible');
      LoginPage.verifyLabelText('label[for="email"]', 'Email address *');
      LoginPage.enterEmailId(users.validAdminUser.email);
      LoginPage.verifyLabelText('label[for="password"]', 'Password *');
      LoginPage.enterPassword(users.validAdminUser.password);
      LoginPage.verifyElementValue(
        '[data-test="login-submit"]',
        'Login'
      );
      LoginPage.clickLoginButton();

      // assertions to verify successful login - checking url contains dashboard keyword
      cy.url().should('include', '/dashboard');
    });
  });
});