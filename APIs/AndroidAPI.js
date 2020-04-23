// .prototype = Object.create(java.lang.Object.prototype);
/* Android API */
var android = {
	R:{
		attr:{
			progressBarStyleHorizontal:16842872
		},
	},
	os:{},
	content:{},
	graphics:{
		drawable:{},
	},
	widget:{},
	view:{},
	app:{},
};

{ /*os*/
	{ /*android.os.Environment*/
		android.os.Environment = function(){};
		android.os.Environment.prototype = Object.create(java.lang.Object.prototype);
		
		//static
		android.os.Environment.getExternalStorageDirectory = function(){ return new java.io.File(); };
	}
}

{ /* content */
	{/* android.content.Context */
		android.content.Context = function(){};
		android.content.Context.prototype = Object.create(java.lang.Object.prototype);
	}

	{/* android.content.ContextWrapper */
		android.content.ContextWrapper = function(base){};
		android.content.ContextWrapper.prototype = Object.create(android.content.Context.prototype);
	}
}

{ /* view */
	{/* android.view.ContextThemeWrapper */
		android.view.ContextThemeWrapper  = function(base, themeResId){};
		android.view.ContextThemeWrapper.prototype = Object.create(android.content.ContextWrapper.prototype);
	}

	{ /* android.view.View */
		android.view.View = function(context, attrs, defStyleAttr, defStyleRes){};
		android.view.View.prototype = Object.create(java.lang.Object.prototype);
		android.view.View.prototype.setPadding = function(left, top, right, bottom){};
		android.view.View.prototype.setLayoutParams = function(params){};
	}
	{ /* android.view.ViewGroup */
		android.view.ViewGroup = function(context, attrs, defStyleAttr, defStyleRes){};
		android.view.ViewGroup.prototype = Object.create(android.view.View.prototype);
		android.view.ViewGroup.prototype.addView = function(child, index, params){};
	}

	{ /* android.view.ViewGroup.MarginLayoutParams */
		android.view.ViewGroup.LayoutParams = function(){};
		android.view.ViewGroup.LayoutParams.prototype = Object.create(java.lang.Object.prototype);

		android.view.ViewGroup.LayoutParams.FILL_PARENT = -1;
		android.view.ViewGroup.LayoutParams.MATCH_PARENT = -1;
		android.view.ViewGroup.LayoutParams.WRAP_CONTENT = -2;
	}
	{ /* android.view.ViewGroup.MarginLayoutParams */
		android.view.ViewGroup.MarginLayoutParams = function(){};
		android.view.ViewGroup.MarginLayoutParams.prototype = Object.create(android.view.ViewGroup.LayoutParams.prototype);

		android.view.ViewGroup.MarginLayoutParams.FILL_PARENT = android.view.ViewGroup.LayoutParams.FILL_PARENT;
		android.view.ViewGroup.MarginLayoutParams.MATCH_PARENT = android.view.ViewGroup.LayoutParams.MATCH_PARENT;
		android.view.ViewGroup.MarginLayoutParams.WRAP_CONTENT = android.view.ViewGroup.LayoutParams.WRAP_CONTENT;
	}

	{ /* android.view.Gravity */
		android.view.Gravity = function(){};
		android.view.Gravity.prototype = Object.create(java.lang.Object.prototype);
		android.view.Gravity.AXIS_CLIP = 8;
		android.view.Gravity.AXIS_PULL_AFTER = 4;
		android.view.Gravity.AXIS_PULL_BEFORE = 2;
		android.view.Gravity.AXIS_SPECIFIED = 1;
		android.view.Gravity.AXIS_X_SHIFT = 0;
		android.view.Gravity.AXIS_Y_SHIFT = 4;
		android.view.Gravity.BOTTOM = 80;
		android.view.Gravity.CENTER = 17;
		android.view.Gravity.CENTER_HORIZONTAL = 1;
		android.view.Gravity.CENTER_VERTICAL = 16;
		android.view.Gravity.CLIP_HORIZONTAL = 8;
		android.view.Gravity.CLIP_VERTICAL = 128;
		android.view.Gravity.DISPLAY_CLIP_HORIZONTAL = 16777216;
		android.view.Gravity.DISPLAY_CLIP_VERTICAL = 268435456;
		android.view.Gravity.END = 8388613;
		android.view.Gravity.FILL = 119;
		android.view.Gravity.FILL_HORIZONTAL = 7;
		android.view.Gravity.FILL_VERTICAL = 112;
		android.view.Gravity.HORIZONTAL_GRAVITY_MASK = 7;
		android.view.Gravity.LEFT = 3;
		android.view.Gravity.NO_GRAVITY = 0;
		android.view.Gravity.RELATIVE_HORIZONTAL_GRAVITY_MASK = 8388615;
		android.view.Gravity.RELATIVE_LAYOUT_DIRECTION = 8388608;
		android.view.Gravity.RIGHT = 5;
		android.view.Gravity.START = 8388611;
		android.view.Gravity.TOP = 48;
		android.view.Gravity.VERTICAL_GRAVITY_MASK = 112;
	}
}

{ /* app */
	{/* android.app.Activity */
		android.app.Activity  = function(){};
		android.app.Activity.prototype = Object.create(android.view.ContextThemeWrapper.prototype);
		android.app.Activity.prototype.runOnUiThread = function(action){};
	}

	{/* android.app.NativeActivity */
		android.app.NativeActivity = function(){};
		android.app.NativeActivity.prototype = Object.create(android.app.Activity.prototype);
	}

	{/* android.app.Dialog */
		android.app.Dialog = function(){};
		android.app.Dialog.prototype = Object.create(java.lang.Object.prototype);
		android.app.Dialog.prototype.show = function(){};
	}

	{/* android.app.AlertDialog */
		android.app.AlertDialog = function(){};
		android.app.AlertDialog.prototype = Object.create(android.app.Dialog.prototype);
	}

	{/* android.app.AlertDialog.Builder */
		android.app.AlertDialog.Builder = function(ctx, themeResId){};
		android.app.AlertDialog.Builder.prototype = Object.create(java.lang.Object.prototype);
		android.app.AlertDialog.Builder.prototype.create = function(){ return new android.app.AlertDialog(); };
		android.app.AlertDialog.Builder.prototype.setIcon = function(icon){ return this; };
		android.app.AlertDialog.Builder.prototype.setTitle = function(str){ return this; };
		android.app.AlertDialog.Builder.prototype.setView = function(view){ return this; };
	}
}

{ /* widget */
	{/* android.widget.LinearLayout */
		android.widget.LinearLayout = function(context, attrs, defStyleAttr, defStyleRes){};
		android.widget.LinearLayout.prototype = Object.create(android.view.ViewGroup.prototype);

		//CONSTS
		android.widget.LinearLayout.HORIZONTAL = 0;
		android.widget.LinearLayout.SHOW_DIVIDER_BEGINNING = 1;
		android.widget.LinearLayout.SHOW_DIVIDER_END = 4;
		android.widget.LinearLayout.SHOW_DIVIDER_MIDDLE = 2;
		android.widget.LinearLayout.SHOW_DIVIDER_NONE = 0;
		android.widget.LinearLayout.VERTICAL = 1;

		//METHODS
		android.widget.LinearLayout.prototype.setOrientation = function(orientation){};
	}
	{/* android.widget.LinearLayout.LayoutParams */
		android.widget.LinearLayout.LayoutParams = function(width, height, weight){};
		android.widget.LinearLayout.LayoutParams.prototype = Object.create(android.view.ViewGroup.MarginLayoutParams.prototype);
		android.widget.LinearLayout.LayoutParams.prototype.debug = function(str){ return /*java.lang.String*/str; };

		android.widget.LinearLayout.LayoutParams.FILL_PARENT = android.view.ViewGroup.LayoutParams.FILL_PARENT;
		android.widget.LinearLayout.LayoutParams.MATCH_PARENT = android.view.ViewGroup.LayoutParams.MATCH_PARENT;
		android.widget.LinearLayout.LayoutParams.WRAP_CONTENT = android.view.ViewGroup.LayoutParams.WRAP_CONTENT;
	}
	
	{ /* android.widget.RelativeLayout */
		android.widget.RelativeLayout = function(context, attrs, defStyleAttr, defStyleRes){};
		android.widget.RelativeLayout.prototype = Object.create(android.view.ViewGroup.prototype);
	}
	{/* android.widget.RelativeLayout.LayoutParams */
		android.widget.RelativeLayout.LayoutParams = function(width, height, weight){};
		android.widget.RelativeLayout.LayoutParams.prototype = Object.create(android.view.ViewGroup.MarginLayoutParams.prototype);
		android.widget.RelativeLayout.LayoutParams.prototype.debug = function(str){ return /*java.lang.String*/str; };

		android.widget.RelativeLayout.LayoutParams.FILL_PARENT = android.view.ViewGroup.LayoutParams.FILL_PARENT;
		android.widget.RelativeLayout.LayoutParams.MATCH_PARENT = android.view.ViewGroup.LayoutParams.MATCH_PARENT;
		android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT = android.view.ViewGroup.LayoutParams.WRAP_CONTENT;
	}

	{/* android.widget.TextView */
		android.widget.TextView = function(context, attrs, defStyleAttr, defStyleRes){};
		android.widget.TextView.prototype = Object.create(android.view.View.prototype);
		android.widget.TextView.prototype.setText = function(text, start, len){};
	}

	{/* android.widget.ProgressBar */
		android.widget.ProgressBar = function(context, attrs, defStyleAttr, defStyleRes){};
		android.widget.ProgressBar.prototype = Object.create(android.view.View.prototype);
		android.widget.ProgressBar.prototype.setMax = function(max){};
	}
}

{ /* graphics */
	{ /*graphics.drawable*/
		{ /* android.graphics.drawable.Drawable */
			android.graphics.drawable.Drawable = function(){};
			android.graphics.drawable.Drawable.prototype = Object.create(java.lang.Object.prototype);

		}

		{ /* android.graphics.drawable.BitmapDrawable */
			android.graphics.drawable.BitmapDrawable = function(res, filepath){};
			android.graphics.drawable.BitmapDrawable.prototype = Object.create(android.graphics.drawable.Drawable.prototype);
		}
	}
	{ /* android.graphics.Bitmap */
		android.graphics.Bitmap = function(){};
		android.graphics.Bitmap.prototype = Object.create(java.lang.Object.prototype);
	}
	{ /* android.graphics.BitmapFactory */
		android.graphics.BitmapFactory = function(){};
		android.graphics.BitmapFactory.prototype = Object.create(java.lang.Object.prototype);
		android.graphics.BitmapFactory.decodeFile = function(pathName, opts){ return new android.graphics.Bitmap(); };
	}	
}