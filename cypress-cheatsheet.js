// Installation:
// Install Cypress via npm
// npm install cypress --save-dev

// Open Cypress Test Runner
// npx cypress open

// Basic commands:
// Visit a URL
cy.visit('https://www.example.com');

// Get an element by selector
cy.get('#elementId');

// Type text into an input field
cy.get('#inputId').type('text to type');

// Click on an element
cy.get('.buttonClass').click();

// Assert an element's text
cy.get('.result').should('have.text', 'expected text');

// Assert an element's visibility
cy.get('.element').should('be.visible');

// Assert an element's attribute value
cy.get('.element').should('have.attr', 'attributeName', 'expectedValue');

// Wait for an element to be visible
cy.get('.element').should('be.visible');

// Wait for an element to not be visible
cy.get('.element').should('not.be.visible');

// Assert the URL
cy.url().should('include', '/expected-url');

// Assert the page title
cy.title().should('include', 'Expected Title');

// Working with iframes:
// Switch to an iframe
cy.iframe('.iframeClass').within(() => {
  // Perform actions within the iframe
  cy.get('.iframeElement').click();
});

// Assertions and expectations:
cy.get('.element').should('exist');
cy.get('.element').should('not.exist');
cy.get('.element').should('be.visible');
cy.get('.element').should('not.be.visible');
cy.get('.element').should('have.text', 'expected text');
cy.get('.element').should('have.attr', 'attributeName', 'expectedValue');
cy.get('.element').should('have.class', 'className');
cy.get('.element').should('have.value', 'expectedValue');

// Working with dropdowns:
cy.get('.dropdown').select('optionValue');
cy.get('.dropdown').select('optionText');

// Interacting with checkboxes and radio buttons:
cy.get('.checkbox').check();
cy.get('.radio').check('optionValue');
cy.get('.checkbox').uncheck();

// Keyboard actions:
cy.get('.input').type('text');
cy.get('.input').type('{enter}');
cy.get('.input').type('{tab}');
cy.get('.input').type('{backspace}');

// Mouse actions:
cy.get('.element').click();
cy.get('.element').dblclick();
cy.get('.element').rightclick();
cy.get('.element').trigger('mouseover');

// Working with alerts:
cy.on('window:alert', (text) => {
  // Handle alert
});

// Working with cookies:
cy.getCookie('cookieName').should('have.property', 'value', 'expectedValue');
cy.setCookie('cookieName', 'cookieValue');
cy.clearCookie('cookieName');

// Handling network requests:
cy.intercept('GET', '/api/endpoint').as('alias');
cy.wait('@alias');

// Custom commands:
Cypress.Commands.add('customCommand', () => {
  // Custom command logic
});