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
        cy.get('@numero_second').then(code => {
            cy.get('#textAccountNumber').should('include.text', code)
            cy.get('@digito_second').then(code1 => {
                cy.get('#textAccountNumber').should('include.text', code1)
            })
        })
        cy.transfer(num1,'-100 contas')
        cy.transfer(num2,'-')
        const num_final = numc-num1-num2;
    cy.get('#textBalance').contains(num_final).should('exist')
    });
    it('Verify that only valid accounts are allowed to transfer', () => {
        
    });
    it('Verify that transfer is only allowed when the balance is equal to or greater than the amount to be transferred', () => {
        //Você não tem saldo suficiente para essa transação
    });
    it('Verify that an attempt to transfer to an invalid account will display an error message "Invalid or non-existent account"', () => {
        
    });
    it('Verify that the account number and digit accept only numbers', () => {
        
    });
    it('Verify that the description field is a required field', () => {
        
    });
    it('Verify that the transfer value cannot be equal to or less than zero', () => {
        //Valor da transferência não pode ser 0 ou negativo 
    });
    it('Verify that upon successful transfer, you should be redirected to the statement', () => {
        
    })
});