package org.testing.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="./featuress",glue="org.testing.StepsDefinitions",
format = {"pretty", "html:Reports/cucumber-html-report/Report.html"}, monochrome=true)
public class RunCukesTest {

}
