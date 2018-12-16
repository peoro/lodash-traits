
const {TraitSet} = require('@straits/utils');
const lodash = require('lodash');

use traits * from TraitSet;

const traits = new TraitSet();
traits.*defineAndImplMemberFreeFunctionsAsTraits( Object.prototype, lodash );

module.exports = traits;
