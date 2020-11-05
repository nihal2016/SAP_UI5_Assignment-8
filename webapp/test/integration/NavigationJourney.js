	/*global QUnit*/

	sap.ui.define([
		"sap/ui/test/opaQunit",
		"./pages/Welcome",
		"./pages/Customers"
	], function (opaTest) {
		"use strict";

		QUnit.module("Navigation Journey");

		opaTest("Should see the initial page of the app", function (Given, When, Then) {
		
			Given.iStartMyApp();
			Then.onTheAppPage.iShouldSeeTheApp();
			
			When.onTheAppPage.iClickCustomerButton();
			Then.onTheAppPage.iShouldSeeTheCutomerPage();

			When.onCustomerPageUnderTest.iPressButton_EmployeesButton();
			Then.onCustomerPageUnderTest.iShouldSeeWelcomePage();

			//Cleanup
			Then.iTeardownMyApp();
		});
	});