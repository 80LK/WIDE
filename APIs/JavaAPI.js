/* Java API */
var java = {};
{
	java.lang = {};
	java.util = {};
	java.io = {};
}

{/* java.lang.Object */
	java.lang.Object = function(){};
	//
}

{/* java.lang.Thread */
	java.lang.Thread = function(group, target, name, stackSize){};
	java.lang.Thread.prototype = Object.create(java.lang.Object.prototype);
	java.lang.Thread.prototype.start = function(){};
}

{/* java.lang.Runnable */
	java.lang.Runnable = function(a){};
	java.lang.Runnable.prototype = Object.create(java.lang.Object.prototype);
}

{/* java.lang.StringBuilder */
	java.lang.StringBuilder = function(str){};
	java.lang.StringBuilder.prototype = Object.create(java.lang.Object.prototype);
	java.lang.StringBuilder.prototype.append = function(append){ return this; };
	java.lang.StringBuilder.prototype.toString = function(){ return /*java.lang.String*/""; };
}

{/* java.io.File */
	java.io.File = function(parent, child){};
	java.io.File.prototype = Object.create(java.lang.Object.prototype);
	java.io.File.prototype.exists = function(){ return true; };
	java.io.File.prototype.getAbsolutePath = function(){ return /*java.lang.String*/""; };
}

{/* java.io.Writer */
	java.io.Writer = function(){}
	java.io.Writer.prototype = Object.create(java.lang.Object.prototype);
	java.io.Writer.prototype.append = function(append){ return this; };
	java.io.Writer.prototype.write = function(write, off, len){};
	java.io.Writer.prototype.close = function(){};
	java.io.Writer.prototype.flush = function(){};
}

{/* java.io.BufferedWriter */
	java.io.BufferedWriter = function(out, size){};
	java.io.BufferedWriter.prototype = Object.create(java.io.Writer.prototype);
}

{/* java.io.OutputStreamWriter */
	java.io.OutputStreamWriter = function(out, charset){};
	java.io.OutputStreamWriter.prototype = Object.create(java.io.Writer.prototype);
}

{/* java.io.FileWriter */
	java.io.FileWriter = function(fileName, append){}
	java.io.FileWriter.prototype = Object.create(java.io.OutputStreamWriter.prototype);
}

{/* java.util.Scanner */
	java.util.Scanner = function(source, charset){};
	java.util.Scanner.prototype = Object.create(java.io.OutputStreamWriter.prototype);
	java.util.Scanner.prototype.hasNextLine = function(){return false;};
	java.util.Scanner.prototype.nextLine = function(){return /*java.lang.String*/"";};
}
