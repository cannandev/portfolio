import TestimonialEntry from './TestimonialEntry';
// import PortfolioEntry from './PortfolioEntry';

const t = new TestimonialEntry('Molly Byrnes', 'Claire brings a high level of dedication, professionalism and grace to her work.', 'https://www.linkedin.com/in/mollybyrnes', 'Sony');

console.log(t.generateLink());