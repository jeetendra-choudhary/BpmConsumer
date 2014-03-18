getOdataModel = function() {
	var oDataModel = new sap.ui.model.odata.ODataModel(
			getServiceUrl("/bpmodata/taskdata.svc/"
					+ getParameterValue('taskId')), true);
	oDataModel.setCountSupported(false);
	oDataModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
	return oDataModel;
};

getParameterValue = function(parameter) {
	var pairs = window.location.search.substring(1).split("&");
	for ( var i = 0; i < pairs.length; i++) {
		var pair = pairs[i].split("=");
		if (decodeURIComponent(pair[0]) == parameter) {
			return decodeURIComponent(pair[1]);
		}
	}
	console.log('Query parameter %s not found', parameter);
};

claimTask = function() {
	// create ODataModel for BPM Tasks OData service
	var tasksSvcURL = "/bpmodata/tasks.svc";
	var tasksODataModel = new sap.ui.model.odata.ODataModel(getServiceUrl(tasksSvcURL), false);

	// send request to BPM Tasks OData service to claim the Task
	tasksODataModel.create("/Claim?InstanceID='" + getParameterValue('taskId') + "'", null, null,
			null, function(oEvent) {
				alert("Claim failed.");
			});
};

getServiceUrl = function(sServiceUrl) {
	/*
	 * for local testing prefix with proxy if you and your team use a special
	 * host name or IP like 127.0.0.1 for localhost please adapt the if
	 * statement below
	 */
	if (window.location.hostname == "localhost") {
		//TODO Change the path to point actual server
		return "<path>" + sServiceUrl;
	} else {
		return sServiceUrl;
	}
};
