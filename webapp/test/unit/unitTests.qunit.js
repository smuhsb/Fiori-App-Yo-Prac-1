/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/fiori_app_yo_prac1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});