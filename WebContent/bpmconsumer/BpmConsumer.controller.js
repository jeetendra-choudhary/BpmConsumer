sap.ui.controller("bpmconsumer.BpmConsumer", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf bpmconsumer.BpmConsumer
	 */
	onInit : function() {

		var taskId = getParameterValue('taskId');

		console.log(taskId);
		var oDataModel = getOdataModel();
		console.log(oDataModel);
		//		-------------------------------------------------------------------------
		//		Reading the oDataModel
		oDataModel.read("/InputData('" + taskId + "')", null, {
			"$expand" : 'CherryWork'
		}, false,

		function(oData, oResponse) {
			// create JSON model
			var oODataJSONModel = new sap.ui.model.json.JSONModel();

			// set the odata JSON as data of JSON model
			oODataJSONModel.setData(oData);

			// store the model  
			sap.ui.getCore().setModel(oODataJSONModel);
			sap.ui.getCore().byId('deliveryInvMat').bindElement("/CherryWork");
		}, function() {
			alert("Read failed");
		});

	},

	onComplete : function() {
		var oDataModel = getOdataModel();
		console.log(oDataModel);
		var outputData = {};
		outputData.CherryWork = sap.ui.getCore().getModel().getProperty('/CherryWork');
		console.log(outputData);
		
		claimTask();
		
		oDataModel.create("/OutputData", outputData, null, function() {
			alert("Create successful");
			window.location.reload(true);
		}, function() {
			alert("Create failed");
		});
	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf bpmconsumer.BpmConsumer
 */
//	onBeforeRendering: function() {
//
//	},
/**
 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
 * This hook is the same one that SAPUI5 controls get after being rendered.
 * @memberOf bpmconsumer.BpmConsumer
 */
//	onAfterRendering: function() {
//
//	},
/**
 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
 * @memberOf bpmconsumer.BpmConsumer
 */
//	onExit: function() {
//
//	}
});