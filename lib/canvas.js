/* Canvas functions, as global functions and abstracted for cross-browser compatability
 * @see <a href="https://developer.mozilla.org/en/Canvas_tutorial/Drawing_shapes>
 *      MDC Docs</a>
 */
CanvasTextFunctions.enable(this.canvas)
/**
 * Clears the canvas; if 'name' is supplied, clears the canvas with name 'name'
 */
clear = function(name){
	$C.clearRect(0, 0, $P.width, $P.height)
},	

/**
 * Sets canvas.fillStyle
 * @param {String} color Color to use for future fill operations
 */
fillStyle = function(color) {
	$C.fillStyle = color
},

/**
 * Sets the fill style of the canvas to a pattern.
 * @param {Image}  image  Image to use for pattern
 * @param {String} repeat How to repeat pattern - "repeat", "repeat-x", "repeat-y", or
 *                        "no-repeat"
 */
fillPattern = function(image, repeat) {
	if (image.width) {
		$C.fillStyle = $C.createPattern(image, repeat)
	}
},

/**
 * Draws an image at x,y
 * @param {Image}  image  Image to display: a JavaScript Image object. 
 * 							Can also accept a Canvas element, but check Canvas docs.
 * @param {Number} x coordinate at which to display image
 * @param {Number} y coordinate at which to display image
 */
drawImage = function(image, x,y) {
	$C.drawImage(image, x, y) 
},

/**
 * Alias of canvas.translate
 * @param {Number} x Number of pixels to tranlate in the x direction
 * @param {Number} y Number of pixels to tranlate in the y direction
 */
translate = function(x,y) {
	$C.translate(x,y)
},
	
/**
 * Alias of canvas.scale
 * @param {Number} x Number of pixels to stretch/shring in the x 
 *                   direction
 * @param {Number} y Number of pixels to stretch/shring in the y 
 *                   direction
 */
scale = function(x,y) {
	$C.scale(x,y)
},
	
/**
 * Alias of canvas.rotate
 * @param {Number} rotation Amount, in radians, to rotate
 */
rotate = function(rotation){
	$C.rotate(rotation)
},

/**
 * Alias of canvas.fillRect (filled rectangle)
 * @param {Number} x X-coord of the top-left corner
 * @param {Number} y Y-coord of the top-left corner
 * @param {Number} w Width of the rectangle
 * @param {Number} h Height of the rectangle
 */
rect = function(x, y, w, h){
	$C.fillRect(x, y, w, h)
},

/**
 * Draws an unfilled circle at x,y with radius r
 * @param {Number} x X-coord of the center of the circle
 * @param {Number} y Y-coord of the center of the circle
 * @param {Number} r Radius of the circle
 */
circ = function(x, y, r){
	$C.beginPath()
	$C.arc(x, y, r, 0, 2*Math.PI, true)
	$C.fill()
},
/**
 * Draws a filled circle at x,y with radius r
 * @param {Number} x X-coord of the center of the circle
 * @param {Number} y Y-coord of the center of the circle
 * @param {Number} r Radius of the circle
 */
strokeCirc = function(x, y, r){
	$C.beginPath()
	$C.arc(x, y, r, 0, 2*Math.PI, true)
	$C.stroke()
},
/**
 * Alias of canvas.strokeRect (unfilled rectangle)
 * @param {Number} x X-coord of the top-left corner
 * @param {Number} y Y-coord of the top-left corner
 * @param {Number} w Width of the rectangle
 * @param {Number} h Height of the rectangle
 */

strokeRect = function(x, y, w, h){
	$C.strokeRect(x, y, w, h)
},

/**
 * Alias of canvas.strokeStyle
 * @param {String} color Color to use for future stroke operations
 */
strokeStyle = function(color) {
	$C.strokeStyle = color
},

/**
 * Sets how succesive lines are joined.
 * @param {String} style Style string - 'round', 'bevel', or 'miter'
 */
lineJoin = function(style) {
	$C.lineJoin = style
},

/**
 * Sets how the end of a line is styled.
 * @param {String} style Style string - 'round', 'butt', or 'square'
 */
lineCap = function(style) {
	$C.lineCap = style
},

/**
 * Sets canvas.lineWidth
 * @param {Number} lineWidth New width, in pixels, to use for stroke
 *                           operations
 */
lineWidth = function(lineWidth){
	if (parseInt(lineWidth) == 0) {
		$C.lineWidth = 0.000000001	
	} else {
		$C.lineWidth = lineWidth
	}
},

/**
 * Alias of canvas.beginPath
 */
beginPath = function(){
	$C.beginPath()
},

/**
 * Alias of canvas.moveTo
 * @param {Number} x X-coord of location to move to
 * @param {Number} y Y-coord of location to move to
 */
moveTo = function(x, y){
	$C.moveTo(x, y)
},

/**
 * Alias of canvas.lineTo
 * @param {Number} x X-coord of location to draw line to
 * @param {Number} y Y-coord of location to draw line to
 */
lineTo = function(x, y){
	$C.lineTo(x, y)
},

/**
 * Draws a quadratic curve
 * @param {Number} cp_x X-coord of control point
 * @param {Number} cp_y Y-coord of control point
 * @param {Number} x    X-coord of point to draw to
 * @param {Number} y    Y-coord of point to draw to
 * @see <a href="https://developer.mozilla.org/en/Canvas_tutorial/Drawing_shapes#Bezier_and_quadratic_curves">
 *      MDC Docs</a>
 * @function
 */
quadraticCurveTo = function(cp_x, cp_y, x, y){
	$C.quadraticCurveTo(cp_x, cp_y, x, y)
},

/**
 * Draws a stroke along the current path.
 * @function
 */
stroke = function(){
	$C.stroke()
},

/**
 * Draws an outlined (dotted, outlined, etc) stroke along the current path.
 * @function
 */
outline = function(color,width){
	$C.save()
	$C.strokeStyle(color)
	$C.lineWidth($C.lineWidth+(width*2))
	$C.stroke()
	$C.restore()
	$C.stroke()
},

/**
 * Closes the current path, then fills it.
 */
fill = function(){
	$C.fill()
},

/**
 * Draws an arc
 * @param {Number} x                   X-coord of circle's center
 * @param {Number} y                   Y-coord of circle's center
 * @param {Number} radius              Radius of circle
 * @param {Number} startAngle          Angle, in radians, from the +x axis to start the arc
 *                                     from
 * @param {Number} endAngle            Angle, in radians, from the +x axis to end the arc 
 *                                     at
 * @param {Boolean} [counterclockwise] If true, arc is drawn counterclockwise. Else, it is
 *                                     drawn clockwise
 */
arc = function(x, y, radius, startAngle, endAngle, counterclockwise){
	$C.arc(x, y, radius, startAngle, endAngle, counterclockwise)
},

/**
 * Draws text on the canvas. Fonts are not supported in all
 * broswers.
 * @param {String} font Font to use
 * @param {Number} size Size, in pts, of text
 * @param {Number} x    X-coord to start drawing at
 * @param {Number} y    Y-coord to start drawing at
 * @param {String} text Text to draw
 */
drawText = function(font, size, x, y, text, color){
	color = color || "black"
	if ($C.fillText) {
		var oldcolor = $C.fillStyle
		$C.fillStyle = color
		$C.font = size+'pt ' + font
		$C.fillText(text, x, y)
		$C.fillStyle = oldcolor
	} else {
		var oldcolor = $C.strokeStyle
		$C.strokeStyle = color
		$C.drawText(font, size, x, y, text)
		$C.strokeStyle = oldcolor
	}
},

/**
 * Measures the width, in pixels, that the text will be
 * @param {Object} font Font that will be drawn with
 * @param {Object} size Size, in pts, of text
 * @param {Object} text Text to be measured
 */
measureText = function(font, size, text) {
	if ($C.fillText) {
		$C.font = size + 'pt ' + font
		var width = $C.measureText(text)
		// some browsers return TextMetrics
		if (width.width) return width.width
		return width
	}
	else {
		return $C.measureCanvasText(font, size, text)
	}

},

/**
 * Sets the canvas' globalAlpha.
 * @param {Number} alpha New alpha value, between 0 and 1.
 */
opacity = function(alpha) {
	$C.globalAlpha = alpha
},

/**
 * Saves the state of the canvas
 * @see $C.restore
 */
save = function() {
	$C.save()
},
/**
 * Restores the canvas its last saved state.
 * @see $C.save
 */
restore = function() {
	$C.restore()
},

/**
 * Return a url that contains all the data in the canvas. Essentially,
 * it is a link to an image of the canvas.
 * @return Data url
 * @type String
 */
toDataURL = function() {
	return $C.canvas.toDataURL()
},

/**
 * Identical to to_data_url, but produces an image much larger than the screen, for print quality
 * MAY BE BROKEN
 * @param {Number} width Width of resulting image in pixels
 * @param {Number} height Height of resulting image in pixels
 * @return Data url
 * @type String
 */
toPrintDataURL = function(width,height) {
	var _height = Glop.height, _width = Glop.width
	$P.width = width
	$P.height = height
	$P.draw()
	var url = $C.canvas.toDataURL()
	$P.width = _width
	$P.height = _height
	return url
},

/**
 * Changes the cursor icon
 */
cursor = function(cursor) {
	this.element.style.cursor = cursor
}

