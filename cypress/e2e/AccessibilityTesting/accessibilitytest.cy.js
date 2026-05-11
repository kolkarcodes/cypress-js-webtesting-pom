
describe('Accessibility Test', () => {

    it('should not have accessibility violations on homepage', () => {

        
        cy.visit('/');
         cy.injectAxe();

        // cy.checkA11y();
           cy.checkA11y(null, null, (violations) => {

            violations.forEach((violation) => {

                cy.log('Rule: ' + violation.id);

                cy.log('Description: ' + violation.description);

                cy.log('Help: ' + violation.help);

            });

        });


    });

});
