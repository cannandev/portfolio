'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PortfolioEntry = undefined;

var _Entry2 = require('./Entry');

var _Entry3 = _interopRequireDefault(_Entry2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PortfolioEntry = exports.PortfolioEntry = function (_Entry) {
	_inherits(PortfolioEntry, _Entry);

	function PortfolioEntry(title, text, url, labels, thumbTitle, thumb, images) {
		_classCallCheck(this, PortfolioEntry);

		var _this = _possibleConstructorReturn(this, (PortfolioEntry.__proto__ || Object.getPrototypeOf(PortfolioEntry)).call(this, title, labels, text, url));

		_this._thumbTitle;
		_this._thumb = thumb;
		_this._images = images;
		return _this;
	}

	return PortfolioEntry;
}(_Entry3.default);