/// <reference types="cypress" />

describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://login-test.dfo.no/?idp=idporten')
    })
  
    it('MyID should work', () => {
      cy.get('#MinIDEksternChain').click()
      cy.get('#personalIdNumber').type('08089406901')
      cy.get('#password').type('password01')
      cy.get('#next').click()
      cy.get('#otpCode').type('12345')
      cy.get('#next').click()
      cy.get('.brandingLogo').should('be.visible')
    })
    
  })
  