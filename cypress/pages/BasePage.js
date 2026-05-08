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

    //function to get label text and verify with expected text
    verifyLabelText(locator, expectedText) {

        cy.get(locator)
          .should('be.visible')
          .and('contain.text', expectedText);
    }

    //function to verify element value(Button value) with expected value
    verifyElementValue(locator, expectedValue) {

        cy.get(locator)
          .should('have.value', expectedValue);
    }

}

export default BasePage;