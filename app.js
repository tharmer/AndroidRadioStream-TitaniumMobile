// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');
Ti.Media.audioSessionMode = Ti.Media.AUDIO_SESSION_MODE_PLAYBACK;
//Ti.App.idleTimerDisabled = true; // to disable going to sleep
// create tab group
var tabGroup = Titanium.UI.createTabGroup();
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Spirit Radio Live!',
	barColor: '#000',
    backgroundImage: 'background.png'
	//exitOnClose:false
});

var tab1 = Titanium.UI.createTab({  
    icon:'speaker.png',
    title:'Listen'
    window:win1
});

var url = "http://173.193.223.145:8034";
// load from remote url
var sound = Titanium.Media.createAudioPlayer({url:url,preload:false,allowBackground:true});
//
// PLAY
//
var play = Titanium.UI.createButton({
	backgroundImage: 'play.png',
    height:80,
	width:80,
	left:90,
	bottom:200
});
play.addEventListener('click', function()
{
	sound.start();
});

//
// STOP
//
var stop = Titanium.UI.createButton({
	backgroundImage: 'stop.png',
	height:80,
	width:80,
	right:90,
	bottom:200
});
stop.addEventListener('click', function()
{
	sound.stop();
});
//win1.add(label);
win1.add(play);
win1.add(stop);

// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Spirit Tweets',
	barColor: '#000',
    backgroundColor:'#000'
//    exitOnClose:false
});
win2.addEventListener('android:back', function(e){
  web2.goBack();
});

var web2 = Titanium.UI.createWebView({  
    url: 'http://twitter.com/spiritradioire'
    window:win2
});

var tab2 = Titanium.UI.createTab({  
    icon:'speechbubble.png',
    title:'twitter'
    window:win2
});

tab2.addEventListener('focus', function()
{
  web2.reload
});

//win2.add(rightnav);
//win2.add(leftnav);
win2.add(web2);

//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'Spirit facebook',
	barColor: '#000',
    backgroundColor:'#000'
});

win3.addEventListener('android:back', function(e){
    web3.goBack();
});

var web3 = Titanium.UI.createWebView({  
    url: 'http://m.facebook.com/spiritradio'
    window:win3
});

var tab3 = Titanium.UI.createTab({  
    icon:'man.png',
    title:'facebook'
    window:win3
});

win3.add(web3);

//
// create controls tab and root window
//

var win4 = Titanium.UI.createWindow({  
  	title:'Contact Us',
	barColor: '#000',
  	backgroundImage: 'background.png'
});

var tab4 = Titanium.UI.createTab({  
    icon:'clapboard.png',
    title:'Contact US'
    window:win4
});

var label4 = Titanium.UI.createButton({
	title:'Contact Us',
	width:250	
});

label4.addEventListener('click',function() {

var emailDialog = Titanium.UI.createEmailDialog();
	emailDialog.subject = "Feedback from Android app !";
	emailDialog.toRecipients = ['studio@spiritradio.ie'];

emailDialog.open();
});
win4.add(label4);


tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);

// open tab group
tabGroup.open();
