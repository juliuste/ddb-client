'use strict'

const fetch = require('isomorphic-fetch')
const qs = require('qs').stringify
const resolve = require('url').resolve
const clean = require('clean-deep')

const checkArray = (array, type) => !array.some((o) => typeof o !== type)


const fetchError = (res) => {
	if(res instanceof Error) return res
	const error = new Error(res.statusText)
	error.statusCode = res.status
	return error
}

const base = 'api.deutsche-digitale-bibliothek.de'

const get = (path, options, accept, apiKey) =>
	fetch(
		resolve(`https://${base+path}`, `?${qs(clean(options), {encodeValuesOnly: true, arrayFormat: 'repeat'})}`),
		{
			method: 'GET',
			headers: {
				Accept: accept,
				Authorization: `OAuth oauth_consumer_key="${apiKey}"`,
				Host: base
			}
		}
	)
	.then((res) => {
		if(!res.ok) throw fetchError(res)
		if(accept==='application/json') return res.json()
		if(accept==='application/xml') return res.text()
		if(accept==='application/octet-stream') return res.buffer()
		return res
	})
	.catch(fetchError)

module.exports = {get, checkArray}
