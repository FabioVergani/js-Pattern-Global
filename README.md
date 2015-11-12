# js-Pattern-Global

(function(){'use strict';
 var e=arguments[0];
 if(e===undefined){
	return;
 }else{
	var d=e.ownerDocument,isGlobal=(d===undefined?(d=e.document,1):0),
	dE=d.documentElement,
	dV=d.defaultView,
	w=dV.window;
	e=null;
	//console.log(isGlobal,w,d,dE);
 };

})(window);
