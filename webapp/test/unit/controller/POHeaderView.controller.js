/*global QUnit*/

sap.ui.define([
	"yard/sapyard_05/controller/POHeaderView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("POHeaderView Controller");

	QUnit.test("I should test the POHeaderView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
