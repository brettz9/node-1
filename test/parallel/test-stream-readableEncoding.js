'use strict';

require('../common');
const assert = require('assert');
const { Readable, Writable } = require('stream');

{
  const readable = new Readable({ encoding: 'hex' });
  assert.strictEqual(readable.readableEncoding, 'hex');

  readable.setEncoding(null);

  assert.strictEqual(readable.readableEncoding, 'utf8');

  readable.readableEncoding = 'ucs2'; // Non-normalized

  assert.strictEqual(readable.readableEncoding, 'utf16le');

  const writable = new Writable({ encoding: 'hex' });
  assert.strictEqual(writable.readableEncoding, null);

  writable.readableEncoding = 'hex';
  assert.strictEqual(writable.readableEncoding, null);
}
