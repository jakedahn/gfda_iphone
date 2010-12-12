Ti.include('gfda.js');
var req = new GFDA();

function activate_him() {
  his_btn.backgroundImage = "his_active.png";
  his_btn.zIndex = 5;
 
  her_btn.backgroundImage = "her_inactive.png";
  her_btn.zIndex = 0;
  both_label.text = req.his();
}


function activate_her() {
  her_btn.backgroundImage = "her_active.png";
  her_btn.zIndex = 5;
  
  his_btn.backgroundImage = "his_inactive.png";
  his_btn.zIndex = 0;
  both_label.text = req.hers();
}

function refresh_random() {
  both_label.text = req.both();
}




// Windows

var main_window = Ti.UI.createWindow({  
    title:'For Both',
    backgroundImage:'background.png'
});

main_window.orientationModes = Titanium.UI.LANDSCAPE_RIGHT;

var his_btn = Ti.UI.createButton({
	height:125,
	width:125,
	top:15,
	left: 45,
	backgroundImage: 'his_inactive.png'
});

var her_btn = Ti.UI.createButton({
	height:125,
	width:125,
	top:15,
	right: 45,
	backgroundImage: 'her_inactive.png'
});


// Labels

var both_label = Ti.UI.createLabel({
	text:"Appcelerator\nFTW!",
	font:{fontSize:54,fontFamily:"TitilliumText22L"},
	width:"auto",
	textAlign:"center"
});




his_btn.addEventListener('click', function(){
  activate_him();
});

her_btn.addEventListener('click', function(){
  activate_her();
});

Ti.Gesture.addEventListener('shake', function(){
  if (his_btn.backgroundImage == "his_active.png") {
    activate_him();
  } else if(her_btn.backgroundImage == "her_active.png") {
    activate_her();
  } else {
    refresh_random();
  };
})



//
//  initialize
//

main_window.open();
main_window.add(both_label);
main_window.add(his_btn);
main_window.add(her_btn);
