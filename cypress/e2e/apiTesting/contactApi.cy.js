import contactinfo from '../../fixtures/contact.json';

describe('Contact API Test', () => {

    it('should submit contact form', () => {

        cy.request({

            method: 'POST',

            url: 'https://api.practicesoftwaretesting.com/messages',

            body: {

                first_name: contactinfo.contactInfo.firstName,

                last_name: contactinfo.contactInfo.lastName,

                email: contactinfo.contactInfo.email,

                subject:contactinfo.contactInfo.subject,

                message: contactinfo.contactInfo.message

            }

        }).then((response) => {

            expect(response.status).to.eq(200);

            expect(response.body.message)
              .to.contain('This is a test message to check functionality purposes.');

        });

    });

});