
//var HTvarnames = tempstr.match(/(\{)(\$).*?(\})/i);

var branches = {};

function initBranches() {
 var branch = {};
 var tempstr = "";
 var comment = "";
 console.log(tempstr);
 var nods = document.getElementsByClassName("branches");
 for (i = 0;i < nods.length;i++) {

  tempstr = nods[i].innerHTML;
 console.log(tempstr);
  var varNames = tempstr.match(/\{\$(.*?)\}/i); // match groups! use exec
  nods[i].classList.add("branch_html_" + varNames[1]);
    comment = document.createComment(tempstr);
    nods[i].insertBefore(comment, nods[i].firstChild);

  }
  }
  
  function plantHTML(key,value) {
   var nods = document.getElementsByClassName("branch_html_" + key);
   var tempstr = "";
   var tempcomment = "";
   var tempcomment2 = "";
   var comment = "";
   // get elements by class name branch_key
   for (i = 0;i < nods.length;i++) {
   	tempcomment = nods[i].childNodes[0].nodeValue;

    comment = document.createComment(tempcomment);
  
    tempstr = tempcomment.replace("{$"+ key +"}",value);
    nods[i].innerHTML = tempstr;
    nods[i].insertBefore(comment, nods[i].firstChild);
  	
   }
  }
  
  function climbABranch(bran) {
   	for (var i in bran) {
 			console.log("i: " + i);
      console.log("bran[i]: " + bran[i]);
		plantHTML(i,bran[i]);
    }
  
  
  }
  
  
  // initBranches();
