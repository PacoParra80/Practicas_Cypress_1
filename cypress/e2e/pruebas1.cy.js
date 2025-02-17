describe('Pruebas básicas', () => {

  beforeEach(() => { 
    cy.visit('https://todomvc.com/examples/react/dist/');
  });
  
  it('Añadir tarea', () => {
    cy.get('[data-testid="text-input"]')
    .click()
    .type('Hacer la compra')
    .type('{enter}')
  })



  it('Marcar tarea', () => {
    cy.get('[data-testid="text-input"]')
    .click()
    .type('Hacer la compra')
    .type('{enter}')
    cy.get('[data-testid="todo-item-toggle"]')
    .click()
    cy.get('[data-testid="todo-item-label"]')
    .should('have.css', 'text-decoration-line', 'line-through')
  })


  
  it('Eliminar tarea marcada', () => {
    cy.get('[data-testid="text-input"]')
    .click()
    .type('Hacer la compra')
    .type('{enter}')
    cy.get('[data-testid="todo-item-toggle"]')
    .click()
    cy.get('[data-testid="todo-item-label"]')
    .should('have.css', 'text-decoration-line', 'line-through')
    cy.get('[data-testid="todo-item-button"]').click({ force: true })
  })






















})