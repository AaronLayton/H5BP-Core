# H5BP Markup-based page-specific code execution #

Bit of a mouthful I know, but hopefully you will like the end results. ^_^

The aim of this project is to provide a means to execute page specific javascript that is stored in separate files whilst in development and then minified into one file for use on production servers.

I use the DOM-ready execution method as laid out by ([paulirish](http://github.com/paulirish)) here http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/ 
After a while of using this though I found my script.js file got really big and hard to read. I needed a way to split the page specific code up into separate files whilst in development and then minified back to one file when placed on the production server.

This is where the script comes in but I figured I would try and make it as a library so it can be extended with more useful features.

### [Example](http://www.validatethis.co.uk/h5bp-core/) ###

Not much to look at I know...

## Built in hooks

There are many ways this could be achieved but I decided to try and implement the Hooks / Filter system like what Wordpress has as I like the idea of being able to hook into events that happen on a page.

I started thinking up this approach for an ecommerce site we was making and I wanted a separate 'module' that would be able to add its own page specific code and hook onto events that were already taking place. 

As an example, if we add a product to the basket we would do this by AJAX without the page refreshing. If we could then have a separate 'View Basket' module that we include onto a page, this could hook onto the 'product-added' event and then refresh the page totals automaticaly.

## Going forward

The next steps would be to hopefully get some feedback on the idea and see if there is anything that could be improved / extended or merged into this project.

Other things to note

* I realise that jQuery 1.7 now has the .on() function and that the .bind() and .trigger() events can already do this but I hope to build in priorities for each attached callback aswell and I'm not sure jQuery's functions do that?
* You can check my jsFiddles that lead me here at http://jsfiddle.net/AaronLayton/U3ucS/52/ | http://jsfiddle.net/AaronLayton/eyNre/33/
* This idea is based on the Mediator Pattern (http://en.wikipedia.org/wiki/Mediator_pattern) and the Publish/Subscribe Pattern (or Observer) (http://en.wikipedia.org/wiki/Publish/subscribe) as a I'm trying to implement modules of functionality
* I'm still new at this... go easy... 