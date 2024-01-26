/*https://www.kitapyurdu.com sitesine git
'Üye Ol' bağlantısına tıkla
Kayıt formunda 'Ad' alanına değer yaz ve doğrula*/

describe('', () => {
    it('', () => {
        cy.visit('https://www.kitapyurdu.com');
        cy.url().should('eq','https://www.kitapyurdu.com/')
        cy.title().should('contain','Kitapyurdu, Kitapla buluşmanın en kolay yolu')
        cy.xpath('//a[.="Üye Ol"]').click()
        cy.xpath('//*[@id="register-name"]').type('Ayşe').should('have.value','Ayşe')

        
    });
});