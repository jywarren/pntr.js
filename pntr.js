/*
 * pntr.js - A simple touch-enabled Processing-like Canvas environment
 * 
 * Source code and docs: https://github.com/jywarren/pntr.js
 * 
 */

$P = {
	pointer_x: 0, // these are kept updated by pntr.js
	pointer_y: 0,
	v_offset: 60, // height of the canvas below top of page, used only for touch events
	longpress_time: 1500, // milliseconds to trigger a "long pres" event

	/**
	 * Startup environment, accepts data_url or just URL of starting image
	**/
	initialize: function(args) {
		$P.framerate = args['framerate'] || 20
		$P.draw = args['draw'] || $P.draw
		$P.setup = args['draw'] || $P.setup
		$P.element = $('#canvas')
		$P.element = $('#canvas')[0]
		$P.canvas = $P.element.getContext('2d');
		$C = $P.canvas
		if ($(window).width() < $(window).height()) $P.width = args['displaySize'] || $(window).width()-30 //256
		else $P.width = args['displaySize'] || ($(window).width()-30)/3
		$P.height = $P.width
		$P.element.width = $P.width
		$P.element.height = $P.width
		// event binding: 
		$('body').mouseup($P.on_mouseup_root)
		$('body').mousedown($P.on_mousedown_root)
		$('body').mousemove($P.on_mousemove_root)
		// touch events mirror mouse events:
		window.addEventListener('touchend',$P.on_mouseup_root)
		window.addEventListener('touchstart',$P.on_mousedown_root)
		window.addEventListener('touchmove',$P.on_mousemove_root)
		setInterval($P.draw,1000/$P.framerate)
		$P.setup()
	},

	// things which occur upon settinng up the sketch
	setup: function() {

	},
	// things that happen every frame
	draw: function() {

	},

	// This does stuff so you don't have to.
	on_mousedown_root: function(e) {
		e.preventDefault()
		$P.dragging = true
		$P.getPointer(e)
		setTimeout($P.longpress_check,$P.longpress_time)
		$P.on_mousedown(e)
	},
	// Overwrite this with your own code:
	on_mousedown: function(e) {
	},
	on_mouseup_root: function(e) {
		e.preventDefault()
		$P.dragging = false
		$P.on_mouseup(e)
	},
	// Overwrite this with your own code:
	on_mouseup: function(e) {
	},
	on_mousemove_root: function(e) {
		$P.getPointer(e)
		if ($P.dragging) {
			$P.on_drag()
		}
		$P.on_mousemove(e)
	},
	// Overwrite this with your own code:
	on_mousemove: function(e) {
	},
	// override this to do things on drag: 
	on_drag: function() {

	},
	on_longpress: function() {
		
	},
	longpress_check: function() {
		if ($P.dragging) $P.on_longpress()
	},

	/**
	 * Refetches the pointer position and stores it in $P.pointer_x, $P.pointer_y
	 * and handles touch events too.
	**/
	getPointer: function(e) {
		offsetX = ($(window).width()-$P.width)/2;
		offsetY = $P.v_offset;//($(window).height()-$P.height)/2;
		if (e.touches && (e.touches[0] || e.changedTouches[0])) {
			var touch = e.touches[0] || e.changedTouches[0];
			$P.pointer_x = touch.pageX - offsetX;
			$P.pointer_y = touch.pageY - offsetY;
			$P.onCanvas = (touch.pageX >= offsetX && touch.pageX < offsetX+$P.width && touch.pageY >= offsetY && touch.pageY < offsetY+$P.height)
		} else {

		// Firefox shim for offsetX/Y:
		// from https://bug69787.bugzilla.mozilla.org/attachment.cgi?id=248546, https://bugzilla.mozilla.org/show_bug.cgi?id=69787
		var x=0, y=0, fatalerror=0, mozilla=false;

		if (typeof e.offsetX != 'undefined' && typeof e.offsetY != 'undefined') {	// Browser provides the co-ords for us easily (zero-indexed)
			x = e.offsetX;
			y = e.offsetY;
		}
		else if (e.target) {		// If we have the 'target' of the (click) event - in this case, the image
			mozilla = true
			var elem = e.target;
			do {						// Calc x and y of 'target' element (ie. the image)
				x += elem.offsetLeft;
				y += elem.offsetTop;
			} while (elem = elem.offsetParent);
			x = (window.pageXOffset + e.clientX) - x;
			y = (window.pageYOffset + e.clientY) - y;
		}
		else {	// Fatal error trying to determine click co-ords!
			fatalerror = 1;
		}

// x and y are still zero-indexed...
		if (!fatalerror) {x++; y++;}



			$P.pointer_x = x
			$P.pointer_y = y
			$P.onCanvas = (e.pageX >= offsetX && e.pageX < offsetX+$P.width && e.pageY >= offsetY && e.pageY < offsetY+$P.height)
		}
	},

	excerptCanvas: function(x1,y1,x2,y2,source) {
		source = source || $C
		var width = x2-x1, height = y2-y1
		$('body').append("<canvas style='' id='excerptCanvas'></canvas>")
		var element = $('#excerptCanvas')[0]
		element.width = width
		element.height = height
		var excerptCanvasContext = element.getContext('2d')
		var sourcedata = source.getImageData(x1,y1,width,height)
		excerptCanvasContext.putImageData(sourcedata,0,0)
		return excerptCanvasContext.canvas.toDataURL()
	}

}
