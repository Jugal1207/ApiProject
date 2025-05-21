Feature: Saucedemo Shopping Cart Actions
     As a user ,
     I want to checkout and continue shopping and filterout the products and verify the shopping workflow.

     @test
     Scenario Outline: End to end scenario
          Given I open the url "https://www.saucedemo.com/v1/index.html"
          And The page title is "swagLabs"
          And I enter the value "<userName>" to the element "userNameInput"
          And I should see that the "userNameOutput" is displayed
          And I enter the value "<password>" to the element "passwordInput"
          And I should see that the "passwordOutput" is displayed
          And I should see that the element "loginButton" is enabled
          And I pause for "2000" ms
          And I click on the element "loginButton"
          # And I pause for "2000" ms
          # And I accept the popup
          # And I pause for "2000" ms
          # And I expect the element "icon" is displayed
          # And I expect the element "products" with the text "Products" is displayed
          # When I add the second highest price product to the cart and store the product name
          # And I click on the "shoppingcontainer" button
          # And I should see that the "secondhighestproduct" is displayed
          # And I expect the text "secondhighestproduct" is same
          # And I switch back to the previous page

          # And I should see that the "productSortDropdown" is displayed
          # And I click on the element "productSortDropdown"
          # And I select the sort option "priceLohi" from the element "productSortDropdown"
          # And I expect the items are sorted from lowest to highest price
          # And I should see that the "container" is displayed
          # And I store the text "soucelabproduct"
          # And I click on the "addToCartButton" button
          # And I should see that the "soucelabproduct" is displayed
          # And I click on the "shoppingcontainer" button
          # And I should see that the "soucelabproduct" is displayed
          # And I expect the text "soucelabproduct" is same
          # And I switch back to the previous page

          # And I expect the element "products" with the text "Productsjnjjo" is displayed
          # And I should see that the "productSortDropdown" is displayed
          # And I click on the element "productSortDropdown"
          # And I select the sort option "priceHilo" from the element "productSortDropdown"
          # And I expect the items are sorted from highest to lowest price
          # And I should see that the "container" is displayed
          # And I store the text "soucelabproduct2"
          # And I click on the "addToCartButton2" button
          # And I should see that the "soucelabproduct2" is displayed
          # And I click on the "shoppingcontainer" button
          # And I should see that the "soucelabproduct2" is displayed
          # And I expect the text "soucelabproduct2" is same

          # And I should see that the "checkoutButton" is displayed
          # And I click on the element "checkoutButton"
          # And I should see that the "yourinformation" is displayed
          # And I enter the value "Jugal" to the element "firstName"
          # And I enter the value "Soni" to the element "lastName"
          # And I enter the value "1207" to the element "postalCode"
          # And I click on the element "continueButton"
          # And I wait on element "checkout" with the text "Checkout: Overview"
          # And I should see that the "paymentinformation" is displayed
          # And I click on the element "finishButton"
          # And I should see that the "thankyoumessage" is displayed
          # And I click on the element "menu"
          # And I should see that the "menulist" is displayed
          # And I click on the element "logout1"
          # And I should see that the "swagLabs" is displayed

          Examples:
               | userName      | password     |
               | standard_user | secret_sauce |
               | kjdklj        | ljhd         |
               | standard_user | secret_sauce |
