function dataTypes(i){
	var t = typeof(i);
	if( Object.prototype.toString.call(t) === '[object Array]' ) {
       if (t[3] == null){
          return "undefined";
       }
       return t[3];
    }
	switch (t){
	   case ("string"):
	      return (t.length);
	      break;
	   case("null"):
	      return ("no value");
	      break;
	   case ("number"):
	      if(t < 100 ){
	         return "less than 100";
	      }
	      return "more than 100";
	      break;
	   default:
	      return "undefined";
	}
}