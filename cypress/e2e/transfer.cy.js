describe('Transfer', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Verify that upon successful transfer, the amount from the account should be debited and the message "Transfer successfully completed" should be displayed', () => {
        const numc = 1000
        const num1 = 100
        const num2 = 100
        cy.userregistration_second('jose2@qa.com','jose2','123456678', '123456678')
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.login('jose2@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('exist')
        cy.verifyaccountsecond()
        cy.transfer(num1,'-100 contas')
        cy.closemodal()
        cy.transfer(num2,'-')
        cy.closemodal()
        const num_final = numc-num1-num2;
        cy.get('#textBalance').contains(num_final).should('exist')
    });
    it('Verify that transfer is only allowed when the balance is equal to or greater than the amount to be transferred', () => {
        const num1 = 100
        const num2 = 1000
        cy.userregistration_second('jose2@qa.com','jose2','123456678', '123456678')
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.login('jose2@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('exist')
        cy.verifyaccountsecond()
        cy.transfer(num1,'-100 contas')
        cy.closemodal()
        cy.transfer(num2,'-')
        cy.get('#modalText').should('include.text', 'Você não tem saldo suficiente para essa transação')
        cy.closemodal()
    });
    it('Verify that the transfer value cannot be equal to or less than zero', () => {
        const num1 = 0
        const num2 = -1
        cy.userregistration_second('jose2@qa.com','jose2','123456678', '123456678')
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.login('jose2@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('exist')
        cy.verifyaccountsecond()
        cy.transfer(num1,'-100 contas')
        cy.get('#modalText').should('include.text', 'Valor da transferência não pode ser 0 ou negativo')
        cy.closemodal()
        cy.transfer(num2,'-')
        cy.get('#modalText').should('include.text', 'Valor da transferência não pode ser 0 ou negativo')
        cy.closemodal()
    });
    it('Verify that an attempt to transfer to an invalid account will display an error message "Invalid or non-existent account"', () => {
        cy.userregistration_second('jose2@qa.com','jose2','123456678', '123456678')
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.login('jose2@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('exist')
        cy.verifyaccountsecond()
        cy.transferinvalid(100,'-',999,1)
        cy.get('#modalText').should('include.text', 'Conta inválida ou inexistente')
        cy.closemodal()
    });
    it('Verify that the account number and digit accept only numbers', () => {
        cy.userregistration_second('jose2@qa.com','jose2','123456678', '123456678')
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.login('jose2@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('exist')
        cy.verifyaccountsecond()
        cy.transferinvalid(100,'-','saas','as')
        cy.get('#modalText').should('include.text', 'Conta inválida ou inexistente')
        cy.closemodal()
    });
    it.skip('Verify that the description field is a required field', () => {
        cy.userregistration_second('jose2@qa.com','jose2','123456678', '123456678')
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.login('jose2@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('exist')
        cy.verifyaccountsecond()
        cy.transferdescription(100)
        cy.get('#modalText').should('include.text', 'Description invalid')
        cy.closemodal()
    })
})