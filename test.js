'use strict'

const tape = require('tape')
const config = require('config')
const ddb = require('./index')(process.env.DDBCLIENT_API_KEY || config.apiKey)

tape('ddb-client.binary', (t) => {
	ddb.binary('OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF', 'mvpr/1.jpg').then((res) => {
		t.plan(1)
		t.ok(res.byteLength > 0, 'binary length')
	})
})

tape('ddb-client.entities', (t) => {
	ddb.entities('*:*').then((res) => {
		t.plan(1)
		t.ok(res.numberOfResults >= 1000, 'entities numberOfResults value')
	})
})

tape('ddb-client.institutions', (t) => {
	ddb.institutions().then((res) => {
		t.plan(1)
		t.ok(res.length >= 1000, 'institutions count')
	})
})

// ddb-client.items

tape('ddb-client.items.aip', (t) => {
	ddb.items('OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF').aip().then((res) => {
		t.plan(1)
		t.ok(res.properties['item-id'] === 'OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF', 'items aip properties item-id')
	})
})

tape('ddb-client.items.binaries', (t) => {
	ddb.items('OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF').binaries().then((res) => {
		t.plan(1)
		t.ok(res.binary.length > 0, 'items binaries binary count')
	})
})

tape('ddb-client.items.children', (t) => {
	ddb.items('IWOE72T2J3MNATFBPFV3PI3JQ3S3UXEL').children().then((res) => {
		t.plan(1)
		t.ok(res.hierarchy.length > 0, 'items children hierarchy count')
	})
})

tape('ddb-client.items.edm', (t) => {
	ddb.items('IWOE72T2J3MNATFBPFV3PI3JQ3S3UXEL').edm().then((res) => {
		t.plan(1)
		t.ok(res.RDF, 'items edm RDF')
	})
})

tape('ddb-client.items.indexingProfile', (t) => {
	ddb.items('OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF').indexingProfile().then((res) => {
		t.plan(1)
		t.ok(res['item-id'] === 'OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF', 'items indexingProfile item-id')
	})
})

tape('ddb-client.items.parents', (t) => {
	ddb.items('IWOE72T2J3MNATFBPFV3PI3JQ3S3UXEL').parents().then((res) => {
		t.plan(1)
		t.ok(res.hierarchy.length > 0, 'items parents hierarchy count')
	})
})

tape('ddb-client.items.source', (t) => {
	ddb.items('IWOE72T2J3MNATFBPFV3PI3JQ3S3UXEL').source().then((res) => {
		t.plan(1)
		t.ok(res.length > 0, 'items source length')
	})
})

tape('ddb-client.items.view', (t) => {
	ddb.items('OAXO2AGT7YH35YYHN3YKBXJMEI77W3FF').view().then((res) => {
		t.plan(1)
		t.ok(res.item, 'items view item')
	})
})

tape('ddb-client.search', (t) => {
	ddb.search('*:*').then((res) => {
		t.plan(1)
		t.ok(res.numberOfResults >= 1000, 'search numberOfResults value')
	})
})
