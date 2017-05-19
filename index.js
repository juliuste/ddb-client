'use strict'

const omit = require('lodash.omit')
const join = require('path').join
const fs = require('fs')

const h = require('./helpers')

const binary = (apiKey) => (identifier, binaryPathFile) => {
	if(typeof identifier !== 'string' || !identifier.length) throw new Error('identifier must be a string')
	if(typeof binaryPathFile !== 'string' || !binaryPathFile.length) throw new Error('binaryPathFile must be a string')
	return h.get(join('/binary', identifier, binaryPathFile), {}, 'application/octet-stream', apiKey)
}

const entities = (apiKey) => (query, opt) => {
	if(typeof query !== 'string') throw new Error('query must be a string')
	if(opt){
		if(opt.facet && (!Array.isArray(opt.facet) || !h.checkArray(opt.facet, 'string'))) throw new Error('facet must be an array of strings')
		if(opt['facet.limit'] && typeof opt['facet.limit'] !== 'number') throw new Error('facet.limit must be a number')
		if(opt.minDocs && typeof opt.minDocs !== 'number') throw new Error('minDocs must be a number')
		if(opt.offset && typeof opt.offset !== 'number') throw new Error('offset must be a number')
		if(opt.rows && typeof opt.rows !== 'number') throw new Error('rows must be a number')
		if(opt.sort && typeof opt.sort !== 'string') throw new Error('sort must be a string')
		// <facet_name> params
		for(let key of omit(Object.keys(opt), ['facet', 'facet.limit', 'minDocs', 'offset', 'rows', 'sort'])){
			if(opt[key] && (!Array.isArray(opt[key]) || !h.checkArray(opt[key], 'string'))) throw new Error(`<facet_name> ${key} must be an array of strings`)
		}
	}
	return h.get('/entities', Object.assign({query}, opt), 'application/json', apiKey)
}

const institutions = (apiKey) => (opt) => {
	if(opt)
		if(opt.sector && (!Array.isArray(opt.sector) || !h.checkArray(opt.sector, 'string'))) throw new Error('sector must be an array of strings')
	return h.get('/institutions', Object.assign({}, opt), 'application/json', apiKey)
}

const items = (apiKey) => (itemID) => {
	if(typeof itemID !== 'string' || !itemID) throw new Error('itemID must be a string')
	return ({
		aip: () => h.get(join('/items/', itemID, '/aip'), {}, 'application/json', apiKey),
		binaries: () => h.get(join('/items/', itemID, '/binaries'), {}, 'application/json', apiKey),
		children: (opt) => {
			if(opt){
				if(opt.offset && typeof opt.offset !== 'number') throw new Error('offset must be a number')
				if(opt.rows && typeof opt.rows !== 'number') throw new Error('rows must be a number')
			}
			return h.get(join('/items/', itemID, '/children'), Object.assign({}, opt), 'application/json', apiKey)
		},
		edm: () => h.get(join('/items/', itemID, '/edm'), {}, 'application/json', apiKey),
		indexingProfile: () => h.get(join('/items/', itemID, '/indexing-profile'), {}, 'application/json', apiKey),
		parents: () => h.get(join('/items/', itemID, '/parents'), {}, 'application/json', apiKey),
		source: () => h.get(join('/items/', itemID, '/source'), {}, 'application/xml', apiKey),
		view: () => h.get(join('/items/', itemID, '/view'), {}, 'application/json', apiKey),
	})
}

const search = (apiKey) => (query, opt) => {
	if(typeof query !== 'string') throw new Error('query must be a string')
	if(opt){
		if(opt.facet && (!Array.isArray(opt.facet) || !h.checkArray(opt.facet, 'string'))) throw new Error('facet must be an array of strings')
		if(opt['facet.limit'] && typeof opt['facet.limit'] !== 'number') throw new Error('facet.limit must be a number')
		if(opt.minDocs && typeof opt.minDocs !== 'number') throw new Error('minDocs must be a number')
		if(opt.offset && typeof opt.offset !== 'number') throw new Error('offset must be a number')
		if(opt.rows && typeof opt.rows !== 'number') throw new Error('rows must be a number')
		if(opt.sort && typeof opt.sort !== 'string') throw new Error('sort must be a string')
		// <facet_name> params
		for(let key of omit(Object.keys(opt), ['facet', 'facet.limit', 'minDocs', 'offset', 'rows', 'sort'])){
			if(opt[key] && (!Array.isArray(opt[key]) || !h.checkArray(opt[key], 'string'))) throw new Error(`<facet_name> ${key} must be an array of strings`)
		}
	}
	return h.get('/search', Object.assign({query}, opt), 'application/json', apiKey)
}

module.exports = (apiKey) => {
	if(typeof apiKey !== 'string' || !apiKey.length) throw new Error('apiKey must be a string')
	return ({
		binary: binary(apiKey),
		entities: entities(apiKey),
		institutions: institutions(apiKey),
		items: items(apiKey),
		search: search(apiKey)
	})
}
