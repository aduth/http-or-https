import https from 'https';
import http from 'http';

/** @typedef {import('http').ClientRequest} ClientRequest */
/** @typedef {import('http').RequestOptions} HTTPRequestOptions */
/** @typedef {import('https').RequestOptions} HTTPSRequestOptions */
/** @typedef {HTTPRequestOptions|HTTPSRequestOptions} RequestOptions */
/** @typedef {(optionsOrURL:string|URL|HTTPRequestOptions,...args:any)=>ClientRequest} HTTPFunction */
/** @typedef {(optionsOrURL:string|URL|HTTPSRequestOptions,...args:any)=>ClientRequest} HTTPSFunction */
/** @typedef {(optionsOrURL:string|URL|RequestOptions,...args:any)=>ClientRequest} VariedFunction */

/**
 * Given HTTP and HTTPS function variants, returns a new function which passes through to the
 * appropriate function given the incoming URL or options object.
 *
 * @param {HTTPFunction} httpFn HTTP function variant.
 * @param {HTTPSFunction} httpsFn HTTPS function variant.
 *
 * @return {VariedFunction} Function which passes through to the appropriate HTTP or HTTPS function.
 */
const varyOptionsOrURL = (httpFn, httpsFn) => (optionsOrURL, ...args) => {
	if (typeof optionsOrURL === 'string') optionsOrURL = new URL(optionsOrURL);

	return optionsOrURL.protocol === 'https:'
		? httpsFn(optionsOrURL, ...args)
		: httpFn(optionsOrURL, ...args);
};

export const get = varyOptionsOrURL(http.get, https.get);
export const request = varyOptionsOrURL(http.request, https.request);
