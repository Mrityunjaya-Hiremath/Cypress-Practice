// <reference types="Cypress" />

describe('My test Suite', function () {
    it('My test cases', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })

})