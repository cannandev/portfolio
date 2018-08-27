import Entry from './Entry';

class TestimonialEntry extends Entry {
	constructor(title, text, url, location) {
		super(title, text, url);
		super.generateLink();
		this._location = location;
	}

	get location() {
		return this._location;
	}
}
