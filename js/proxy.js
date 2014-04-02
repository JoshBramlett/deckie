var FrameProxy = (function () {

	var _this 		= {},
	    _frame		= null;

	_this.init = function () {	
		// iframe object
		_frame = document.getElementById('iframe');
		
		// subscribe to messages from the iframe
		window.addEventListener('message', onFrameMessage);

  		// sends an initial message to the frame so it'll know where
  		// to call & include data required for view initialization
  		chrome.runtime.sendMessage({ message: "snapshot" }, function(response) {
			_this.toFrame("init", response);
		});
		
		chrome.runtime.onMessage.addListener(onBackgroundMessage);
	};
	
	// callback gets fired for messages from the window and background - so
	// make sure any unsupported messages get dropped
	function onBackgroundMessage(request, sender, sendResponse) {
		if (request.message && request.message == "hearthstats-response") {
			_this.toFrame("get-hearthstats", request);
		}
	}

	function onFrameMessage(e) {
		switch (e.data.message){
			case "iframe-width": 			
				// only set if different from existing
				var width = _frame.getAttribute("width");
				if (width != e.data.data) {
					_frame.setAttribute("width", e.data.data);
				}			
				break;
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
					id: e.data.data
				}

				chrome.runtime.sendMessage(data, function(response) {
					// send response from background to iframe
					_this.toFrame("delete-deck", response);
				});
				break;			
			case 'get-hearthstats':			
				var data = {
					message: e.data.message,
					key: e.data.data.key
				}

				// don't get a callback b/c background call is async
				chrome.runtime.sendMessage(data, null);			
				break;
			case "import-hearthstats-decks": 
				var data = {
					message: e.data.message,
					decks: e.data.data.decks
				}

				chrome.runtime.sendMessage(data, function(response) {
					// send response from background to iframe
					_this.toFrame("import-hearthstats-decks", response);
				}); 			
				break;
			case 'update-user-settings':
				var data = {
					message: e.data.message,
					settings: e.data.data
				}

				chrome.runtime.sendMessage(data, function(response) {
					// send response from background to iframe
					_this.toFrame("update-user-settings", response);
				}); 
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