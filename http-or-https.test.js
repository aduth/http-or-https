import http from 'http';
import https from 'https';
import sinon from 'sinon';
import chai from 'chai';

const { expect } = chai;

const NOOP = () => {};
const HTTP_URL = 'http://localhost/';
const HTTPS_URL = 'https://localhost/';
const HTTP_OPTIONS = { protocol: 'http:' };
const DEFAULT_OPTIONS = {};
const HTTPS_OPTIONS = { protocol: 'https:' };

let get, request;

before(async () => {
	sinon.stub(http, 'get');
	sinon.stub(https, 'get');
	sinon.stub(http, 'request');
	sinon.stub(https, 'request');

	({ get, request } = await import('./http-or-https.js'));
});

afterEach(() => {
	http.get.reset();
	https.get.reset();
	http.request.reset();
	https.request.reset();
});

after(() => {
	http.get.restore();
	https.get.restore();
	http.request.restore();
	https.request.restore();
});

describe('get', () => {
	context('url', () => {
		context('http', () => {
			it('calls http get', () => {
				get(HTTP_URL, NOOP);

				expect(http.get.calledOnce).to.be.true;
				expect(http.get.getCall(0).args).to.deep.equal([new URL(HTTP_URL), NOOP]);
			});
		});

		context('https', () => {
			it('calls https get', () => {
				get(HTTPS_URL, NOOP);

				expect(https.get.calledOnce).to.be.true;
				expect(https.get.getCall(0).args).to.deep.equal([new URL(HTTPS_URL), NOOP]);
			});
		});
	});

	context('options', () => {
		context('default', () => {
			it('calls http get', () => {
				get(DEFAULT_OPTIONS, NOOP);

				expect(http.get.calledOnce).to.be.true;
				expect(http.get.getCall(0).args).to.deep.equal([DEFAULT_OPTIONS, NOOP]);
			});
		});

		context('http', () => {
			it('calls http get', () => {
				get(HTTP_OPTIONS, NOOP);

				expect(http.get.calledOnce).to.be.true;
				expect(http.get.getCall(0).args).to.deep.equal([HTTP_OPTIONS, NOOP]);
			});
		});

		context('https', () => {
			it('calls https get', () => {
				get(HTTPS_OPTIONS, NOOP);

				expect(https.get.calledOnce).to.be.true;
				expect(https.get.getCall(0).args).to.deep.equal([HTTPS_OPTIONS, NOOP]);
			});
		});
	});
});

describe('request', () => {
	context('url', () => {
		context('http', () => {
			it('calls http get', () => {
				request(HTTP_URL, NOOP);

				expect(http.request.calledOnce).to.be.true;
				expect(http.request.getCall(0).args).to.deep.equal([new URL(HTTP_URL), NOOP]);
			});
		});

		context('https', () => {
			it('calls https get', () => {
				request(HTTPS_URL, NOOP);

				expect(https.request.calledOnce).to.be.true;
				expect(https.request.getCall(0).args).to.deep.equal([new URL(HTTPS_URL), NOOP]);
			});
		});
	});

	context('options', () => {
		context('default', () => {
			it('calls http get', () => {
				request(DEFAULT_OPTIONS, NOOP);

				expect(http.request.calledOnce).to.be.true;
				expect(http.request.getCall(0).args).to.deep.equal([DEFAULT_OPTIONS, NOOP]);
			});
		});

		context('http', () => {
			it('calls http get', () => {
				request(HTTP_OPTIONS, NOOP);

				expect(http.request.calledOnce).to.be.true;
				expect(http.request.getCall(0).args).to.deep.equal([HTTP_OPTIONS, NOOP]);
			});
		});

		context('https', () => {
			it('calls https get', () => {
				request(HTTPS_OPTIONS, NOOP);

				expect(https.request.calledOnce).to.be.true;
				expect(https.request.getCall(0).args).to.deep.equal([HTTPS_OPTIONS, NOOP]);
			});
		});
	});
});
