menu.onClick = function myFunction () {
	var x = document.getElementById('myTopnav')
	
	if x.classNme === "Topnav" {
		x.className += "responsive";
	} else {
		x.className = "topnav";
	}
}