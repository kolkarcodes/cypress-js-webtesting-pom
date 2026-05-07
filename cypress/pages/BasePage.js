class BasePage {

    verifyHeaderVisible(headerText) {
        cy.contains('h1', headerText)
          .should('be.visible');
    }

}

export default new BasePage();