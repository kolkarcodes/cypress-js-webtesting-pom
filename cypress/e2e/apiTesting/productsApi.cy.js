describe('Products API Test', () => {

    it('should fetch all products', () => {

        cy.request({

            method: 'GET',

            url: 'https://api.practicesoftwaretesting.com/products'

        }).then((response) => {

            expect(response.status).to.eq(200);

            expect(response.body).to.have.property('data');

            expect(response.body.data.length)
              .to.be.greaterThan(0);

        });

    });


  });

  describe('Single Product API Test', () => {

    it('should fetch product id dynamically', () => {

        cy.request({

            method: 'GET',
            url: `https://api.practicesoftwaretesting.com/products/`,

        }).then((response) => {
   
            const productId = response.body.data[0].id;
        

        cy.request({

            method: 'GET',

            url: `https://api.practicesoftwaretesting.com/products/${productId}`

        }).then((response) => {

            expect(response.status).to.eq(200);

            expect(response.body).to.not.be.null;

            console.log(response.body);

        });

    });

    });

});