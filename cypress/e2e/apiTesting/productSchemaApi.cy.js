import Ajv from 'ajv';
import productSchema from '../../schemas/productSchema';

describe('Products Schema Validation', () => {

    it('should validate products API schema', () => {

        cy.request({

            method: 'GET',

            url: 'https://api.practicesoftwaretesting.com/products'

        }).then((response) => {

            expect(response.status).to.eq(200);

            const ajv = new Ajv();

            const validate = ajv.compile(productSchema);

            const valid = validate(response.body);

            expect(valid).to.be.true;

        });

    });

});