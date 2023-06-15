import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import LandingPage from "../page-objects/LandingPage";

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
	return true;
});

Given(/^the user clicks Heroes button$/, () => {
	LandingPage.ClickHero();
});

When(/^the user enters a hero name$/, () => {
	LandingPage.EnterName();
});

When(/^the hero name added by the user will be displayed$/, () => {
	LandingPage.VeriifyHero()
});

Then(/^the user clears the message$/, () => {
	LandingPage.clear()
});




