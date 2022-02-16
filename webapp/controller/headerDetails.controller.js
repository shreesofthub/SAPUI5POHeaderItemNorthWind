sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (oController) {
        return oController.extend("yard.sapyard05.controller.headerDetails", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
                this.oRouter.attachRoutePatternMatched(this.getData, this);
            },
            getData: function (event) {
                oSelectedList = event.getParameter("arguments").selectedList;
                this.getView().bindElement("/Orders(" + oSelectedList + ")");
            },
            onBack: function () {
                this.oRouter.navTo("RoutePOHeaderView");
            },
            getOrderItemDetails: function () {
                this.oRouter.navTo("RouteOrderItems",{
                    orderNo:oSelectedList
                });
            }
        });
    }
);