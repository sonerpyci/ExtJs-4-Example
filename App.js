Ext.onReady(function(){

	Ext.create('Ext.data.Store', {
    storeId:'kullanicilar',
    fields:['id', 'name', 'surname', 'phone'],
    /*data:{'items':[
        { 'name': 'Lisasfaasga',  "surname":"asd",  "phone":"555-111-1224"  },
        { 'name': 'Basgaart',  "surname":"asd",  "phone":"555-222-1234" },
        { 'name': 'Hosagasgmer', "surname":"asd",  "phone":"555-222-1244"  },
        { 'name': 'Masagarge', "surname":"asd", "phone":"555-222-1254"  }
    ]},*/
    autoLoad: true,
    proxy: {
    	url: 'connection.php',
        type: 'ajax',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});

Ext.create('Ext.grid.Panel', {
    cls: 'custom-grid', 
    id: 'grid',
    height: 300,
    width: 700,
    renderTo: Ext.getBody(),
    title: 'Kullanicilar',
    store: Ext.data.StoreManager.lookup('kullanicilar'),

   dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    items: [
        { 
        xtype: 'button',
        text: 'Add New',
        handler: function() {

        var formpanel = new Ext.FormPanel({
        frame:true,
        labelWidth: 90,
        url: 'add.php',
        frame: true,
        labelAlign: 'right',
        title: 'New User Info',
        bodyStyle:'padding:5px 5px 0',
        width: 300,
        height: 600,
        autoScroll: true,
        itemCls: 'form_row',
        defaultType: 'displayfield',
        items: [{
                xtype: 'textfield',	
                fieldLabel: 'User\'s Name',
                name: 'name',
                allowBlank:false,
                id: 'name'
            },{
                xtype: 'textfield',	
                fieldLabel: 'User\'s Surname',
                name: 'surname',
                allowBlank:false,
                id: 'surname'
            },{
            	xtype: 'textfield',
                fieldLabel: 'Phone',
                name: 'phone',
                id: 'phone'
            }],

                    buttons:[{

            text:'Add',
            formBind: true,
            // Function that fires when user clicks the button
            handler:function(){
            formpanel.getForm().submit({

                method:'POST',

                // Functions that fire (success or failure) when the server responds.
                // The server would actually respond with valid JSON,
                // something like: response.write "{ success: true}" or

                // response.write "{ success: false, errors: { reason: 'Login failed. Try again.' }}"
                // depending on the logic contained within your server script.
                // If a success occurs, the user is notified with an alert messagebox,

                // and when they click "OK", they are redirected to whatever page
                // you define as redirect. 
                success:function(){
               win.close();
                       
                    }

            });  

 		  }
        }]

    });	

        win = new Ext.Window({
    		title: 'App',
    		layout: 'fit',
    		autoScroll: true,
    		y: 120,
    		width: 600,
    		height: 200,
    		modal: true,
    		closeAction: 'hide',
    		items: [formpanel]
});
		win.show();



        }

    }]
}],

    columns: [
   			{
    	 	text: 'Id',
          	dataIndex: 'id'
           },
 			{
    	 	text: 'Name',
          	dataIndex: 'name'
           },
           { 
           	text: 'Surname',
         	dataIndex: 'surname',
          	flex: 1 
           },
           {
            text: 'Phone',
            dataIndex: 'phone'
           }, 
           { //toolbarr Deneyebilirsin.
           	xtype: 'actioncolumn',
                width: 40,
                sortable: false,
                menuDisabled: true,
                tdCls:'delete',

                items: [{
                    icon: './delete-icon.png',
                    tooltip: 'Delete',
                    handler: function(grid, rowIndex, colIndex) {
                    var deleteIndex = (grid.getStore().data.items[rowIndex].data['id']);
                   // grid.getView().getSelectionModel().getSelection()[0]
                    var rec = grid.getStore().removeAt(rowIndex);
                    //var sel = grid.getSelectionModel().getSelection();
                    
                  //  console.log(grid.getSelectionModel().select(rowIndex)); //undefined veriyor.
					
					var conn = new Ext.data.Connection();
           			conn.extraParams = {
                	task: 'update',
                	data: deleteIndex
            		}
            		conn.request({
                	url:'delete.php',
                	method:'POST',
            		});
                 
                	}
                }],
            },
            {
             xtype:'actioncolumn', 
             tdCls:'edit',
             name: 'Edit',
             width:40,
             items: [{
                icon: 'edit-icon.png',  // Use a URL in the icon config             
                tooltip: 'Edit',
                handler: function(grid, rowIndex, colIndex) {
                    var editIndex = (grid.getStore().data.items[rowIndex].data['id']); 

                    var rec = grid.getStore().getAt(rowIndex);
                   

                var formpanel = new Ext.FormPanel({
			        frame:true,
			        labelWidth: 90,
			        url: 'update.php',
			        frame: true,
			        labelAlign: 'right',
			        title: 'Update User Info',
			        bodyStyle:'padding:5px 5px 0',
			        width: 300,
			        height: 600,
			        autoScroll: true,
			        itemCls: 'form_row',
			        defaultType: 'displayfield',
			        items: [{
			                xtype: 'textfield',	
			                fieldLabel: 'User\'s Name',
			                name: 'name',
			                allowBlank:false,
			                id: 'name'
			            },{
			                xtype: 'textfield',	
			                fieldLabel: 'User\'s Surname',
			                name: 'surname',
			                allowBlank:false,
			                id: 'surname'
			            },{
			            	xtype: 'textfield',
			                fieldLabel: 'Phone',
			                name: 'phone',
			                id: 'phone'
			            },{
        					xtype: 'hidden',
        					fieldLabel: 'Id',
        					name: 'id',
       						value: grid.getStore().data.items[rowIndex].data['id'],
        					submitValue: true,
        					id: 'id'
    					}],

			                    buttons:[{

			            text:'Update',
			            formBind: true,
			            // Function that fires when user clicks the button
			            handler:function(){
			            formpanel.getForm().submit({

			                method:'POST',

			                // Functions that fire (success or failure) when the server responds.
			                // The server would actually respond with valid JSON,
			                // something like: response.write "{ success: true}" or

			                // response.write "{ success: false, errors: { reason: 'Login failed. Try again.' }}"
			                // depending on the logic contained within your server script.
			                // If a success occurs, the user is notified with an alert messagebox,

			                // and when they click "OK", they are redirected to whatever page
			                // you define as redirect. 
			                success:function(){
              					 Ext.data.StoreManager.lookup('kullanicilar').load();
              					 win.close();
                       
                    		}
			            });  

			 		  }
			        }]

			    });	

                Ext.getCmp('name').setValue(grid.getStore().data.items[rowIndex].data['name']);
                Ext.getCmp('surname').setValue(grid.getStore().data.items[rowIndex].data['surname']);
                Ext.getCmp('phone').setValue(grid.getStore().data.items[rowIndex].data['phone']);

                    	win = new Ext.Window({
    					title: 'Edit',
    					layout: 'fit',
    					autoScroll: true,
    					y: 120,
    					width: 600,
    					height: 200,
    					modal: true,
    					closeAction: 'hide',
    					items: [formpanel]
						});
						win.show();


                    //alert("Edit " + rec.get('name'));
                }
             }]

        }],
         //columns end
    /* selModel: {
                selType: 'rowmodel'
            }*/
});


});
