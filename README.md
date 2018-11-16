# branches.js
set and populate variables in html

Set you html as template annd embed a JSON quickly inside
Use ajax and create super-light-onepage-webapps

3 simple functions:
plantVar, plantHTML, plantAttrib

plantVar(classname - string,variablename - string,value - string);
plantHTML(classname - string,variablename - string,value - string);
plantAttrib(classname - string,variablename - string,value - string);

classname - a class name as set in the class attribute
variablename - a variable name to bet set. variables are defined as: {$variable}
value - the value to be set


<html>
<head>
	<script type="text/javascript" src="https://github.com/GuyLou/branches.js/raw/master/branches.js"></script>
	<!-- script type="text/javascript" src="branches.js"></script -->
</head>
<body>
<h5 class="branches">{$langselect}</h5>
<div id="menu">

<a href="#" OnClick="climbABranch(en);">en</a>
<a href="#" OnClick="climbABranch(he);">he</a>
<a href="#" OnClick="climbABranch(es);">es</a>
</div>

<div id="content" >
<span class="branches">{$helloworld}</span><br />

<span class="branches">{$loremipsom}

Lorem ipsum dolor sit amet, dicta phaedrum disputationi eu cum. Sed at solum iudicabit. Assum reprehendunt ei sea, id his ubique cetero. Vis principes delicatissimi te. Vivendo dolores qualisque usu ei.

</span><br />

</div>

</body>
<script type="text/javascript">
	var en = {"langselect":"Please select the language based on its symbol","helloworld":"Hello World !","loremipsom":"Lorem Ipsom is always in latin ;)"};
	var he = {"langselect":"אנא בחר את השפה בהתאם לסמלה","helloworld":"שלום עולם!","loremipsom":"לורם איפסום הוא תמיד בלטינית ;)"};
	var es = {"langselect":"Por favor selecciona la idioma preferida, por su simbolo","helloworld":"Hola Mundo !","loremipsom":"Lorem Ipsom es siempre en latin "};
	initBranches();
	climbABranch(en);	
</script>
</html>
