import LoginPage from '../../pages/LoginPage';

describe('Login Test', () => {
  it('should login successfully with valid credentials', () => {
    cy.fixture('users').then((users) => {

      LoginPage.visit('/auth/login');
      cy.contains('Login').should('be.visible');
      LoginPage.enterEmailId(users.validAdminUser.email);
      LoginPage.enterPassword(users.validAdminUser.password);
      LoginPage.clickLoginButton();

    // assertions to verify successful login - checking url contains dashboard keyword
    cy.url().should('include', '/dashboard');
  });
});
});