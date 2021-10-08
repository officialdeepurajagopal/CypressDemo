class CommonPage{
    navigateToPage(url){
        cy.visit(url);
    }
}
export default new CommonPage();