Ti.include('gfda.js');

// create tab group
var navigation = Titanium.UI.createTabGroup();
var req = new GFDA();
//
// create base UI tab and root window
//

// Windows

var main_window = Titanium.UI.createWindow({  
    title:'For Both',
    backgroundImage:'iphone/background.png'
});

var his_window = Titanium.UI.createWindow({  
    title:'For Him',
    backgroundImage:'iphone/background.png'
});

var her_window = Titanium.UI.createWindow({  
    title:'For Her',
    backgroundImage:'iphone/background.png'
});


// Tabs

var his_window_tab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'For Him',
    window:his_window
});

var main_window_tab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'For Both',
    window:main_window
});

var b1 = Titanium.UI.createButton({
	title:'send xhr request',
	height:40,
	width:200,
	top:70
});

var her_window_tab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'For Her',
    window:her_window
});


// Labels

var label = Ti.UI.createLabel({
	text:"Appcelerator\nFTW!",
	font:{fontSize:54,fontFamily:"TitilliumText22L"},
	width:"auto",
	textAlign:"center"
});

var her_label = Titanium.UI.createLabel({
	color:'#999',
	text:'hers',
	font:{fontSize:72,fontFamily:'TitilliumText22L'},
	textAlign:'center',
	width:'auto'
});

var both_label = Titanium.UI.createLabel({
	color:'#999',
	text: "test",
	font:{fontSize:72,fontFamily:'TitilliumText22L'},
	textAlign:'center',
	width:'auto'
});



b1.addEventListener('click', function(){
  both_label.text = req.both();
  // Ti.API.info(req.both());
});


//
//  initialize
//
his_window.add(label);
her_window.add(her_label);
main_window.add(both_label);
main_window.add(b1);

navigation.addTab(his_window_tab);  
navigation.addTab(main_window_tab);  
navigation.addTab(her_window_tab);  


// open tab group
navigation.open();
navigation.setActiveTab(1);
