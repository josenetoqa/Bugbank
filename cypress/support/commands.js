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
      cy.get('div[class="card__login"]').within ( () => {
        cy.get('input[name="email"]').type(email,{force: true, log: false})
        cy.get('input[name="password"]').type(password,{force: true, log: false})
        cy.get('.otUnI').click()
    })
  })
Cypress.Commands.add('login_no_password', (email) => {
    cy.get('div[class="card__login"]').within ( () => {
      cy.get('input[name="email"]').type(email,{force: true, log: false})
      cy.get('.otUnI').click()
  })
})
Cypress.Commands.add('login_no_email', (password) => {
    cy.get('div[class="card__login"]').within ( () => {
        cy.get('input[name="password"]').type(password,{force: true, log: false})
        cy.get('.otUnI').click()
    })
})
Cypress.Commands.add('userregistration_login', (email,name,password,passwordConfirmation)=> {
    cy.get('.ihdmxA').click()
    cy.get('div[class="card__register').within( () => {
        cy.get('input[name="email"]').clear({force: true}).type(email,{force: true, log: false})
        cy.get('input[name="name"]').clear({force: true}).type(name,{force: true, log: false})
        cy.get('input[name="password"]').clear({force: true}).type(password,{force: true, log: false})
        cy.get('input[name="passwordConfirmation"]').clear({force: true}).type(passwordConfirmation,{force: true, log: false})
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
    cy.get('#btnCloseModal').click()
})
Cypress.Commands.add('userregistration_second', (email,name,password,passwordConfirmation)=> {
    cy.get('.ihdmxA').click()
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
      cy.wrap(digito).as('digito_second')
      cy.wrap(numero).as('numero_second')
    })
    cy.get('#btnCloseModal').click()
})
Cypress.Commands.add('transfer', (value,description) => {
    cy.get('#btn-TRANSFERÊNCIA').click()
    cy.get('.account__data').within( () => {
        cy.get('@numero').then(num_account => {
             cy.get('input[name="accountNumber"]').type(num_account)
        })
        cy.get('@digito').then(num_digit => {
         cy.get('input[name="digit"]').type(num_digit)
    })  
 })
 cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type(value)
 cy.get(':nth-child(3) > .input__default').type(description)
 cy.get('.style__ContainerButton-sc-1wsixal-0').click()
})
Cypress.Commands.add('transferinvalid', (value,description,num_account,num_digit) => {
    cy.get('#btn-TRANSFERÊNCIA').click()
    cy.get('.account__data').within( () => {
        cy.get('input[name="accountNumber"]').type(num_account)
        cy.get('input[name="digit"]').type(num_digit)
    })  
 cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type(value)
 cy.get(':nth-child(3) > .input__default').type(description)
 cy.get('.style__ContainerButton-sc-1wsixal-0').click()
})
Cypress.Commands.add('transferdescription', (value) => {
    cy.get('#btn-TRANSFERÊNCIA').click()
    cy.get('.account__data').within( () => {
        cy.get('@numero').then(num_account => {
             cy.get('input[name="accountNumber"]').type(num_account)
        })
        cy.get('@digito').then(num_digit => {
         cy.get('input[name="digit"]').type(num_digit)
    })  
 })
 cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type(value)
 cy.get('.style__ContainerButton-sc-1wsixal-0').click()
})
Cypress.Commands.add('logintest', (
    user = 'jose@qa.com',
    password = '123456678',
    { cacheSession = true } = {},
  ) => {
    const login = () => {
        cy.visit('/')
        cy.userregistration_login('jose@qa.com','jose','123456678', '123456678')
        cy.get('div[class="card__login"]').within ( () => {
            cy.get('input[name="email"]').type(user,{force: true, log: false})
            cy.get('input[name="password"]').type(password,{force: true, log: false})
            cy.get('.otUnI').click()
        })
    }
    const validate = () => {
      cy.visit('/')
      cy.location('pathname', { timeout: 1000 })
        .should('not.eq', '/home')
    }
    const options = {
      cacheAcrossSpecs: true,
      validate,
    }
    if (cacheSession) {
      cy.session(user, login, options)
    } else {
      login()
    }
  })