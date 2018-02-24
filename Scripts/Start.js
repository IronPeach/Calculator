//function of get started 
function Start(){
	var btn = document.getElementById('button');
	btn.parentNode.removeChild(button);
	document.getElementById("warning").innerHTML = "<h2>Now please open console<br><br><div align = 'justify'>\
	Google Chrome Browser: Ctrl + Shift + J(Window system, Chrome OS) || Command + Option + J (Mac OS X system)<br><br>\
	Internet Exploer: F12 --> Script --> Console at right side<br><br>\
	FireFox: Ctrl+Shift+K (Window system)|| Command+Option+K (Mac OS X system)</div></h2>"
	console.log("Yes, Yes! You are doing it correctly!")
	console.log("Now, type in \"Help()\" to get started of what can you do!")
	console.log("(Be sure you type \"Help()\" instead of \"help()\)")
}