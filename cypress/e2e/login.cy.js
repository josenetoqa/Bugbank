describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Verify that valid and registered users will be redirected to the home page', () => {
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.login('jose@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('exist')
        cy.verifyaccount()
    })
    it('Verify that invalid or un-registered users will not be authorized to login', () => {
        cy.login('jos1111e@qa.com','12345667899')
        cy.get('#modalText').should('include.text', 'Usuário ou senha inválido')
    });
    it('Verify that the email and password fields are required', () => {
        cy.login_no_password('jose@qa.com')
        cy.get('.kOeYBn > .input__warging').should('include.text','É campo obrigatório')
    });
    it('Verify that the email address field validates correctly', () => {
        cy.login_no_email('1234567890')
        cy.get('.kOeYBn > .input__warging').should('include.text','É campo obrigatório')
    });
});