'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entry = exports.Entry = function () {
	function Entry(title, text, url, labels) {
		_classCallCheck(this, Entry);

		this._title = title;
		this._labels = labels;
		this._text = text;
		this._url = url;
	}

	_createClass(Entry, [{
		key: 'generateLink',
		value: function generateLink() {
			return '<a href="' + this._url + '">' + this._title + '</a>';
		}
	}, {
		key: 'title',
		get: function get() {
			return this._title;
		}
	}, {
		key: 'labels',
		get: function get() {
			//manipulate array
			return this._labels;
		}
	}, {
		key: 'text',
		get: function get() {
			return this._text;
		}
	}, {
		key: 'url',
		get: function get() {
			return this._url;
		}
	}]);

	return Entry;
}();