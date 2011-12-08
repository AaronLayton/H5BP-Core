/**
 * @author AaronLayton / http://www.validatethis.co.uk
 */


var H5BP = (function(){
	
	// Internal logging function
    var log = function(){
        log.history = log.history || [];   // store logs to an array for reference
        log.history.push(arguments);
        if(window.console) {
            arguments.callee = arguments.callee.caller;
            var newarr = [].slice.call(arguments);
            (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
        }
    },
	
	// Used to add hooks
    addAction = function(hook, fn){
        // If the hook doesn't exist then blank array
        if (!H5BP.allHooks[hook]) H5BP.allHooks[hook] = [];
        
        // Push a reference to the passed function for this hook
        // Also store the context incase added to another element
        H5BP.allHooks[hook].push({ context: this, callback: fn});
        return this;   
    },
	
	// Used to fun any callbacks registered against a hook
	doAction = function(hook){
        // If the hook doesn't exist then return false
        if (!H5BP.allHooks[hook]) return false;
        // Get all passed arguments
        var args = [].slice.call(arguments, 1);
        
        for (var i = 0, l = H5BP.allHooks[hook].length; i < l; i++){
            var action = H5BP.allHooks[hook][i];
            action.callback.apply(action.context, args);
        }
        return this;
    },
	
	addPage = function( pageName, callback ){
		H5BP.addAction("page-" + pageName, callback );
	},
	
	init = function(){
		// Page specific code for each class
		if (document.body) {
			$.each(document.body.className.split(/\s+/), function (i, classnm) {
				doAction('page-' + classnm);
			});
		}
	};
		

	// Return public interface
	return {
		allHooks: {},
        log: log,
        addAction: addAction,
        doAction: doAction,
		addPage: addPage,
		init: init
	}
})(window);