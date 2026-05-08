import BasePage from './BasePage';

class LoginPage extends BasePage {
    visit() {
        cy.visit('/auth/login');
    }

    enterEmailId(email){
        cy.get('#email').type(email);
    }

    enterPassword(password){
        cy.get('#password').type(password);
    }

    clickLoginButton(){
        cy.get('[data-test="login-submit"]').should('be.visible').should('not.be.disabled').click();
    }

    verifyEmailLabel(expectedEmailLabel){
        cy.get('label[for="email"]').should('be.visible').and('have.text', expectedEmailLabel);
    }
}

export default new LoginPage();