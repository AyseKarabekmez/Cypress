



describe('Uygulama-01', () => {
    it('Temel Fonksiyonların Kullanımı', () => {
        // https://www.kitapyurdu.com sitesine gider
        cy.visit('https://www.kitapyurdu.com');
        //'üye ol' baglantısını tıkla
        cy.get('.register > a').click()
       // Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
       cy.get('#register-name').type('Ayşe').should('have.value','Ayşe')
    });
});