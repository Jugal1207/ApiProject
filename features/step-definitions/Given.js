import { Given } from '@wdio/cucumber-framework';
import { browser, $, expect } from '@wdio/globals';
//import { locators } from '../../locators.js';
import fs from 'fs';
import yaml from 'js-yaml';
const locators=yaml.load(fs.readFileSync('./config/locators.yaml','utf-8'))
 
Given(/^The page title is "([^"]*)"$/, async (key) => {
    
        let locator = locators[key]
        const element = await $(locator);
        await element.waitForDisplayed({timeout:5000}); 
        

        
        // await browser.touchAction({
        //         action: 'tap',
        //         element: screen
        //     });
});
Given(/^I open the url "([^"]*)"$/, async(url)=>{
        await browser.url(url)
})


// Given(/^I authenticate with user "([^"]*)" and pass "([^"]*)"$/, async (username, password) => {
//         await browser.url('https://the-internet.herokuapp.com/basic_auth');
    
//         const usernameField = await $('#username'); // adjust selector
//         const passwordField = await $('#password'); // adjust selector
//         const loginButton = await $('#login-button'); // adjust selector
    
//         await usernameField.setValue(username);
//         await passwordField.setValue(password);
//         await loginButton.click();
//     });
 
