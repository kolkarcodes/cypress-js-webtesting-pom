class LoginPage {
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
}

export default new LoginPage();