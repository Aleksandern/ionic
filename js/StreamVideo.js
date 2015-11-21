"use strict";
function StreamingMedia() {
}

StreamingMedia.prototype.playAudio = function (url, options) {
	options = options || {};
	cordova.exec(options.successCallback || null, options.errorCallback || null, "StreamingMedia", "playAudio", [url, options]);
};
StreamingMedia.prototype.playVideo = function (url, options) {
	options = options || {};

	function onResult(result) {
		if (result.loadState !== undefined) {
			if (options.loadStateCallback) {
				options.loadStateCallback(result.loadState);
			}
			return;
		}
		if (options.successCallback) {
			options.successCallback(result);
		}
	}

	cordova.exec(onResult, options.errorCallback || null, "StreamingMedia", "playVideo", [url, options]);
};


StreamingMedia.install = function () {
	if (!window.plugins) {
		window.plugins = {};
	}
	window.plugins.streamingMedia = new StreamingMedia();
	return window.plugins.streamingMedia;
};

cordova.addConstructor(StreamingMedia.install);
