describe('Validate User', () =>{
    it('Navigate to Page', () =>{
        cy.visit('https://dashboard.podop.com');
        let title = cy.title();
        console.log(title);
    })
    it('Valid Login', () =>{
        cy.get('input[name="user"]').type('deepu@podop.com');
        cy.get('input[name="password"]').type('podop123');
        cy.contains('button', 'Log In').click();
        cy.contains('deepu@podop.com');
    })
})