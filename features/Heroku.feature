Feature: Heroku.feature
    
    @Test
    Scenario: Opening the browser
    Given The page title is "heroku"
    And I expect that url contains "herokuapp"
    And I wait on element "heroku" with the text "Welcome to the-internet"
   
    Scenario: Verify homepage elements
     When I click on the "abTesting" link
     Then I expect the element "header1" is displayed
    #And I expect the element "header1" with the text  "A/B Test Control" is displayed

    Scenario: Add and remove elements dynamically
    When I click on the "addRemoveLink" link
    And I click on the "addButton" button
    Then I should see that the "deleteButton" is displayed
    When I click on the "deleteButton" button
    Then I should not see the "deleteButton"
    #Then I switch back to the frame "iframe"

     Scenario: Validate Dynamic Loading
      When I click on the "dynamicLoadingLink" link
      Then I should see that the "header3" is displayed
      #Then I switch back to the frame "url12"
      And I click on the "example1Link" link 
      Then I should see that the "header4" is displayed
      And I click on the "startButton1" button 
      And I pause for "9000" ms
      Then I should see that the "helloWorld" is displayed 

 
       Scenario: Checkboxes
       When I click on the "checkboxesLink" link
       And I wait on element "header2" with the text "Checkboxes"
       Then I should see that the "checkbox1" is displayed
       Then I should see that the "checkbox2" is displayed

       When I click on the "checkbox1" checkbox
       Then the first checkbox "checkbox2" is selected and the second checkbox "checkbox2" is selected
       When I click on the "checkbox2" checkbox
       Then the second checkbox "checkbox2" is unselected and the first checkbox "checkbox1" is selected


   Scenario: Verify Dropdown Functionality
    When I click on the "dropDownLink" link
    And I wait on element "header10" with the text "Dropdown List"
    When I click on the "dropdown" dropdown
    And I select "Option 1" from the "dropdown"
    And I select "Option 2" from the "dropdown"


    Scenario: Verify Basic Authentication Functionality
    When I click on the "basicAuthLink" link
    #And I expect the pop up to appear
    And I authenticate with user "admin" and pass "admin"
    Then I wait on element "basicAuthSuccess" with the text "Congratulations! You must have the proper credentials."
    And I cancel the pop up
    And I wait on element "header6" with the text "Not authorized"    

    Scenario: Verify Context Menu Functionality
    When I click on the "contextMenuLink" link
    Then I should see that the "header8" is displayed
    #And I should see the elements "description" and "contextBox"
    When I right click on the element "contextBox"
  



  Scenario: for Disappearing Elements Page
    When I click on the "disappearingElementsLink" link
    And I wait on element "header9" with the text "Disappearing Elements"
    And I hover over the element "home"
    And I should see that the element "home" is enabled
    And I hover over the element "about"
    And I should see that the element "about" is enabled
    And I hover over the element "contactUs"
    And I should see that the element "contactUs" is enabled
    And I hover over the element "portfolio"
    And I should see that the element "portfolio" is enabled
    When I click on the element "home"
    And I wait on element "Siteheader2" with the text "Welcome to the-internet"
    When I click on the "disappearingElementsLink" link
    And I click on the element "about"
    And I wait on element "header29" with the text "Not Found"
    And I switch back to the previous page 
    And I wait on element "header9" with the text "Disappearing Elements"
    And I click on the element "contactUs"
    And I wait on element "header29" with the text "Not Found"
    And I switch back to the previous page
    And I wait on element "header9" with the text "Disappearing Elements"
    And I click on the element "portfolio"
    And I wait on element "header29" with the text "Not Found"

  
      Scenario: for Dynamic Content Page
    When I click on the "dynamicContentLink" link
    And I wait on element "header11" with the text "Dynamic Content"
    And I expect the elements "icon1", "icon2", and "icon3"
    And I store the text "icon3Text" 
    And I click on the "clickHereLink" link
    And I pause for "5000" ms
    And I expect the text "icon3Text" is changed
    
    
  
  Scenario: for Dynamic Controls Page
    When I click on the "dynamicControlsLink" link
    And I wait on element "header12" with the text "Dynamic Controls"
    And I click on the "checkbox" checkbox
    And I should see that the "checkboxbutton" is selected
    And I click on the element "removeButton"
    And I pause for "5000" ms
    And I should see that the "inputMessage" is displayed
    And I click on the element "enableButton"
    And I pause for "5000" ms
    And I should see that the element "enableTextField" is enabled
    And I should see that the "enabledmessage" is displayed
    And I click on the element "disableButton"
    And I should see that the element "enableTextField" is disabled
    And I should see that the "disabledmessage" is displayed


    Scenario: Handlind the alerts
        When I click on the element "jsalerts"
        And I should see that the "javaScriptAlerts" is displayed 
        And I click on the element "jsalert"
        And I handle this alert
      #   And I click on the element "jsalert2"
      #   And I dismiss the alert

  
       Scenario: Verify Entry Ad Functionality
    When I click on the "EntryAdLink" link
    And I wait on element "header13" with the text "Entry Ad"
    #When I click on the element "clickHere"
    And I handle the alert if it appears
  
  @Test
  Scenario: Verify Exit Intent Functionality
    When I click on the "exitInternal" link
    And I wait on element "header14" with the text "Exit Intent"
    # And I hover over element "figure1"
     When I hover my mouse outside the viewport
     Then I should see the header "THIS IS A MODAL WINDOW"
    When I click on the element "closeButton"
    Then I should not see the element "modal"


      Scenario: Hovers
    When I click on the "hoversLink" link
    And I wait on element "header24" with the text "Hovers"
    And I hover over element "figure1"
    And I wait on element "user1" with the text "name: user1"
    And I click on the "viewProfile1" link
    And I wait on element "headerNotFound" with the text "Not Found"
    And I switch back to the previous page
  
    And I hover over element "figure2"
    Then I should see that the "user2" is displayed
    And I click on the "viewProfile2" link 
    And I wait on element "headerNotFound" with the text "Not Found"
    And I switch back to the previous page

    And I hover over element "figure3"
    Then I should see that the "user3" is displayed
    And I click on the "viewProfile3" link 
    And I wait on element "headerNotFound" with the text "Not Found"

    
      Scenario: Infinite Scroll
    When I click on the "infiniteScrollLink" link
    And I wait on element "headerInfiniteScroll" with the text "Infinite Scroll"
    And I scroll down by "1000"
    # Then I should see that the "scrollParagraph2" is displayed
     
     
      Scenario: iFrame Editor
      When I click on the "framesLink" link
    And I wait on element "header25" with the text "Frames"
    And I click on the "iFrameLink" link
    And I wait on element "header26" with the text "An iFrame containing the TinyMCE WYSIWYG Editor"
    And I switch back to the frame "iframe1"
    And I wait on element "body" with the text "Your content goes here."
    And I switch back to the parent frame 
    And I switch back to the previous page
    #And I go back
    And I wait on element "header25" with the text "Frames"
    When I click on the "nestedFramesLink" link
     And I switch back to the parent frame 
    When I switch back to the frame "nestedFrameBottom"
     And I wait on element "body" with the text "BOTTOM"
     And I switch back to the parent frame
     And I switch back to the frame "nestedFrameTop"
    #  And I switch back to the frame "nestedFrameMid"
     And I switch back to the frame "nestedFrameLeft"
     When I wait on element "body" with the text "LEFT"
     And I switch back to the parent frame
     And I switch back to the frame "nestedFrameMiddle"
     Then I wait on element "content" with the text "MIDDLE"
     And I switch back to the parent frame
     And I switch back to the frame "nestedFrameRight"
     Then I wait on element "body" with the text "RIGHT"
    #  And I switch back to the default content

      Scenario: Drag A → B and back
    When I click on the "dragAndDropLink" link
    And I wait on element "headerDragDrop" with the text "Drag and Drop"
    When I drag element "columnA" to element "columnB"
    And I wait on element "columnA" with the text "B"
    And I wait on element "columnB" with the text "A"
    When I drag element "columnB" to element "columnA"
    Then I wait on element "columnA" with the text "A"
    And I wait on element "columnB" with the text "B"

   
    Scenario: Mulitiple windows
    When I click on the "multipleWindows" link
    And I should see that the "openingnewwindow" is displayed
    And I click on the "clickwindow" link
    And I pause for "3000" ms
    And I get the windowhandle
    # And I switch  to the "windowurl2" window
     # Then I expect the element "newwindowmessage" is displayed
    # Then  I should see that the "newwindowmessage" is displayed
    # And I switch  to the "windowurl1" window

