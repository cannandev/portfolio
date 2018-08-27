export class Entry {
	constructor(title, text, url, labels) {
		this._title = title;
		this._labels = labels;
		this._text = text;
		this._url = url;
	}

	get title() {
		return this._title;
	}

	get labels() {
		//manipulate array
		return this._labels;
	}

	get text() {
		return this._text;
	}

	get url() {
		return this._url;
	}

	generateLink() {
		return '<a href="' + this._url + '">' + this._title + '</a>';
	}
}