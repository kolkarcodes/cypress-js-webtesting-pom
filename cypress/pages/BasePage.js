class BasePage {

    clickElement(locator) {

        cy.get(locator)
            .should('be.visible')
            .click();
    }

    enterText(locator, text) {

        cy.get(locator)
            .should('be.visible')
            .clear()
            .type(text);
    }

    verifyText(locator, expectedText) {

        cy.get(locator)
            .should('be.visible')
            .and('contain.text', expectedText);
    }

    selectDropdown(locator, value) {

        cy.get(locator)
            .should('be.visible')
            .select(value);
    }

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

      verifyLabelText(lableLocator,expectedEmailLabel){
        cy.get(lableLocator).should('be.visible').and('have.text', expectedEmailLabel);
    }

}

export default BasePage();