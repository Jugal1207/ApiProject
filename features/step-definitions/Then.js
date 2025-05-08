import { Then } from '@wdio/cucumber-framework';
import { browser, $, expect } from '@wdio/globals';
//import locator  from 'locators.js';
import fs from 'fs';
// import { expect } from 'chai';
import yaml from 'js-yaml';
const locators = yaml.load(fs.readFileSync('./config/locators.yaml'))


Then(/^I expect that url contains "([^"]*)"$/, async (expectedSubstring) => {
   
        const currentUrl = await browser.getUrl();
        console.log(`Current URL is: ${currentUrl}`);
         expect(currentUrl).toContain(expectedSubstring);
        // expect(currentUrl).to.include(expectedSubstring)
      
});

Then(/^I expect the element "([^"]*)" is displayed$/, async (elementKey) => {
   try{ 
    const selector = locators[elementKey];
    const element1 = await $(selector); 
    await element1.waitForDisplayed({

        timeoutMsg: `Element ${elementKey} was not displayed in time`,
    });
    

    await expect(element1).toBeDisplayed();
    // await expect(element1).to.be.displayed();

   }
   catch(error){
    console.error(`Error in step 'Then I expect that element "${elementKey}" is displayed':`, error);
    throw error;
   }
});

Then(/^I should see that the element "([^"]*)" is enabled$/, async (elementKey) => {
  try {
    // Retrieve the selector from disappearingElementsPage using the key.
    const selector = locators[elementKey];
    if (!selector) {
      throw new Error(`No locator found for "${elementKey}" in disappearingElementsPage`);
    }
    const elem = await $(selector);
    // await expect(elem).toBeDisplayed();
    await expect(elem).toBeEnabled();
    // await expect(elem).to.be.enabled();

  } catch (error) {
    console.error(`Error in Then step 'I should see that the element "${elementKey}" is enabled':`, error);
    throw error;
  }
});



     
Then(/^I expect the popup to appear$/, async () => {

    await browser.waitUntil(
      async () => await browser.isAlertOpen(),
        {
          timeout: 10000,
          timeoutMsg: 'Expected alert popup to appear, but it did not within 10 seconds'
        }
      );
      const alertText = await browser.getAlertText();
      expect(alertText).toBeDefined();
      //expect(alertText).to.not.be.undefined();
  });
    

Then(/^I expect the element "([^"]*)" with the text "([^"]*)" is displayed$/, async (elementKey, expectedText) => {
    
        const selector = locators[elementKey];
        const element = await $(selector);

        await element.waitForDisplayed({ timeout: 5000 });

        // await expect(element).toBeDisplayed();


        const actualText = await element.getText();

        await expect(actualText).toEqual(expectedText); 
        //await expect(actualText).to.equal(expectedText);

          

      //   await browser.executeAsyncScript((expectedText) => {
      //     console.log('Wake me up before you go!');
      //     setTimeout(expectedText, 5000);
      // });
});


Then(/^I should see that the "([^"]*)" is displayed$/, async (elementKey) => {
  const selector = locators[elementKey];
  const elements = await $$(selector); // Get all matching elements

  // await elements.waitForExist({ timeout: 15000 });
  //  console.log(elements.getText());
  // Flag to check if any element is displayed
  let isDisplayed = false;

  for (const el of elements) {
      if (await el.isDisplayed()) {
          isDisplayed = true;
          break;
      }
  }

  await expect(isDisplayed).toBe(true);
  // await elements.waitForExist({ timeout: 15000 });
  // await elements.waitForDisplayed({ timeout: 15000 });
  // await elements.scrollIntoView();

  // await browser.switchWindow('https://the-internet.herokuapp.com/')
});


// Then(/^I should see that the "([^"]*)" is displayed$/, async (elementName) => {
//     const selector = locators[elementName];

//     const element = await $(selector);
//     await element.waitForDisplayed({ timeout: 5000 });
//     const isDisplayed = await element.isDisplayed();
    
//     expect(isDisplayed).toBe(true);
// });

Then(/^I should not see the "([^"]*)"$/, async (elementName) => {
    
    const selector = locators[elementName];   
    const deleteButton = await $(selector); 
    const isDisplayed = await deleteButton.isDisplayed();

    expect(isDisplayed).toBe(false);
    //await browser.switchWindow('https://the-internet.herokuapp.com/');
});

Then(/^I should see the header "([^"]*)" on "([^"]*)"$/, async (expectedHeader, section) => {
    try {
      const headerSelector = locators[section];
      console.log(`Header locator for section "${section}": ${headerSelector}`);
      if (!headerSelector) {
        throw new Error(`No header locator defined in section "${section}".`);
      }
      const headerElem = await $(headerSelector);
      await headerElem.waitForDisplayed({ timeout: 5000 });
      const actualHeader = await headerElem.getText();
      console.log(`Expected header: "${expectedHeader}", Actual header: "${actualHeader}"`);
      if (actualHeader.trim() !== expectedHeader.trim()) {
        throw new Error(`Expected header to be "${expectedHeader}" but found "${actualHeader}"`);
      }
    } catch (error) {
      console.error(`Error in Then step 'I should see the header "${expectedHeader}" on "${section}"':`, error);
      throw error;
    }
  });

      
      Then(/^the first checkbox "([^"]*)" is selected and the second checkbox "([^"]*)" is selected$/,
        async (firstCheckboxKey, secondCheckboxKey) => {
          const firstSelector = locators[firstCheckboxKey];
          const secondSelector = locators[secondCheckboxKey];
      
          const firstCheckbox = await $(firstSelector);
          const secondCheckbox = await $(secondSelector);
      
          const isFirstSelected = await firstCheckbox.isSelected();
          const isSecondSelected = await secondCheckbox.isSelected();
      
          await expect(isFirstSelected).toBe(true);
          await expect(isSecondSelected).toBe(true);
        }
      );
      
      Then(/^the second checkbox "([^"]*)" is unselected and the first checkbox "([^"]*)" is selected$/,
        async (secondCheckboxKey, firstCheckboxKey) => {
          const secondSelector = locators[secondCheckboxKey];
          const firstSelector = locators[firstCheckboxKey];
      
          const secondCheckbox = await $(secondSelector);
          const firstCheckbox = await $(firstSelector);
      
          const isSecondSelected = await secondCheckbox.isSelected();
          const isFirstSelected = await firstCheckbox.isSelected();
      
          await expect(isSecondSelected).toBe(false);
          await expect(isFirstSelected).toBe(true);
        }
      );      
      Then(/^I should see the elements "([^"]+)" and "([^"]+)"$/, async (key1, key2, section) => {
        try {
          console.log(`Looking for keys "${key1}" and "${key2}" on section "${section}"`);
          const selector1 = locators[section] && locators[section][key1];
          const selector2 = locators[section] && locators[section][key2];
          if (!selector1 || !selector2) {
            throw new Error(`One or both locators ("${key1}", "${key2}") are not defined in section "${section}".`);
          }
          const elem1 = await $(selector1);
          const elem2 = await $(selector2);
          await expect(elem1).toBeDisplayed();
          await expect(elem2).toBeDisplayed();
          //await expect(elem2).to.be.displayed
        } catch (error) {
          console.error(`Error in Then step for verifying elements on "${section}":`, error);
          throw error;
        }
      });

      Then(/^I should validate that an alert is displayed with the text "([^"]*)"$/, async (expectedAlertText) => {
        // Wait until an alert is opened
        await browser.waitUntil(async () => {
          return (await browser.isAlertOpen()) === true;
        }, { timeout: 10000, timeoutMsg: 'Alert was not opened within 5s' });
        
        // Get the alert text and compare
        const alertText = await browser.getAlertText();
        if (alertText !== expectedAlertText) {
          throw new Error(`Expected alert text "${expectedAlertText}" but got "${alertText}".`);
        }
        
        // Optionally accept or dismiss the alert:
        await browser.acceptAlert();  // or browser.dismissAlert();
      });


  Then(/^I expect the elements "([^"]+)", "([^"]+)", and "([^"]+)"$/, async (element1, element2, element3) => {
    // Create an array of keys from the captured elements.
    const keys = [element1, element2, element3];
    
    for (let key of keys) {
      // Try to retrieve the corresponding selector from the "challengingDomPage" section.
      const selector = locators[key];
      if (!selector) {
        throw new Error(`No locator defined for "${key}" in challengingDomPage`);
      }
      const elem = await $(selector);
      await elem.waitForDisplayed();
    }
  });

  Then(/^I expect that the icon "([^"]*)" is changing$/, async (iconKey) => {
    const selector = locators[iconKey]; // assuming locators is loaded from your YAML
    const icon = await $(selector);

    const initialSrc = await icon.getAttribute('src');
    console.log(`Initial src of ${iconKey}: ${initialSrc}`);

    let updatedSrc;

    const changed = await browser.waitUntil(async () => {
        updatedSrc = await icon.getAttribute('src');
        return updatedSrc !== initialSrc;
    }, {
        timeout: 7000, // you can increase this if change takes longer
        interval: 500,
        timeoutMsg: `Expected the icon "${iconKey}" to change, but it didn't. Src remained: ${initialSrc}`
    });

    console.log(`Updated src of ${iconKey}: ${updatedSrc}`);
    expect(changed).toBe(true);
});


Then(/^I expect the text "([^"]*)" is changed$/, async (textKey) => {
  const selector = locators[textKey];
  const element = await $(selector);
    const afterclickingtext=await element.getText()
  const previousText = global.storedText

  expect(previousText).not.toEqual(afterclickingtext);
  //expect(previousText).to.not.equal(afterclickingtext);

  
});

Then(/^I expect the text "([^"]*)" is same$/, async (textKey) => {
  const selector = locators[textKey];
  const element = await $(selector);
    const afterclickingtext=await element.getText()
  const previousText = global.storedText
  console.log(previousText,'------------------------------]]]]]]]]]]]');
  
  expect(previousText).toEqual(afterclickingtext);
  //expect(previousText).to.not.equal(afterclickingtext);

  
});

Then(/^I should see the header "([^"]*)"$/,async (expectedHeader, section) => {
  try {
    // Retrieve the header locator from the specified section.
    const headerSelector = locators[section] && locators[section].header;
    console.log(`Header locator for section "${section}": ${headerSelector}`);
    
    const headerElem = await $(headerSelector);
    await headerElem.waitForDisplayed({ timeout: 5000 });
    const actualHeader = await headerElem.getText();
    console.log(`Expected header: "${expectedHeader}", Actual header: "${actualHeader}"`);
  } catch (error) {
    console.error(`Error in Then step 'I should see the header "${expectedHeader}" on "${section}"':`, error);
    throw error;
  }
});


Then(/^I should see the slider value "([^"]+)" on "([^"]+)"$/,
  async (expectedValue, section) => {
    try {
      const sliderValueLocator = locators[section].sliderValue;
      if (!sliderValueLocator) {
        throw new Error(`No sliderValue locator defined in section "${section}"`);
      }
      const valueElem = await $(sliderValueLocator);
      await valueElem.waitForDisplayed({ timeout: 5000 });
      const actualValue = await valueElem.getText();
      console.log(`Expected slider value: "${expectedValue}", Actual slider value: "${actualValue}"`);
      expect(actualValue).toContain(expectedValue);
      //expect(actualValue).to.include(expectedValue);
    } catch (error) {
      console.error(`Error in Then step 'I should see the slider value "${expectedValue}" on "${section}"':`, error);
      throw error;
    }
  }
);

Then(/^I should see the slider value "([^"]*)"$/, async (expectedValue) => {
  const sliderValueSelector = '#slider-value'; // Update this selector to match your actual DOM

  const actualValue = await $(sliderValueSelector).getText(); // Or .getValue() if it's an input

  expect(actualValue).toBe(expectedValue);
  //expect(actualValue).to.be.a(expectedValue);
});

// Then(/^I wait on element "([^"]*)" with the text "([^"]*)"$/, async (key, expectedText) => {
//   try {
//       // Retrieve the locator using the provided key.
//       const locator = locators[key];
//       console.log(`Locator for key "${key}": ${locator}`);
//       // Locate the element.
//       const element = await $(locator);
      
//       // Wait until the element is visible.
//       await element.waitForDisplayed({ timeout: 5000 });
      
//       // Retrieve the text from the element.
//       const actualText = await element.getText();
      
//       // Verify that the element's text includes the expected text.
//       expect(actualText).toContain(expectedText);

//   } catch (error) {
//       console.error(`Error in Then step 'I wait on element "${key}" with the text "${expectedText}"':`, error);
//       throw error;
//   }
// });

Then(/^I should see that the "([^"]*)" is selected$/, async (elementName) => {
  
  const selector = locators[elementName];
  const element = await $(selector);
  await expect(element).toBeSelected();
});


Then('I should see that the element {string} is disabled', async (elementName) => {
  

  const selector = locators[elementName];
  const element = await $(selector);  
  await expect(element).not.toBeEnabled();
});

Then(/^I expect the items are sorted from lowest to highest price$/, async () => {
  try {
      // Retrieve all elements displaying product prices
      const priceElements = await $$(locators.itemPrice);
      let prices = [];

      // remove the dollar sign, and convert to a number.
      for (const element of priceElements) {
          const priceText = await element.getText();
          const price = parseFloat(priceText.replace('$', ''));
          prices.push(price);
      }

      // Create a copy of the prices array sorted in ascending order.
      const sortedAscending = [...prices].sort((a, b) => a - b);

      // Compare the original array with the sorted array.
      // If they match, the items are sorted from lowest to highest.
      expect(prices).toEqual(sortedAscending);
  } catch (error) {
      console.error('Error in Then step "I expect the items are sorted from lowest to highest price":', error);
      throw error;
  }
});

Then(/^I expect the items are sorted from highest to lowest price$/, async () => {
  try {
      // Retrieve all price elements using the locator from your YAML file.
      const priceElements = await $$(locators.itemPrice);
      let prices = [];

      // Loop through each element, get the price text (e.g., "$49.99"),
      // remove the dollar sign, and parse it to a floating point number.
      for (const element of priceElements) {
          const priceText = await element.getText(); // e.g., "$49.99"
          const price = parseFloat(priceText.replace('$', ''));
          prices.push(price);
      }
      
      // Create a copy of the prices array and sort it in descending order.
      const sortedDescending = [...prices].sort((a, b) => b - a);
      
      // Verify that the original array of prices matches the sorted descending array.
      expect(prices).toEqual(sortedDescending);
  } catch (error) {
      console.error('Error in Then step "I expect the items are sorted from highest to lowest price":', error);
      throw error;
  }
});