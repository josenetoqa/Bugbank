describe('Statement', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Verify that the statement page displays the current available balance', () => {
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
        cy.get('#btn-EXTRATO').click()
        cy.get('#textBalanceAvailable').contains(num_final).should('exist')
        cy.get('.bank-statement__ContainerTransactions-sc-7n8vh8-8').within( () => {
        })
    });
    it('Verify that each transaction displays the date it was made, the type of transaction, and the amount', () => {
        const numc = 1000
        const num1 = 120
        const num2 = 100
        cy.userregistration_second('jose2@qa.com','jose2','123456678', '123456678')
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.login('jose2@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('exist')
        cy.verifyaccountsecond()
        cy.transfer(num1,'-100 contas')
        cy.closemodal()
        cy.transfer(num2,'-100 contas')
        cy.closemodal()
        const num_final = numc-num1-num2;
        cy.get('#textBalance').contains(num_final).should('exist')       
        cy.get('#btn-EXTRATO').click()
        cy.get('#textBalanceAvailable').contains(num_final).should('exist')
        cy.get('.bank-statement__ContainerTransaction-sc-7n8vh8-12 > :nth-child(3)').within(() => {
            cy.get('#textDateTransaction').should('be.visible');
            cy.get('#textTypeTransaction').should('include.text','Transferência enviada')
            cy.get('#textDescription').should('include.text','-100 contas')
            cy.get('#textTransferValue').contains('-R$ ' +num2 +',00').should('have.css', 'color', 'rgb(255, 0, 0)')
        })
       
    });
    it('Verify that the value of transactions that are out of the account is displayed in red and starts with the minus/negative sign (-)', () => {
        const numc = 1000
        const num1 = 150
        const num2 = 100
        cy.userregistration_second('jose2@qa.com','jose2','123456678', '123456678')
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.login('jose2@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('be.visible')
        cy.verifyaccountsecond()
        cy.transfer(num1,'-100 contas')
        cy.closemodal()
        cy.transfer(num2,'-')
        cy.closemodal()
        const num_final = numc-num1-num2;
        cy.get('#textBalance').contains(num_final).should('exist')     
        cy.get('#btn-EXTRATO').click()
        cy.get('#textBalanceAvailable').contains(num_final).should('exist')
        cy.get('.bank-statement__ContainerTransaction-sc-7n8vh8-12 > :nth-child(2)').within(() => {
            cy.get('#textDateTransaction').should('be.visible');
            cy.get('#textTypeTransaction').should('include.text','Transferência enviada')
            cy.get('#textDescription').should('include.text','-100 contas')
            cy.get('#textTransferValue').contains('-R$ ' +num1 +',00').should('have.css', 'color', 'rgb(255, 0, 0)')
        })
    });
    it('Verify that the value of transactions that are in the account is displayed in green', () => {
        const numc = 1000
        const num1 = 150
        const num2 = 100
        cy.userregistration_second('jose2@qa.com','jose2','123456678', '123456678')
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.login('jose2@qa.com','123456678')
        cy.url().should('eq','https://bugbank.netlify.app/home')
        cy.get('#textBalance').contains('R$ 1.000,00').should('be.visible')
        cy.verifyaccountsecond()
        cy.transfer(num1,'-100 contas')
        cy.closemodal()
        cy.transfer(num2,'-')
        cy.closemodal()
        const num_final = numc-num1-num2;
        cy.get('#textBalance').contains(num_final).should('exist')     
        cy.get('#btn-EXTRATO').click()
        cy.get('#textBalanceAvailable').contains(num_final).should('exist')
        cy.get('.bank-statement__ContainerTransaction-sc-7n8vh8-12 > :nth-child(2)').within(() => {
            cy.get('#textDateTransaction').should('be.visible');
            cy.get('#textTypeTransaction').should('include.text','Transferência enviada')
            cy.get('#textDescription').should('include.text','-100 contas')
            cy.get('#textTransferValue').contains('-R$ ' +num1 +',00').should('have.css', 'color', 'rgb(255, 0, 0)')
        })
        cy.get('#btnExit').click()
        cy.login('jose@qa.com','123456678')
        cy.get('#btn-EXTRATO').click()
        cy.get('.bank-statement__ContainerTransaction-sc-7n8vh8-12 > :nth-child(2)').within(() => {
            cy.get('#textDateTransaction').should('be.visible');
            cy.get('#textTypeTransaction').should('include.text','Transferência recebida')
            cy.get('#textDescription').should('include.text','-100 contas')
            cy.get('#textTransferValue').contains('R$ ' +num1 +',00').should('have.css', 'color', 'rgb(0, 128, 0)')
        })
    })
    it('Verify that transactions without a comment are displayed with the comment "-"', () => {
        
    });
});