'use strict';

var _TestimonialEntry = require('./TestimonialEntry');

var _TestimonialEntry2 = _interopRequireDefault(_TestimonialEntry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PortfolioEntry from './PortfolioEntry';

var t = new _TestimonialEntry2.default('Molly Byrnes', 'Claire brings a high level of dedication, professionalism and grace to her work.', 'https://www.linkedin.com/in/mollybyrnes', 'Sony');

console.log(t.generateLink());