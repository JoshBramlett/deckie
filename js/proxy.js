var FrameProxy = (function () {

	var _this 		= {},
	    _frame		= null;

	_this.init = function () {	
		console.log("proxy init()");
		
		// iframe object
		_frame = document.getElementById('iframe');
		
		// subscribe to messages from the iframe
		window.addEventListener('message', onFrameMessage);

  		// sends an initial message to the frame so it'll know where
  		// to call & include data required for view initialization
  		chrome.runtime.sendMessage({ message: "snapshot" }, function(response) {
			_this.toFrame("init", response);
		});
	};

	function onFrameMessage(e) {

		switch (e.data.message){
			case "create-deck": 
			
				var data = {
					message: e.data.message,
					deck: e.data.data
				}
			
				chrome.runtime.sendMessage(data, function(response) {
					// send response from background to iframe
					_this.toFrame("create-deck", response);
				}); 
				
				break;
			case "update-deck": 
			
				var data = {
					message: e.data.message,
					deck: e.data.data
				}
			
				chrome.runtime.sendMessage(data, function(response) {
					// send response from background to iframe
					_this.toFrame("update-deck", response);
				}); 
				
				break;
			case "delete-deck": 
			
				var data = {
					message: e.data.message,
					name: e.data.data
				}

				chrome.runtime.sendMessage(data, function(response) {
					// send response from background to iframe
					_this.toFrame("delete-deck", response);
				}); 
				
				break;
			case "iframe-width": 
			
				// only set if different from existing
				var width = _frame.getAttribute("width");
				if (width != e.data.data) {
					_frame.setAttribute("width", e.data.data);
				}
				
				break;
		}
	};
	
	// sends a message to the frame
	_this.toFrame = function (message, data) {
	  	var data = data || {};
	  	_frame.contentWindow.postMessage({
			message	: message,
			data	: data
		}, '*');
	};

	return _this;
}());

window.addEventListener("load", function() { 
	FrameProxy.init(); 
}, false);