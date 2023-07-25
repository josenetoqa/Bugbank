Cypress.Commands.add('userregistration', (email,name,password,passwordConfirmation)=> {
    cy.get('div[class="card__register').within( () => {
        cy.get('input[name="email"]').type(email,{force: true, log: false})
        cy.get('input[name="name"]').type(name,{force: true, log: false})
        cy.get('input[name="password"]').type(password,{force: true, log: false})
        cy.get('input[name="passwordConfirmation"]').type(passwordConfirmation,{force: true, log: false})
        })
        cy.get('#toggleAddBalance').click({force: true})
        cy.get('.CMabB').click({force: true})
        cy.get('p', {log: false})
    .contains(new RegExp('^A conta \\d+-\\d+ foi criada com sucesso$'), {log: false})
    .then({log:false}, elem => {
      const match = elem.text().match(new RegExp('\\d+-\\d+'))[0];
      const numero = match.split('-')[0];
      const digito = match.split('-')[1];

      cy.wrap(digito).as('digito')
      cy.wrap(numero).as('numero')
    })
})
Cypress.Commands.add('userregistration_no_balance', (email,name,password,passwordConfirmation)=> {
    cy.get('div[class="card__register').within( () => {
        cy.get('input[name="email"]').type(email,{force: true, log: false})
        cy.get('input[name="name"]').type(name,{force: true, log: false})
        cy.get('input[name="password"]').type(password,{force: true, log: false})
        cy.get('input[name="passwordConfirmation"]').type(passwordConfirmation,{force: true, log: false})
        })
        cy.get('.CMabB').click({force: true})
    cy.get('p', {log: false})
    .contains(new RegExp('^A conta \\d+-\\d+ foi criada com sucesso$'), {log: false})
    .then({log:false}, elem => {
      const match = elem.text().match(new RegExp('\\d+-\\d+'))[0];
      const numero = match.split('-')[0];
      const digito = match.split('-')[1];
      cy.wrap(digito).as('digito')
      cy.wrap(numero).as('numero')
    })
})
Cypress.Commands.add('userregistratio_no_name', (email,password,passwordConfirmation)=> {
    cy.get('div[class="card__register').within( () => {
        cy.get('input[name="email"]').type(email,{force: true, log: false})
        cy.get('input[name="password"]').type(password,{force: true, log: false})
        cy.get('input[name="passwordConfirmation"]').type(passwordConfirmation,{force: true, log: false})
        })
        cy.get('.CMabB').click({force: true})
})
Cypress.Commands.add('userregistratio_no_email', (name,password,passwordConfirmation)=> {
    cy.get('div[class="card__register').within( () => {
        cy.get('input[name="name"]').type(name,{force: true, log: false})
        cy.get('input[name="password"]').type(password,{force: true, log: false})
        cy.get('input[name="passwordConfirmation"]').type(passwordConfirmation,{force: true, log: false})
        })
        cy.get('.CMabB').click({force: true})
})
Cypress.Commands.add('userregistratio_no_password', (email,name,passwordConfirmation)=> {
    cy.get('div[class="card__register').within( () => {
        cy.get('input[name="email"]').type(email,{force: true, log: false})
        cy.get('input[name="name"]').type(name,{force: true, log: false})
        cy.get('input[name="passwordConfirmation"]').type(passwordConfirmation,{force: true, log: false})
        })
        cy.get('.CMabB').click({force: true})
})
Cypress.Commands.add('userregistratio_no_passwordConfirmation', (email,name,password)=> {
    cy.get('div[class="card__register').within( () => {
        cy.get('input[name="email"]').type(email,{force: true, log: false})
        cy.get('input[name="name"]').type(name,{force: true, log: false})
        cy.get('input[name="password"]').type(password,{force: true, log: false})
        })
        cy.get('.CMabB').click({force: true})
})
Cypress.Commands.add('userregistratio_d_password', (email,name,password,passwordConfirmation)=> {
    cy.get('div[class="card__register').within( () => {
        cy.get('input[name="email"]').type(email,{force: true, log: false})
        cy.get('input[name="name"]').type(name,{force: true, log: false})
        cy.get('input[name="password"]').type(password,{force: true, log: false})
        cy.get('input[name="passwordConfirmation"]').type(passwordConfirmation,{force: true, log: false})
        })
        cy.get('.CMabB').click({force: true})
})
Cypress.Commands.add('login', (email, password) => {
      cy.visit('/')
      cy.get('div[class="card__login"]').within ( () => {
        cy.get('input[name="email"]').type(email,{force: true, log: false})
        cy.get('input[name="password"]').type(password,{force: true, log: false})
        cy.get('.otUnI').click()
    })
  })