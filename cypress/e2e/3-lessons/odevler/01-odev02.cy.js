// https://automationteststore.com adresini ziyaret et
// Login ol
// Login Name = techpro
// Password = techpro!
// "Login" butonuna tıkla
// Menüdeki ACCOUNT seçeneğine tıkla
// Edit account details butonuna tıkla
// Formdaki dolu olan alanları temizle
describe('ödev-02', () => {
    it('uygulama', () => {
        cy.visit('https://automationteststore.com');
        cy.contains('Login or register').click()
        cy.get('#loginFrm_loginname').type('techpro')
    cy.get('#loginFrm_password').type('techpro!')
    cy.get('#loginFrm > fieldset > .btn').click()
    cy.get('.nav-dash > :nth-child(1) > a').click()
    cy.get('#AccountFrm_firstname').clear().type('Java');
    cy.get('#AccountFrm_lastname').clear().type('cypress')
    cy.get('#AccountFrm_email').clear().type('cassian.callahan@falkcia.com')
    cy.get('[title="Continue"]').click()
    cy.get('.alert-success').click().should('contains','account has been successfully updated.')

    // describe('Odev-02', () => {
    //     it('Eylem Komutlarinin Kullanimi', () => {
    //         cy.visit('https://automationteststore.com');
    //         cy.contains('Login or register').click();
    //         cy.get('#loginFrm').within(() => {
    //             cy.get('#loginFrm_loginname').type('techpro')
    //             cy.get('#loginFrm_password').type('techpro!')
    //             cy.get('button').click()
    //         })
    //         cy.get('[data-original-title="Edit account details"]').click();
    //         cy.get('#AccountFrm_firstname').clear().type('Gürkay')
    //         cy.get('#AccountFrm_lastname').clear().type('Birinci')
    //         cy.get('#AccountFrm_email').clear().type('gurkay@birinci.com')
    //         cy.get('[title="Continue"]').click()
    //         cy.get('.alert-success').should('have.text', '\n×\nSuccess: Your account has been successfully updated.')
    //GÜRKAY hocadan gelen
    //     });
    //});


      

        
    });
});