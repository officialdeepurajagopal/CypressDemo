class LoginPage{

    get userName(){
        return cy.get('input[name="user"]')
    }
    get userPassword(){
        return cy.get('input[name="password"]')
    }
    get loginButton(){
        return cy.contains('button', 'Log In')
    }

    validLogin(username, password){
        this.userName.type(username);
        this.userPassword.type(password);
        this.loginButton.click();
        cy.wait(5000)
        cy.contains(username);
    }

}
export default new LoginPage();