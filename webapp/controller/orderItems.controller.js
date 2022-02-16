sap.ui.define(
    ["sap/ui/core/mvc/Controller",
    "yard/sapyard05/model/formatter"],
    function (oController, formatter) {
        return oController.extend("yard.sapyard05.controller.orderItems", {
            formatter:formatter,
            onInit: function () {
                // this.orderNo;
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.attachRoutePatternMatched(this.getData, this);
            },
            getData: function (oEvent) {
                orderNo = oEvent.getParameter("arguments").orderNo;
                var filter = new sap.ui.model.Filter("OrderID", sap.ui.model.FilterOperator.EQ, orderNo);
                var aFilter = [filter];
                this.byId("idTable").getBinding("rows").filter(aFilter);

            },
            onBack: function () {
                this.oRouter.navTo("RouteHeaderDetails",{
                    selectedList:orderNo
                });
            }
        });
    });