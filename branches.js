function plantVar(class0,var0,value0) { //class,value0
	var tags = document.getElementsByClassName(class0);
	var i;
	var tempstr = "";
	var tempstr2 = "";
	//var attribs = array[];
	for (i = 0;i < tags.length;i++) {
		tempstr = tags[i].innerHTML;
		tags[i].innerHTML = tempstr.replace("{$"+ var0 +"}",value0);
		if (tags[i].hasAttributes()) {
			var attribs = tags[i].attributes;
			for (j = 0;j < attribs.length;j++) {
				tempstr2 = attribs[j].value;
				attribs[j].value = tempstr2.replace("{$"+ var0 +"}",value0);
			}
		}
	}
}


function plantHTML(class0,var0,value0) { //class,value0
	var tags = document.getElementsByClassName(class0);
	var i;
	var tempstr = "";
	var tempstr2 = "";
	//var attribs = array[];
	for (i = 0;i < tags.length;i++) {
		tempstr = tags[i].innerHTML;
		tags[i].innerHTML = tempstr.replace("{$"+ var0 +"}",value0);
	}
}


function plantAttrib(class0,var0,value0) { //class,value0
	var tags = document.getElementsByClassName(class0);
	var i;
	var tempstr2 = "";
	//var attribs = array[];
	for (i = 0;i < tags.length;i++) {
		if (tags[i].hasAttributes()) {
			var attribs = tags[i].attributes;
			for (j = 0;j < attribs.length;j++) {
				tempstr2 = attribs[j].value;
				attribs[j].value = tempstr2.replace("{$"+ var0 +"}",value0);
			}
		}
	}
}
