function signin() {
	/***Sign-in******/
	var uname = localStorage.getItem("username");
	alert("hi");
	 var passid1 = document.fsign.pwd;
	var uname = document.fsign.uname;
	/*
	if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("username", uname.value);
  localStorage.setItem("password", "aina");
  
  // Retrieve
  var uname = localStorage.getItem("username");
  var password = localStorage.getItem("password");
  
  
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
*/
   alert(uname.value) ;
	return true;

}
