# branches.js
set and populate variables in html

3 simple functions:
plantVar, plantHTML, plantAttrib

plantVar(classname - string,variablename - string,value - string);
plantHTML(classname - string,variablename - string,value - string);
plantAttrib(classname - string,variablename - string,value - string);

classname - a class name as set in the class attribute
variablename - a variable name to bet set. variables are defined as: {$variable}
value - the value to be set

Example:
<pre>

<html>
<head>
<script languange="text/javascript" src="branches.js">

</script>
</head>
<body>
<p>header</p>
<button onclick="plantHTML('class1','variable','hello world !');">Try</button>
<button onclick="plantAttrib('class2','link','point');">Try again</button>
<div class="class1 a">Class 1 a, {$varb}</div>
<div class="class2">Class 2</div>
<div class="class1 b">Class 1 b, {$varb}</div>
<a href="#{$link}" class="class1 class2">{$varb}</a>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<div id="point">#point</div>
</body>
</html>
</pre>
