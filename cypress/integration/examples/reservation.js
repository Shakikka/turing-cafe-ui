describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('should display a title, form and existing reservations', () => {
        cy.contains('Turing Cafe Reservations')
    })

})