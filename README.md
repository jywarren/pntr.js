pntr.js
=======

A simple touch-enable Processing-like Canvas environment

This was written pretty quickly and messily. It's not done. But it can do basic stuff, so have fun.

###Getting started###

I may start putting more useful information in the wiki: https://github.com/jywarren/pntr.js/wiki

Put your code in index.html at the bottom, in the $P.draw() function, like: 

    $P.initialize({
    	// pass in options here
	setup: function() {
		// code to run on start here
	},
    	draw: function() {
		// code to run every frame here
    		$C.fillStyle = "red"
    		$C.fillRect(0,0,100,100)
    	}
    })

For a full guide on Canvas drawing commands, see https://developer.mozilla.org/en-US/docs/Canvas_tutorial

And more specifically for drawing: https://developer.mozilla.org/en-US/docs/Canvas_tutorial/Drawing_shapes

But where in their examples, you'd use: ctx.fillRect(0,0,10,10), you just say: $C.fillRect(0,0,10,10)

###Troubleshooting###

File issues here and I'll help answer questions: https://github.com/jywarren/pntr.js/issues

Fork and improve the code, I'm happy to take pull requests!

