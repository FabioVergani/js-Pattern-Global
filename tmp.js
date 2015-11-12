(function(){'use strict';
 var e=arguments[0];
 if(e===undefined){
	return;
 }else{
	var d=e.ownerDocument,isGlobal=(d===undefined?(d=e.document,1):0),
	dE=d.documentElement,
	dV=d.defaultView,
	w=dV.window,
	O=w.Object,
	Inextensible=O.preventExtensions,
	/*bind:<polyfill>*/
	create=O.create.bind(null,null),
	$id=d.getElementById.bind(d),
	dict=function(){
	 var e,f=create,a=arguments,n=a.length;
	 if(n===0){
		e=f();
	 }else{
		e={};
		for(var o=e, g=f, m=a, l=n, i=0; i<l; i++){
		 o[m[i]]={writable:true,enumerable:true,configurable:false,value:g()};
		};
		e=f(e);
	 };
	 return e;
	};
	//

	e=null;
	//console.log(isGlobal,w,d,dE);

	var getStyle=function(node){
		obj=Inextensible(dict('ComputedStyle','InlineStyle'));

	};
	dict=null;

	//Run:
	getStyle($id('pippo'));
 };
})(window);
