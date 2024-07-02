describe('Home Page', () => {
  it('should create a new task', () => {
    cy.login();
    cy.get('#need-help').should('exist');
    cy.get('.navbar-header', { timeout: 10000 }).click();
    cy.get('i[data-original-title="Asignar Tareas"]').click();
    cy.visit('https://staging.mydatascope.com/task_assigns/new');

    ///// iframe tabla de tareas - Botón crear nueva tarea
    cy.get('iframe[id="form_iframe"]').should('exist');

    // Función personalizada para obtener el cuerpo del iframe
    Cypress.Commands.add('getIframeBody', (iframeSelector) => {
      return cy
        .get(iframeSelector)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap);
    });

    // Usar la función personalizada para interactuar con el iframe
    cy.getIframeBody('iframe[id="form_iframe"]').within(() => {
      // Interactuar con los elementos dentro del iframe
      cy.get('div[role="combobox"]')
        .should('be.visible')
        .click()

      cy.get('input[placeholder="Buscar usuarios..."]')
        .should('be.visible')
        .type('Alejandra')
        .wait (5000)
  

      cy.get('ul[role="listbox"]') // Ajusta el selector si es necesario
        .should('be.visible')
        .within(() => {

          cy.log('Llego hasta aca');
        });
        
      
      
    });

  });
});

