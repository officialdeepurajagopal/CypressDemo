import data from '../../../data/data.js'
import loginPage from '../../../pages/loginPage.js'
import commonPage from '../../../pages/common.js'

describe('Validate User', () =>{
    it('Navigate to Page', () =>{
        commonPage.navigateToPage(data.data.url);
    })
    it('Valid Login', () =>{
        loginPage.validLogin(data.data.username, data.data.password);
    })
})