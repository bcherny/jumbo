
var _ = require('lodash'),
	types = require('./enums/glom-types');

module.exports = function Glom () {
	"use strict";

	_.extend(this, {
		constituents: [],
		type: null,
		happiness: 0
	});

};