sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/actions/EnterText"
], function (Opa5, Press, EnterText) {
	"use strict";

	var cViewName = "Customers";
	// var pViewName= "Products";
	// var supViewName= "Suppliers";
	Opa5.createPageObjects({
		onCustomerPageUnderTest: {
			actions: {
				iPressButton_EmployeesButton: function () {
						return this.waitFor({
							id: "EmployeesButton",
							viewName: cViewName,
							success: function (oBtn) {
								oBtn.$().trigger("tap");
							},
							errorMessage: "Was not able to find the control with the id EmployeesButton"
						});
					}
					// iPressButton_ProductsButton: function () {
					// 	return this.waitFor({
					// 		id: "ProductsButton",
					// 		viewName: pViewName,
					// 		actions: new Press(),
					// 		errorMessage: "Was not able to find the control with the id EmployeesButton"
					// 	});
					// },
					// iPressButton_SupplierButton: function () {
					// 	return this.waitFor({
					// 		id: "SupplierButton",
					// 		viewName: supViewName,
					// 		actions: new Press(),
					// 		errorMessage: "Was not able to find the control with the id EmployeesButton"
					// 	});
					// }
			},
			assertions: {
				iShouldSeeWelcomePage: function () {
					return this.waitFor({
						id: "WelcomePage",
						viewName: "Welcome",
						success: function () {
							Opa5.assert.ok(true, "The Welcome view is displayed");
						},
						errorMessage: "Did not find the Welcome view"
					});
				}
			}
		}
	});
});