sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/yash/Assignment-8/model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/ui/model/Sorter",
	"sap/ui/core/UIComponent"
], function (Controller, formatter, JSONModel, Fragment, Sorter, UIComponent) {
	"use strict";

	return Controller.extend("com.yash.Assignment-8.controller.Products", {
		formatter: formatter,
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
		onEmployeesButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteWelcome");
		},
		onCustomersButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteCustomers");
		},
		onSupplierButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteSuppliers");
		},
		getDialogFragment: function (oDialogName) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("com.yash.Assignment-8.fragments." + oDialogName, this.getView().getController());
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		onProductListItemPress: function (oEvent) {
			var path = oEvent.getSource().getBindingContextPath();
			this.getDialogFragment("ProductInfoDisplay").bindElement(path);
			this.getDialogFragment("ProductInfoDisplay").open();
		},
		onCloseDialog: function () {
			this.getDialogFragment("ProductInfoDisplay").close();
		}

	});

});