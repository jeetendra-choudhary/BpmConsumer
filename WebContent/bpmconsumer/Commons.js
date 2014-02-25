
sap.ui.commons.TextField.extend("ExtTextField", {
	metadata : {
		properties : {
			"vType" : "string"
		},
	},
	renderer : "sap.ui.commons.TextFieldRenderer",
});

	ExtTextField.prototype.change = function(evt, oControl) {

	var isOk = true;

	console.log(oControl.getVType());

	if (oControl.getVType() == 'number'
			&& !isNumber(sap.ui.getCore().byId(evt.getSource().getId())
					.getValue().trim())) {
		alert("Please provide valid Number");
		isOk = false;
	}

	if (isOk
			&& oControl.getVType() == 'email'
			&& !isEmail(sap.ui.getCore().byId(evt.getSource().getId())
					.getValue().trim())) {
		alert("Please provide valid Email Address");
		isOk = false;
	}

	if (isOk
			&& oControl.getRequired()
			&& isEmpty(sap.ui.getCore().byId(evt.getSource().getId())
					.getValue())) {
		alert("Field is mandatory please provide valid value");
		isOk = false;
	}

	if (isOk) {
		sap.ui.getCore().byId(evt.getSource().getId()).setValueState(
				sap.ui.core.ValueState.Success);
	} else {
		sap.ui.getCore().byId(evt.getSource().getId()).setValueState(
				sap.ui.core.ValueState.Error);
	}

};


isEmpty = function(obj){
	return obj.trim().length==0;
};
isString = function(obj) {

};
isNumber = function(obj) {
	return $.isNumeric(obj);
};
isEmail = function(obj) {
	return /^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,4}$/.test(obj)
    && /^(?=.{1,64}@.{4,64}$)(?=.{6,100}$).*/.test(obj);
};

/*
 * navigate = function(container,fromView,toView){ var oContainer =
 * sap.ui.getCore().byId(container);
 * oContainer.removeContent(sap.ui.getCore().byId(fromView));
 * oContainer.addContent(sap.ui.getCore().byId(toView)); };
 */

sap.ui.commons.ValueHelpField.extend("ExtendedValueSelector", 
		 {
			 metadata : 
			 { 
		     	properties : 
		     	{
			 		"evsSourceFieldId"			 : "string",
			 		"evsSourceDescFieldId"		 : "string",
			 		"evsTitle"          		 : "string",
		         	"codeLable" 				 : "string",
		         	"descriptionLable"  		 : "string",
		         	"codeColModelField"          : "string",
		         	"descColModelField"          : "string",
		         	"validationState"			 : "boolean",
		         	"dataPath"					 : "string"
		     	}
		 	  },
		 	 renderer: "sap.ui.commons.ValueHelpFieldRenderer",

			 openEVS : function(oControl,oModel) 
			 {
					var oThis 	 = this;			
					var evsDialog = new sap.ui.commons.Dialog('oDialogId', 
					{
						width : "450px",
						height: "350px",
						maxWidth:"450px",
						minWidth:"400px",
						maxHeight:"400px",
						minHeight:"250px",
						modal : true,
						resizable:false,
						showCloseButton:false,
						contentBorderDesign	: sap.ui.commons.enums.BorderDesign.Box
					});			
					evsDialog.setTitle(oControl.getEvsTitle());
					
					//Create table
					var	oTable = new sap.ui.table.Table('oTableId', 
					{
						width : "100%",
						editable:false,
						navigationMode: sap.ui.table.NavigationMode.Paginator,
						visibleRowCount : 7
					});
					//Add two columns. First column for Code and second one for description
					oTable.addColumn(new sap.ui.table.Column({
						label 	: new sap.ui.commons.Label({
						text 	: oControl.getCodeLable()
						}),
						template : new sap.ui.commons.TextView().bindProperty("text",oControl.getCodeColModelField()),
						sortProperty 	: oControl.getCodeColModelField(),
						filterProperty 	: oControl.getCodeColModelField(),
						width: "40%"
					}));

					oTable.addColumn(new sap.ui.table.Column({
						label 	: new sap.ui.commons.Label({
						text 	: oControl.getDescriptionLable()
						}),
						template : new sap.ui.commons.TextView().bindProperty("text",
								oControl.getDescColModelField()),
								sortProperty 	: oControl.getDescColModelField(),
								filterProperty 	: oControl.getDescColModelField(),
								width: "60%"
					}));

					oTable.setSelectionMode(sap.ui.table.SelectionMode.Single);

					//Warning message displayed when user clicks on OK button without selecting a value
					var msgToolTip = new sap.ui.ux3.ToolPopup({
						content   : [ new sap.ui.commons.Label({
							text  : "Please select a value "
						}),
						new sap.ui.commons.Label({
							text : " "
						}),
						new sap.ui.commons.Button({
							text : "Ok",
							press : function() {msgToolTip.close()}
						}) ]			
					});
					if(oModel != null)
					{
						oTable.setModel(oModel);
						oTable.bindRows(oControl.getDataPath()); 
					}
					// Initially sort the table
					oTable.sort(oTable.getColumns()[0]);
					evsDialog.addContent(oTable);
					
					//add Ok and Cancel buttons
					var okButton = new sap.ui.commons.Button("buttonOkId", 
					{
						text : "OK",
						press : function() 
						{				
							var oTable 			= new sap.ui.getCore().byId('oTableId');
							var index 			= oTable.getSelectedIndex();
							var filteredIndexs 	= oTable.getBinding().aIndices;
							var tableData 		= oTable.getBinding().oList;
							
							if( index >= 0 )
							{
								var rowData = tableData[filteredIndexs[index]];
								
								if(oControl.getEvsSourceFieldId() != null && oControl.getEvsSourceFieldId().length>0)
								{
									sap.ui.getCore().byId(oControl.getEvsSourceFieldId()).setValue(rowData[oControl.getCodeColModelField()]);
									sap.ui.getCore().byId(oControl.getEvsSourceFieldId()).setValueState(sap.ui.core.ValueState.Success);	
								}
								if(oControl.getEvsSourceDescFieldId() != null && oControl.getEvsSourceDescFieldId().length>0)
								{
									sap.ui.getCore().byId(oControl.getEvsSourceDescFieldId()).setText(rowData[oControl.getDescColModelField()]);
								}							
								evsDialog.close();	
								oThis.destroyEVS();
								oControl.setValidationState(true);
							}
							else
							{				
								msgToolTip.setOpener(this);	
								msgToolTip.setModal(true);
								msgToolTip.open();					
							}						
						}
				   });

					var closeButton = new sap.ui.commons.Button("buttonCancelId", 
					{
						text : "Cancel",
						press : function() 
						{				
							evsDialog.close();
							oThis.destroyEVS();				
						}
					});

					evsDialog.addButton(okButton);
					evsDialog.addButton(closeButton);
					evsDialog.open();
				},
				//this method destroys the component on close of the pop up.
				destroyEVS: function()
				{
					var dialog = sap.ui.getCore().getControl('oDialogId');
					if(dialog!=null)
					{
						dialog.destroy();					
					}
				},
				validateInputs: function(evt,oControl,oModel)
				{
					var userInputValue = evt.getParameter("newValue");
					
					if(userInputValue != null && userInputValue.length>0)
					{
						if(oModel != null)
						{
							var dataLength = oModel.getProperty(oControl.getDataPath()).length;
							var validValueFlag = false;
							
							for(var index=0;(index<dataLength && !validValueFlag);index++)
							{
								var dataVal = oModel.getProperty(oControl.getDataPath())[index][oControl.getCodeColModelField()];
														
								if(dataVal != null && (dataVal.toString()==(userInputValue)))
								{
									validValueFlag = true;								
									var descFieldVal = oModel.getProperty(oControl.getDataPath())[index][oControl.getDescColModelField()];
									
									if(oControl.getEvsSourceDescFieldId() != null && oControl.getEvsSourceDescFieldId().length>0 && descFieldVal!=null && descFieldVal.length>0)
									{
										sap.ui.getCore().byId(oControl.getEvsSourceDescFieldId()).setText(descFieldVal);
									}
								}
							}					
							if(!validValueFlag)
							{
								oControl.focus();
								oControl.setValueState(sap.ui.core.ValueState.Error);
							}
							else
							{
								oControl.focus();
								oControl.setValueState(sap.ui.core.ValueState.Success);						
							}
						}
					}	
					oControl.setValidationState(validValueFlag);			
				}			 
			 });