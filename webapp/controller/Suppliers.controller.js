sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/yash/Assignment-8/model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/ui/model/Sorter",
	"sap/ui/core/UIComponent"
], function (Controller, formatter, JSONModel, Fragment, Sorter, UIComponent) {
	"use strict";

	return Controller.extend("com.yash.Assignment-8.controller.Suppliers", {

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
		handleSortButtonPressed: function () {
			this.openSettingDialog("SortSupplierList").open();
		},
		openSettingDialog: function (oDialogName) {
			return sap.ui.xmlfragment("com.yash.Assignment-8.fragments." + oDialogName, this);
		},
		handleSortDialogConfirm: function (oEvent) {
			var oList = this.byId("suppliersListTable"),
				mParams = oEvent.getParameters(),
				oBinding = oList.getBinding("items"),
				sPath,
				bDescending,
				aSorters = [];

			sPath = mParams.sortItem.getKey();
			bDescending = mParams.sortDescending;
			aSorters.push(new Sorter(sPath, bDescending));
			oBinding.sort(aSorters);
		},
		getDialogFragment: function (oDialogName) {
			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("com.yash.Assignment-8.fragments." + oDialogName, this.getView().getController());
				this.getView().addDependent(this._oDialog);
			}
			return this._oDialog;
		},
		onCloseDialog: function () {
			this.getDialogFragment("SuppliersSelectDialog").close();
		},
		selectSupplierDialog: function () {
			this.getDialogFragment("SuppliersSelectDialog").open();
		},
		openSelectedSuppliers: function () {
			var suppliersTable = sap.ui.getCore().byId("suppliersSelectTable");
			var selectedContexts = suppliersTable.getSelectedContexts();
			var selectedSupplierModel = new JSONModel();
			selectedSupplierModel.setProperty("/selectedSuppliers");
			var selectedSupplierData = [];
			for (var i = selectedContexts.length - 1; i >= 0; i--) {
				var selectedSupplier = selectedContexts[i].getObject();
				selectedSupplierData.push(selectedSupplier);
			}
			selectedSupplierModel.setData({
				selectedSuppliers: selectedSupplierData
			});
			this.getView().byId("suppliersListTable").setModel(selectedSupplierModel);
			this.onCloseDialog();
		},
		onEmployeesButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteWelcome");
		},
		onCustomersButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteCustomers");
		},
		onProductsButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteProducts");
		}

	});

});