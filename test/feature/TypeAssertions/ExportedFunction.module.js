// Options: --types --type-assertions
import {exportedParamAndReturn} from './resources/exported-function.js';

assert.equal(1, exportedParamAndReturn(1));

assert.throw(() => { exportedParamAndReturn(''); }, chai.AssertionError);
assert.throw(() => { exportedParamAndReturn(0); }, chai.AssertionError);
