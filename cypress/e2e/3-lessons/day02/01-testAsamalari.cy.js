describe('Test Aşamaları', () => {
    it('Temel Komutlar', () => {
        cy.visit('https://www.kitapyurdu.com')//given-->Test için ön hazırlık
        cy.contains('Üye Ol').click()//when-->eylemi gerçekleştirme
        cy.url().should('contain', 'account/register')//then-->testi doğrulama
    });
});