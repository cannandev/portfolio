import Entry from './Entry';

export class PortfolioEntry extends Entry {
	constructor(title, text, url, labels, thumbTitle, thumb, images) {
		super(title, labels, text, url);
		this._thumbTitle;
		this._thumb = thumb;
		this._images = images;
	}
}

