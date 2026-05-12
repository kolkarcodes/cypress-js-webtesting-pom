
describe('Auth API Test',()=>{
    it('should login successfully with valid credentials', () => {
        cy.request({
            method: 'POST',
            url: 'https://api.practicesoftwaretesting.com/users/login',
            body: {
                "email":"customer@practicesoftwaretesting.com",
                "password":"welcome01"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});