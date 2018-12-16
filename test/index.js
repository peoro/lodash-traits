
const assert = require('assert');
const lodashTraits = require('../src/index.js');

const object = { a:7, b:12, c:4, d:7, e:1 };

describe(`lodash-traits`, function(){
	// using the straits-syntax
	it(`straits-syntax works`, function() {
		use traits * from lodashTraits;
		const result = object
			.*values()
			.*sortBy()
			.*uniq();

		assert.deepStrictEqual( result, [1, 4, 7, 12] );
	});

	// using free functions (like lodash itself)
	it(`free functions work`, function() {
		const _ = lodashTraits.asFreeFunctions();
		const result =
			_.uniq(
				_.sortBy(
					_.values(
						object
					)
				)
			);

		assert.deepStrictEqual( result, [1, 4, 7, 12] );
	});

	// using symbols manually
	it(`symbol traits work`, function() {
		/* eslint-disable no-unexpected-multiline */
		const {values, sortBy, uniq} = lodashTraits;
		const result = object
			[values]()
			[sortBy]()
			[uniq]();

		assert.deepStrictEqual( result, [1, 4, 7, 12] );
	});
});
