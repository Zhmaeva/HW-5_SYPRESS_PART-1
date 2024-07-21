// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
    if(email) {
        cy.get('#mail').type(email);
    }
    if(password) {
        cy.get('#pass').type(password);
    }
    cy.contains('Submit').click();
 })

 Cypress.Commands.add('addBook', (title, description, author) => {
    cy.contains('Add new').click();
    if(title) {
        cy.get('#title').type(title, { delay: 100 });
    }
    if(description) {
        cy.get('#description').type(description, { delay: 100 });
    }
    if(author) {
        cy.get('#authors').type(author, { delay: 100 });
    }
    cy.contains('Submit').click();
 })

 Cypress.Commands.add('addToFavorite', (title) => {
    cy.contains('Books list').click();
    cy.contains(title).contains('Add to favorite').click();
 });

 Cypress.Commands.add('deleteFromFavorite', (title) => {
    cy.contains('Favorites').click();
    cy.contains(title).contains('Delete from favorite').click();
 });




// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })