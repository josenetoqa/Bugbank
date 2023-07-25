describe('Transfer', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Verify that only valid accounts are allowed to transfer', () => {
        
    });
    it('Verify that transfer is only allowed when the balance is equal to or greater than the amount to be transferred', () => {
        
    });
    it('Verify that an attempt to transfer to an invalid account will display an error message "Invalid or non-existent account"', () => {
        
    });
    it('Verify that the account number and digit accept only numbers', () => {
        
    });
    it('Verify that the description field is a required field', () => {
        
    });
    it('Verify that the transfer value cannot be equal to or less than zero', () => {
        
    });
    it('Verify that upon successful transfer, the amount from the account should be debited and the message "Transfer successfully completed" should be displayed', () => {
        
    });
    it('Verify that upon successful transfer, you should be redirected to the statement', () => {
        
    });
});