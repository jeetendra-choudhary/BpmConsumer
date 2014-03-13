sap.ui.jsview("bpmconsumer.BpmConsumer", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf bpmconsumer.BpmConsumer
	*/ 
	getControllerName : function() {
		return "bpmconsumer.BpmConsumer";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf bpmconsumer.BpmConsumer
	*/ 
	createContent : function(oController) {
		
		var oPanel = new sap.ui.commons.Panel({
			id : "invPanel", // sap.ui.core.ID
			width : "60%", // sap.ui.core.CSSSize
			height : undefined, // sap.ui.core.CSSSize
			enabled : true, // boolean
			visible : true, // boolean
			scrollLeft : 0, // int
			scrollTop : 0, // int
			applyContentPadding : true, // boolean
			collapsed : false, // boolean
			areaDesign : sap.ui.commons.enums.AreaDesign.Transparent, // sap.ui.commons.enums.AreaDesign
			borderDesign : sap.ui.commons.enums.BorderDesign.Box, // sap.ui.commons.enums.BorderDesign
			showCollapseIcon : true, // boolean
			text : undefined, // string
			tooltip : undefined, // sap.ui.core.TooltipBase
			content : [], // sap.ui.core.Control
			title : new sap.ui.core.Title({
				id : "id2", // sap.ui.core.ID
				text : 'Cherrry Work', // string
				icon : 'images/spoon-cherry.png', // sap.ui.core.URI
				level : sap.ui.core.TitleLevel.Auto, // sap.ui.core.TitleLevel
				emphasized : false, // boolean
				tooltip : undefined // sap.ui.core.TooltipBase
//				customData : []
			// sap.ui.core.CustomData
			}) // sap.ui.core.Title
		});
		  
		oPanel.setLayoutData();
		var oMatrix = sap.ui.commons.layout.MatrixLayout('deliveryInvMat',{width:'800px',columns:4});
		oMatrix.setWidths('25%','25%','25%','25%');
		var oAddAttachmentCB = new sap.ui.commons.CheckBox({
			id : "oAddAttachmentCB", // sap.ui.core.ID
			checked : "{allowAttachment}", // boolean
			text : 'Add Attachment', // string
			visible : true, // boolean
			enabled : true, // boolean
			editable : true, // boolean
			valueState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
			width : undefined, // sap.ui.core.CSSSize
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			name : undefined, // string
			tooltip : undefined, // sap.ui.core.TooltipBase
			ariaDescribedBy : [], // sap.ui.core.Control
			ariaLabelledBy : [], // sap.ui.core.Control
			change : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		});
		
		var oSubjecttLbl = new sap.ui.commons.Label({
			id : "oSubjecttLbl", // sap.ui.core.ID
			design : sap.ui.commons.LabelDesign.Standard, // sap.ui.commons.LabelDesign
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			wrapping : false, // boolean
			width : '20%', // sap.ui.core.CSSSize
			text : 'Subject', // string
			visible : true, // boolean, since 1.14.0
			icon : undefined, // sap.ui.core.URI
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			required : false, // boolean, since 1.11.0
			requiredAtBegin : undefined, // boolean, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			labelFor : oSubjectTxtFld // sap.ui.core.Control
		});
		
		var oSubjectTxtFld = new ExtTextField({
			id : "oSubjectTxtFld", // sap.ui.core.ID
			value : "{subject}", // string
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			enabled : true, // boolean
			editable : true, // boolean
			visible : true, // boolean
			required : true, // boolean
			width : '70%', // sap.ui.core.CSSSize
			maxLength : 0, // int
			vType : 'string',
			valueState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			imeMode : sap.ui.core.ImeMode.Auto, // sap.ui.core.ImeMode
			design : sap.ui.core.Design.Standard, // sap.ui.core.Design
			helpId : '', // string
			accessibleRole : sap.ui.core.AccessibleRole.Textbox, // sap.ui.core.AccessibleRole
			name : undefined, // string
			placeholder : '', // string, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			change : 
				function(evt) {
				this.change(evt, this);
			}
		});
		
		var oDescriptionLbl = new sap.ui.commons.Label({
			id : "oDescriptionLbl", // sap.ui.core.ID
			design : sap.ui.commons.LabelDesign.Standard, // sap.ui.commons.LabelDesign
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			wrapping : false, // boolean
			width : '20%', // sap.ui.core.CSSSize
			text : 'Description', // string
			visible : true, // boolean, since 1.14.0
			icon : undefined, // sap.ui.core.URI
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			required : false, // boolean, since 1.11.0
			requiredAtBegin : undefined, // boolean, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			labelFor : oDescriptionTxtFld // sap.ui.core.Control
		});
		
		var oDescriptionTxtFld = oInput2 = new sap.ui.commons.TextArea({
			id : 'input2',
			value : "{description}",
			tooltip : 'Enter the Description',
			cols : 40,
			width:'70%',
			columnspan:'3',
			rows : 2,
			wrapping : sap.ui.core.Wrapping.Off,
			valueState : sap.ui.core.ValueState.Normal
			});
		
		var oAllowCommentCB = new sap.ui.commons.CheckBox({
			id : "oAllowCommentCB", // sap.ui.core.ID
			checked : "{allowComment}", // boolean
			text : 'Allow Comment', // string
			visible : true, // boolean
			enabled : true, // boolean
			editable : true, // boolean
			valueState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
			width : undefined, // sap.ui.core.CSSSize
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			name : undefined, // string
			tooltip : undefined, // sap.ui.core.TooltipBase
			ariaDescribedBy : [], // sap.ui.core.Control
			ariaLabelledBy : [], // sap.ui.core.Control
			change : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		});
		var oAllowDelegateCB = new sap.ui.commons.CheckBox({
			id : "oAllowDelegateCB", // sap.ui.core.ID
			checked : "{allowDelegate}", // boolean
			text : 'Allow Delegate', // string
			visible : true, // boolean
			enabled : true, // boolean
			editable : true, // boolean
			valueState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
			width : undefined, // sap.ui.core.CSSSize
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			name : undefined, // string
			tooltip : undefined, // sap.ui.core.TooltipBase
			ariaDescribedBy : [], // sap.ui.core.Control
			ariaLabelledBy : [], // sap.ui.core.Control
			change : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		});
		var oReadOnlyCB = new sap.ui.commons.CheckBox({
			id : "oReadOnlyCB", // sap.ui.core.ID
			checked : "{readOnly}", // boolean
			text : 'Read Only', // string
			visible : true, // boolean
			enabled : true, // boolean
			editable : true, // boolean
			valueState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
			width : undefined, // sap.ui.core.CSSSize
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			name : undefined, // string
			tooltip : undefined, // sap.ui.core.TooltipBase
			ariaDescribedBy : [], // sap.ui.core.Control
			ariaLabelledBy : [], // sap.ui.core.Control
			change : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		});
		var oActiveCountLbl = new sap.ui.commons.Label({
			id : "oActiveCountLbl", // sap.ui.core.ID
			design : sap.ui.commons.LabelDesign.Standard, // sap.ui.commons.LabelDesign
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			wrapping : false, // boolean
			width : '30%', // sap.ui.core.CSSSize
			text : 'No of Active account', // string
			visible : true, // boolean, since 1.14.0
			icon : undefined, // sap.ui.core.URI
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			required : false, // boolean, since 1.11.0
			requiredAtBegin : undefined, // boolean, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			labelFor : oPriorityDDB // sap.ui.core.Control
		});
		var oActiveAccountTxtFld = new ExtTextField({
			id : "oActiveAccountTxtFld", // sap.ui.core.ID
			value : "{noOfActiveAccounts}", // string
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			enabled : true, // boolean
			editable : true, // boolean
			visible : true, // boolean
			required : true, // boolean
			width : '40%', // sap.ui.core.CSSSize
			maxLength : 0, // int
			vType : 'number',
			valueState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			imeMode : sap.ui.core.ImeMode.Auto, // sap.ui.core.ImeMode
			design : sap.ui.core.Design.Standard, // sap.ui.core.Design
			helpId : '', // string
			accessibleRole : sap.ui.core.AccessibleRole.Textbox, // sap.ui.core.AccessibleRole
			name : undefined, // string
			placeholder : '0', // string, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			change : 
				function(evt) {
				this.change(evt, this);
			}
		});
		
		var oSlaInMinLbl = new sap.ui.commons.Label({
			id : "oSlaInMinLbl", // sap.ui.core.ID
			design : sap.ui.commons.LabelDesign.Standard, // sap.ui.commons.LabelDesign
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			wrapping : false, // boolean
			width : '20%', // sap.ui.core.CSSSize
			text : 'SLA in Minute', // string
			visible : true, // boolean, since 1.14.0
			icon : undefined, // sap.ui.core.URI
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			required : false, // boolean, since 1.11.0
			requiredAtBegin : undefined, // boolean, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			labelFor : oPriorityDDB // sap.ui.core.Control
		});
		var oSlaInMinTxtFld = new ExtTextField({
			id : "oSlaInMinTxtFld", // sap.ui.core.ID
			value : "{slainMin}", // string
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			enabled : true, // boolean
			editable : true, // boolean
			visible : true, // boolean
			required : true, // boolean
			width : '40%', // sap.ui.core.CSSSize
			maxLength : 0, // int
			vType : 'number',
			valueState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			imeMode : sap.ui.core.ImeMode.Auto, // sap.ui.core.ImeMode
			design : sap.ui.core.Design.Standard, // sap.ui.core.Design
			helpId : '', // string
			accessibleRole : sap.ui.core.AccessibleRole.Textbox, // sap.ui.core.AccessibleRole
			name : undefined, // string
			placeholder : '0', // string, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			change : 
				function(evt) {
				this.change(evt, this);
			}
		});
		
		var oAssignToUsrLbl = new sap.ui.commons.Label({
			id : "oAssignToUsrLbl", // sap.ui.core.ID
			design : sap.ui.commons.LabelDesign.Standard, // sap.ui.commons.LabelDesign
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			wrapping : false, // boolean
			width : '20%', // sap.ui.core.CSSSize
			text : 'Assign to', // string
			visible : true, // boolean, since 1.14.0
			icon : undefined, // sap.ui.core.URI
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			required : false, // boolean, since 1.11.0
			requiredAtBegin : undefined, // boolean, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			labelFor : oAssignToUsrTxtFld // sap.ui.core.Control
		});
		var oAssignToUsrTxtFld = new ExtTextField({
			id : "oAssignToUsrTxtFld", // sap.ui.core.ID
			value : "{assignedToUsers}", // string
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			enabled : true, // boolean
			editable : true, // boolean
			visible : true, // boolean
			required : true, // boolean
			width : '40%', // sap.ui.core.CSSSize
			maxLength : 0, // int
			vType : 'email',
			valueState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			imeMode : sap.ui.core.ImeMode.Auto, // sap.ui.core.ImeMode
			design : sap.ui.core.Design.Standard, // sap.ui.core.Design
			helpId : '', // string
			accessibleRole : sap.ui.core.AccessibleRole.Textbox, // sap.ui.core.AccessibleRole
			name : undefined, // string
			placeholder : 'abc@abc.com', // string, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			change : 
				function(evt) {
				this.change(evt, this);
			}
		});
		
		var oAccount1Lbl = new sap.ui.commons.Label({
			id : "oAccount1Lbl", // sap.ui.core.ID
			design : sap.ui.commons.LabelDesign.Standard, // sap.ui.commons.LabelDesign
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			wrapping : false, // boolean
			width : '30%', // sap.ui.core.CSSSize
			text : 'Account 1', // string
			visible : true, // boolean, since 1.14.0
			icon : undefined, // sap.ui.core.URI
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			required : false, // boolean, since 1.11.0
			requiredAtBegin : undefined, // boolean, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			labelFor : oAccount1TxtFld // sap.ui.core.Control
		});
		var oAccount1TxtFld = new ExtTextField({
			id : "oAccount1TxtFld", // sap.ui.core.ID
			value : "{account1}", // string
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			enabled : true, // boolean
			editable : true, // boolean
			visible : true, // boolean
			required : true, // boolean
			width : '40%', // sap.ui.core.CSSSize
			maxLength : 0, // int
			vType : 'String',
			valueState : sap.ui.core.ValueState.None, // sap.ui.core.ValueState
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			imeMode : sap.ui.core.ImeMode.Auto, // sap.ui.core.ImeMode
			design : sap.ui.core.Design.Standard, // sap.ui.core.Design
			helpId : '', // string
			accessibleRole : sap.ui.core.AccessibleRole.Textbox, // sap.ui.core.AccessibleRole
			name : undefined, // string
			placeholder : '', // string, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			change : 
				function(evt) {
				this.change(evt, this);
			}
		});
		
		var oPriorityLbl = new sap.ui.commons.Label({
			id : "oPriorityLbl", // sap.ui.core.ID
			design : sap.ui.commons.LabelDesign.Standard, // sap.ui.commons.LabelDesign
			textDirection : sap.ui.core.TextDirection.Inherit, // sap.ui.core.TextDirection
			wrapping : false, // boolean
			width : '20%', // sap.ui.core.CSSSize
			text : 'Priority', // string
			visible : true, // boolean, since 1.14.0
			icon : undefined, // sap.ui.core.URI
			textAlign : sap.ui.core.TextAlign.Begin, // sap.ui.core.TextAlign
			required : false, // boolean, since 1.11.0
			requiredAtBegin : undefined, // boolean, since 1.14.0
			tooltip : undefined, // sap.ui.core.TooltipBase
			labelFor : oPriorityDDB // sap.ui.core.Control
		});
		var oPriorityDDB = new sap.ui.commons.DropdownBox("oPriorityDDB");
		oPriorityDDB.setTooltip("Priority");
		oPriorityDDB.setEditable(true);
		oPriorityDDB.setWidth("70%");
		var oItem = new sap.ui.core.ListItem("Priority1");
		oItem.setText("High");
		oPriorityDDB.addItem(oItem);
		oItem = new sap.ui.core.ListItem("Priority2");
		oItem.setText("Medium");
		oPriorityDDB.addItem(oItem);
		oItem = new sap.ui.core.ListItem("Priority3");
		oItem.setText("Low");
		oPriorityDDB.addItem(oItem);
		oPriorityDDB.addItem(oItem);
		oPriorityDDB.setValue("High");
		
		var oSbmtButton = new sap.ui.commons.Button( {
			id : "oSubmitBtn", // sap.ui.core.ID
			text : 'Submit', // string
			enabled : true, // boolean
			visible : true, // boolean
			width : '20%', // sap.ui.core.CSSSize
			helpId : '', // string
			icon : '', // sap.ui.core.URI
			iconHovered : '', // sap.ui.core.URI
			iconSelected : '', // sap.ui.core.URI
			iconFirst : true, // boolean
			height : undefined, // sap.ui.core.CSSSize
			styled : true, // boolean
			lite : false, // boolean
			style : sap.ui.commons.ButtonStyle.Default, // sap.ui.commons.ButtonStyle
			tooltip : undefined, // sap.ui.core.TooltipBase
			ariaDescribedBy : [], // sap.ui.core.Control
			ariaLabelledBy : [], // sap.ui.core.Control
			press : [ function(oEvent) {
				var control = oEvent.getSource();
				oController.onComplete();
			}, this ]
		});
		var oCanButton = new sap.ui.commons.Button( {
			id : "oCanBtn", // sap.ui.core.ID
			text : 'Cancel', // string
			enabled : true, // boolean
			visible : true, // boolean
			width : '20%', // sap.ui.core.CSSSize
			helpId : '', // string
			icon : '', // sap.ui.core.URI
			iconHovered : '', // sap.ui.core.URI
			iconSelected : '', // sap.ui.core.URI
			iconFirst : true, // boolean
			height : undefined, // sap.ui.core.CSSSize
			styled : true, // boolean
			lite : false, // boolean
			style : sap.ui.commons.ButtonStyle.Default, // sap.ui.commons.ButtonStyle
			tooltip : undefined, // sap.ui.core.TooltipBase
			ariaDescribedBy : [], // sap.ui.core.Control
			ariaLabelledBy : [], // sap.ui.core.Control
			press : [ function(oEvent) {
				var control = oEvent.getSource();
			}, this ]
		});
		var oMatCell0 = new sap.ui.commons.layout.MatrixLayoutCell(
				{
					id : "oMatCell0", // sap.ui.core.ID
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
					colSpan : 2, // int
					hAlign : sap.ui.commons.layout.HAlign.Begin, // sap.ui.commons.layout.HAlign
					padding : sap.ui.commons.layout.Padding.End, // sap.ui.commons.layout.Padding
					rowSpan : 1, // int
					separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
					vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
					tooltip : undefined, // sap.ui.core.TooltipBase
					content : [oSubjecttLbl,oSubjectTxtFld]
				// sap.ui.core.Control
				});
		var oMatCell00 = new sap.ui.commons.layout.MatrixLayoutCell(
				{
					id : "oMatCell00", // sap.ui.core.ID
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
					colSpan : 2, // int
					hAlign : sap.ui.commons.layout.HAlign.Begin, // sap.ui.commons.layout.HAlign
					padding : sap.ui.commons.layout.Padding.End, // sap.ui.commons.layout.Padding
					rowSpan : 1, // int
					separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
					vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
					tooltip : undefined, // sap.ui.core.TooltipBase
					content : [oAddAttachmentCB,oAllowDelegateCB]
				// sap.ui.core.Control
				});
		var oMatCell1 = new sap.ui.commons.layout.MatrixLayoutCell(
				{
					id : "oMatCell1", // sap.ui.core.ID
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
					colSpan : 2, // int
					hAlign : sap.ui.commons.layout.HAlign.Begin, // sap.ui.commons.layout.HAlign
					padding : sap.ui.commons.layout.Padding.End, // sap.ui.commons.layout.Padding
					rowSpan : 1, // int
					separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
					vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
					tooltip : undefined, // sap.ui.core.TooltipBase
					content : [oDescriptionLbl,oDescriptionTxtFld]
				// sap.ui.core.Control
				});
		var oMatCell11 = new sap.ui.commons.layout.MatrixLayoutCell(
				{
					id : "oMatCell11", // sap.ui.core.ID
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
					colSpan : 2, // int
					hAlign : sap.ui.commons.layout.HAlign.Begin, // sap.ui.commons.layout.HAlign
					padding : sap.ui.commons.layout.Padding.End, // sap.ui.commons.layout.Padding
					rowSpan : 1, // int
					separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
					vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
					tooltip : undefined, // sap.ui.core.TooltipBase
					content : [oAllowCommentCB,oReadOnlyCB]
				// sap.ui.core.Control
				});
		
		var oMatCell2 = new sap.ui.commons.layout.MatrixLayoutCell(
				{
					id : "oMatCell2", // sap.ui.core.ID
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
					colSpan : 2, // int
					hAlign : sap.ui.commons.layout.HAlign.Begin, // sap.ui.commons.layout.HAlign
					padding : sap.ui.commons.layout.Padding.End, // sap.ui.commons.layout.Padding
					rowSpan : 1, // int
					separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
					vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
					tooltip : undefined, // sap.ui.core.TooltipBase
					content : [oPriorityLbl,oPriorityDDB]
				// sap.ui.core.Control
				});
		var oMatCell3 = new sap.ui.commons.layout.MatrixLayoutCell(
				{
					id : "oMatCell23", // sap.ui.core.ID
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
					colSpan : 2, // int
					hAlign : sap.ui.commons.layout.HAlign.Begin, // sap.ui.commons.layout.HAlign
					padding : sap.ui.commons.layout.Padding.End, // sap.ui.commons.layout.Padding
					rowSpan : 1, // int
					separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
					vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
					tooltip : undefined, // sap.ui.core.TooltipBase
					content : [oSlaInMinLbl,oSlaInMinTxtFld]
				// sap.ui.core.Control
				});
		var oMatCell33 = new sap.ui.commons.layout.MatrixLayoutCell(
				{
					id : "oMatCell22", // sap.ui.core.ID
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
					colSpan : 2, // int
					hAlign : sap.ui.commons.layout.HAlign.Begin, // sap.ui.commons.layout.HAlign
					padding : sap.ui.commons.layout.Padding.End, // sap.ui.commons.layout.Padding
					rowSpan : 1, // int
					separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
					vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
					tooltip : undefined, // sap.ui.core.TooltipBase
					content : [oActiveCountLbl,oActiveAccountTxtFld]
				// sap.ui.core.Control
				});
		var oMatCell4 = new sap.ui.commons.layout.MatrixLayoutCell(
				{
					id : "oMatCell4", // sap.ui.core.ID
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
					colSpan : 2, // int
					hAlign : sap.ui.commons.layout.HAlign.Begin, // sap.ui.commons.layout.HAlign
					padding : sap.ui.commons.layout.Padding.End, // sap.ui.commons.layout.Padding
					rowSpan : 1, // int
					separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
					vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
					tooltip : undefined, // sap.ui.core.TooltipBase
					content : [oAssignToUsrLbl,oAssignToUsrTxtFld]
				// sap.ui.core.Control
				});
		var oMatCell44 = new sap.ui.commons.layout.MatrixLayoutCell(
				{
					id : "oMatCell44", // sap.ui.core.ID
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
					colSpan : 2, // int
					hAlign : sap.ui.commons.layout.HAlign.Begin, // sap.ui.commons.layout.HAlign
					padding : sap.ui.commons.layout.Padding.End, // sap.ui.commons.layout.Padding
					rowSpan : 1, // int
					separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
					vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
					tooltip : undefined, // sap.ui.core.TooltipBase
					content : [oAccount1Lbl,oAccount1TxtFld]
				// sap.ui.core.Control
				});
		var oMatCell5 = new sap.ui.commons.layout.MatrixLayoutCell(
				{
					id : "oMatCell5", // sap.ui.core.ID
					backgroundDesign : sap.ui.commons.layout.BackgroundDesign.Transparent, // sap.ui.commons.layout.BackgroundDesign
					colSpan : 4, // int
					hAlign : sap.ui.commons.layout.HAlign.Center, // sap.ui.commons.layout.HAlign
					padding : sap.ui.commons.layout.Padding.Both, // sap.ui.commons.layout.Padding
					rowSpan : 1, // int
					separation : sap.ui.commons.layout.Separation.None, // sap.ui.commons.layout.Separation
					vAlign : sap.ui.commons.layout.VAlign.Middle, // sap.ui.commons.layout.VAlign
					tooltip : undefined, // sap.ui.core.TooltipBase
					content : [oSbmtButton,oCanButton]
				// sap.ui.core.Control
				});
		
		oMatrix.createRow(oMatCell0,oMatCell00);
		oMatrix.createRow(oMatCell1,oMatCell11);
		oMatrix.createRow(oMatCell2);
		oMatrix.createRow(oMatCell3,oMatCell33);
		oMatrix.createRow(oMatCell4,oMatCell44);
		oMatrix.createRow(oMatCell5);
		oPanel.addContent(oMatrix);
		oPanel.placeAt('content');
	}

});
