import { When } from '@wdio/cucumber-framework';
import { browser, $ } from '@wdio/globals';
//import { locators } from '../../locators.js';
import fs from 'fs';
import { url } from 'inspector';
import yaml from 'js-yaml';
const locators = yaml.load(fs.readFileSync('./config/locators.yaml'))


When(/^I enter the value "([^"]*)" to the element "([^"]*)"$/, async (inputText,key)=>{
    try{
    const selector = locators[key]
    const element = await $(selector)
    await element.waitForDisplayed({timeout: 5000})
    await element.setValue(inputText);
    }catch(error){
        console.error(`error "${inputText}" to the element "${key}"`, error);
        throw error;
    }
}) 
When(/^I click on the element "([^"]*)"$/, async (elementKey) => {
    const selector = locators[elementKey];

    const elem = await $(selector);
    await elem.click();
});


When(/^I click on the "([^"]*)" link$/, async (linkName) => {
    const selector = locators[linkName];
   
    const element = await $(selector);
    await element.waitForClickable({ timeout: 5000 });

    
      // Wait until the element exists and is displayed. Increase timeout if needed.
      await element.waitForExist({ timeout: 10000 });
      await element.waitForDisplayed({ timeout: 10000 });
      // Scroll element into view
      await element.scrollIntoView();
      await browser.pause(1000); // Optional pause for debugging
      

    await element.click();


});

When(/^I click on the "([^"]*)" button$/, async (buttonName) => {
    const selector = locators[buttonName];
  
    const element = await $(selector);
    await element.waitForClickable({ timeout: 5000 });
    await element.click();
});

When(/^I click on the "([^"]*)" checkbox$/, async (buttonName) => {
    const selector = locators[buttonName];
  
    const element = await $(selector);
    await element.waitForClickable({ timeout: 5000 });
    await element.click();
});

When(/^I click on the "([^"]*)" dropdown$/, async (buttonName) => {
    const selector = locators[buttonName];
  
    const element = await $(selector);
    await element.waitForClickable({ timeout: 5000 });
    await element.doubleClick();
});

When(/^I handle this alert$/, async () => 
    {  
          
    await browser.acceptAlert();
    console.log("You successfully clicked an alert");

    // await browser.execute(() => {
    //     window.scroll(0,0);
    //   });
     
    })

    When(/^I handle this contextMenu alert$/, async () => 
        {  
              
        await browser.acceptAlert();
        console.log("You selected a context menu");
    
        // await browser.execute(() => {
        //     window.scroll(0,0);
        //   });
         
        })

When(/^I dismiss the alert$/, async () => 
        {  
        await browser.dismissAlert();
        console.log("You successfully clicked an alert");
         
        })

When(/^I pause for "([^"]*)" ms$/, async(time)=>{
        await browser.pause(time)
    })

    When(/^I wait on element "([^"]+)" with the text "([^"]+)"$/, async (elementKey, expectedText) => {
        const selector = locators[elementKey];

        const elem = await $(selector);
        await elem.waitForDisplayed({ timeout: 5000 });
        await elem.waitUntil(
            async () => (await elem.getText()) === expectedText,
            {
                timeout: 5000,
                timeoutMsg: `Expected text "${expectedText}" not found on element "${elementKey}"`,
            }
        );
       
    });

    When(/^I select "([^"]*)" from the "([^"]*)"$/,  async (visibleText, dropdownName) => {
         
          const selector = locators[dropdownName];
          const dropdown = await $(selector);
          await dropdown.selectByVisibleText(visibleText);
          // await dropdown.selectByAttribute('value', '2');
          // await dropdown.selectByIndex(0);
     

      });

      When(/^I set the text editor content to "([^"]*)"$/, async (text) => {
        try {
            const editor = await $(locators.iframePage.textEditor);
            await editor.clearValue();
            await editor.setValue(text);
        } catch (error) {
            console.error(`Error in When step 'I set the text editor content to "${text}"':`, error);
            throw error;
        }
    });
    
    When(/^I hover over the element "([^"]+)"$/, async (key) => {
        try{
        const selector = locators[key];
        const element = await $(selector);
        await element.waitForDisplayed({ timeout: 5000 });
        await element.scrollIntoView();
        await element.moveTo();
      }catch(error){
        console.error(`Error When I hover overe the element "${key}"':`, error);
        throw error;
      }
      
      });

    //   When(/^I right click on the element "([^"]*)"$/, async (elementKey) => {
    //     try {
    //         const selector = locators.contextMenuPage[elementKey];
    //         if (!selector) {
    //             throw new Error(`No locator defined for "${elementKey}" in contextMenuPage`);
    //         }
    //         const boxElement = await $(selector);
    //         await boxElement.waitForDisplayed({ timeout: 5000 });
    //         await boxElement.click({ button: 'right' });
    //     } catch (error) {
    //         console.error(`Error in When step 'I right click on the element "${elementKey}"':`, error);
    //         throw error;
    //     }
    // });
   
    When(/^I right click on the element "([^"]*)"$/, async (elementId) => {

        const selector = locators[elementId];
        const element = await $(selector); // Assuming it's an ID
        await element.click({ button: 'right' });
    });

    When(/^I left click on the element "([^"]*)"$/, async (elementId) => {

        const selector = locators[elementId];
        const element = await $(selector); // Assuming it's an ID
        await element.click({ button: 'left' });
    });

    When(/^I switch back to the previous page$/, async () => {
        await browser.back();
        
    });
    

When(/^I cancel the pop up$/, async () => {
    try {
      
      await browser.dismissAlert();
    } catch {
    
      const url = await browser.getUrl();
      const clean = url.replace(/\/\/.*@/, '//');
      await browser.url(clean);
    }
  });

  When(
    /^I authenticate with user "([^"]+)" and pass "([^"]+)"$/,
    async (username, password) => {


      const authUrl = `https://${username}:${password}@the-internet.herokuapp.com/basic_auth`;
      await browser.url(authUrl);
    }
  );
// When(/^I authenticate with user "([^"]*)" and pass "([^"]*)"$/, async (username, password) => {
//         await browser.url('https://the-internet.herokuapp.com/basic_auth');
    
//         const usernameField = await $('#username'); // adjust selector
//         const passwordField = await $('#password'); // adjust selector
//         const loginButton = await $('#login-button'); // adjust selector
    
//         await usernameField.setValue(username);
//         await passwordField.setValue(password);
//         await loginButton.click();
//     });
 

// When(/^I store all the element's text "([^"]*)"$/, async (textKey) => {

//     let saveText = await locators[textKey].getText();
//     console.log(`*********** ${saveText} `); 
    
//   });

//   When(/^I store all the element's text "([^"]*)"$/, async (elementSelector) => {
//     // Get all elements matching the selector

//     const selector = locators[elementSelector];
//     const elements = await $$(Selector); // $$ selects multiple elements

//     // Map over the elements to extract their text content
//     const textArray = await Promise.all(elements.map(async (elements) => {
//         return await elements.getText(); // Extract text from each element
//     }));

//     // Optionally, store this in a variable or save for later use
//     console.log('Text of all elements:', textArray);
    
//     // If needed, you could also set this text array in an external variable or store it for assertions later
//     // For example, saving to global test variables, scenario context, etc.
//     global.elementTexts = textArray;
// });

When(/^I store the text "([^"]*)"$/, async (textKey) => {
    const selector = locators[textKey]; // Get the XPath or CSS selector from YAML
    const element = await $(selector);  // Locate the element
    const textValue = await element.getText(); // Get the text

    // Store it globally for access in later steps
    //global.storedText = global.storedText || {};
    global.storedText = textValue;
    console.log(global.storedText,'[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[')
    // console.log(`Stored text for "${textKey}": ${textValue}`);
});


When(/^I accept the popup$/, async () => {
  try {
      if (await browser.isAlertOpen()) {
          await browser.acceptAlert();
          console.log("Alert accepted.");
      } else {
          console.log("No alert was open.");
      }
  } catch (error) {
      console.error("Error in When step 'I accept the popup':", error);
      throw error;
  }
});
When('I handle the alert if it appears', async () => {

    try {
        // Wait a short moment for potential alert
        await browser.pause(1000);

        // Check if alert is open
        const isAlertOpen = await browser.isAlertOpen();

        if (isAlertOpen) {
            console.log('Alert is present. Accepting it...');
            await browser.acceptAlert(); // or browser.dismissAlert() if needed
        } else {
            console.log('No alert present. Continuing...');
        }
    } catch (error) {
        console.error('Error while handling alert:', error);
    }
});
When(/^I hover my mouse outside the viewport$/, async () => {
  try {
    const { width, height } = await browser.getWindowSize();

    // Move to center, then outside the top
    await browser.performActions([
      {
        type: 'pointer',
        id: 'mouse',
        parameters: { pointerType: 'mouse' },
        actions: [
          { type: 'pointerMove', origin: 'viewport', x: Math.floor(width / 2), y: Math.floor(height / 2), duration: 100 },
          { type: 'pointerMove', origin: 'viewport', x: Math.floor(width / 2), y: -100, duration: 200 }
        ]
      }
    ]);

    // Always release after mouse actions
    await browser.releaseActions();
  } catch (err) {
    console.error('❌ Mouse hover outside viewport failed:', err);
    throw err;
  }
});



When(/^I drag the slider to value "([^"]+)"$/, async (targetValue) => {
    const slider = await $("input[type='range']");
    await slider.waitForDisplayed();
    await slider.click();                             // focus the thumb
    const current = await slider.getValue();           // returns a string, e.g. "0" or "2.5"
    const step     = parseFloat(await slider.getAttribute("step")  ) || 1;
    const min      = parseFloat(await slider.getAttribute("min")   ) || 0;
    const max      = parseFloat(await slider.getAttribute("max")   ) || 100;
    let currVal    = parseFloat(current);
    const tgt      = parseFloat(targetValue);
  
    if (tgt < min || tgt > max) {
      throw new Error(`Target ${tgt} is out of bounds [${min},${max}]`);
    }
  
    // Determine direction and number of arrow presses
    const presses = Math.round(Math.abs(tgt - currVal) / step);
    const key = tgt > currVal ? "ArrowRight" : "ArrowLeft";
  
    for (let i = 0; i < presses; i++) {
      await browser.keys(key);
    }
  
    // Optional sanity‑check:
    const final = parseFloat(await slider.getValue());
    if (final !== tgt) {
      throw new Error(`Slider set to ${final} but expected ${tgt}`);
    }
  });
  
  

  When(/^I hover over element "([^"]+)"$/, async (elementKey) => {
    // 1. look up your CSS/XPath in locators.yaml
    const selector = locators[elementKey];
    if (!selector) {
      throw new Error(`No locator found for key "${elementKey}"`);
    }
  
    // 2. get the element, wait for it to be in the DOM & visible
    const el = await $(selector);
    await el.waitForDisplayed({ timeout: 5_000 });
  
    // 3. move the mouse over it
    await el.moveTo();
  });  
    
  When(/^I scroll down by "([^"]+)"$/, async (pixels) => {
    const y = parseInt(pixels, 10)
    // scroll the window down by y pixels
    await browser.execute((distance) => {
      window.scrollBy(0, distance)
    }, y)
    // give the infinite‑scroll script a moment to load new content
    await browser.pause(500)
  })
  
  When(/^I switch back to the parent frame$/, async () => {
    await browser.switchToParentFrame();
  });

  When(/^I switch to the Nestedframe"([^"]*)?"$/, async(key)=>{
    // await browser.switchFrame(null);
    const selector=locators[key]
    const frame= await $(selector)
    await browser.switchFrame(frame);
    const textele=await $("body")
    const txt= await textele.getText();
    console.log(txt);
})

When(/^I drag element "([^"]+)" to element "([^"]+)"$/, async (srcKey, dstKey) => {
    const src = await $(locators[srcKey]);
    const dst = await $(locators[dstKey]);
    await src.waitForDisplayed({ timeout: 5000 });
    await dst.waitForDisplayed({ timeout: 5000 });
    // WDIO built‑in:
    await src.dragAndDrop(dst);
    // give the UI a moment
    await browser.pause(500);
  });
  
  
    When(/^I switch back to the frame "([^"]*)?"$/, async (frameKey) => {
          //  await browser.switchFrame(null);
          //await browser.switchToParentFrame();
            const selector = locators[frameKey];
            const frameElement = await $(selector);
            await browser.switchFrame(frameElement);
            
        });

        When(
          /^I select the sort option "([^"]*)" from the element "([^"]*)"$/,
          async (sortOptionKey, dropdownKey) => {
            try {
              // Retrieve the dropdown locator from locators (from any section as needed).
              const dropdownLocator = locators[dropdownKey];
              if (!dropdownLocator) {
                throw new Error(`No mapping for key "${dropdownKey}" found in YAML.`);
              }
              const dropdown = await $(dropdownLocator);
              await dropdown.waitForDisplayed({ timeout: 5000 });
              if (!locators.sortOptions) {
                throw new Error('No "sortOptions" mapping found in YAML.');
              }
              const sortOptionMapping = locators.sortOptions[sortOptionKey];
              if (!sortOptionMapping) {
                throw new Error(`No sort option mapping for key "${sortOptionKey}" found in YAML under sortOptions.`);
              }
              const optionVisibleText = sortOptionMapping.text;
              console.log(`Selecting sort option with key "${sortOptionKey}" which has visible text: "${optionVisibleText}"`);
              await dropdown.selectByVisibleText(optionVisibleText);
              await browser.pause(1500);
            } catch (error) {
              console.error(`Error in When step 'I select the sort option "${sortOptionKey}" from the element "${dropdownKey}"':`, error);
              throw error;
            }
          }
      );

      When(/^I switch to the "([^"]*)" window$/, async (windowKey) => {

        const expectedUrlPart = locators[windowKey]; // Get the XPath or CSS selector from YAML
        //const expectedUrlPart = await $(selector);
    
        const windowHandles = await browser.getWindowHandles();
    
        for (let handle of windowHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
    
            if (currentUrl.includes(expectedUrlPart)) {
                
                console.log(`Switched to window with URL containing: ${expectedUrlPart}`);
                return;
            }
        }
    });
    
    When (/^I get the windowhandle$/,async()=>{
      const handle= await browser.getWindowHandles();
      console.log(handle.length)
      for(let h of handle)
      {
          await browser.switchToWindow(h);
       const title=await browser.getTitle();
       console.log(title);
      const url= await browser.getUrl()
      console.log(url)
      if(url==="https://the-internet.herokuapp.com/windows/new")
      {
          const ele=await $("//h3")
          let text=ele.getText();
          let is= await ele.isDisplayed();
          console.log(is)
          //expect(text).toBeDisplayed();
      }
  console.log("...................................")
      }
      await browser.switchToWindow(handle[0])
     
  })

  When(/^I add the second highest price product to the cart and store the product name$/,async()=>{
    const allProductPrice=await $$("//div[@class='inventory_item_price']");
    const productPrice=[];
    for (const prod of allProductPrice) {
       const ProductPriceText=await prod.getText();
       const formattedPrice = ProductPriceText.replace('$', '')
        const finalPrice=parseFloat(formattedPrice);
        productPrice.push(finalPrice);     
    }
    console.log('>>> Array value', productPrice );
   
   const sortedPrice=productPrice.sort((a, b) => a - b);
    const secondHighestProductPrice=sortedPrice[sortedPrice.length-2];
    global.savePrice=secondHighestProductPrice;

    global.storedText=await $(`//div[@class='pricebar']/div[text()[normalize-space() = '${secondHighestProductPrice}']]/parent::div/preceding-sibling::div[@class='inventory_item_label']/a`).getText();
    const addToCartButton = await $(`//div[@class='pricebar']/div[text()[normalize-space() = '${secondHighestProductPrice}']]//following-sibling::button`)
    await addToCartButton.click();
})
 



    