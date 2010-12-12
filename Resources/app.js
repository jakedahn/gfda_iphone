Ti.include('gfda.js');
var req = new GFDA();

function activate_him() {
  actInd.show();
  his_btn.backgroundImage = "his_active.png";
  his_btn.zIndex = 5;
 
  her_btn.backgroundImage = "her_inactive.png";
  her_btn.zIndex = 0;
  label.textAlign = "center";
  label.text = req.his();
  actInd.hide();
}


function activate_her() {
  actInd.show();
  her_btn.backgroundImage = "her_active.png";
  her_btn.zIndex = 5;
  
  his_btn.backgroundImage = "his_inactive.png";
  his_btn.zIndex = 0;
  label.text = req.hers();
  actInd.hide();
}

function refresh_random() {
  actInd.show();
  label.text = req.both();
  actInd.hide();
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

var label = Ti.UI.createLabel({
	text:"Shake to refresh, or touch one of the badges above.",
	font:{fontSize:36,fontFamily:"TitilliumText22L"},
	width:"80%",
	height:"40%",
	top: 200,
	color: "#333333",
	textAlign:"left"
});

var actInd = Titanium.UI.createActivityIndicator({
    top:125,
    height: 50,
    width: 50,
    style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
});

actInd.show();


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
main_window.add(label);
main_window.add(his_btn);
main_window.add(her_btn);
main_window.add(actInd);
actInd.hide();
