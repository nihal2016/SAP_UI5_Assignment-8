sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "Welcome";
	var cViewName= "Customers";
	// var pViewName= "Products";
	// var supViewName= "Suppliers";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
				iClickCustomerButton: function(){
					return this.waitFor({
						id: "CustomerButton",
						viewName: "Welcome",
						success: function(oBtn){
								oBtn.$().trigger("tap");
						},
						errorMessage: "Was not able to find the  Button with id CustomerButton"
					});
				}
				// 	iClickProductButton: function(){
				// 	return this.waitFor({
				// 		id: "ProductsButton",
				// 		viewName: "Welcome",
				// 		success: function(oBtn){
				// 				oBtn.$().trigger("tap");
				// 		},
				// 		errorMessage: "Was not able to find the  Button with id ProductsButton"
				// 	});
				// },
				// 	iClickSupplierButton: function(){
				// 	return this.waitFor({
				// 		id: "SupplierButton",
				// 		viewName: "Welcome",
				// 		success: function(oBtn){
				// 				oBtn.$().trigger("tap");
				// 		},
				// 		errorMessage: "Was not able to find the  Button with id SupplierButton"
				// 	});
				// }
				
			},

			assertions: {
				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The Welcome view is displayed");
						},
						errorMessage: "Did not find the Welcome view"
					});
				},
				iShouldSeeTheCutomerPage: function(){
					return this.waitFor({
						id: "CustomersPage",
						viewName: cViewName,
						success: function(){
							Opa5.assert.ok(true, "The Customer view is displayed");
						},
						errorMessage: "Did not find the Customer View"
					});
				}
				// iShouldSeeTheProductPage: function(){
				// 	return this.waitFor({
				// 		id: "ProductsPage",
				// 		viewName: pViewName,
				// 		success: function(){
				// 			Opa5.assert.ok(true, "The Product view is displayed");
				// 		},
				// 		errorMessage: "Did not find the Customer View"
				// 	});
				// },
				// iShouldSeeTheSupplierPage: function(){
				// 	return this.waitFor({
				// 		id: "SupplierPage",
				// 		viewName: supViewName,
				// 		success: function(){
				// 			Opa5.assert.ok(true, "The Supplier view is displayed");
				// 		},
				// 		errorMessage: "Did not find the Customer View"
				// 	});
				// }
				
			}
		}
	});

});