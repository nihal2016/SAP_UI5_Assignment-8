sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/yash/Assignment-8/model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/ui/model/Sorter",
	"sap/ui/core/UIComponent"
], function (Controller, formatter, JSONModel, Fragment, Sorter, UIComponent) {
	"use strict";

	return Controller.extend("com.yash.Assignment-8.controller.Customers", {

		onInit: function () {

		},
		showLanguages: function (oEvent) {
			var oButton = oEvent.getSource();
			var oLanguageModel = new JSONModel();
			oLanguageModel.setData({
				"Languages": [{
					language: "Germany"
				}, {
					language: "US"
				}, {
					language: "UK"
				}, {
					language: "India"
				}, {
					language: "France"
				}]
			});

			Fragment.load({
				name: "com.yash.Assignment-8.fragments.Languages",
				controller: this
			}).then(function (pPopover) {
				this._oPopover = pPopover;
				this.getView().addDependent(this._oPopover);
				this._oPopover.setModel(oLanguageModel);
				this._oPopover.bindElement("");
				this._oPopover.openBy(oButton);
			}.bind(this));
		},
		handleActionPress: function () {
			this._oPopover.close();
		},
		showcustomerHeader: function (oEvent) {
			var path = oEvent.getSource().getBindingContextPath();
			this.getView().byId("customerHeader").bindElement(path);
		},
		onEmployeesButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteWelcome");
		},
		onProductsButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteProducts");
		},
		onSupplierButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteSuppliers");
		}

	});

});