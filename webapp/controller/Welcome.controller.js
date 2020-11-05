sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/yash/Assignment-8/model/formatter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment",
	"sap/ui/model/Sorter",
	"sap/ui/core/UIComponent"
], function (Controller, formatter, JSONModel, Fragment, Sorter, UIComponent) {
	"use strict";

	return Controller.extend("com.yash.Assignment-8.controller.Welcome", {
		formatter: formatter,
		onInit: function () {

		},
		countTotalEmployees: function (oEvent) {
			this.getView().byId("totalEmployees").setText("Total Records : " + oEvent.getParameter("total"));
		},
		countTotalOrders: function (oEvent) {
			this.getView().byId("totalOrders").setText("Total Records : " + oEvent.getParameter("total"));
		},
		countTotalOrderDetails: function (oEvent) {
			this.getView().byId("totalOrderDetails").setText("Total Records : " + oEvent.getParameter("total"));
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
		handleSortButtonPressed: function () {
			this.openSettingDialog("SortEmployeeListTable").open();
		},
		handleOrdersSortButtonPressed: function () {
			this.openSettingDialog("SortOrdersListTable").open();
		},
		handleOrderDetailsSortButtonPressed: function () {
			this.openSettingDialog("SortOrderDetailsListTable").open();
		},
		openSettingDialog: function (oDialogName) {
			return sap.ui.xmlfragment("com.yash.Assignment-8.fragments." + oDialogName, this);
		},
		handleSortDialogConfirm: function (oEvent) {
			var oTable = this.byId("employeesListTable"),
				mParams = oEvent.getParameters(),
				oBinding = oTable.getBinding("items"),
				sPath,
				bDescending,
				aSorters = [];

			sPath = mParams.sortItem.getKey();
			bDescending = mParams.sortDescending;
			aSorters.push(new Sorter(sPath, bDescending));
			oBinding.sort(aSorters);
		},
		handleOrdersSortDialogConfirm: function (oEvent) {
			var oTable = this.byId("ordersListTable"),
				mParams = oEvent.getParameters(),
				oBinding = oTable.getBinding("items"),
				sPath,
				bDescending,
				aSorters = [];

			sPath = mParams.sortItem.getKey();
			bDescending = mParams.sortDescending;
			aSorters.push(new Sorter(sPath, bDescending));
			oBinding.sort(aSorters);
		},
		handleOrderDetailsSortDialogConfirm: function (oEvent) {
			var oTable = this.byId("OrderDetailsListTable"),
				mParams = oEvent.getParameters(),
				oBinding = oTable.getBinding("items"),
				sPath,
				bDescending,
				aSorters = [];

			sPath = mParams.sortItem.getKey();
			bDescending = mParams.sortDescending;
			aSorters.push(new Sorter(sPath, bDescending));
			oBinding.sort(aSorters);
		},
		handleActionPress: function () {
			this._oPopover.close();
		},
		showOdersListTable: function (oEvent) {
			var path = oEvent.getSource().getBindingContextPath();
			this.getView().byId("ordersListTable").bindElement(path);
		},
		showOderDetailsListTable: function (oEvent) {
			var path = oEvent.getSource().getBindingContextPath();
			this.getView().byId("OrderDetailsListTable").bindElement(path);
		},
		onCustomerButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteCustomers");
		},
		onProductsButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteProducts");
		},
		onSupplierButton: function () {
			UIComponent.getRouterFor(this).navTo("RouteSuppliers");
		}
	});
});