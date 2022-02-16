sap.ui.define(
    [], function () {
        return {
            getTotal: function (unitPrice, qty, disc) {
                if (disc != null) {
                    var DiscountValue = unitPrice * disc;  
                    return (unitPrice  - DiscountValue) * qty;              
                }else{
                    return unitPrice * qty;
                }
            }
        }
    });