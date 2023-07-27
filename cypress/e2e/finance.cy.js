
describe('Transações', () => {

    
    beforeEach(()=>{
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    })

    it('Cadastrar uma entrada', () => {
        const faker = require('faker-br');
       
        criarTransacao("Freela", 250)
        cy.get("tbody tr td.description").should("have.text","Freela")
    });

    it('Cadastrar uma saída', () => {    
        criarTransacao("Despesa freela", -20)
        cy.get("tbody tr td.description").should("have.text","Despesa freela")
    });aahBom

    it.only('Excluir Transação', () => {
        criarTransacao("Freela", 120)
        criarTransacao("mesada", 10)

        cy.contains(".description", "Freela").parent().find('img')
        .click()

        cy.get('tbody tr').should("have.length", 1)
    });
});

function criarTransacao(descricao, valor){

    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-07-05")

    cy.contains('button', 'Salvar').click()

}