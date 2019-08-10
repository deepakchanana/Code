$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("f.feature");
formatter.feature({
  "line": 1,
  "name": "To test Login functionality",
  "description": "",
  "id": "to-test-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "To test the Login functionality with valid credentials",
  "description": "",
  "id": "to-test-login-functionality;to-test-the-login-functionality-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter the username",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enter the password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "TC1.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 8733080756,
  "status": "passed"
});
formatter.match({
  "location": "TC1.user_enter_the_username()"
});
formatter.result({
  "duration": 28319,
  "status": "passed"
});
formatter.match({
  "location": "TC1.user_enter_the_password()"
});
formatter.result({
  "duration": 19257,
  "status": "passed"
});
formatter.match({
  "location": "TC1.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 32850,
  "status": "passed"
});
});