Feature: LandingPage Functionality

    This Feature tests login scenarios

    Background: 
        Given the user is on the landing page

    Scenario: As a toh user, I want to navigate to landingpage in order to see the dashboard
        Then the user shall see the employee dashboard

    Scenario: As a TOH user, I want to add a hero in order to see the hero list increase 
        Given the user clicks Heroes button
        When the user enters a hero name
        And the hero name added by the user will be displayed
        Then the user clears the message 
    



    
