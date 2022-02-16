sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("yard.sapyard05.controller.POHeaderView", {
            onInit: function () {
                this._oRouter = this.getOwnerComponent().getRouter();
                this.oModel = this.getOwnerComponent().getModel();
                this.oModel.setSizeLimit(1000);
            },
            onFinish: function () {
                var length = this.byId("idList12").getItems().length;
                this.byId("idText12").setText("Total No.of PO's-" + length);
            },
            onItemPress: function (oEvent) {
                var getSelectedList = oEvent.getSource().getBindingContext().getObject("OrderID");
                this._oRouter.navTo("RouteHeaderDetails", {
                    selectedList: getSelectedList
                })
            }
        });
    });
