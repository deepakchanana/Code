Feature: To test Login functionality
Scenario: To test the Login functionality with valid credentials
Given user is on the login page
When user enter the username
And user enter the password
Then user should be able to login
