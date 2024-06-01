describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Edit src/App.js and save to reload.');
    cy.contains('Learn React');
  })

  it('Check if link checked redirected for correct website', () => {
    cy.visit('http://localhost:3000/')
    cy.get('a[id="link"]').click();
    setTimeout(() => {
      cy.url().should('eq', 'https://reactjs.org');
    }, 3000)
  })

  it('Check if first item in list has right', () => {
    cy.visit('http://localhost:3000/')
    cy.get('li[id="1"]')
      .should('include.text', 'Hello world');
  })

  it('Check if second item in list has right', () => {
    cy.visit('http://localhost:3000/')
    cy.get('li[id="2"]')
      .should('include.text', 'Olá mundo');
  })

  it('Check if third item in list has right', () => {
    cy.visit('http://localhost:3000/')
    cy.get('li[id="3"]')
      .should('include.text', 'Hi, my friends');
  })

  it('Check if fourth item in list has right', () => {
    cy.visit('http://localhost:3000/')
    cy.get('li[id="4"]')
      .should('include.text', 'Olá, meus amigos');
  })
})