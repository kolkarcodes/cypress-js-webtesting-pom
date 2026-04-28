class LoginPage {
    visit() {
        cy.visit('/auth/login');
        console.log('Navigated to Login Page');
    }

    enterUsername(username){
        cy.get('#username').type(username);
        console.log('Username entered');
    }

    enterPassword(password){
        cy.get('#password').type(password);
        console.log('Password entered');
    }

    clickLoginButton(){
        cy.get('button[type="submit"]').click();
    }
}

export default new LoginPage();