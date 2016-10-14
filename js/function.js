function SetViewport(iWidth) {
	var regulateScreen = (function() {
		var cache = {};

		//默认尺寸
		var defSize = {
			width: window.screen.width,
			height: window.screen.height
		};

		var ver = window.navigator.appVersion;
		var _ = null;

		var check = function(key) {
			return key.constructor == String ? ver.indexOf(key) > -1 : ver.test(key);
		};

		var add = function(name, key, size) {
			if (name && key)
				cache[name] = {
					key: key,
					size: size
				};
		};

		var del = function(name) {
			if (cache[name])
				delete cache[name];
		};

		var cal = function() {
			if (_ != null)
				return _;
			for (var name in cache) {
				if (check(cache[name].key)) {
					_ = cache[name].size;
					break;
				}
			}
			if (_ == null)
				_ = defSize;
			return _;
		};
		return {
			add: add,
			del: del,
			cal: cal
		};
	})();

	var ua = navigator.userAgent.toLowerCase();
	var sContent = "";

	if (ua.indexOf("ipad") > -1) {
		sContent = "width=device-width, initial-scale=0.67, minimum-scale=0.5, user-scalable=no";
	} else if (ua.indexOf("android") > -1) {
		sContent = "target-densitydpi=device-dpi, width=" + iWidth + "px, user-scalable=no";
	} else if (ua.indexOf("windows phone") > -1) {
		sContent = "width=640px, user-scalable=no";
	} else {
		sContent = "target-densitydpi=device-dpi, width=" + iWidth + "px, user-scalable=no";
	}

	var head = document.getElementsByTagName("head");
	var viewport = document.createElement("meta");
	viewport.name = "viewport";
	viewport.content = sContent;
	head[0].appendChild(viewport);
}

SetViewport(640);