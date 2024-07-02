/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('login', () => {
    cy.fixture('data_files.json').then((users_cy) => {  
    // Administrador principal
    const correoSuperAdmin = users_cy.superadministrador.correo;
    const contrasenaSuperAdmin = users_cy.superadministrador.contrasena;
    // Admnistrador
    const correoAdmin = users_cy.administrador.correo;
    const contrasenaAdmin = users_cy.administrador.contrasena;
    // Customizado
    const correoCusto = users_cy.customizado.correo;
    const contrasenaCusto = users_cy.customizado.contrasena;
    // Supervisor
    const correoSuperv = users_cy.supervisor.correo;
    const contrasenaSuperv = users_cy.supervisor.contrasena;
    // Operario Editor
    const correoOpeditor = users_cy.opeditor.correo;
    const contrasenaOpeditor = users_cy.opeditor.contrasena;
    // Operario
    const correoOperario = users_cy.operario.correo;
    const contrasenaOperario = users_cy.operario.contrasena;
    cy.visit('/')
    cy.contains(' eliminando el papel', { timeout: 10000 })
    cy.get('#sign_in_nav').click()
    cy.get('#user_login').type(correoSuperAdmin)
    cy.get('#user_password').type(contrasenaSuperAdmin)
    cy.get('button[type="submit"]').click()
    });
});

    
