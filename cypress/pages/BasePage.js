class BasePage{


    verifyHeaderVisible(headerText) {
        cy.get('h1')
          .should('contain.text', headerText)
          .and('be.visible');
    }

    clickContactLink() {
        cy.get('[data-test="nav-contact"]')
          .should('be.visible')
          .click();
    }

}

export default BasePage();