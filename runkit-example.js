const { tests } = require('mocha-runkit');
const { expect } = require('chai');

await tests({
    'green': () => {
        expect(1).to.equal(1);
    },

    'red': () => {
        expect(24).to.equal(42);
    }
});
