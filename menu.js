var menuContent = [ 
                    {
	label : 'Pages',
	submenu : [ {
		label : 'index',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/index.html');
		}
	}, {
		label : 'translate',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/translate.html');
		}
	}, {
		label : 'template',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/template.html');
		}
	}, {
		label : 'sg',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/operation.html');
		}
	}, {
		label : 'jsonView',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('http://www.bejson.com/jsonviewernew/');
		}
	}, {
		label : 'jsonCompare',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/jsonCompare.html');
		}
	},
	{
		label : 'sqlFormat',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('http://www.bejson.com/otherformat/sql/');
		}
	},
	{
		label : 'textDiff',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('http://www.bejson.com/othertools/finddif/');
		}
	},
	{
		label : 'quickCode',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/quickCode.html');
		}
	},
	{
		label : 'browser',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/browser.html');
		}
	},	{
		label : 'pics',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/pics.html');
		}
	},{
		label : 'randNum',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/randNum.html');
		}
	},{
		label : 'es6',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/es6.html');
		}
	},{
		label : 'svn',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/svn.html');
		}
	},{
		label : 'sql',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/sql-helper.html');
		}
	},{
		label : 'localfile',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.loadURL('file://' + __dirname + '/app/views/localfile.html');
		}
	},
	]
},{
	label : 'Edit',
	submenu : [ {
		label : 'Undo',
		accelerator : 'CmdOrCtrl+Z',
		role : 'undo'
	}, {
		label : 'Redo',
		accelerator : 'Shift+CmdOrCtrl+Z',
		role : 'redo'
	}, {
		type : 'separator'
	}, {
		label : 'Cut',
		accelerator : 'CmdOrCtrl+X',
		role : 'cut'
	}, {
		label : 'Copy',
		accelerator : 'CmdOrCtrl+C',
		role : 'copy'
	}, {
		label : 'Paste',
		accelerator : 'CmdOrCtrl+V',
		role : 'paste'
	}, {
		label : 'Select All',
		accelerator : 'CmdOrCtrl+A',
		role : 'selectall'
	}, ]
}, {
	label : 'View',
	submenu : [ {
		label : 'Reload',
		accelerator : 'CmdOrCtrl+R',
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.reload();
		}
	}, {
		label : 'Toggle Full Screen',
		accelerator : (function() {
			if (process.platform == 'darwin')
				return 'Ctrl+Command+F';
			else
				return 'F11';
		})(),
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
		}
	}, {
		label : 'Toggle Developer Tools',
		accelerator : (function() {
			if (process.platform == 'darwin')
				return 'Alt+Command+I';
			else
				return 'Ctrl+Shift+I';
		})(),
		click : function(item, focusedWindow) {
			if (focusedWindow)
				focusedWindow.webContents.toggleDevTools();
		}
	}, ]
}, {
	label : 'Window',
	role : 'window',
	submenu : [ {
		label : 'Minimize',
		accelerator : 'CmdOrCtrl+M',
		role : 'minimize'
	}, {
		label : 'Close',
		accelerator : 'CmdOrCtrl+W',
		role : 'close'
	}, ]
}, {
	label : 'Help',
	role : 'help',
	submenu : [ {
		label : 'Learn More',
		click : function() {
			require('electron').shell.openExternal('http://electron.atom.io')
		}
	}, ]
}, ];
module.exports=menuContent;