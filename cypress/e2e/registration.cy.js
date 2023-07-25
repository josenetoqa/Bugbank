describe('Registration', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.ihdmxA').click()
    });
    it('Verify that a successfully registered account must display the account number that was created', () => {
        cy.userregistration_no_balance('jose@qa.com','jose','123456678', '123456678')
        cy.get('@numero').then(code => {
            cy.get('#modalText').should('include.text', code)
        })
        cy.get('#btnCloseModal').click()
    })
    it('Verify that the "Create account with balance" option creates an account with a balance of R$ 1,000.00', () => {
        cy.userregistration('jose@qa.com','jose','123456678', '123456678')
        cy.get('#modalText').should('be.visible')
        cy.get('#btnCloseModal').click()
        cy.login('jose@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('exist')
        cy.get('@numero').then(code => {
            cy.get('#textAccountNumber').should('include.text', code)
        })
    })
    it('Verify that the "Create account with no balance" option creates an account with a balance of R$ 0.00', () => {
        cy.userregistration_no_balance('jose@qa.com','jose','123456678', '123456678')
        cy.get('#modalText').should('be.visible')
        cy.get('#btnCloseModal').click()
        cy.login('jose@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 0,00').should('exist')
        cy.get('@numero').then(code => {
            cy.get('#textAccountNumber').should('include.text', code)
        })
    });
    it('Verify that the name field is required', () => {
        cy.userregistratio_no_name('jose@email.com','123456678','123456678')
        cy.get('#modalText').should('include.text', 'Nome não pode ser vazio.')
    });
    it('Verify that the email field is required', () => {
        cy.userregistratio_no_email('jose','12345678','12345678')
        cy.get('.kOeYBn > .input__warging').should('include.text','É campo obrigatório')
    });
    it('Verify that the password field is required', () => {
        cy.userregistratio_no_password('jose@email.com','jose','12345678')
        cy.get('.kOeYBn > .input__warging').should('include.text','É campo obrigatório')
    });
    it('Verify that the confirmation password field is required', () => {
        cy.userregistratio_no_passwordConfirmation('jose@email.com','jose','12345678')
        cy.get('.kOeYBn > .input__warging').should('include.text','É campo obrigatório')
    });
    it('Verify that the password and confirmation password must be the same', () => {
        cy.userregistratio_d_password('jose@qa.com','jose','123456678', '123456679')
        cy.get('#modalText').should('include.text', 'As senhas não são iguais.')
    });
    it('Verify that the email address field validates correctly', () => {
        cy.userregistratio_no_name('joseemail.com','123456678','123456678')
        cy.get('.kOeYBn > .input__warging').should('include.text','Formato inválido')
    });
  
});

