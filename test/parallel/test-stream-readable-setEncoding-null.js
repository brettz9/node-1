'use strict';

require('../common');
const assert = require('assert');
const { Readable } = require('stream');


{
  const readable = new Readable({ encoding: 'hex' });
  assert.strictEqual(readable._readableState.encoding, 'hex');

  readable.setEncoding(null);
  console.log('eee', readable._readableState.encoding);
  assert.strictEqual(readable._readableState.encoding, 'utf8');
}
